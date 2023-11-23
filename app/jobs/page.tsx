import Link from "next/link"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { Separator } from "@/components/ui/separator"

import PaginationSlides from "../newsletter/components/PaginationSlides"
import ShopSlides from "../newsletter/components/ShopSlides"
import FilterSelect from "./components/FilterSelect"
import JobCard from "./components/JobCard"
import JobSearchInputs from "./components/JobSearchInputs"
import SortSelect from "./components/SortSelect"
import getJobData from "./hooks/utils/getJobData"

type Props = {
  searchParams: {
    page: string
    itemsPerPage: string
    position: string
    location: string
    stationName: string
    sortBy: string
  }
}

export default async function page({
  searchParams: { page, itemsPerPage, position, location, stationName, sortBy },
}: Props) {
  position = parseSearchParams(position)
  location = parseSearchParams(location)
  stationName = parseSearchParams(stationName)
  sortBy = parseSearchParams(sortBy)

  // const data = await getJobData(
  //   position,
  //   location,
  //   stationName,
  //   page,
  //   itemsPerPage,
  //   sortBy
  // )

  return (
    <div className="relative">
      {/* <div className="relative rotate-180 bg-backgroundSVG bg-cover bg-center">
        <div className="container rotate-180 px-8">
          <h1 className="pt-16 text-5xl font-bold text-white">
            Find the jobs that matter to you
          </h1>
          <JobSearchInputs />
        </div>
      </div>
      <section className="container items-center pb-8">
        <div className="my-12 flex flex-col justify-between gap-y-8 sm:flex-row md:gap-x-8">
          <div className="relative w-full sm:max-w-[50%] lg:max-w-[582px]">
            <h4 className="text-2xl font-bold text-black">
              Recommended for you{" "}
            </h4>
          </div>
          <div className="flex flex-1 gap-x-5 sm:ml-auto">
            <FilterSelect className="md:ml-auto" />
            <SortSelect />
          </div>
        </div>
        {data?.jobs.length === 0 && (
          <div className="flex min-h-[300px] w-full items-center justify-center text-2xl font-semibold">
            <p className="flex-1 text-center">No Jobs Found</p>
          </div>
        )}
        <div className="grid gap-5 md:grid-cols-2 md:gap-3 lg:gap-5">
          {data?.jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <div className="flex items-center justify-center pt-14">
          <div className="rounded-[15px] bg-white p-5 px-0 shadow-md sm:px-5">
            <PaginationSlides totalPages={data?.totalPages} />
          </div>
        </div>
        <Separator className="mt-14 border-stone-300" />
        <h2 className="my-16 text-center text-4xl font-bold">
          <Link href={"/shop"}>RateMyStation's Shop</Link>
        </h2>
        <ShopSlides />
      </section> */}
    </div>
  )
}
