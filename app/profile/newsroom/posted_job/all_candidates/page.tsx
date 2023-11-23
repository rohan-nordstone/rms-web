
import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"

import EditJobOpening from "../../components/(Job Opening)/EditJobOpening"
import FilterSelect from "./components/FilterSelect"
import ShortSelect from "./components/ShortSelect"

const candidates = [
  { name: "Jacob Jones" },
  { name: "Albert Flores" },
  { name: "Ronald Richards" },
  { name: "Brooklyn Simmons" },
  { name: "Bessie Cooper" },
  { name: "Floyd Miles" },
  { name: "Jenny Wilson" },
  { name: "Eleanor Pena" },
]

export default function page() {
  return (
    <>
      <Card className="relative mb-9 flex flex-wrap items-center justify-center gap-5 gap-y-5 px-8 py-6 sm:flex-nowrap sm:justify-start lg:gap-x-9">
        <Image
          width={115}
          height={89}
          alt="newsstation_logo"
          className="w-14 lg:w-[115px]"
          src="/images/station_logo.webp"
        />
        <div className="order-2 w-full space-y-2 sm:order-none sm:w-auto">
          <p className="text-center text-base font-bold leading-tight text-black sm:text-start lg:text-2xl lg:leading-loose">
            Assistant News Director
          </p>
          <p className="text-center text-sm font-light text-sky-900 sm:text-start lg:text-base lg:leading-relaxed">
            Los Angeles, CA • $100,000 - $130,000 • Full time
          </p>
        </div>
        <div className="absolute right-5 top-5 flex items-center gap-5 sm:flex md:ml-auto">
          <EditJobOpening>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer fill-current text-[#828282] hover:text-primary"
            >
              <g id="Component 249">
                <g id="Vector">
                  <path d="M3.50148 20.2867C3.6092 19.8935 3.71692 19.5004 3.81387 19.1072C4.07778 18.0677 4.33092 17.0282 4.59483 15.9941C4.62176 15.8918 4.68101 15.784 4.75103 15.7086C8.00954 12.4447 11.2681 9.18622 14.5266 5.9277C14.5535 5.90077 14.5804 5.87923 14.5912 5.86846C15.8731 7.15032 17.1495 8.4268 18.4422 9.71943C18.4206 9.74636 18.3775 9.78945 18.3344 9.83792C15.1083 13.0641 11.8821 16.2903 8.65047 19.5111C8.55352 19.6081 8.41349 19.6889 8.27884 19.7212C6.88387 20.0767 5.4889 20.4214 4.09394 20.7714C3.77616 20.8522 3.66844 20.8038 3.49609 20.5291C3.50148 20.4483 3.50148 20.3675 3.50148 20.2867Z" />
                  <path d="M19.5948 8.58299C18.3021 7.29035 17.0257 6.01388 15.76 4.74817C16.2339 4.26344 16.6917 3.741 17.2034 3.28319C17.882 2.66919 19.0239 2.68535 19.7079 3.29935C20.1711 3.71945 20.6181 4.1611 21.0328 4.62968C21.663 5.33525 21.6414 6.43398 21.022 7.13955C20.9628 7.20956 20.8928 7.2742 20.8282 7.34421C20.4134 7.75893 20.0041 8.17365 19.5948 8.58299Z" />
                </g>
              </g>
            </svg>
          </EditJobOpening>
          <Link href="/jobs/details">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer fill-current text-[#828282] hover:text-primary"
            >
              <g id="Component 248">
                <path
                  id="Vector"
                  d="M3.33594 11.9586C3.54601 11.6388 3.73046 11.2974 3.96102 10.9994C5.2163 9.38445 6.68678 8.03507 8.46467 7.08129C9.67896 6.43099 10.9547 6.01913 12.3125 5.88365C14.946 5.61811 17.3336 6.36054 19.5163 7.89959C20.9355 8.90214 22.114 10.1594 23.1438 11.5846C23.4 11.9369 23.4 12.3162 23.1438 12.6685C21.9551 14.3159 20.5666 15.7303 18.8707 16.7816C17.4668 17.6541 15.9656 18.2069 14.3363 18.3695C11.9692 18.6079 9.78144 18.0226 7.74736 16.7491C6.06682 15.6978 4.68857 14.2834 3.51526 12.6468C3.43841 12.5384 3.3923 12.4084 3.33594 12.2891C3.33594 12.1807 3.33594 12.0724 3.33594 11.9586ZM13.1989 7.68282C10.9189 7.72617 9.09487 9.78005 9.13074 12.2566C9.1666 14.679 11.1136 16.6136 13.4653 16.5649C15.7402 16.5215 17.5744 14.4568 17.5335 11.9911C17.4976 9.5687 15.5506 7.63947 13.1989 7.68282ZM11.0726 12.1374C11.0726 13.438 12.0922 14.5164 13.3218 14.5164C14.5874 14.5164 15.607 13.4272 15.6019 12.0778C15.5967 10.7934 14.572 9.72586 13.3423 9.73127C12.0973 9.73127 11.0726 10.8151 11.0726 12.1374Z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </Card>
      <div className="flex flex-col justify-between gap-y-8 pb-5 pt-8 sm:flex-row md:gap-x-8">
        <div className="relative w-full sm:max-w-[50%]">
          <h4 className="text-2xl font-bold text-black">
            All candidates{" "}
            <span className="font-medium text-zinc-500">(19)</span>
          </h4>
        </div>
        <div className="flex flex-1 gap-x-5 sm:ml-auto">
          <FilterSelect className="md:ml-auto" />
          <ShortSelect />
        </div>
      </div>
      <div className="mt-9 grid gap-x-5 gap-y-7 sm:grid-auto-fit-[440px]">
        {candidates.map((candidate, index) => (
          <Card key={index} className="p-3 md:p-5 lg:p-7">
            <div className="mb-4 flex items-center gap-6">
              <Image
                alt="profile"
                width={80}
                height={80}
                className="w-12 rounded-xl lg:w-20"
                src="https://via.placeholder.com/74x74"
              />
              <div>
                <p className="text-base font-bold leading-relaxed text-black lg:text-2xl">
                  {candidate.name}
                </p>
                <p className="text-sm font-semibold leading-none text-secondary lg:text-base lg:leading-relaxed">
                  News Director
                </p>
              </div>
              <Link
                href="/profile/visitor_user"
                className="ml-auto text-center text-sm font-bold text-primary lg:text-base"
              >
                Why hire me?
              </Link>
            </div>
            <ol className="relative ml-7 border-l border-gray-200 pl-7 dark:border-gray-700">
              {[0, 1, 2, 3].map((item, index) => (
                <li key={index} className="mb-10">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold leading-tight text-black lg:leading-relaxed">
                      Job Title
                    </p>
                    <time className="text-xs font-light leading-relaxed text-neutral-600 lg:text-base">
                      Oct 2021 - Apr 2022
                    </time>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-light leading-relaxed text-zinc-500 lg:text-sm">
                      At Station’s names
                    </p>
                    <p className="text-xs font-light leading-relaxed text-zinc-500 lg:text-sm">
                      7 months
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row md:gap-5">
              <div className="flex flex-1 cursor-pointer items-center justify-center rounded-lg bg-secondary px-3 py-3 text-center text-base font-bold leading-6 text-white hover:bg-secondary-hover">
                Decline
              </div>
              <div className="flex flex-1 cursor-pointer items-center justify-center rounded-lg border-2 border-secondary bg-white px-3 py-3 text-center text-base font-bold leading-6 text-secondary hover:bg-secondary-hover hover:text-white">
                Request for interview
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
