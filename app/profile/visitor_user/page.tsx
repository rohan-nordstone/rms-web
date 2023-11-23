import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import NewsletterCard from "@/app/components/NewsletterCard"
import { newsletterArr } from "@/app/components/newsletterArr"

import DesktopJobCardsCTA from "../_components/DesktopJobCardsCTA"
import JobOpenings from "../user/components/JobOpenings"

export default function page() {
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <Card className="space-y-5 p-5 md:p-7">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              About
            </h4>
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
        </Card>
        <Card className="p-5 md:px-8 md:py-7">
          <div className="mb-[22px] flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Experiance
            </h4>
          </div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              className="h-9 w-[46px]"
              width={46}
              height={36}
              alt="news_station"
              src="/images/station_logo.webp"
            />
            <div>
              <p className="text-lg font-semibold leading-relaxed text-black">
                Office Name
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                10 months
              </p>
            </div>
          </div>
          <ol className="relative ml-7 border-l border-gray-200 pl-7 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold leading-relaxed text-secondary">
                  Job Title (Current)
                </p>
                <time className="text-right text-base font-medium leading-relaxed text-primary">
                  Oct 2021 - Apr 2022
                </time>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  Fulltime
                </p>
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  7 months
                </p>
              </div>
              <p className="text-base font-light leading-relaxed text-black">
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold leading-relaxed text-secondary">
                  Job Title (Past)
                </p>
                <time className="text-right text-base font-medium leading-relaxed text-primary">
                  Feb 2021 - Apr 2022
                </time>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  Fulltime
                </p>
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  3 months
                </p>
              </div>
              <p className="text-base font-light leading-relaxed text-black">
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
              </p>
            </li>
          </ol>
        </Card>
        <Card className="p-5 md:px-8 md:py-7">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Skills
            </h4>
          </div>
          <div className="space-y-2 py-6">
            <h5 className="text-lg font-semibold leading-relaxed text-secondary">
              Skill 1
            </h5>
            <p className="text-base font-light leading-relaxed text-black">
              Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
              quam. Et risus commodo natoque pulvinar eu, interdum. Viverra
              tortor hac sollicitudin dictum sit. Condimentum eget et commodo
              sapien porta felis amet pellentesque. Erat augue enim turpis risus
              urna.
            </p>
          </div>
          <Separator />
          <div className="space-y-2 py-6">
            <h5 className="text-lg font-semibold leading-relaxed text-secondary">
              Skill 2
            </h5>
            <p className="text-base font-light leading-relaxed text-black">
              Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
              quam. Et risus commodo natoque pulvinar eu, interdum. Viverra
              tortor hac sollicitudin dictum sit. Condimentum eget et commodo
              sapien porta felis amet pellentesque. Erat augue enim turpis risus
              urna.
            </p>
          </div>
          <Separator />
          <div className="space-y-2 py-6">
            <h5 className="text-lg font-semibold leading-relaxed text-secondary">
              Skill 3
            </h5>
            <p className="text-base font-light leading-relaxed text-black">
              Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
              quam. Et risus commodo natoque pulvinar eu, interdum. Viverra
              tortor hac sollicitudin dictum sit. Condimentum eget et commodo
              sapien porta felis amet pellentesque. Erat augue enim turpis risus
              urna.
            </p>
          </div>
        </Card>
        <Card className="p-5 md:px-8 md:py-7">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Education
            </h4>
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
              <p className="text-base font-semibold leading-relaxed text-secondary">
                University of Illinois
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-600">
                Oct 2021 - Apr 2022
              </p>
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
              <p className="text-base font-semibold leading-relaxed text-secondary">
                University of Illinois
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-600">
                Oct 2021 - Apr 2022
              </p>
              <p className="text-base font-light leading-relaxed text-black">
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="hidden lg:block">
        <DesktopJobCardsCTA />
      </div>
    </div>
  )
}
