"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

import likeSubmitHandler from "./utils/likeSubmitHandler"

export default function useCommentLikeMutation(comment_id: number | undefined) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async () =>
      await likeSubmitHandler(comment_id, session?.token as string),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments/likes", comment_id],
      })
    },
    onError: () => {
      toast.error("Mutation failed")
    },
  })

  return { mutate, isPending }
}
