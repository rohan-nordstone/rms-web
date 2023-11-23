import Image from "next/image"
import Link from "next/link"
import axios, { isAxiosError } from "axios"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { EmploymentType } from "@/lib/enums/employment-type"
import { StationType } from "@/lib/enums/station"
import { UserType } from "@/lib/enums/user"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CallForActionSidebar from "@/app/components/CallForAction/CallForActionSidebar"

import EditAbout from "./components/(About)/EditAbout"
import AddAwards from "./components/(Awards)/AddAwards"
import JobOpenings from "./components/(Job Opening)/JobOpenings"
import AddNewsDirector from "./components/(News Director)/AddNewsDirector"

export interface TJobsPosted {
  id: number
  position: string
  placeOfWork: string
  salaryCurrency: string
  salary: number
  positionType: string
  jobDescription: string
  employmentType: EmploymentType
  isHiring: boolean
  qualifications: string
  career_level: string
  education_level: string
  years_of_experience: number
  createdAt: string
  updatedAt: string
  station: TStation
}

interface TStation {
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

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session?.user) return <></>

  const jobsPosted = await getJobsPosted(session.user.id)

  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <Card className="space-y-5 p-5 md:p-7">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              About
            </h4>
            <EditAbout>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:text-primary"
              >
                <g id="Vector">
                  <g id="Vector_2">
                    <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" />
                    <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" />
                  </g>
                </g>
              </svg>
            </EditAbout>
          </div>
          <p className="text-base font-light leading-relaxed text-black">
            Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
            quam. Et risus commodo natoque pulvinar eu, interdum. Viverra tortor
            hac sollicitudin dictum sit. Condimentum eget et commodo sapien
            porta felis amet pellentesque. Erat augue enim turpis risus urna, ut
            egestas vivamus proin. Velit leo scelerisque pulvinar vestibulum in
            nunc a tortor mollis. Fusce pretium est ipsum elementum parturient.
            Venenatis, ac nulla non varius dolor. Ornare consectetur mauris,
            adipiscing tristique a leo. Habitant pharetra tellus habitasse
            vestibulum nibh quisque. Sed vel condimentum enim leo tortor mi
            magna tincidunt. Egestas bibendum id eget quisque semper ultricies.
            Gravida viverra massa faucibus vestibulum condimentum.
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
        <Card className="p-5 md:px-8 md:py-7">
          <div className="mb-[22px] flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              News Directors
            </h4>
            <div className="flex items-center gap-7">
              <AddNewsDirector>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:text-primary"
                >
                  <g id="Union">
                    <path
                      id="Union_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z"
                    />
                  </g>
                </svg>
              </AddNewsDirector>
              <Link href={"/profile/newsroom/edit_directors"}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Vector">
                    <g id="Vector_2">
                      <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" />
                      <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
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
        <Card className="p-5 md:px-8 md:py-7">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Award
            </h4>
            <div className="flex items-center gap-7">
              <AddAwards>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:text-primary"
                >
                  <g id="Union">
                    <path
                      id="Union_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z"
                    />
                  </g>
                </svg>
              </AddAwards>
              <Link href={"/profile/newsroom/edit_awards"}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Vector">
                    <g id="Vector_2">
                      <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" />
                      <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
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
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
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
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
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
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
              </p>
            </div>
          </div>
          <Separator />
          <div>
            <p className="mt-7 cursor-pointer text-center text-lg font-semibold text-sky-900">
              3+ more
            </p>
          </div>
        </Card>
        <JobOpenings jobsPosted={jobsPosted} />
        <div className="my-10 lg:hidden">
          <CallForActionSidebar />
        </div>
      </div>
      <div className="hidden lg:block">
        <CallForActionSidebar />
      </div>
    </div>
  )
}
