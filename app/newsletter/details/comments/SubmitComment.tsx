"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import { useQueryClient } from "@tanstack/react-query"
import axios, { isAxiosError } from "axios"
import { useSession } from "next-auth/react"

import { Input } from "@/components/ui/input"

type Props = {
  news_id: string | undefined
}

export default function SubmitComment({ news_id }: Props) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const isMutating = isFetching || isPending

  const [comment, setComment] = useState("")

  const handleClick = async () => {
    try {
      setIsFetching(true)
      // demo url http://localhost:5000/news/151/comments
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/comments`,
        {
          comment,
        }
      )
      queryClient.invalidateQueries({
        queryKey: ["newsletter/data", news_id],
      })
      setComment("")
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
  axios.defaults.headers.common["Authorization"] = `Bearer ${session.token}`

  return (
    <div className="relative flex-1">
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick()
          }
        }}
        className="h-12 rounded-[10px] bg-zinc-100 px-5"
        type="text"
        placeholder="Write a comment..."
      />
      <div
        onClick={handleClick}
        className="absolute bottom-0 right-0 top-0 flex cursor-pointer items-center justify-center pr-4"
      >
        {isMutating ? (
          <Spinner size="sm" color="default" className="mr-2 inline-block" />
        ) : (
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7586 10.6642C10.6264 10.7274 10.5459 10.7619 10.4712 10.7964C9.40205 11.3309 8.3272 11.8597 7.26384 12.4058C6.91896 12.5839 6.62582 12.5667 6.29819 12.3598C4.55083 11.2562 2.79198 10.1583 1.03312 9.06624C0.762972 8.89955 0.579039 8.68688 0.613527 8.3535C0.642266 8.02012 0.860686 7.84768 1.15958 7.73273C7.511 5.23814 13.8567 2.74356 20.2023 0.243223C20.7714 0.0190551 21.1852 0.329441 21.237 0.691558C21.26 0.869743 21.2197 1.07667 21.1507 1.2491C20.1046 3.93337 19.047 6.61763 17.9951 9.3019C16.5639 12.9518 15.127 16.6017 13.6957 20.2516C13.5175 20.7115 13.1612 20.9126 12.7818 20.7517C12.6381 20.6942 12.4944 20.5735 12.4139 20.4471C11.2701 18.6365 10.1378 16.8201 9.00545 15.0038C8.84451 14.7452 8.856 14.498 8.9882 14.2278C9.54 13.1357 10.0861 12.0379 10.6321 10.9458C10.6608 10.8768 10.6953 10.7964 10.7586 10.6642Z"
              fill="#194D79"
            />
          </svg>
        )}
      </div>
    </div>
  )
}
