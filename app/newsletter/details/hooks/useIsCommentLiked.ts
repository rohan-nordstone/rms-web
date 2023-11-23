"use client"

import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import getIsCommetLiked from "./utils/getIsCommentLiked"

export default function useIsCommentLiked(comment_id: number | undefined) {
  const { data: session } = useSession()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments/likes", comment_id],
    queryFn: async () =>
      await getIsCommetLiked(comment_id, session?.token as string),
    enabled: !!session?.token,
  })

  return {
    isCommentLiked: data,
    isLoading,
    isError,
    error,
  }
}
