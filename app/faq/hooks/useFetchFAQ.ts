"use client"

import { useQuery } from "@tanstack/react-query"

import fetchFAQ from "./utils/fetchFAQs"

export default function useFetchFAQ() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQ,
    refetchOnWindowFocus: true,
  })

  return {
    data,
    isLoading,
    error,
    isError,
  }
}
