import Link from "next/link"

import { Button } from "@/components/ui/button"
import NewsletterCard from "@/app/components/NewsletterCard"
import { newsletterArr } from "@/app/components/newsletterArr"

import DesktopJobCardsCTA from "../../_components/DesktopJobCardsCTA"
import JobOpenings from "../components/JobOpenings"
import FilterSelect from "./components/FilterSelect"
import LatestRatingCard from "./components/LatestRatingCard"
import ShortSelect from "./components/ShortSelect"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-7">
        <div className="mb-8 mt-5 flex flex-col justify-between gap-y-8 sm:flex-row md:gap-x-8">
          <div className="relative w-full sm:max-w-[50%]">
            <h4 className="text-2xl font-bold text-black">
              My Ratings <span className="font-medium text-zinc-500">(3)</span>
            </h4>
          </div>
          <div className="flex flex-1 gap-x-5 sm:ml-auto">
            <FilterSelect className="md:ml-auto" />
            <ShortSelect />
          </div>
        </div>
        <LatestRatingCard />
        <LatestRatingCard />
        <div className="flex items-center justify-center">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="mb-8 rounded-full"
          >
            Load more
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <DesktopJobCardsCTA />
      </div>
    </div>
  )
}
