"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FAQSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useState(
    parseSearchParams(searchParams.get("keyword") || "")
  )

  const clickHandler = () => {
    if (!keyword) return
    router.push(`/faq/search?${new URLSearchParams({ keyword })}`)
  }

  return (
    <div className="relative flex flex-row md:gap-4">
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            clickHandler()
          }
        }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search question or topic..."
        className="min-h-[54px] flex-1 rounded-[25px] bg-white pl-5 shadow md:min-h-16 md:rounded-2xl lg:pl-16"
      />
      <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-5 md:hidden">
        <div onClick={clickHandler}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Search_Magnifying_Glass">
              <path
                id="Union"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9989 3C6.58122 3 3 6.58111 3 10.9986C3 15.4162 6.58122 18.9973 10.9989 18.9973C12.851 18.9973 14.5561 18.3678 15.9118 17.3112L19.311 20.7102C19.6974 21.0966 20.3238 21.0966 20.7102 20.7102C21.0966 20.3238 21.0966 19.6974 20.7102 19.311L17.3111 15.9121C18.3681 14.5562 18.9978 12.851 18.9978 10.9986C18.9978 6.58111 15.4165 3 10.9989 3ZM4.97882 10.9986C4.97882 7.67395 7.67409 4.97875 10.9989 4.97875C14.3237 4.97875 17.019 7.67395 17.019 10.9986C17.019 14.3233 14.3237 17.0185 10.9989 17.0185C7.67409 17.0185 4.97882 14.3233 4.97882 10.9986Z"
                fill="#828282"
              />
            </g>
          </svg>
        </div>
      </div>
      <div onClick={clickHandler} className="hidden md:block">
        <Button
          variant={"secondary"}
          className="min-h-16 ml-auto flex min-w-[200px] gap-4 rounded-[15px] border border-white border-opacity-50 text-lg font-bold leading-relaxed shadow"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Union"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2061 0.298096C5.09346 0.298096 0.138184 5.25337 0.138184 11.366C0.138184 17.4786 5.09346 22.4339 11.2061 22.4339C13.7688 22.4339 16.1281 21.5629 18.0041 20.1008L22.7074 24.8042C23.242 25.3388 24.1088 25.3388 24.6435 24.8042C25.1781 24.2695 25.1781 23.4027 24.6435 22.8681L19.9403 18.1648C21.4028 16.2887 22.274 13.9291 22.274 11.366C22.274 5.25337 17.3187 0.298096 11.2061 0.298096ZM2.87623 11.366C2.87623 6.76555 6.60564 3.03615 11.2061 3.03615C15.8065 3.03615 19.536 6.76555 19.536 11.366C19.536 15.9665 15.8065 19.6959 11.2061 19.6959C6.60564 19.6959 2.87623 15.9665 2.87623 11.366Z"
              fill="white"
            />
          </svg>
          Search
        </Button>
      </div>
    </div>
  )
}
