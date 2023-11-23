"use client"

import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

type Props = {
  newsId: number | undefined
}

export default function SaveArticleButton({ newsId }: Props) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()
  const router = useRouter()

  const submitHandler = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${session?.token}`,
      }

      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${newsId}/save`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("error.response?.data.", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      console.log("data", data)
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const getIsNewsSaved = async (newsId: number | undefined) => {
    try {
      const headers = {
        Authorization: `Bearer ${session?.token}`,
      }
      // demo url http://localhost:5000/news/26/isNewsSaved
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${newsId}/isNewsSaved`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("error.response?.data.", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const { mutate, isPending } = useMutation({
    mutationFn: submitHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news/isNewsSaved", newsId],
      })
    },
    onError: () => {
      toast.error("Mutation failed")
    },
  })

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["news/isNewsSaved", newsId],
    queryFn: async () => getIsNewsSaved(newsId),
    staleTime: 60000,
    refetchOnWindowFocus: true,
  })

  if (!session?.token) {
    queryClient.invalidateQueries({
      queryKey: ["news/isNewsSaved", newsId],
    })
    return <></>
  }

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        Loading data...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex  w-full items-center justify-center">
        Error Loading data... {JSON.stringify(error)}
      </div>
    )
  }

  return (
    <DropdownMenuItem
      onClick={() => {
        mutate()
      }}
    >
      <div className="flex items-center gap-3 text-base font-bold leading-loose text-black">
        <div className="flex h-6 w-6 items-center justify-center">
          {isPending ? (
            <Spinner size="sm" color="default" className="mr-2 inline-block" />
          ) : data ? (
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          ) : (
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6351 19.5734C15.6351 20.3248 14.7789 20.7554 14.1757 20.3073L8.36271 15.9888C8.03903 15.7483 7.59603 15.7483 7.27235 15.9888L1.45937 20.3073C0.856187 20.7554 0 20.3248 0 19.5734V0.914195C0 0.409299 0.409299 0 0.914196 0H14.7209C15.2258 0 15.6351 0.409299 15.6351 0.914196V19.5734Z"
                fill="#828282"
              />
            </svg>
          )}
        </div>
        {data ? "Unsave" : "Save"}
      </div>
    </DropdownMenuItem>
  )
}
