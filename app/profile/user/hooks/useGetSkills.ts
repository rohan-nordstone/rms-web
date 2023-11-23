"use client"

import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import getSkills from "./utils/getSkills"

export default function useGetSkills() {
  const { data: session } = useSession()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user/skills"],
    queryFn: async () => await getSkills(session?.token as string),
    enabled: !!session?.token,
  })

  return {
    skills: data,
    isLoading,
    isError,
    error,
  }
}
