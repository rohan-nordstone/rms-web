import Link from "next/link"

import parseSearchParams from "@/lib/util_functions/parseSearchParams"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import CallForActionSidebar from "../components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "../components/CallForAction/MobileCallForActionSidebar"
import CardDemo from "../components/Card"
import LookingForWork from "../components/LookingForWork"
import { cardsArr } from "../components/cardsArr"
import ArticleCard from "./components/ArticleCard/ArticleCard"
import FilterSelect from "./components/FilterSelect"
import PaginationSlides from "./components/PaginationSlides"
import SearchInput from "./components/SearchInput"
import ShopSlides from "./components/ShopSlides"
import Slides from "./components/Slides"
import SortSelect from "./components/SortSelect"
import getNewsArticles from "./hooks/utils/getNewsArticles"
import getRecommendedNews from "./hooks/utils/getRecommendedNews"

type Props = {
  searchParams: {
    page: string
    itemsPerPage: string
    keyword: string
    sortBy: string
  }
}

export default async function page({
  searchParams: { keyword, sortBy, page, itemsPerPage },
}: Props) {
  keyword = parseSearchParams(keyword)
  sortBy = parseSearchParams(sortBy)
  page = parseSearchParams(page) || "1"
  itemsPerPage = parseSearchParams(itemsPerPage) || "10"

  // const [newsResult, recommendedNewsResult] = await Promise.all([
  //   getNewsArticles(keyword, sortBy, +page, +itemsPerPage),
  //   getRecommendedNews(),
  // ])

  return (
    <div className="relative">
      {/* <div className="-z-5 absolute left-0 right-0 top-0 h-[456px] bg-backgroundSVG bg-cover bg-center bg-no-repeat p-16"></div>
      <section className="container items-center pb-8 pt-20">
        <Card className="overflow-hidden">
          <Slides recommendedNews={recommendedNewsResult} />
        </Card>
        <div className="my-12 flex flex-col justify-between gap-8 md:flex-row">
          <SearchInput />
          <div className="flex flex-1 gap-x-5 md:ml-auto">
            <FilterSelect className="md:ml-auto" />
            <SortSelect />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex-1 space-y-7">
            <h1 className="text-4xl font-bold">Latest Articles</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              {newsResult?.news.map((article, index) => (
                <ArticleCard key={index} article={article} index={index} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-[15px] bg-white p-5 px-0 shadow-md sm:px-5">
                <PaginationSlides totalPages={newsResult?.totalPages} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <CallForActionSidebar />
          </div>
        </div>
        <Separator className="my-14 bg-stone-300" />
        <h2 className="mb-14 text-center text-4xl font-bold">
          <Link href={"/shop"}>RateMyStation's Shop</Link>
        </h2>
        <ShopSlides className="hidden lg:block" />
        <div className="lg:hidden">
          <div className="grid gap-x-5 gap-y-8 pt-12 grid-auto-fit">
            {cardsArr.map((card, index) => (
              <CardDemo key={index} className="w-full" card={card} />
            ))}
          </div>
          <div className="flex items-center justify-center py-12">
            <Link href={"/shop"}>
              <Button
                variant={"secondary"}
                className="min-h-[44px] w-48 rounded-3xl text-center text-lg font-bold leading-loose shadow"
              >
                See All Product
              </Button>
            </Link>
          </div>
        </div>
        <div className="mb-16 hidden md:block lg:hidden">
          <MobileCallForActionSidebar />
        </div>
        <LookingForWork className="lg:hidden" />
      </section> */}
    </div>
  )
}
