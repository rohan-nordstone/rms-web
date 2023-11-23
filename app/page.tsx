import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import CallForActionSidebar from "./components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "./components/CallForAction/MobileCallForActionSidebar"
import CardDemo from "./components/Card"
import InputSearch from "./components/InputSearch"
import LatestRatingCard from "./components/LatestRatings/LatestRatingCard"
import LookingForWork from "./components/LookingForWork"
import { cardsArr } from "./components/cardsArr"

export default function IndexPage() {
  return (
    <>
      <div className="bg-backgroundSVG bg-cover bg-center bg-no-repeat px-5 py-24 text-center lg:px-24">
        <div className="flex items-center justify-center">
          <h1 className="max-w-md text-center text-3xl font-bold text-white md:max-w-[766.87px] md:text-4xl lg:text-[58px] lg:leading-[70px]">
            Find thousands of Ratings from real Journalists
          </h1>
        </div>
        <InputSearch />
      </div>
      <section className="container px-4 py-10 pb-8 md:px-8">
        <div className="flex gap-7">
          <div className="flex-1 space-y-7">
            <h1 className="text-4xl font-bold">Latest Ratings</h1>
            <LatestRatingCard />
            <LatestRatingCard />
            <div className="flex items-center justify-center">
              <Button
                variant={"secondary"}
                className="mb-8 h-11 w-44  rounded-3xl shadow"
              >
                <p className="text-center text-lg font-bold leading-loose">
                  Load more
                </p>
              </Button>
            </div>
          </div>
          <div className="hidden flex-shrink lg:block">
            <CallForActionSidebar />
          </div>
        </div>
        <Separator className="h-[2px]" />
        <div>
          <h2 className="mt-14 text-center text-4xl font-bold">
            <Link href={"/shop"}>RateMyStation's Shop</Link>
          </h2>
          <div className="grid gap-x-5 gap-y-8 pt-12 grid-auto-fit">
            {cardsArr.map((card, index) => (
              <CardDemo key={index} className="w-full" card={card} />
            ))}
          </div>
          <div className="flex items-center justify-center py-12">
            <Link href={"/shop"}>
              <Button
                variant={"secondary"}
                className="h-11 w-48 rounded-3xl shadow"
              >
                <p className="w-36 text-center text-lg font-bold leading-loose">
                  See All Product
                </p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mb-16 lg:hidden">
          <MobileCallForActionSidebar />
        </div>
        <LookingForWork />
      </section>
    </>
  )
}
