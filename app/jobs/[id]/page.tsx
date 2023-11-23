import Image from "next/image"
import Link from "next/link"

import { EmploymentType } from "@/lib/enums/employment-type"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import SharePopupModal from "@/app/newsletter/components/SharePopupModal"
import ShopSlides from "@/app/newsletter/components/ShopSlides"

import getIsJobSaved from "../hooks/utils/getIsJobSaved"
import getJobDataByID from "../hooks/utils/getJobDataByID"
import ReportPopupModal from "./components/ReportPopupModal"
import SaveJobButton from "./components/SaveJobButton"

type Props = {
  params: {
    id: number
  }
}

export default async function page({ params: { id } }: Props) {
  // const [job, isJobSaved] = await Promise.all([
  //   getJobDataByID(id),
  //   getIsJobSaved(id),
  // ])

  return (
    <div className="relative">
      {/* <div className="absolute left-0 right-0 top-0 h-[295px] rotate-180 bg-backgroundSVG bg-cover bg-center"></div>
      <section className="container relative items-center pb-8 pt-24">
        <Card className="grid grid-cols-2 items-center gap-x-3 gap-y-8 px-11 py-9 lg:flex lg:gap-x-12">
          <Image
            src="/images/station_logo.webp"
            alt="Station Logo"
            width={138}
            height={106}
          />
          <div className="col-span-2 row-start-2 space-y-3">
            <h3 className="text-3xl font-bold leading-[30.50px] text-black">
              {job?.position}
            </h3>
            <Link
              href={"/profile/visitor_newsroom"}
              className="text-xl font-light leading-relaxed text-zinc-500"
            >
              {job?.station.name}
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 rounded-lg bg-zinc-100 px-7 py-3">
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M0.443604 7.01695C0.443604 3.80977 2.23418 1.30699 4.96948 0.437158C8.91314 -0.822235 13.0216 1.41906 13.7576 5.45872C14.1421 7.55059 13.6203 9.43434 12.2416 11.0833C10.7641 12.8496 9.25917 14.6 7.77069 16.361C7.36973 16.8359 6.9523 16.8359 6.54585 16.361C5.00793 14.5466 3.45353 12.7429 1.93758 10.9072C0.921457 9.68515 0.460081 8.255 0.443604 7.01695ZM7.15552 3.92717C5.6945 3.9325 4.51909 5.08517 4.52458 6.50465C4.53007 7.90813 5.72196 9.04478 7.17749 9.03945C8.62204 9.03411 9.80843 7.87611 9.79745 6.47263C9.78646 5.06382 8.60007 3.92183 7.15552 3.92717Z"
                    fill="#194D79"
                  />
                </svg>
                <p className="text-base font-light leading-relaxed text-sky-900">
                  {job?.placeOfWork}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M8.78738 0.834778C9.13962 0.834778 9.49186 0.834778 9.84411 0.834778C9.88814 0.843584 9.92776 0.856793 9.97179 0.861196C10.4033 0.927241 10.8436 0.966869 11.2707 1.06374C14.5201 1.80785 17.0783 4.52452 17.6287 7.81358C17.6815 8.12179 17.7123 8.43 17.7563 8.74262C17.7563 9.09486 17.7563 9.4471 17.7563 9.79934C17.7475 9.83017 17.7343 9.86099 17.7299 9.89181C17.6727 10.2837 17.6419 10.6799 17.5582 11.063C16.4486 16.2938 10.6851 19.1866 5.83295 16.9587C2.24888 15.3163 0.289533 11.5121 1.03805 7.64186C1.6941 4.23392 4.44159 1.54367 7.86274 0.962466C8.17095 0.909629 8.47917 0.878808 8.78738 0.834778ZM10.6322 11.1114C10.6367 11.8203 10.0599 12.4191 9.36417 12.4368C8.62887 12.4544 8.03006 11.8996 7.99483 11.1643C7.98162 10.812 7.76147 10.5831 7.44886 10.5919C7.14505 10.6007 6.9293 10.8561 6.93811 11.1995C6.96012 12.1682 7.61617 13.0488 8.54521 13.357C8.71693 13.4142 8.80499 13.4979 8.78298 13.6872C8.76977 13.7885 8.77857 13.8942 8.78298 13.9998C8.78738 14.3124 9.01193 14.5414 9.30694 14.5458C9.59313 14.5502 9.82649 14.3124 9.8397 14.0086C9.8441 13.9118 9.8397 13.8105 9.8397 13.7136C9.8397 13.4495 9.8397 13.4495 10.0863 13.3614C11.6361 12.811 12.1865 10.9309 11.1694 9.64964C10.7027 9.05964 10.0775 8.76463 9.32455 8.74702C8.60245 8.72941 8.03006 8.19224 7.99483 7.50096C7.95961 6.77887 8.51879 6.14923 9.22768 6.11401C9.9762 6.07438 10.597 6.63797 10.6278 7.38648C10.6411 7.73873 10.8612 7.96768 11.1738 7.95888C11.4776 7.95007 11.7066 7.6947 11.6758 7.35126C11.6537 7.10029 11.6141 6.84491 11.5305 6.61155C11.2663 5.89386 10.7555 5.41393 10.029 5.17176C9.89254 5.12773 9.8309 5.05728 9.8397 4.91198C9.84851 4.78429 9.8441 4.66101 9.8397 4.53332C9.8309 4.23392 9.60634 4.00936 9.31574 4.00496C9.03835 4.00056 8.80499 4.22511 8.78738 4.51131C8.77857 4.63019 8.77417 4.75347 8.78738 4.87235C8.80499 5.05288 8.72133 5.13654 8.55402 5.18937C7.35639 5.58565 6.68273 6.86252 7.03057 8.07336C7.32117 9.08605 8.22379 9.78173 9.28492 9.80375C10.051 9.81696 10.6278 10.3761 10.6322 11.1114Z"
                    fill="#194D79"
                  />
                </svg>
                <p className="text-base font-light leading-relaxed text-sky-900">
                  {job?.salary} {job?.salaryCurrency}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M0.756836 12.5719C0.756836 10.7219 0.756836 8.87199 0.756836 7.01768C0.774288 7.02205 0.787377 7.02205 0.80483 7.02641C3.38776 7.88593 5.9707 8.74546 8.54927 9.60934C8.9245 9.73587 9.29099 9.74024 9.66622 9.61807C12.2099 8.76727 14.7579 7.92084 17.3016 7.0744C17.3539 7.05695 17.4107 7.0395 17.4674 7.02205C17.4717 7.05695 17.4761 7.0744 17.4761 7.09185C17.4761 8.8589 17.4805 10.6303 17.4674 12.3973C17.4674 12.6417 17.4019 12.8991 17.2972 13.1216C16.9307 13.8895 16.3024 14.2516 15.4516 14.2473C11.2326 14.2429 7.01784 14.2473 2.79875 14.2473C2.72458 14.2473 2.64604 14.2473 2.57187 14.2429C1.7647 14.2124 1.04044 13.6365 0.826645 12.8555C0.80483 12.7638 0.783014 12.6679 0.756836 12.5719ZM0.756836 5.90946C0.769925 5.91819 0.787377 5.92692 0.800467 5.93128C3.5012 6.83007 6.20194 7.73322 8.90704 8.62329C9.0423 8.66692 9.21246 8.66256 9.34771 8.61893C12.0135 7.73759 14.6794 6.84752 17.3452 5.96182C17.4543 5.92692 17.4805 5.87456 17.4805 5.76548C17.4761 5.31172 17.4761 4.86233 17.4761 4.40857C17.4761 3.22618 16.6602 2.40592 15.4778 2.40592C14.3521 2.40592 13.2265 2.40592 12.0964 2.40592C12.0354 2.40592 11.9699 2.40592 11.9001 2.40592C11.9001 2.17904 11.9045 1.98707 11.9001 1.79073C11.8957 1.67293 11.8957 1.55076 11.8739 1.43296C11.7343 0.765408 11.1933 0.320375 10.4952 0.316012C9.57459 0.307286 8.65399 0.311649 7.73338 0.316012C7.63739 0.316012 7.53704 0.324738 7.44105 0.342191C6.79096 0.481809 6.35029 1.00974 6.33283 1.67293C6.32411 1.90853 6.33283 2.1485 6.33283 2.40156C6.24557 2.40156 6.18013 2.40156 6.11468 2.40156C4.97156 2.40156 3.82843 2.39719 2.68531 2.40156C1.82142 2.41465 1.09716 2.94258 0.844097 3.75411C0.809193 3.86319 0.783014 3.97226 0.756836 4.08134C0.756836 4.69217 0.756836 5.303 0.756836 5.90946ZM7.72902 1.72092C8.64962 1.72092 9.57023 1.72092 10.5039 1.72092C10.5039 1.94344 10.5039 2.16159 10.5039 2.3972C9.58332 2.3972 8.66708 2.3972 7.72902 2.3972C7.72902 2.16595 7.72902 1.95216 7.72902 1.72092Z"
                    fill="#194D79"
                  />
                </svg>
                <p className="text-base font-light leading-relaxed text-sky-900">
                  {job?.employmentType === EmploymentType.FULLTIME
                    ? "Full time"
                    : job?.employmentType === EmploymentType.PARTTIME
                    ? "Part time"
                    : job?.employmentType === EmploymentType.CONTRACT
                    ? "Contract"
                    : job?.employmentType === EmploymentType.INTERNSHIP
                    ? "Internship"
                    : "Temporary"}
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto max-w-[239px] space-y-3">
            <Button
              className="min-h-[46px] min-w-[239px] rounded-[10px] text-center text-base font-bold leading-[33px]"
              variant={"secondary"}
            >
              Apply Now
            </Button>
            <div className="flex gap-2">
              <SaveJobButton isJobSaved={isJobSaved} job={job} />
              <SharePopupModal>
                <Button
                  variant={"muted_outline"}
                  className="min-h-[46px] min-w-[115px] text-center text-base font-bold leading-[33px]"
                >
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 inline-block"
                  >
                    <path
                      d="M14.4067 20.4855C14.0879 20.3935 13.7576 20.3334 13.4542 20.1974C12.0256 19.5572 11.2498 18.0168 11.5378 16.4084C11.5609 16.2804 11.5263 16.2323 11.4341 16.1763C9.52927 15.048 7.62439 13.9197 5.71951 12.7834C5.60045 12.7114 5.52748 12.7194 5.42379 12.8154C4.42527 13.7277 3.00429 13.9117 1.82142 13.2956C0.630869 12.6754 -0.106503 11.363 0.0125515 9.99067C0.131606 8.61831 0.811372 7.61804 2.03265 7.0939C3.25392 6.56976 4.40222 6.78582 5.42379 7.66605C5.50828 7.73807 5.56589 7.79409 5.68494 7.72207C7.63591 6.55775 9.59072 5.39744 11.5302 4.24514C11.511 3.90104 11.4726 3.57296 11.4841 3.24087C11.5302 1.64844 12.7438 0.256069 14.2569 0.0400107C14.3068 0.0320086 14.3529 0.0160043 14.4028 0C14.6333 0 14.8637 0 15.0941 0C15.1287 0.0120032 15.1671 0.0280075 15.2017 0.0360096C16.6034 0.248066 17.7325 1.36837 17.9706 2.78474C18.2203 4.26914 17.552 5.71753 16.2924 6.42572C15.0404 7.12591 13.508 6.90185 12.4749 5.86957C12.4288 5.82556 12.3827 5.78155 12.3328 5.73353C10.355 6.90985 8.3848 8.07816 6.4108 9.25047C6.59898 9.92266 6.5913 10.5828 6.41464 11.239C8.39633 12.4153 10.3665 13.5836 12.3674 14.772C12.4135 14.7079 12.4442 14.6479 12.4903 14.6039C13.2661 13.8557 14.1801 13.5436 15.2247 13.6957C16.7225 13.9117 17.9322 15.2601 18.0129 16.7845C18.1051 18.5009 17.1219 19.9533 15.578 20.3735C15.4167 20.4175 15.2554 20.4495 15.0941 20.4895C14.8675 20.4855 14.6371 20.4855 14.4067 20.4855Z"
                      fill="#828282"
                    />
                  </svg>
                  Share
                </Button>
              </SharePopupModal>
            </div>
          </div>
        </Card>

        <Card className="mt-10 p-9">
          <h3 className="mb-9 text-2xl font-bold leading-[30.50px] text-black">
            Job Description
          </h3>
          <p className="text-base font-light leading-relaxed text-black">
            {job?.jobDescription}
          </p>
          <Separator className="my-11 border-stone-300" />
          <h3 className="mb-9 text-2xl font-bold leading-[30.50px] text-black">
            Qualification
          </h3>
          <ul className="grid list-disc gap-x-20 gap-y-3 pl-5 md:grid-cols-2">
            <li>{job?.qualifications}</li>
          </ul>
          <Separator className="my-11 border-stone-300" />
          <h3 className="mb-9 text-2xl font-bold leading-[30.50px] text-black">
            Additional Information
          </h3>
          <div className="grid gap-x-5 gap-y-3 md:w-2/3 md:grid-cols-2">
            <div>
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Career Level
              </p>
              <div className="text-base font-semibold leading-relaxed text-black">
                {job?.career_level}
              </div>
            </div>
            <div>
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Education level
              </p>
              <div className="text-base font-semibold leading-relaxed text-black">
                {job?.education_level}
              </div>
            </div>
            <div>
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Years of Experience
              </p>
              <div className="text-base font-semibold leading-relaxed text-black">
                {job?.years_of_experience}{" "}
                {(job?.years_of_experience || 0) > 1 ? "years" : "year"}
              </div>
            </div>
            <div>
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Job Type
              </p>
              <div className="text-base font-semibold leading-relaxed text-black">
                {job?.employmentType === EmploymentType.FULLTIME
                  ? "Full time"
                  : job?.employmentType === EmploymentType.PARTTIME
                  ? "Part time"
                  : job?.employmentType === EmploymentType.CONTRACT
                  ? "Contract"
                  : job?.employmentType === EmploymentType.INTERNSHIP
                  ? "Internship"
                  : "Temporary"}
              </div>
            </div>
          </div>
          <Separator className="my-11 border-stone-300" />
          <ReportPopupModal job_id={job?.id} />
        </Card>
        <Separator className="mt-14 border-stone-300" />
        <h2 className="my-16 text-center text-4xl font-bold">
          <Link href={"/shop"}>RateMyStation's Shop</Link>
        </h2>
        <ShopSlides />
      </section> */}
    </div>
  )
}
