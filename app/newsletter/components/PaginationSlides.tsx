"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "@nextui-org/react"

import { createQueryString } from "@/lib/util_functions/createQueryString"

type Props = {
  totalPages: number | undefined
}

export default function PaginationSlides({ totalPages }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const newSearchParams = [{ name: "page", value: `${currentPage}` }]
    const queryString = createQueryString(searchParams, newSearchParams)
    router.push(pathname + "?" + queryString)
  }, [currentPage])

  return (
    <Pagination
      showControls={true}
      loop={true}
      showShadow={true}
      color="secondary"
      variant="light"
      size="lg"
      total={totalPages || 1}
      initialPage={1}
      page={+currentPage}
      onChange={setCurrentPage}
    />
  )
}
