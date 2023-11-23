import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import LineChartComponent from "./components/LineChartComponent"
import PieChartComponent from "./components/PieChartComponent"

export default function page() {
  return (
    <div className="space-y-7">
      <Card className="lp:p-9 p-5">
        <div className="flex flex-col gap-x-9 gap-y-3 lg:flex-row lg:items-center lg:justify-end">
          <h4 className="mr-auto text-2xl font-bold leading-loose text-black">
            Overall Newsroom Rating
          </h4>
          <div className="flex w-full max-w-md items-center justify-between">
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                All
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Day
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Week
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Month
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Year
              </span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <div className="flex flex-1 flex-col items-center gap-x-10 gap-y-5 py-7 lg:flex-row">
            <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-around lg:w-auto">
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
              <div className="flex flex-col gap-4 lg:hidden">
                <div className="flex min-w-[180px] items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
                  <div>
                    <p className="text-2xl font-bold leading-relaxed text-black">
                      45
                    </p>
                    <p className="inline-block text-sm font-light text-zinc-500">
                      Ratings
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 11 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Vector">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.21389 6.48591C0.798495 6.07052 0.798494 5.39702 1.21389 4.98163L5.17499 1.02053C5.59038 0.605135 6.26388 0.605135 6.67927 1.02053L10.6404 4.98163C11.0558 5.39702 11.0558 6.07052 10.6404 6.48591C10.225 6.90131 9.55148 6.90131 9.13608 6.48591L5.92713 3.27696L2.71818 6.48591C2.30278 6.90131 1.62929 6.90131 1.21389 6.48591Z"
                          fill="#89C400"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.21389 12.9848C0.798495 12.5694 0.798494 11.8959 1.21389 11.4805L5.17499 7.51938C5.59038 7.10398 6.26388 7.10398 6.67927 7.51938L10.6404 11.4805C11.0558 11.8959 11.0558 12.5694 10.6404 12.9848C10.225 13.4002 9.55148 13.4002 9.13608 12.9848L5.92713 9.7758L2.71818 12.9848C2.30278 13.4002 1.62929 13.4002 1.21389 12.9848Z"
                          fill="#89C400"
                        />
                      </g>
                    </svg>
                    <p className="text-base font-medium text-black">6%</p>
                  </div>
                </div>
                <div className="flex min-w-[180px] items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
                  <div>
                    <p className="text-2xl font-bold leading-relaxed text-black">
                      4.7
                    </p>
                    <p className="inline-block text-sm font-light text-zinc-500">
                      Avg ratings
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 11 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Vector">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.21389 7.25335C0.798495 7.66874 0.798494 8.34223 1.21389 8.75763L5.17499 12.7187C5.59038 13.1341 6.26388 13.1341 6.67927 12.7187L10.6404 8.75763C11.0558 8.34223 11.0558 7.66874 10.6404 7.25335C10.225 6.83795 9.55148 6.83795 9.13608 7.25335L5.92713 10.4623L2.71818 7.25335C2.30278 6.83795 1.62929 6.83795 1.21389 7.25335Z"
                          fill="#EB5757"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.21389 0.754499C0.798495 1.1699 0.798494 1.84339 1.21389 2.25879L5.17499 6.21988C5.59038 6.63528 6.26388 6.63528 6.67927 6.21988L10.6404 2.25879C11.0558 1.84339 11.0558 1.1699 10.6404 0.7545C10.225 0.339104 9.55148 0.339104 9.13608 0.7545L5.92713 3.96345L2.71818 0.7545C2.30278 0.339104 1.62929 0.339103 1.21389 0.754499Z"
                          fill="#EB5757"
                        />
                      </g>
                    </svg>

                    <p className="text-base font-medium text-black">6%</p>
                  </div>
                </div>
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
          <div className="hidden space-y-3 lg:block">
            <div className="flex items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
              <div>
                <p className="text-2xl font-bold leading-relaxed text-black">
                  45
                </p>
                <p className="inline-block text-sm font-light text-zinc-500">
                  Ratings
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Vector">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.21389 6.48591C0.798495 6.07052 0.798494 5.39702 1.21389 4.98163L5.17499 1.02053C5.59038 0.605135 6.26388 0.605135 6.67927 1.02053L10.6404 4.98163C11.0558 5.39702 11.0558 6.07052 10.6404 6.48591C10.225 6.90131 9.55148 6.90131 9.13608 6.48591L5.92713 3.27696L2.71818 6.48591C2.30278 6.90131 1.62929 6.90131 1.21389 6.48591Z"
                      fill="#89C400"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.21389 12.9848C0.798495 12.5694 0.798494 11.8959 1.21389 11.4805L5.17499 7.51938C5.59038 7.10398 6.26388 7.10398 6.67927 7.51938L10.6404 11.4805C11.0558 11.8959 11.0558 12.5694 10.6404 12.9848C10.225 13.4002 9.55148 13.4002 9.13608 12.9848L5.92713 9.7758L2.71818 12.9848C2.30278 13.4002 1.62929 13.4002 1.21389 12.9848Z"
                      fill="#89C400"
                    />
                  </g>
                </svg>
                <p className="text-base font-medium text-black">6%</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
              <div>
                <p className="text-2xl font-bold leading-relaxed text-black">
                  4.7
                </p>
                <p className="inline-block text-sm font-light text-zinc-500">
                  Avg ratings
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Vector">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.21389 7.25335C0.798495 7.66874 0.798494 8.34223 1.21389 8.75763L5.17499 12.7187C5.59038 13.1341 6.26388 13.1341 6.67927 12.7187L10.6404 8.75763C11.0558 8.34223 11.0558 7.66874 10.6404 7.25335C10.225 6.83795 9.55148 6.83795 9.13608 7.25335L5.92713 10.4623L2.71818 7.25335C2.30278 6.83795 1.62929 6.83795 1.21389 7.25335Z"
                      fill="#EB5757"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.21389 0.754499C0.798495 1.1699 0.798494 1.84339 1.21389 2.25879L5.17499 6.21988C5.59038 6.63528 6.26388 6.63528 6.67927 6.21988L10.6404 2.25879C11.0558 1.84339 11.0558 1.1699 10.6404 0.7545C10.225 0.339104 9.55148 0.339104 9.13608 0.7545L5.92713 3.96345L2.71818 0.7545C2.30278 0.339104 1.62929 0.339103 1.21389 0.754499Z"
                      fill="#EB5757"
                    />
                  </g>
                </svg>

                <p className="text-base font-medium text-black">6%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="lp:p-9 p-5">
        <div className="flex flex-col gap-x-9 gap-y-3 lg:flex-row lg:items-center lg:justify-end">
          <h4 className="mr-auto text-2xl font-bold leading-loose text-black">
            Overall Newsroom Rating
          </h4>
          <div className="flex w-full max-w-md items-center justify-between">
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                All
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Day
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Week
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Month
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Year
              </span>
            </Button>
          </div>
        </div>
        <div className="my-9 flex flex-wrap items-center gap-5">
          <div className="flex min-w-[180px] items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                4.7
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Current Ratings
              </p>
            </div>
          </div>
          <div className="flex min-w-[180px] items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                45
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Ratings
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Vector">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 6.48591C0.798495 6.07052 0.798494 5.39702 1.21389 4.98163L5.17499 1.02053C5.59038 0.605135 6.26388 0.605135 6.67927 1.02053L10.6404 4.98163C11.0558 5.39702 11.0558 6.07052 10.6404 6.48591C10.225 6.90131 9.55148 6.90131 9.13608 6.48591L5.92713 3.27696L2.71818 6.48591C2.30278 6.90131 1.62929 6.90131 1.21389 6.48591Z"
                    fill="#89C400"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 12.9848C0.798495 12.5694 0.798494 11.8959 1.21389 11.4805L5.17499 7.51938C5.59038 7.10398 6.26388 7.10398 6.67927 7.51938L10.6404 11.4805C11.0558 11.8959 11.0558 12.5694 10.6404 12.9848C10.225 13.4002 9.55148 13.4002 9.13608 12.9848L5.92713 9.7758L2.71818 12.9848C2.30278 13.4002 1.62929 13.4002 1.21389 12.9848Z"
                    fill="#89C400"
                  />
                </g>
              </svg>
              <p className="text-base font-medium text-black">6%</p>
            </div>
          </div>
          <div className="flex min-w-[180px] items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                4.7
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Avg ratings
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Vector">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 7.25335C0.798495 7.66874 0.798494 8.34223 1.21389 8.75763L5.17499 12.7187C5.59038 13.1341 6.26388 13.1341 6.67927 12.7187L10.6404 8.75763C11.0558 8.34223 11.0558 7.66874 10.6404 7.25335C10.225 6.83795 9.55148 6.83795 9.13608 7.25335L5.92713 10.4623L2.71818 7.25335C2.30278 6.83795 1.62929 6.83795 1.21389 7.25335Z"
                    fill="#EB5757"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 0.754499C0.798495 1.1699 0.798494 1.84339 1.21389 2.25879L5.17499 6.21988C5.59038 6.63528 6.26388 6.63528 6.67927 6.21988L10.6404 2.25879C11.0558 1.84339 11.0558 1.1699 10.6404 0.7545C10.225 0.339104 9.55148 0.339104 9.13608 0.7545L5.92713 3.96345L2.71818 0.7545C2.30278 0.339104 1.62929 0.339103 1.21389 0.754499Z"
                    fill="#EB5757"
                  />
                </g>
              </svg>
              <p className="text-base font-medium text-black">6%</p>
            </div>
          </div>
        </div>
        <LineChartComponent />
      </Card>
      <Card className="lp:p-9 p-5">
        <div className="flex flex-col gap-x-9 gap-y-3 lg:flex-row lg:items-center lg:justify-end">
          <h4 className="mr-auto text-2xl font-bold leading-loose text-black">
            Overall Recommendation Rating
          </h4>
          <div className="flex w-full max-w-md items-center justify-between">
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                All
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Day
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Week
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Month
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Year
              </span>
            </Button>
          </div>
        </div>
        <div className="my-9 flex flex-wrap items-center gap-5">
          <div className="flex items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                4.7
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Current Ratings
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                45
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Ratings
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Vector">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 6.48591C0.798495 6.07052 0.798494 5.39702 1.21389 4.98163L5.17499 1.02053C5.59038 0.605135 6.26388 0.605135 6.67927 1.02053L10.6404 4.98163C11.0558 5.39702 11.0558 6.07052 10.6404 6.48591C10.225 6.90131 9.55148 6.90131 9.13608 6.48591L5.92713 3.27696L2.71818 6.48591C2.30278 6.90131 1.62929 6.90131 1.21389 6.48591Z"
                    fill="#89C400"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 12.9848C0.798495 12.5694 0.798494 11.8959 1.21389 11.4805L5.17499 7.51938C5.59038 7.10398 6.26388 7.10398 6.67927 7.51938L10.6404 11.4805C11.0558 11.8959 11.0558 12.5694 10.6404 12.9848C10.225 13.4002 9.55148 13.4002 9.13608 12.9848L5.92713 9.7758L2.71818 12.9848C2.30278 13.4002 1.62929 13.4002 1.21389 12.9848Z"
                    fill="#89C400"
                  />
                </g>
              </svg>
              <p className="text-base font-medium text-black">6%</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-lg bg-zinc-100 px-5 py-2">
            <div>
              <p className="text-2xl font-bold leading-relaxed text-black">
                4.7
              </p>
              <p className="inline-block text-sm font-light text-zinc-500">
                Avg ratings
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Vector">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 7.25335C0.798495 7.66874 0.798494 8.34223 1.21389 8.75763L5.17499 12.7187C5.59038 13.1341 6.26388 13.1341 6.67927 12.7187L10.6404 8.75763C11.0558 8.34223 11.0558 7.66874 10.6404 7.25335C10.225 6.83795 9.55148 6.83795 9.13608 7.25335L5.92713 10.4623L2.71818 7.25335C2.30278 6.83795 1.62929 6.83795 1.21389 7.25335Z"
                    fill="#EB5757"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.21389 0.754499C0.798495 1.1699 0.798494 1.84339 1.21389 2.25879L5.17499 6.21988C5.59038 6.63528 6.26388 6.63528 6.67927 6.21988L10.6404 2.25879C11.0558 1.84339 11.0558 1.1699 10.6404 0.7545C10.225 0.339104 9.55148 0.339104 9.13608 0.7545L5.92713 3.96345L2.71818 0.7545C2.30278 0.339104 1.62929 0.339103 1.21389 0.754499Z"
                    fill="#EB5757"
                  />
                </g>
              </svg>
              <p className="text-base font-medium text-black">6%</p>
            </div>
          </div>
        </div>
        <LineChartComponent />
      </Card>
      <Card className="lp:p-9 p-5">
        <div className="flex flex-col gap-x-9 gap-y-3 lg:flex-row lg:items-center lg:justify-end">
          <h4 className="mr-auto text-2xl font-bold leading-loose text-black">
            Work Environment
          </h4>
          <div className="flex w-full max-w-md items-center justify-between">
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                All
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Day
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Week
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Month
              </span>
            </Button>
            <Button variant={"ghost"}>
              <span className="cursor-pointer text-center text-sm font-light text-zinc-500">
                Year
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-10 py-11">
          <div className="text-center">
            <h1 className="text-8xl font-medium text-black">435</h1>
            <p className="text-xl font-normal leading-relaxed text-black">
              Total ratings
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-10">
            <PieChartComponent />
            <div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-primary"></span>
                <span className="text-xl font-normal leading-relaxed text-black">
                  Sexual Discrimination
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-primary-hover"></span>
                <span className="text-xl font-normal leading-relaxed text-black">
                  Racial Discrimination
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-secondary"></span>
                <span className="text-xl font-normal leading-relaxed text-black">
                  Toxic Work Environment
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-4 w-4 rounded-full bg-secondary-hover"></span>
                <span className="text-xl font-normal leading-relaxed text-black">
                  Sexual Harrassment
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
