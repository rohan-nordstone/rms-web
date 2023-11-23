import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import LookingForWork from "@/app/components/LookingForWork"
import ShopSlides from "@/app/newsletter/components/ShopSlides"

import InputSearch from "../_components/InputSearch"
import DropDown from "./components/DropDown"
import SubmitStation from "./components/SubmitStation"

export default function page() {
  return (
    <section className="container mb-10">
      <div className="mb-11 mt-8 space-y-3">
        <h1 className="text-4xl font-bold text-black">
          Here are your result for “Loream Ipsum”
        </h1>
        <div>
          <span className="text-lg font-normal text-neutral-600">
            There are
          </span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">
            12 Stations
          </span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">with</span>
          <span className="text-lg font-bold text-black"> “Loream Ipsum”</span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">on </span>
          <span className="text-lg font-bold text-black">TV News Category</span>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex-1 space-y-7">
          <InputSearch findStation={true} />
          {[0, 1, 2, 3].map((inst, index) => (
            <Card key={index} className="relative flex items-center gap-7 p-8">
              <div className="absolute right-0 top-2 xl:hidden">
                <DropDown className="absolute right-0 top-0 min-w-[221px]" />
              </div>
              <Image
                className="hidden xl:block"
                src="/images/station_logo.webp"
                alt="Station Logo"
                width={137}
                height={106}
              />
              <div className="flex-1">
                <div className="flex gap-5">
                  <Image
                    className="h-[106px] w-[137px] xl:hidden"
                    src="/images/station_logo.webp"
                    alt="Station Logo"
                    width={137}
                    height={106}
                  />
                  <div className="mb-7 flex flex-1 flex-col gap-5 xl:flex-row xl:justify-between">
                    <div>
                      <div className="flex items-center gap-[10px]">
                        <Link
                          href={"/profile/visitor_newsroom"}
                          className="text-2xl font-bold leading-[30.50px] text-secondary"
                        >
                          KABC
                        </Link>
                        <div>
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              id="Vector"
                              d="M13.459 18.0011C13.2697 17.9774 13.0153 17.9597 12.7728 17.9123C12.6544 17.8886 12.6071 17.9182 12.542 18.013C11.7493 19.1495 10.6607 19.7119 9.27637 19.6586C8.06358 19.6113 7.10518 19.0608 6.40117 18.0722C6.30651 17.9419 6.23552 17.8946 6.06987 17.9242C3.95784 18.2912 2.00554 16.8882 1.72157 14.763C1.66833 14.3664 1.72749 13.952 1.75707 13.5495C1.76299 13.4311 1.76299 13.3719 1.6565 13.3008C-0.556106 11.7795 -0.55019 8.66566 1.66241 7.12061C1.75707 7.05549 1.77482 7.00221 1.75707 6.88974C1.37253 4.73494 2.70955 2.82878 4.86891 2.48544C5.27712 2.42032 5.70307 2.49136 6.12311 2.51504C6.2296 2.52096 6.28876 2.52688 6.35976 2.42624C7.92159 0.200412 10.992 0.194492 12.5479 2.42032C12.613 2.51504 12.6722 2.52688 12.7846 2.50912C14.938 2.12433 16.8371 3.4622 17.1802 5.62883C17.2453 6.03137 17.1802 6.45167 17.1506 6.86014C17.1388 6.98445 17.1506 7.04957 17.263 7.12653C19.4579 8.62422 19.452 11.7972 17.2571 13.2949C17.1565 13.3659 17.1329 13.4192 17.1565 13.5435C17.5411 15.6924 16.1922 17.5927 14.0329 17.9478C13.8554 17.9834 13.6838 17.9834 13.459 18.0011ZM8.56644 10.8027C8.53686 10.8086 8.50137 10.8145 8.47179 10.8145C8.43038 10.7435 8.39488 10.6665 8.34163 10.6073C7.98667 10.2462 7.63171 9.87921 7.259 9.52995C6.87445 9.16884 6.3006 9.1866 5.93972 9.54771C5.57884 9.90881 5.56109 10.4889 5.92789 10.8619C6.56682 11.519 7.21167 12.1642 7.86835 12.8036C8.24106 13.1647 8.79717 13.1706 9.16988 12.8036C10.4418 11.5486 11.702 10.2818 12.9562 9.01493C13.2105 8.76038 13.2815 8.43479 13.181 8.09145C12.9739 7.387 12.1279 7.18572 11.5836 7.7185C10.6193 8.67158 9.66091 9.6365 8.70251 10.6014C8.65518 10.6606 8.61377 10.7376 8.56644 10.8027Z"
                              fill="#89C400"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-base font-light leading-relaxed text-zinc-500">
                        TV News | Los Angeles, CA | DMA: 2
                      </p>
                    </div>
                    <div className="space-y-[6px]">
                      <p className="text-base font-bold leading-relaxed text-black">
                        4.5{" "}
                        <span className="text-base font-light leading-relaxed text-zinc-500">
                          Ratings | 95 reviews
                        </span>
                      </p>
                      <div className={cn("rating gap-1.5 lg:rating-lg")}>
                        <input
                          type="radio"
                          name={"temp"}
                          className="mask-pill mask bg-lime-500"
                          disabled={true}
                          checked={true}
                        />
                        <input
                          type="radio"
                          name={"temp"}
                          className="mask-pill mask bg-lime-500"
                          disabled={true}
                          checked={true}
                        />
                        <input
                          type="radio"
                          name={"temp"}
                          className="mask-pill mask bg-lime-500"
                          disabled={true}
                          checked={true}
                        />
                        <input
                          type="radio"
                          name={"temp"}
                          className="mask-pill mask bg-lime-500"
                          disabled={true}
                          checked={true}
                        />
                        <input
                          type="radio"
                          name={"temp"}
                          className="mask-pill mask bg-lime-500"
                          disabled={true}
                          checked={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-between gap-5">
                  <div className="flex flex-1 flex-col items-center gap-x-5 gap-y-3 sm:flex-row">
                    <Link
                      className="w-full xl:w-auto"
                      href={"/profile/visitor_newsroom"}
                    >
                      <Button
                        variant={"secondary"}
                        className="min-h-[46px] w-full min-w-[186px] rounded-[10px] text-center text-base font-bold leading-[33px] xl:w-auto"
                      >
                        See Profile
                      </Button>
                    </Link>
                    <Link
                      className="w-full xl:w-auto"
                      href={"/profile/stations_ratings?station_id=1"}
                    >
                      <Button
                        className="min-h-[46px] w-full min-w-[186px] rounded-[10px] text-center text-base font-bold leading-[33px] xl:w-auto"
                        variant={"secondary_outline"}
                      >
                        See Ratings
                      </Button>
                    </Link>
                  </div>
                  <div className="right-0 top-0 hidden xl:absolute xl:block">
                    <DropDown className="absolute right-0 top-0 min-w-[221px]" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
          <div className="flex items-center justify-center">
            <Button
              variant={"secondary"}
              className="min-h-11 mt-4 h-full min-w-[176px] rounded-3xl shadow"
            >
              <p className="text-center text-lg font-bold leading-loose text-white">
                Load more
              </p>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <SubmitStation />
        </div>
      </div>
      <Separator className="mb-16 mt-14 bg-stone-300" />
      <div className="mb-14">
        <h2 className="mb-14 text-center  text-4xl font-bold text-black">
          RateMyStation's Shop
        </h2>
        <ShopSlides />
      </div>
      <LookingForWork />
    </section>
  )
}
