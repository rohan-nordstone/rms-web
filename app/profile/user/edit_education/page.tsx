import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import JobOpenings from "../components/JobOpenings"
import DropDown from "./components/DropDown"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-bold text-black">Edit Education</h4>
          <Link
            href={"/profile/user"}
            className="text-center text-lg font-light text-secondary"
          >
            Back
          </Link>
        </div>
        <Card className="p-9">
          <div className="relative flex gap-10">
            <div className="flex gap-3 py-6">
              <Image
                className="h-[59px] w-[59px]"
                width={59}
                height={59}
                alt="university"
                src={"/images/university.webp"}
              />
              <div>
                <p className="text-lg font-semibold leading-relaxed text-black">
                  Magister of Loream ipsum
                </p>
                <p className="text-base font-semibold leading-relaxed text-secondary">
                  University of Illinois
                </p>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  Oct 2021 - Apr 2022
                </p>
                <p className="text-base font-light leading-relaxed text-black">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                  Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                  et commodo sapien porta felis amet pellentesque. Erat augue
                  enim turpis risus urna.
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-2">
              <DropDown className="absolute right-0 top-0 min-w-[221px]" />
            </div>
          </div>
          <Separator />
          <div className="relative flex gap-10">
            <div className="flex gap-3 py-6">
              <Image
                className="h-[59px] w-[59px]"
                width={59}
                height={59}
                alt="university"
                src={"/images/university.webp"}
              />
              <div>
                <p className="text-lg font-semibold leading-relaxed text-black">
                  Bachelor of Loream ipsum
                </p>
                <p className="text-base font-semibold leading-relaxed text-secondary">
                  University of Illinois
                </p>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  Oct 2021 - Apr 2022
                </p>
                <p className="text-base font-light leading-relaxed text-black">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                  Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                  et commodo sapien porta felis amet pellentesque. Erat augue
                  enim turpis risus urna.
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-2">
              <DropDown className="absolute right-0 top-0 min-w-[221px]" />
            </div>
          </div>
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
