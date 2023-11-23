import Image from "next/image"
import Link from "next/link"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import PaginationSlides from "@/app/newsletter/components/PaginationSlides"
import ShopSlides from "@/app/newsletter/components/ShopSlides"

import JobCard from "../components/JobCard"
import { TJobData } from "../hooks/types/TJobResponseData"
import { TNewsroom } from "../hooks/types/TNewsroom"
import getNewsroom from "../hooks/utils/getNewsroom"
import FilterSelect from "./components/FilterSelect"
import SortSelect from "./components/SortSelect"
import getStationJobData from "./hooks/utils/getStationJobData"

type Props = {
  searchParams: {
    page: string
    itemsPerPage: string
    position: string
    station_id: string
    sortBy: string
  }
}

export default async function page({
  searchParams: { page, itemsPerPage, position, sortBy, station_id },
}: Props) {
  position = parseSearchParams(position)
  sortBy = parseSearchParams(sortBy)
  station_id = parseSearchParams(station_id)

  // let jobs: TJobData[] = []
  // let totalPages: number = 10
  // let newsroom = {} as TNewsroom

  // try {
  //   const [jobDataResult, newsroomResult] = await Promise.all([
  //     getStationJobData(+station_id, position, sortBy, page, itemsPerPage),
  //     getNewsroom(+station_id),
  //   ])

  //   jobs = jobDataResult?.jobs as TJobData[]
  //   totalPages = jobDataResult?.totalPages as number
  //   newsroom = newsroomResult as TNewsroom
  // } catch (error) {
  //   console.error(error)
  // }

  return (
    <div className="relative">
      {/* <div className="absolute left-0 right-0 top-0 h-[295px] rotate-180 bg-backgroundSVG bg-cover bg-center"></div>
      <section className="container relative items-center pb-8 pt-24">
        <Card className="flex flex-wrap items-center gap-x-12 gap-y-8 px-12 py-16">
          <Image
            src="/images/station_logo.webp"
            alt="Station Logo"
            width={138}
            height={106}
          />
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-3xl font-bold leading-[30.50px] text-sky-900">
              <span>{newsroom.name}</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M15.6298 19.6828C15.4195 19.6565 15.137 19.6368 14.8676 19.5842C14.7362 19.5579 14.6836 19.5908 14.6113 19.696C13.7309 20.9583 12.5219 21.5829 10.9844 21.5237C9.63739 21.4711 8.57295 20.8597 7.79105 19.7617C7.68592 19.6171 7.60707 19.5645 7.42309 19.5973C5.07738 20.005 2.90908 18.4468 2.59369 16.0864C2.53456 15.6459 2.60026 15.1857 2.63312 14.7386C2.63969 14.6071 2.63969 14.5414 2.52142 14.4625C0.0640063 12.7728 0.0705769 9.31447 2.52799 7.59847C2.63312 7.52615 2.65283 7.46697 2.63312 7.34205C2.20603 4.94885 3.69098 2.83179 6.08926 2.45046C6.54263 2.37813 7.01572 2.45703 7.48223 2.48333C7.6005 2.4899 7.66621 2.49648 7.74505 2.38471C9.4797 -0.0873901 12.8898 -0.0939648 14.6179 2.37813C14.6902 2.48333 14.7559 2.49648 14.8807 2.47675C17.2724 2.0494 19.3816 3.53529 19.7627 5.94164C19.835 6.38872 19.7627 6.85552 19.7299 7.30918C19.7167 7.44725 19.7299 7.51957 19.8547 7.60504C22.2924 9.26845 22.2858 12.7925 19.8481 14.4559C19.7364 14.5348 19.7101 14.594 19.7364 14.732C20.1635 17.1187 18.6654 19.2292 16.2671 19.6236C16.07 19.6631 15.8795 19.6631 15.6298 19.6828ZM10.1959 11.6879C10.163 11.6945 10.1236 11.7011 10.0908 11.7011C10.0448 11.6222 10.0053 11.5367 9.94621 11.471C9.55197 11.0699 9.15773 10.6623 8.74379 10.2744C8.3167 9.87332 7.67935 9.89305 7.27854 10.2941C6.87773 10.6952 6.85802 11.3395 7.2654 11.7537C7.97502 12.4835 8.69122 13.2001 9.42056 13.9102C9.83451 14.3113 10.4521 14.3178 10.8661 13.9102C12.2788 12.5164 13.6783 11.1094 15.0713 9.70238C15.3538 9.41967 15.4327 9.05806 15.321 8.67672C15.091 7.89433 14.1514 7.67079 13.5469 8.26252C12.4759 9.32105 11.4115 10.3927 10.347 11.4644C10.2945 11.5302 10.2485 11.6156 10.1959 11.6879Z"
                  fill="#89C400"
                />
              </svg>
            </div>
            <p className="text-xl font-light leading-relaxed text-zinc-500">
              TV News Station
            </p>
            <div className="flex items-center gap-3 text-lg font-light leading-relaxed text-sky-900">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M0.842773 7.01713C0.842773 3.80995 2.63335 1.30718 5.36865 0.437341C9.31231 -0.822052 13.4208 1.41924 14.1568 5.4589C14.5412 7.55077 14.0194 9.43453 12.6408 11.0835C11.1633 12.8498 9.65834 14.6002 8.16986 16.3612C7.7689 16.8361 7.35147 16.8361 6.94501 16.3612C5.4071 14.5468 3.8527 12.7431 2.33675 10.9074C1.32063 9.68534 0.859251 8.25518 0.842773 7.01713ZM7.55469 3.92735C6.09367 3.93269 4.91826 5.08535 4.92375 6.50484C4.92924 7.90831 6.12113 9.04497 7.57666 9.03963C9.0212 9.03429 10.2076 7.87629 10.1966 6.47282C10.1856 5.06401 8.99924 3.92201 7.55469 3.92735Z"
                  fill="#194D79"
                />
              </svg>

              <span>Los Angeles, CA | DMA: 2</span>
            </div>
          </div>
          <div className="ml-auto w-full space-y-3 lg:w-[239px]">
            <Link
              className="block"
              href={"/profile/stations_ratings?station_id=1"}
            >
              <Button
                className="h-11 w-full rounded-lg text-center text-base font-bold leading-loose"
                variant={"secondary"}
              >
                See Station’s ratings
              </Button>
            </Link>
            <Link
              className="block"
              href={"/profile/visitor_newsroom?station_id=1"}
            >
              <Button
                className="h-11 w-full rounded-lg text-center text-base font-bold leading-loose"
                variant={"secondary_outline"}
              >
                See Station’s profile
              </Button>
            </Link>
          </div>
        </Card>
        <div className="flex items-center gap-8 py-11">
          <h3 className="text-2xl font-bold text-black">
            Available job opening{" "}
            <span className="text-2xl font-medium text-zinc-500">
              ({jobs.length})
            </span>
          </h3>
          <div className="flex flex-1 gap-x-5 md:ml-auto">
            <FilterSelect className="md:ml-auto" />
            <SortSelect />
          </div>
        </div>
        {jobs.length === 0 && (
          <div className="flex min-h-[300px] w-full items-center justify-center text-2xl font-semibold">
            <p className="flex-1 text-center">No Jobs Found</p>
          </div>
        )}
        <div className="grid gap-5 md:grid-cols-2 md:gap-3 lg:gap-5">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <div className="flex items-center justify-center pt-14">
          <div className="rounded-[15px] bg-white p-5 px-0 shadow-md sm:px-5">
            <PaginationSlides totalPages={totalPages} />
          </div>
        </div>
        <Separator className="mt-14" />
        <h2 className="my-16 text-center text-4xl font-bold">
          <Link href={"/shop"}>RateMyStation's Shop</Link>
        </h2>
        <ShopSlides />
      </section> */}
    </div>
  )
}
