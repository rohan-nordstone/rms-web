"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { Card } from "@/components/ui/card"

interface TFAQCategory {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
}

export default function FAQCategory() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["faq/categories"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs/categories`,
        {
          cache: "no-store",
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch FAQ categories: ${response.status}`)
      }

      const data = (await response.json()) as TFAQCategory[]

      return data
    },
    staleTime: 10000,
    refetchOnWindowFocus: true,
  })

  if (isLoading) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        Loading data...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center">
        Error Loading data... {JSON.stringify(error)}
      </div>
    )
  }

  return (
    <>
      <div className="mt-12 text-[28px] font-bold text-black opacity-80">
        Topics
      </div>
      <div className="mb-16 mt-6 grid gap-3 md:grid-cols-2 lg:gap-5">
        {data?.map((category, index) => (
          <Link
            key={index}
            href={`/faq/search?category=${category.name}`}
          >
            <Card className="group h-full cursor-pointer space-y-3 p-5 lg:space-y-0 lg:px-10">
              <div className="text-lg font-semibold leading-tight text-secondary hover:underline group-hover:underline lg:text-xl lg:leading-loose">
                {category.name}
              </div>
              <div className="flex items-center justify-between gap-4 rounded-md">
                <p className="line-clamp-3 text-lg font-light leading-normal text-zinc-800 lg:text-xl lg:leading-loose">
                  {category.description}
                </p>
                <div className="h-4 w-3">
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Rectangle 53 (Stroke)">
                      <path
                        id="Rectangle 53 (Stroke)_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.832826 1.48126C1.5318 0.782287 2.66507 0.782287 3.36404 1.48126L10.0293 8.14648C10.7282 8.84546 10.7282 9.97872 10.0293 10.6777L3.36404 17.3429C2.66507 18.0419 1.5318 18.0419 0.832826 17.3429C0.13385 16.6439 0.13385 15.5107 0.832826 14.8117L6.23244 9.41209L0.832826 4.01248C0.13385 3.3135 0.13385 2.18024 0.832826 1.48126Z"
                        fill="#194D79"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
