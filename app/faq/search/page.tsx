"use client"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"

import ContactUsCard from "./components/ContactUsCard"
import FAQSearch from "./components/FAQSearch"
import SearchResultsCards from "./components/SearchResultsCards"
import useGetSearchFAQs from "./hooks/useGetSearchFAQs"

type Props = {
  searchParams: {
    keyword: string
    category: string
  }
}

export default function page({ searchParams: { keyword, category } }: Props) {
  const body: {
    keyword?: string
    category?: string
  } = {}
  if (keyword) body["keyword"] = parseSearchParams(keyword)
  if (category) body["category"] = parseSearchParams(category)

  // const { data, isLoading, error, isError } = useGetSearchFAQs(body)

  // if (isLoading) {
  //   return (
  //     <div className="flex h-[300px] w-full items-center justify-center">
  //       Loading data...
  //     </div>
  //   )
  // }

  // if (isError) {
  //   return (
  //     <div className="flex h-[300px] w-full items-center justify-center">
  //       Error Loading data... {JSON.stringify(error)}
  //     </div>
  //   )
  // }

  return (
    <>
      {/* <section className="container items-center pb-8 pt-6">
        <h1 className="mb-4 text-[28px] font-normal text-black sm:font-bold md:text-4xl">
          Here are your result for “
          {keyword ? keyword : category ? category : ""}”
        </h1>
        <div className="mb-12 text-base font-normal text-neutral-600 md:text-lg">
          There are 12 results with{" "}
          <span className="text-base font-bold text-black md:text-lg">
            “{keyword ? keyword : category ? category : ""}”{" "}
          </span>
          on{" "}
          <span className="text-base font-bold text-black md:text-lg">
            FAQs{" "}
          </span>
        </div>
        <div className="flex items-start gap-7">
          <div className="flex-1 space-y-7">
            <FAQSearch />
            {data?.map((data, index) => (
              <SearchResultsCards key={index} body={data} />
            ))}
          </div>
          <div className="hidden lg:block">
            <ContactUsCard className="max-w-[300px] xl:max-w-[384px]" />
          </div>
        </div>
      </section>
      <div className="container lg:hidden">
        <ContactUsCard />
      </div> */}
    </>
  )
}
