"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import reportSubmitHandler from "./utils/reportSubmitHandler"

export default function useJobReportMutation(job_id: number | undefined) {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: (reason: string) => reportSubmitHandler(job_id, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["job/reported", job_id],
      })
    },
    onError: () => {
      toast.error("Mutation failed")
    },
  })

  return { mutate, isPending }
}
