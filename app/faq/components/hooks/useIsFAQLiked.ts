"use client"

import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import getIsliked from "./utils/getIsLiked"

export default function useIsFAQLiked(questionID: number | undefined) {
  const { data: session } = useSession()
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["faq/likebutton", questionID],
    queryFn: async () => await getIsliked(questionID, session?.token as string),
    refetchOnWindowFocus: true,
  })

  return {
    isLiked: data,
    isLikedIsLoading: isLoading,
    isLikedError: error,
    isLikedIsError: isError,
  }
}
