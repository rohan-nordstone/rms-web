import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DropDown from "@/app/jobs/components/DropDown"

import JobTags from "../../components/JobTags"

export default function ToBePostedJob() {
  return (
    <Card className="relative p-5">
      <div className="flex items-center gap-5 pb-7 lg:gap-12">
        <Image
          src="/images/station_logo.webp"
          alt="Station Logo"
          width={175}
          height={135}
          className="hidden w-[93px] sm:block lg:w-[175px]"
        />
        <div className="flex-1">
          <div className="flex items-center gap-7">
            <div className="">
              <Image
                src="/images/station_logo.webp"
                alt="Station Logo"
                width={175}
                height={135}
                className="mb-5 w-[93px] sm:hidden lg:w-[175px]"
              />
              <Link
                href={"/jobs/any"}
                className="text-[28px] font-bold leading-[30.50px] text-zinc-800"
              >
                Assistant News Director
              </Link>
              <p className="text-xl font-light leading-relaxed text-zinc-500">
                KABC
              </p>
            </div>
            <div className="absolute right-2 top-3">
              <DropDown className="absolute right-0 top-0 min-w-[221px]" />
            </div>
          </div>
          <JobTags />
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-5 pt-5">
        <div className="flex items-center gap-x-8 gap-y-5 sm:gap-x-20">
          <div>
            <p className="text-xl font-bold leading-loose text-black sm:text-2xl">
              0
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-500">
              Views
            </p>
          </div>
          <div>
            <p className="text-xl font-bold leading-loose text-black sm:text-2xl">
              0
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-500">
              Applied
            </p>
          </div>
          <div>
            <p className="text-xl font-bold leading-loose text-black sm:text-2xl">
              -
            </p>
            <p className="text-base font-light leading-relaxed text-neutral-500">
              Remaining
            </p>
          </div>
        </div>
        <Button
          className="h-11 w-full rounded-lg border border-zinc-500 lg:w-32"
          variant={"muted_outline"}
        >
          Draft
        </Button>
      </div>
    </Card>
  )
}
