"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { createQueryString } from "@/lib/util_functions/createQueryString"
import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type Props = {
  className?: string
}

export default function SearchInput({ className }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useState(
    parseSearchParams(searchParams.get("keyword") || "")
  )

  const handleSearch = () => {
    const newSearchParams = [
      { name: "keyword", value: keyword },
      { name: "page", value: "1" },
    ]

    const queryString = createQueryString(searchParams, newSearchParams)
    router.push(pathname + "?" + queryString)
  }

  return (
    <div
      className={cn(
        "relative w-full md:max-w-[50%] lg:max-w-[582px]",
        className ?? className
      )}
    >
      <Input
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch()
          }
        }}
        value={keyword}
        type="text"
        placeholder="Search articles or writer"
        className="h-11 rounded-[10px] border border-zinc-500 text-base font-normal leading-tight placeholder:text-zinc-500"
      />
      <div
        onClick={handleSearch}
        className="absolute bottom-0 right-0 top-0 flex cursor-pointer items-center justify-center pr-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.63059 0.569763C3.86405 0.569763 0 4.43381 0 9.20035C0 13.9669 3.86405 17.8309 8.63059 17.8309C10.629 17.8309 12.4687 17.1518 13.9315 16.0116L17.5991 19.6792C18.016 20.0961 18.692 20.0961 19.1089 19.6792C19.5258 19.2623 19.5258 18.5864 19.1089 18.1695L15.4414 14.502C16.5818 13.039 17.2612 11.199 17.2612 9.20035C17.2612 4.43381 13.3971 0.569763 8.63059 0.569763ZM2.13509 9.20035C2.13509 5.61299 5.04323 2.70485 8.63059 2.70485C12.218 2.70485 15.1261 5.61299 15.1261 9.20035C15.1261 12.7877 12.218 15.6958 8.63059 15.6958C5.04323 15.6958 2.13509 12.7877 2.13509 9.20035Z"
            fill="#828282"
          />
        </svg>
      </div>
    </div>
  )
}
