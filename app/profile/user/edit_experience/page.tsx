import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"

import JobOpenings from "../components/JobOpenings"
import DropDown from "./components/DropDown"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-bold text-black">Edit Experiance</h4>
          <Link
            href={"/profile/user"}
            className="text-center text-lg font-light text-secondary"
          >
            Back
          </Link>
        </div>
        <Card className="p-9">
          <div className="mb-5 flex items-center gap-3">
            <Image
              className="h-9 w-[46px]"
              width={46}
              height={36}
              alt="news_station"
              src="/images/station_logo.webp"
            />
            <div>
              <p className="text-lg font-semibold leading-relaxed text-black">
                Office Name
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                10 months
              </p>
            </div>
          </div>
          <ol className="relative ml-7 border-l border-gray-200 pl-7 dark:border-gray-700">
            <div className="relative flex gap-11">
              <li className="mb-10 ml-4 w-[85%]">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold leading-relaxed text-secondary">
                    Job Title (Current)
                  </p>
                  <time className="text-right text-base font-medium leading-relaxed text-lime-500">
                    Oct 2021 - Apr 2022
                  </time>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-light leading-relaxed text-zinc-500">
                    Fulltime
                  </p>
                  <p className="text-sm font-light leading-relaxed text-zinc-500">
                    7 months
                  </p>
                </div>
                <p className="text-base font-light leading-relaxed text-black">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                  Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                  et commodo sapien porta felis amet pellentesque. Erat augue
                  enim turpis risus urna.
                </p>
              </li>
              <div className="absolute right-0 top-2">
                <DropDown className="absolute right-0 top-0 min-w-[221px]" />
              </div>
            </div>
            <div className="relative flex gap-11">
              <li className="mb-10 ml-4 w-[85%]">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold leading-relaxed text-secondary">
                    Job Title (Past)
                  </p>
                  <time className="text-right text-base font-medium leading-relaxed text-lime-500">
                    Feb 2021 - Apr 2022
                  </time>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-light leading-relaxed text-zinc-500">
                    Fulltime
                  </p>
                  <p className="text-sm font-light leading-relaxed text-zinc-500">
                    3 months
                  </p>
                </div>
                <p className="text-base font-light leading-relaxed text-black">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                  Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                  et commodo sapien porta felis amet pellentesque. Erat augue
                  enim turpis risus urna.
                </p>
              </li>
              <div className="absolute right-0 top-2">
                <DropDown className="absolute right-0 top-0 min-w-[221px]" />
              </div>
            </div>
          </ol>
        </Card>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-bold text-black">Job Openings</h4>
          <div className="text-center text-lg font-light text-secondary">
            See all
          </div>
        </div>
        <div className="my-9 flex flex-col gap-7">
          {[1, 2, 3].map((job, index) => (
            <JobOpenings key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
