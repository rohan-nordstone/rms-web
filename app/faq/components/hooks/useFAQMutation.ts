"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

import { faqLikeClickHandler } from "./utils/faqLikeClickHandler"

export default function useFAQMutation(questionID: number | undefined) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async () =>
      await faqLikeClickHandler(questionID, session?.token as string),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["faq/likebutton", questionID],
      })
    },
    onError: (error) => {
      console.error(error)
      toast.error("Mutation failed")
    },
  })
  return { mutate, isPending }
}
