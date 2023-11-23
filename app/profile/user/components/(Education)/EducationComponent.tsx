import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import AddEducation from "./AddEducation"

export default function EducationComponent() {
  return (
    <Card className="px-8 py-7">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold leading-[30.50px] text-black">
          Education
        </h4>
        <div className="flex items-center gap-7">
          <AddEducation>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
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
          </AddEducation>
          <Link href={"/profile/user/edit_education"}>
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
          </Link>
        </div>
      </div>
      <div className="flex gap-3 py-6">
        <Image
          className="h-[59px] w-[59px]"
          width={59}
          height={59}
          alt="university"
          src={"/images/university.webp"}
        />
        <div>
          <p className="text-lg font-semibold leading-relaxed text-black">
            Magister of Loream ipsum
          </p>
          <p className="text-base font-semibold leading-relaxed text-sky-900">
            University of Illinois
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-600">
            Oct 2021 - Apr 2022
          </p>
          <p className="text-base font-light leading-relaxed text-black">
            Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
            quam. Et risus commodo natoque pulvinar eu, interdum. Viverra tortor
            hac sollicitudin dictum sit. Condimentum eget et commodo sapien
            porta felis amet pellentesque. Erat augue enim turpis risus urna.
          </p>
        </div>
      </div>
      <Separator className="bg-stone-300" />
      <div className="flex gap-3 py-6">
        <Image
          className="h-[59px] w-[59px]"
          width={59}
          height={59}
          alt="university"
          src={"/images/university.webp"}
        />
        <div>
          <p className="text-lg font-semibold leading-relaxed text-black">
            Bachelor of Loream ipsum
          </p>
          <p className="text-base font-semibold leading-relaxed text-sky-900">
            University of Illinois
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-600">
            Oct 2021 - Apr 2022
          </p>
          <p className="text-base font-light leading-relaxed text-black">
            Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
            quam. Et risus commodo natoque pulvinar eu, interdum. Viverra tortor
            hac sollicitudin dictum sit. Condimentum eget et commodo sapien
            porta felis amet pellentesque. Erat augue enim turpis risus urna.
          </p>
        </div>
      </div>
    </Card>
  )
}
