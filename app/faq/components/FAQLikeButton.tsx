"use client"

import { useRouter } from "next/navigation"
import { Spinner } from "@nextui-org/react"
import { useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

import useFAQMutation from "./hooks/useFAQMutation"
import useIsFAQLiked from "./hooks/useIsFAQLiked"

type Props = {
  questionID: number | undefined
}

export default function FAQLikeButton({ questionID }: Props) {
  const { data: session } = useSession()
  const router = useRouter()
  const queryClient = useQueryClient()

  const { isLiked, isLikedIsLoading, isLikedError, isLikedIsError } =
    useIsFAQLiked(questionID)

  const { mutate, isPending } = useFAQMutation(questionID)

  if (!session?.token || !questionID || isLiked === null) {
    queryClient.invalidateQueries({
      queryKey: ["faq/likebutton", questionID],
    })
    return <></>
  }

  if (isLikedIsLoading) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        Loading data...
      </div>
    )
  }

  if (isLikedIsError) {
    router.refresh()
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        Error Loading data... {JSON.stringify(isLikedError)}
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col items-center gap-3 sm:flex-row md:w-auto md:gap-5">
      <Button
        onClick={() => mutate()}
        className="flex min-h-[46px] w-full items-center gap-3 rounded-[10px] text-center text-base font-bold leading-[33px] md:w-[133px]"
        variant={`${isLiked ? "secondary" : "secondary_outline"}`}
      >
        {isLiked ? "Liked" : "Like"}
        {isPending ? (
          <Spinner color="default" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"
            />
          </svg>
        )}
      </Button>
    </div>
  )
}
