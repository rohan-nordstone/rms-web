import Link from "next/link"
import axios from "axios"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { convertTimestamp } from "@/lib/util_functions/convertTimestamp"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CallForActionSidebar from "@/app/components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "@/app/components/CallForAction/MobileCallForActionSidebar"
import CardDemo from "@/app/components/Card"
import { cardsArr } from "@/app/components/cardsArr"

import ArticleCardDropDown from "../components/ArticleCard/ArticleCardDropDown"
import LikesCommentsShares from "../components/LikesCommentsShares"
import SearchInput from "../components/SearchInput"
import ShopSlides from "../components/ShopSlides"
import BottomIcons from "./comments/BottomIcons"
import CTA from "./comments/CTA"
import Comments from "./comments/Comments"
import getNewsData from "./hooks/utils/getNewsData"

type Props = {
  searchParams: {
    news_id: string
  }
}

export default async function page({ searchParams: { news_id } }: Props) {
  const session = await getServerSession(authOptions)

  if (!session?.token) return <></>
  axios.defaults.headers.common["Authorization"] = `Bearer ${session.token}`

  // const news = await getNewsData(+news_id)

  return (
    <section className="container items-center pb-8 pt-9">
      {/* <div className="flex gap-7">
        <div className="flex-1 space-y-7">
          <Card className="overflow-hidden">
            <div className="aspect-h-3 aspect-w-4 flex sm:aspect-h-7 sm:aspect-w-16">
              <img
                className="object-cover object-center"
                src={"/articles/image_1.webp"}
                alt="article"
              />
            </div>
            <div className="px-5 py-2 lg:px-10">
              <div className="relative flex flex-col justify-center gap-y-4 pt-5">
                <div className="absolute right-0 top-3">
                  <ArticleCardDropDown
                    newsId={news?.id}
                    className="absolute -right-5 top-0 min-w-[221px]"
                  />
                </div>
                <div className="w-[90%] text-xl font-semibold leading-relaxed text-black hover:underline sm:text-2xl md:order-1 md:text-[28px] lg:font-bold lg:leading-[39px]">
                  {news?.title}
                </div>
                <div className="md:order-0 flex justify-between gap-5">
                  <div className="flex items-center gap-1">
                    <div>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M13.9323 7.28793C13.9398 6.13349 13.6653 5.04297 13.1088 4.02766C13.0975 4.0051 13.0862 3.98253 13.0712 3.95997C11.9656 1.94063 9.89363 0.526718 7.48321 0.349979C7.44937 0.346218 7.41929 0.346218 7.38544 0.342458C7.3516 0.338698 7.31775 0.338698 7.28391 0.338698C7.25759 0.338698 7.23127 0.334937 7.20118 0.334937C7.16734 0.334937 7.12973 0.331177 7.09589 0.331177C7.05453 0.331177 7.0094 0.331177 6.96804 0.331177C6.93419 0.331177 6.90411 0.331177 6.87027 0.331177C6.85522 0.331177 6.83642 0.331177 6.82138 0.331177C6.79882 0.331177 6.77626 0.331177 6.75369 0.331177C6.73865 0.331177 6.72361 0.331177 6.70481 0.331177C6.70105 0.331177 6.69729 0.331177 6.69729 0.331177C6.66344 0.331177 6.6296 0.334937 6.59576 0.334937C5.43003 0.395104 4.33951 0.748582 3.39189 1.3164C1.36127 2.54606 0 4.77974 0 7.33306C0 7.49475 0.00376041 7.65645 0.0150416 7.81815C0.157937 9.92398 1.22965 11.7779 2.82031 12.9624C2.83535 12.9737 2.85039 12.985 2.86167 12.9925C3.01961 13.109 3.18131 13.2181 3.35052 13.3196C3.36933 13.3309 3.38437 13.3384 3.40317 13.3497C4.42224 13.9589 5.60677 14.3161 6.87403 14.3312C6.90411 14.3312 6.93419 14.3312 6.96428 14.3312C6.99436 14.3312 7.02444 14.3312 7.05453 14.3312C7.07333 14.3312 7.09589 14.3312 7.11469 14.3312C7.13725 14.3312 7.15606 14.3312 7.17862 14.3312C7.19742 14.3312 7.21246 14.3312 7.23127 14.3312C9.22804 14.256 11.0067 13.3347 12.2288 11.917C12.2288 11.9132 12.2326 11.9132 12.2364 11.9095C12.5146 11.5974 12.7628 11.2627 12.9734 10.9054C13.2592 10.4204 13.4848 9.89766 13.6428 9.33359C13.6465 9.31479 13.654 9.29975 13.6578 9.28095C13.8345 8.66424 13.9323 8.00993 13.9323 7.33306C13.9323 7.31802 13.9323 7.30297 13.9323 7.28793ZM12.5034 8.23932C12.4394 8.61912 12.3379 8.99516 12.195 9.36744C11.2323 11.8531 8.69406 13.2971 6.02417 12.8834C5.85872 12.8571 5.69702 12.827 5.53908 12.7856C4.787 12.5863 4.09508 12.2366 3.5047 11.7666C3.49342 11.7591 3.4859 11.7515 3.47462 11.744C3.1437 11.4695 2.84287 11.1461 2.5646 10.7776C2.51947 10.7137 2.46683 10.661 2.41042 10.6197C1.82756 9.80741 1.45528 8.83346 1.37631 7.77678C1.36503 7.63013 1.35751 7.48347 1.35751 7.33306C1.35751 6.79532 1.43272 6.27262 1.57185 5.78001C2.0419 4.12543 3.24899 2.7792 4.80956 2.12489C6.05426 1.621 7.46817 1.56083 8.74671 1.98576C8.76175 1.98952 8.77679 1.99704 8.78807 2.0008C8.82192 2.01208 8.85576 2.02336 8.8896 2.0384C9.18668 2.14745 9.46871 2.27907 9.73946 2.43324L9.7545 2.44077C9.77706 2.45581 9.79962 2.46709 9.82219 2.48213C9.85603 2.50093 9.88987 2.52349 9.91996 2.5423C9.935 2.54982 9.94628 2.55734 9.95756 2.56862C9.96132 2.57238 9.96508 2.57238 9.96884 2.57614C9.96508 2.57614 9.96508 2.57238 9.96132 2.57238C9.97636 2.5799 9.98764 2.59118 10.0027 2.5987C9.9914 2.59118 9.98012 2.58366 9.96884 2.57614C9.98388 2.58742 10.0027 2.5987 10.0177 2.60998C10.1381 2.68895 10.2546 2.77168 10.3674 2.85817C10.3486 2.84313 10.3261 2.82809 10.3073 2.81305C10.3223 2.82433 10.3374 2.83561 10.3524 2.84689C10.3637 2.85817 10.3787 2.86569 10.3938 2.87697C10.4201 2.89954 10.4464 2.91834 10.4727 2.9409C10.4953 2.9597 10.5216 2.9785 10.5442 3.00107C10.5667 3.01987 10.5855 3.03491 10.6081 3.05371C10.6156 3.05747 10.6232 3.06499 10.6269 3.07251C10.6532 3.09508 10.6796 3.11764 10.7059 3.14396C10.7284 3.16652 10.7548 3.18909 10.7773 3.21165C10.7924 3.22669 10.8112 3.24173 10.8262 3.26053C10.8563 3.29062 10.8864 3.31694 10.9165 3.34702C10.939 3.36959 10.9616 3.39215 10.9804 3.41471C11.003 3.43727 11.0255 3.4636 11.0481 3.48616C11.0406 3.47864 11.0368 3.47112 11.0293 3.46736C11.0368 3.47488 11.0443 3.48616 11.0518 3.49368C11.0518 3.49368 11.0481 3.48992 11.0443 3.48992C11.0669 3.51248 11.0894 3.53881 11.112 3.56137C11.1383 3.58769 11.1609 3.61777 11.1872 3.6441C11.2286 3.69298 11.2662 3.73811 11.3075 3.78699C11.3188 3.79827 11.3301 3.81331 11.3376 3.8246C11.3602 3.85468 11.3865 3.88476 11.4091 3.91485C11.4204 3.92989 11.4316 3.94493 11.4467 3.96373C11.4655 3.99005 11.488 4.01638 11.5068 4.04646C11.5144 4.05774 11.5257 4.07278 11.5332 4.08406C11.5369 4.09159 11.5445 4.09911 11.5482 4.10287C11.552 4.10663 11.552 4.11039 11.5557 4.11039C11.5745 4.13295 11.5896 4.15927 11.6084 4.1856C11.6121 4.18936 11.6159 4.19688 11.6197 4.20064C11.6385 4.23072 11.6573 4.25704 11.6761 4.28713C11.7024 4.32849 11.7325 4.37362 11.755 4.41498C11.7475 4.39994 11.7362 4.3849 11.7287 4.37362C12.2627 5.23475 12.571 6.25382 12.571 7.34434C12.5748 7.64141 12.5522 7.946 12.5034 8.23932ZM10.0741 9.47273C10.1155 9.76228 9.99893 10.0105 9.76202 10.1534C9.64921 10.2211 9.52887 10.2587 9.40854 10.2587C9.26565 10.2587 9.12651 10.2098 8.99866 10.1158C8.75047 9.9315 8.50604 9.74724 8.25786 9.55922C8.14128 9.47273 8.02471 9.38248 7.90438 9.29599C7.769 9.19446 7.62987 9.08917 7.49449 8.98764C7.12973 8.71313 6.74993 8.42734 6.37389 8.15283C6.15955 7.99489 6.0505 7.78055 6.0505 7.51732C6.0505 6.75395 6.0505 5.98683 6.0505 5.22347V5.09561C6.0505 4.57668 6.0505 4.05774 6.0505 3.53881C6.0505 3.33574 6.12194 3.14772 6.25732 3.01611C6.38141 2.89201 6.54687 2.82809 6.72737 2.82809H6.73113C7.11845 2.83185 7.40048 3.13268 7.40424 3.54633C7.40424 3.97125 7.40424 4.39618 7.40424 4.8211V5.37764C7.40424 5.52806 7.40424 5.67848 7.40424 5.82889V5.83641C7.40424 6.2839 7.40424 6.75019 7.40048 7.2052C7.40048 7.21272 7.40048 7.21648 7.40048 7.22024C7.40424 7.22024 7.408 7.22777 7.41552 7.23153C7.87806 7.57748 8.34059 7.9272 8.79936 8.27692L8.89713 8.34837C9.18292 8.56271 9.46495 8.78081 9.75074 8.99516C9.88235 9.08917 10.0403 9.23582 10.0741 9.47273ZM10.2396 2.75664C10.2471 2.7604 10.2509 2.76416 10.2584 2.77168C10.2396 2.75664 10.2208 2.7416 10.1982 2.73032C10.2133 2.73784 10.2245 2.74536 10.2396 2.75664Z"
                          fill="#828282"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-light text-zinc-500">
                      {convertTimestamp(
                        new Date(news?.createdAt || new Date().toString())
                      )}
                    </div>
                  </div>
                  <div className="md:hidden">
                    <span className="text-sm font-light text-zinc-500">
                      Written by{" "}
                    </span>
                    <span className="text-sm font-medium text-secondary">
                      {news?.author?.name || ""}
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center md:order-2">
                  <div className="hidden md:block">
                    <span className="text-sm font-light text-zinc-500">
                      Written by{" "}
                    </span>
                    <span className="text-sm font-medium text-secondary">
                      {news?.author?.name || ""}
                    </span>
                  </div>
                  <LikesCommentsShares
                    className="md:ml-auto"
                    news_id={news?.id}
                    showCount={true}
                  />
                </div>
              </div>
              <Separator className="my-10 bg-stone-300" />
              <div className="flex w-full flex-col items-center justify-center">
                <div className="prose">
                  <h1>{news?.title}</h1>
                  <p>{news?.content}</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-9">
                <svg
                  width="43"
                  height="8"
                  viewBox="0 0 43 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="3.77216"
                    cy="3.54413"
                    r="3.54267"
                    fill="#4F4F4F"
                  />
                  <circle
                    cx="21.1257"
                    cy="3.54413"
                    r="3.54267"
                    fill="#4F4F4F"
                  />
                  <circle
                    cx="38.4782"
                    cy="3.54413"
                    r="3.54267"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
              <BottomIcons news_id={news?.id} />
              <Separator className="my-10 bg-stone-300" />
              <Comments commentsCount={news?.commentsCount} news_id={news_id} />
              <Separator className="my-10 bg-stone-300" />
              <CTA author_id={news?.author?.id} />
            </div>
          </Card>
        </div>
        <div className="hidden lg:block">
          <SearchInput className="relative mb-7 flex-1" />
          <CallForActionSidebar />
        </div>
      </div>
      <Separator className="my-14 bg-stone-300" />
      <h2 className="my-7 text-center text-3xl font-bold lg:my-14 lg:text-4xl">
        <Link href={"/shop"}>RateMyStation's Shop</Link>
      </h2>
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
      <ShopSlides className="hidden lg:block" /> */}
    </section>
  )
}
