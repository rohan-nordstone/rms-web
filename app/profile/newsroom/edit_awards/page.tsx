import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CallForActionSidebar from "@/app/components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "@/app/components/CallForAction/MobileCallForActionSidebar"
import NewsletterCard from "@/app/components/NewsletterCard"
import { newsletterArr } from "@/app/components/newsletterArr"

import AddAwards from "../components/(Awards)/AddAwards"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-7">
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">Edit Awards</span>
          <Link
            href={"/profile/newsroom/"}
            className="text-base font-normal text-secondary"
          >
            Back
          </Link>
        </div>
        <Card className="p-9">
          <div className="flex gap-10">
            <div className="flex items-center gap-10">
              <Image
                alt="award"
                className="h-[126px] w-[126px]"
                width={126}
                height={126}
                src="/images/award.webp"
              />
              <div className="space-y-2 py-6">
                <h5 className="text-lg font-semibold leading-relaxed text-sky-900">
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
            <AddAwards>
              <span className="mt-10 h-[27px] w-[27px]">
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
              </span>
            </AddAwards>
          </div>
          <Separator />
          <div className="flex gap-10">
            <div className="flex items-center gap-10">
              <Image
                alt="award"
                className="h-[126px] w-[126px]"
                width={126}
                height={126}
                src="/images/award.webp"
              />
              <div className="space-y-2 py-6">
                <h5 className="text-lg font-semibold leading-relaxed text-sky-900">
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
            <AddAwards>
              <span className="mt-10 h-[27px] w-[27px]">
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
              </span>
            </AddAwards>
          </div>
          <Separator />
          <div className="flex gap-10">
            <div className="flex items-center gap-10">
              <Image
                alt="award"
                className="h-[126px] w-[126px]"
                width={126}
                height={126}
                src="/images/award.webp"
              />
              <div className="space-y-2 py-6">
                <h5 className="text-lg font-semibold leading-relaxed text-sky-900">
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
            <AddAwards>
              <span className="mt-10 h-[27px] w-[27px]">
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
              </span>
            </AddAwards>
          </div>
        </Card>
        <div className="my-10 hidden md:block lg:hidden">
          <MobileCallForActionSidebar />
        </div>
      </div>
      <div className="hidden lg:block">
        <CallForActionSidebar />
      </div>
    </div>
  )
}
