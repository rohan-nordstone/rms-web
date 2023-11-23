import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import CallForActionSidebar from "@/app/components/CallForAction/CallForActionSidebar"

import FilterSelect from "./components/FilterSelect"
import LatestRatingCard from "./components/LatestRatings/LatestRatingCard"
import ShortSelect from "./components/ShortSelect"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <Card className="p-5 lg:p-9">
          <h4 className="text-2xl font-bold leading-loose text-black">
            Station’s Ratings
          </h4>
          <div className="flex flex-col items-center gap-x-10 gap-y-5 py-7 lg:flex-row">
            <div>
              <h1 className="text-8xl font-medium text-black">
                4.8
                <span className="text-2xl font-normal leading-loose text-zinc-500">
                  /5.0
                </span>
              </h1>
              <div className="text-center">
                <span className="text-xl font-normal leading-relaxed text-sky-900">
                  From{" "}
                </span>
                <span className="text-xl font-semibold leading-relaxed text-sky-900">
                  500 ratings
                </span>
              </div>
            </div>
            <div className="w-full flex-1 lg:w-auto">
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-right text-base font-bold leading-loose text-black">
                    5
                  </span>
                </div>
                <Progress
                  value={89}
                  className="h-2 flex-1 rounded-md bg-zinc-100"
                />
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-base font-light leading-loose text-black">
                    35
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-right text-base font-bold leading-loose text-black">
                    4
                  </span>
                </div>
                <Progress
                  value={28}
                  className="h-2 flex-1 rounded-md bg-zinc-100"
                />
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-base font-light leading-loose text-black">
                    5
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-right text-base font-bold leading-loose text-black">
                    3
                  </span>
                </div>
                <Progress
                  value={10}
                  className="h-2 flex-1 rounded-md bg-zinc-100"
                />
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-base font-light leading-loose text-black">
                    2
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-right text-base font-bold leading-loose text-black">
                    2
                  </span>
                </div>
                <Progress
                  value={10}
                  className="h-2 flex-1 rounded-md bg-zinc-100"
                />
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-base font-light leading-loose text-black">
                    2
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-right text-base font-bold leading-loose text-black">
                    1
                  </span>
                </div>
                <Progress
                  value={4}
                  className="h-2 flex-1 rounded-md bg-zinc-100"
                />
                <div className="flex h-9 w-9 items-center justify-center">
                  <span className="text-base font-light leading-loose text-black">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <p className="mt-5 text-lg font-semibold leading-relaxed text-black">
            Most Popular Tags:
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Broadcasting
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Organized
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                High Pay
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Positive
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Fun
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                High Pay
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Positive
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Fun
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-1">
              <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                Broadcasting
              </p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col justify-between gap-y-8 pb-5 pt-8 sm:flex-row md:gap-x-8">
          <div className="relative w-full sm:max-w-[50%]">
            <h4 className="text-2xl font-bold text-black">
              My Ratings <span className="font-medium text-zinc-500">(19)</span>
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
        <CallForActionSidebar />
      </div>
    </div>
  )
}
