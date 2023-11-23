"use client"

import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import getIsJobReported from "./utils/getIsJobReported"

export default function useIsJobReported(job_id: number | undefined) {
  const { data: session } = useSession()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["job/reported", job_id],
    queryFn: async () => await getIsJobReported(job_id),
    enabled: !!session?.token,
  })

  return {
    isReported: data,
    isLoading,
    isError,
    error,
  }
}
