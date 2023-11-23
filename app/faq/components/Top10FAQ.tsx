"use client"

import useFetchFAQ from "../hooks/useFetchFAQ"
import FAQCards from "./FAQCards"

export default function Top10FAQ() {
  const { data, isLoading, error, isError } = useFetchFAQ()

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
    <div className="grid md:grid-cols-2 md:gap-5 lg:gap-10">
      {data?.slice(0, 10).map((faq, index) => (
        <FAQCards key={index} faq={faq} />
      ))}
    </div>
  )
}
