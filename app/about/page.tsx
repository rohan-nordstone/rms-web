import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import NewsletterCTA from "../components/CallForAction/NewsletterCTA"
import CardDemo from "../components/Card"
import LookingForWork from "../components/LookingForWork"
import { cardsArr } from "../components/cardsArr"
import AboutUs from "./components/AboutUs"
import FromTheCreator from "./components/FromTheCreator"

export default function page() {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-[560px] bg-backgroundSVG bg-cover bg-center bg-no-repeat p-16"></div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <AboutUs />
        <FromTheCreator />
        <Separator className="h-[2px]" />
        <div className="">
          <h2 className="mt-14 text-center text-4xl font-bold">
            <Link href={"/shop"}>RateMyStation's Shop</Link>
          </h2>
          <div className="grid gap-x-5 gap-y-8 pb-6 pt-12 grid-auto-fit">
            {cardsArr.map((card, index) => (
              <CardDemo key={index} className="w-full" card={card} />
            ))}
          </div>
          <div className="flex items-center justify-center py-8">
            <Link href={"/shop"}>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="rounded-full"
              >
                See All Products
              </Button>
            </Link>
          </div>
        </div>
        <NewsletterCTA className="mb-16 lg:hidden" />
        <LookingForWork />
      </section>
    </div>
  )
}
