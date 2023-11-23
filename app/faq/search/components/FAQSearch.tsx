"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  selectOptions: z.string({
    required_error: "Please select an option to search.",
  }),
})

export default function FAQSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useState(
    parseSearchParams(searchParams.get("keyword") || "")
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const clickHandler = () => {
    if (!keyword) return
    router.push(`/faq/search?${new URLSearchParams({ keyword })}`)
  }

  return (
    <div className="relative flex min-h-[54px] w-full items-center overflow-hidden rounded-[15px] border border-gray-200 bg-white">
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            clickHandler()
          }
        }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search question or topic..."
        className="h-full min-h-[54px] rounded-l-none border-none bg-white px-5 text-base font-light leading-relaxed placeholder:text-zinc-500 "
      />
      <div
        onClick={clickHandler}
        className="absolute bottom-0 right-0 top-0 flex items-center justify-center p-6"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1506 0.486328C5.2919 0.486328 0.54248 5.23574 0.54248 11.0944C0.54248 16.9531 5.2919 21.7026 11.1506 21.7026C13.6068 21.7026 15.8681 20.8678 17.6662 19.4664L22.1741 23.9743C22.6865 24.4868 23.5173 24.4868 24.0297 23.9743C24.5422 23.4619 24.5422 22.6311 24.0297 22.1187L19.5219 17.6108C20.9237 15.8127 21.7587 13.5511 21.7587 11.0944C21.7587 5.23574 17.0093 0.486328 11.1506 0.486328ZM3.16678 11.0944C3.16678 6.68511 6.74126 3.11063 11.1506 3.11063C15.5599 3.11063 19.1344 6.68511 19.1344 11.0944C19.1344 15.5038 15.5599 19.0782 11.1506 19.0782C6.74126 19.0782 3.16678 15.5038 3.16678 11.0944Z"
            fill="#194D79"
          />
        </svg>
      </div>
    </div>
  )
}
