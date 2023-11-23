import { useQuery } from "@tanstack/react-query"

import getFAQs from "./utils/getFAQs"

export default function useGetSearchFAQs(body: {
  keyword?: string
  category?: string
}) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["faq/search"],
    queryFn: async () => await getFAQs(body),
    refetchOnWindowFocus: true,
  })

  return { data, isLoading, error, isError }
}
