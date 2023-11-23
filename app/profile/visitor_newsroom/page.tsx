import Image from "next/image"
import Link from "next/link"
import axios, { isAxiosError } from "axios"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { StationType } from "@/lib/enums/station"
import { UserType } from "@/lib/enums/user"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CallForActionSidebar from "@/app/components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "@/app/components/CallForAction/MobileCallForActionSidebar"
import NewsletterCTA from "@/app/components/CallForAction/NewsletterCTA"
import SocialsCTA from "@/app/components/CallForAction/SocialsCTA"

import { TJobsPosted } from "../newsroom/page"
import JobOpenings from "./components/(Job Openings)/JobOpenings"

type Props = {
  searchParams: {
    station_id: string
  }
}

interface TNewsroom {
  id: number
  name: string
  email: string
  username: string
  type: UserType
  stationType: StationType
  createdAt: string
  updatedAt: string
}

const getJobsPosted = async (id: number) => {
  //demo http://localhost:5000/jobs/1/getJobsPostedByNewsroom
  try {
    const { data } = await axios.get<TJobsPosted[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${id}/getJobsPostedByNewsroom`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(
        "error.response?.data?.message",
        error.response?.data?.message
      )
    }
    return [] as TJobsPosted[]
  }
}

const getNewsroom = async (station_id: number) => {
  try {
    // demo url http://localhost:5000/news/10/station
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${station_id}/station`
    const { data } = await axios.get<TNewsroom>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
    return {} as TNewsroom
  }
}

export default async function page({ searchParams: { station_id } }: Props) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return <></>
  axios.defaults.headers.common["Authorization"] = "Bearer " + session.token

  const newsroom = await getNewsroom(+station_id)

  const jobsPosted = await getJobsPosted(+station_id)

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-72 bg-backgroundSVG bg-cover bg-center"></div>
      <section className="container items-center pb-8 pt-24">
        <Card className="relative mb-7 rounded-2xl bg-white px-5 py-7 lg:px-7 lg:py-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-10">
            <div className="flex items-center gap-5 lg:gap-10">
              <div className="relative">
                <Image
                  className="w-[100px] rounded-[15px] sm:w-[130px] md:w-[158px]"
                  width={158}
                  height={158}
                  alt={session?.user?.username || "User profile picture"}
                  src={"/images/station_logo.webp"}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl font-bold leading-[30.50px] text-secondary lg:text-3xl">
                    {newsroom.name}
                  </h4>
                  <div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M15.122 19.6832C14.9117 19.6569 14.6292 19.6372 14.3598 19.5846C14.2284 19.5583 14.1758 19.5911 14.1035 19.6963C13.2231 20.9587 12.0141 21.5833 10.4766 21.5241C9.12958 21.4715 8.06514 20.8601 7.28324 19.7621C7.17811 19.6174 7.09926 19.5648 6.91528 19.5977C4.56957 20.0053 2.40127 18.4471 2.08588 16.0868C2.02674 15.6463 2.09245 15.1861 2.1253 14.739C2.13187 14.6075 2.13187 14.5417 2.0136 14.4629C-0.443806 12.7731 -0.437236 9.31484 2.02017 7.59883C2.1253 7.52651 2.14502 7.46734 2.1253 7.34242C1.69821 4.94922 3.18317 2.83216 5.58145 2.45082C6.03482 2.3785 6.5079 2.4574 6.97442 2.4837C7.09269 2.49027 7.15839 2.49684 7.23724 2.38507C8.97188 -0.0870239 12.382 -0.0935986 14.1101 2.3785C14.1824 2.4837 14.2481 2.49684 14.3729 2.47712C16.7646 2.04976 18.8738 3.53565 19.2549 5.942C19.3272 6.38908 19.2549 6.85589 19.222 7.30955C19.2089 7.44762 19.222 7.51994 19.3469 7.60541C21.7846 9.26882 21.778 12.7929 19.3403 14.4563C19.2286 14.5352 19.2023 14.5943 19.2286 14.7324C19.6557 17.119 18.1576 19.2295 15.7593 19.624C15.5622 19.6635 15.3717 19.6635 15.122 19.6832ZM9.68808 11.6883C9.65523 11.6949 9.6158 11.7015 9.58295 11.7015C9.53696 11.6226 9.49753 11.5371 9.4384 11.4713C9.04416 11.0703 8.64992 10.6627 8.23597 10.2747C7.80888 9.87369 7.17153 9.89341 6.77073 10.2945C6.36992 10.6955 6.35021 11.3399 6.75759 11.7541C7.46721 12.4839 8.18341 13.2005 8.91275 13.9106C9.3267 14.3116 9.94433 14.3182 10.3583 13.9106C11.771 12.5167 13.1705 11.1097 14.5635 9.70275C14.846 9.42003 14.9249 9.05842 14.8132 8.67709C14.5832 7.8947 13.6436 7.67116 13.0391 8.26288C11.9681 9.32141 10.9036 10.3931 9.8392 11.4648C9.78664 11.5305 9.74064 11.616 9.68808 11.6883Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-light leading-relaxed text-zinc-500 lg:text-[22px]">
                    TV News Station
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div>
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M0.574219 7.0175C0.574219 3.81032 2.3648 1.30754 5.10009 0.437707C9.04376 -0.821685 13.1522 1.41961 13.8882 5.45927C14.2727 7.55114 13.7509 9.43489 12.3723 11.0838C10.8948 12.8502 9.38979 14.6005 7.9013 16.3615C7.50035 16.8365 7.08291 16.8365 6.67646 16.3615C5.13854 14.5472 3.58415 12.7435 2.0682 10.9077C1.05207 9.6857 0.590696 8.25554 0.574219 7.0175ZM7.28614 3.92772C5.82511 3.93305 4.6497 5.08572 4.6552 6.5052C4.66069 7.90868 5.85258 9.04533 7.30811 9.04C8.75265 9.03466 9.93905 7.87666 9.92806 6.47318C9.91708 5.06437 8.73068 3.92238 7.28614 3.92772Z"
                        fill="#194D79"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-sky-900 lg:text-lg">
                    Los Angeles, CA | DMA: 2
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Link
                href={`/search_pages/stations_ratings?station_id=${station_id}`}
              >
                <Button
                  className="flex h-11 w-full items-center justify-start gap-3 rounded-xl"
                  size={"lg"}
                  variant={"secondary"}
                >
                  <p className="text-base font-bold leading-[33px] text-white">
                    See Station's ratings
                  </p>
                </Button>
              </Link>
              <div className="flex gap-[10px]">
                <svg
                  className="cursor-pointer"
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Component 305">
                    <path
                      id="Rectangle 6"
                      d="M1.30859 10.3584C1.30859 5.38783 5.33803 1.3584 10.3086 1.3584H36.3886C41.3591 1.3584 45.3886 5.38784 45.3886 10.3584V36.4343C45.3886 41.4048 41.3592 45.4343 36.3886 45.4343H10.3086C5.33804 45.4343 1.30859 41.4048 1.30859 36.4343V10.3584Z"
                      stroke="#194D79"
                      strokeWidth="2"
                    />
                    <path
                      id="Vector"
                      d="M33.3477 23.4013C33.3022 28.2379 29.7656 32.433 25.0255 33.2221C22.6753 33.6138 20.4671 33.2221 18.3837 32.0697C18.2985 32.0243 18.168 32.0129 18.0771 32.047C16.9134 32.4614 15.7497 32.8928 14.5859 33.3072C13.9955 33.5173 13.4165 33.1653 13.3597 32.5522C13.3427 32.3933 13.3881 32.2116 13.4449 32.0584C13.8479 30.9287 14.2624 29.799 14.6768 28.6693C14.7222 28.5388 14.7278 28.4423 14.654 28.3174C11.5034 22.7541 14.2964 15.749 20.4046 13.8643C26.0133 12.1329 31.9682 15.6752 33.0922 21.4258C33.2228 22.0786 33.2682 22.7428 33.3477 23.4013Z"
                      fill="#194D79"
                    />
                  </g>
                </svg>
                <Button
                  className="h-[46px] w-[184px] rounded-lg text-center text-base font-bold leading-loose"
                  variant={"secondary_outline"}
                >
                  Contact Info
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex gap-7">
          <div className="flex-1 space-y-8">
            <Card className="space-y-5 p-5 md:p-7">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold leading-[30.50px] text-black">
                  About
                </h4>
              </div>
              <p className="text-base font-light leading-relaxed text-black">
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna, ut egestas vivamus proin. Velit leo
                scelerisque pulvinar vestibulum in nunc a tortor mollis. Fusce
                pretium est ipsum elementum parturient. Venenatis, ac nulla non
                varius dolor. Ornare consectetur mauris, adipiscing tristique a
                leo. Habitant pharetra tellus habitasse vestibulum nibh quisque.
                Sed vel condimentum enim leo tortor mi magna tincidunt. Egestas
                bibendum id eget quisque semper ultricies. Gravida viverra massa
                faucibus vestibulum condimentum.
              </p>
              <Separator className="h-[2px]" />
              <div className="grid grid-cols-3 gap-y-5">
                <div className="col-span-3 lg:col-span-1">
                  <p className="text-base font-semibold leading-[30.50px] text-sky-900">
                    Industry
                  </p>
                  <p className="text-base font-light leading-relaxed text-zinc-500">
                    TV Broadcasting
                  </p>
                </div>
                <div className="col-span-3 lg:col-span-2">
                  <p className="text-base font-semibold leading-[30.50px] text-sky-900">
                    Station Address
                  </p>
                  <p className="text-base font-light leading-relaxed text-zinc-500">
                    3891 Ranchview Dr. Richardson, California 62639
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-5 md:p-7">
              <div className="mb-[22px] flex items-center justify-between">
                <h4 className="text-2xl font-bold leading-[30.50px] text-black">
                  News Directors
                </h4>
              </div>
              <div className="space-y-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-6">
                  <Image
                    className="h-[74px] w-[74px] rounded-[13px]"
                    src="https://via.placeholder.com/74x74"
                    alt="person"
                    width={74}
                    height={74}
                  />
                  <div>
                    <h4 className="text-base font-semibold leading-relaxed text-secondary">
                      News Director
                      <span className="ml-2">
                        <Badge>Current</Badge>
                      </span>
                    </h4>
                    <Link href="/profile/visitor_user">
                      <h3 className="text-lg font-bold leading-relaxed text-black md:text-[26px]">
                        Brooklyn Simmons
                      </h3>
                    </Link>
                  </div>
                  <Button
                    className="min-h-11 ml-auto h-full w-full min-w-[192px] rounded-lg text-base font-bold leading-loose sm:w-auto"
                    variant={"secondary_outline"}
                  >
                    Send email
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-6">
                  <Image
                    className="h-[74px] w-[74px] rounded-[13px]"
                    src="https://via.placeholder.com/74x74"
                    alt="person"
                    width={74}
                    height={74}
                  />
                  <div>
                    <h4 className="text-base font-semibold leading-relaxed text-secondary">
                      News Director
                      <span className="ml-2">
                        <Badge className="bg-zinc-100 text-zinc-500 hover:bg-zinc-200">
                          Past
                        </Badge>
                      </span>
                    </h4>
                    <Link href="/profile/visitor_user">
                      <h3 className="text-lg font-bold leading-relaxed text-black md:text-[26px]">
                        Ronald Richards
                      </h3>
                    </Link>
                  </div>
                  <Button
                    className="min-h-11 ml-auto h-full w-full min-w-[192px] rounded-lg text-base font-bold leading-loose sm:w-auto"
                    variant={"secondary_outline"}
                  >
                    Send email
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-6">
                  <Image
                    className="h-[74px] w-[74px] rounded-[13px]"
                    src="https://via.placeholder.com/74x74"
                    alt="person"
                    width={74}
                    height={74}
                  />
                  <div>
                    <h4 className="text-base font-semibold leading-relaxed text-secondary">
                      News Director
                      <span className="ml-2">
                        <Badge className="bg-zinc-100 text-zinc-500 hover:bg-zinc-200">
                          Past
                        </Badge>
                      </span>
                    </h4>
                    <Link href="/profile/visitor_user">
                      <h3 className="text-lg font-bold leading-relaxed text-black md:text-[26px]">
                        Sally Ramirez
                      </h3>
                    </Link>
                  </div>
                  <Button
                    className="min-h-11 ml-auto h-full w-full min-w-[192px] rounded-lg text-base font-bold leading-loose sm:w-auto"
                    variant={"secondary_outline"}
                  >
                    Send email
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="p-5 md:p-7">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold leading-[30.50px] text-black">
                  Award
                </h4>
              </div>
              <div className="flex items-center gap-10">
                <Image
                  alt="award"
                  className="hidden h-[126px] w-[126px] md:block"
                  width={126}
                  height={126}
                  src="/images/award.webp"
                />
                <div className="space-y-2 py-6">
                  <Image
                    alt="award"
                    className="h-[80px] w-[80px] md:hidden"
                    width={80}
                    height={80}
                    src="/images/award.webp"
                  />
                  <h5 className="text-lg font-semibold leading-relaxed text-secondary">
                    Award 2022
                  </h5>
                  <p className="text-base font-light leading-relaxed text-black">
                    Pellentesque vel tristique ultrices habitasse feugiat nulla
                    tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                    Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                    et commodo sapien porta felis amet pellentesque. Erat augue
                    enim turpis risus urna.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-10">
                <Image
                  alt="award"
                  className="hidden h-[126px] w-[126px] md:block"
                  width={126}
                  height={126}
                  src="/images/award.webp"
                />
                <div className="space-y-2 py-6">
                  <Image
                    alt="award"
                    className="h-[80px] w-[80px] md:hidden"
                    width={80}
                    height={80}
                    src="/images/award.webp"
                  />
                  <h5 className="text-lg font-semibold leading-relaxed text-secondary">
                    Award 2022
                  </h5>
                  <p className="text-base font-light leading-relaxed text-black">
                    Pellentesque vel tristique ultrices habitasse feugiat nulla
                    tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                    Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                    et commodo sapien porta felis amet pellentesque. Erat augue
                    enim turpis risus urna.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-10">
                <Image
                  alt="award"
                  className="hidden h-[126px] w-[126px] md:block"
                  width={126}
                  height={126}
                  src="/images/award.webp"
                />
                <div className="space-y-2 py-6">
                  <Image
                    alt="award"
                    className="h-[80px] w-[80px] md:hidden"
                    width={80}
                    height={80}
                    src="/images/award.webp"
                  />
                  <h5 className="text-lg font-semibold leading-relaxed text-secondary">
                    Award 2022
                  </h5>
                  <p className="text-base font-light leading-relaxed text-black">
                    Pellentesque vel tristique ultrices habitasse feugiat nulla
                    tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                    Viverra tortor hac sollicitudin dictum sit. Condimentum eget
                    et commodo sapien porta felis amet pellentesque. Erat augue
                    enim turpis risus urna.
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <p className="mt-7 cursor-pointer text-center text-lg font-semibold text-secondary">
                  3+ more
                </p>
              </div>
            </Card>
            <JobOpenings jobsPosted={jobsPosted} />
            <div className="my-10 lg:hidden">
              <MobileCallForActionSidebar />
            </div>
          </div>
          <div className="hidden lg:block">
            <CallForActionSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
