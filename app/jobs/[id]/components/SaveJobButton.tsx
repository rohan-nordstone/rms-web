"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import axios, { isAxiosError } from "axios"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

import { TJobIDResponse } from "../../hooks/types/TJobIDResponse"

type Props = {
  isJobSaved: boolean | undefined
  job: TJobIDResponse | undefined
}

export default function SaveJobButton({ isJobSaved, job }: Props) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const isMutating = isFetching || isPending

  const clickHandler = async () => {
    setIsFetching(true)
    try {
      await axios.get<boolean>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${job?.id}/save`
      )
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(
          "error.response?.data.message",
          error.response?.data.message
        )
      }
    }
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }

  if (!session?.token) return <></>
  axios.defaults.headers.common["Authorization"] = `Bearer ${session?.token}`

  return (
    <Button
      onClick={clickHandler}
      variant={"muted_outline"}
      className="min-h-[46px] min-w-[115px] text-center text-base font-bold leading-[33px]"
    >
      {isMutating ? (
        <Spinner size="sm" color="default" className="mr-2 inline-block" />
      ) : isJobSaved ? (
        <div>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline-block"
          >
            <path
              d="M17.7967 3.24122L18.3239 2.93499C18.8583 2.62455 19.5416 2.80878 19.8501 3.34648C20.1587 3.88418 19.9756 4.57173 19.4412 4.88217L1.67612 15.2023C1.14173 15.5128 0.458405 15.3286 0.149875 14.7909C-0.158656 14.2532 0.02444 13.5656 0.55883 13.2552L2.25735 12.2685V0.914228C2.25735 0.409314 2.66414 0 3.16595 0H16.8881C17.3899 0 17.7967 0.409314 17.7967 0.914229V3.24122Z"
              fill="#194D79"
            />
            <path
              d="M17.7967 19.5741C17.7967 20.3256 16.9458 20.7561 16.3463 20.308L10.5689 15.9894C10.2472 15.7489 9.8069 15.7489 9.4852 15.9894L3.70779 20.308C3.10829 20.7561 2.25735 20.3256 2.25735 19.5741V16.8055L17.7967 7.77828V19.5741Z"
              fill="#194D79"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline-block"
          >
            <path
              d="M15.6351 19.5734C15.6351 20.3248 14.7789 20.7554 14.1757 20.3073L8.36271 15.9888C8.03903 15.7483 7.59603 15.7483 7.27235 15.9888L1.45937 20.3073C0.856187 20.7554 0 20.3248 0 19.5734V0.914195C0 0.409299 0.409299 0 0.914196 0H14.7209C15.2258 0 15.6351 0.409299 15.6351 0.914196V19.5734Z"
              fill="#828282"
            />
          </svg>
        </div>
      )}
      {isJobSaved ? "Unsave" : "Save"}
    </Button>
  )
}
