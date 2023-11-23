import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import ProfileSectionDropdown from "./components/ProfileSectionDropdown"
import Tabs from "./components/Tabs"

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return <></>

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-72 bg-backgroundSVG bg-cover bg-center"></div>
      <section className="container items-center pb-8 pt-24">
        <Card className="relative mb-7 rounded-2xl bg-white px-3 md:px-7">
          <div className="flex flex-col items-center gap-10 py-9 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-5 lg:gap-10">
              <div className="relative">
                <Image
                  className="w-[100px] rounded-[15px] sm:w-[130px] md:w-[158px]"
                  width={158}
                  height={158}
                  alt={session?.user?.username || "User profile picture"}
                  src={
                    session?.user?.photo?.url
                      ? session?.user?.photo?.url
                      : "/images/station_logo.webp"
                  }
                />
                <div className="absolute -bottom-3 left-0 right-0 flex items-center justify-center">
                  <Badge className="text-sm font-semibold text-white">
                    Subscibed
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-2xl font-bold leading-[30.50px] text-secondary lg:text-3xl">
                    {session?.user?.newsroom?.name}
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
                    {session.user.newsroom?.type.toUpperCase()} News Station
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
                    {session.user.newsroom?.address
                      ? session.user.newsroom?.address
                      : "Los Angeles, CA | DMA: 2"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={"/profile/newsroom_settings"}>
                <Button
                  className="min-h-11 flex h-full w-full items-center justify-start gap-3 rounded-xl text-base font-bold leading-[33px]"
                  variant={"secondary"}
                >
                  <div className="h-6 w-6">
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M8.67686 0.369019C9.14554 0.40041 9.50174 0.601315 9.79544 0.952899C10.4141 1.69374 11.214 2.07043 12.1826 2.03904C13.0762 2.00765 13.8011 1.62468 14.3697 0.934064C14.6822 0.557367 15.0696 0.369019 15.5571 0.40041C15.6945 0.406688 15.8383 0.444358 15.9633 0.488306C17.1631 0.927786 18.2504 1.56189 19.2315 2.38435C19.7314 2.80499 19.8627 3.35748 19.6377 4.0167C19.0503 5.71812 20.0126 7.4886 21.7561 7.89668C21.8561 7.9218 21.9561 7.93435 22.0561 7.95947C22.631 8.08503 23.0309 8.50568 23.1434 9.08328C23.3871 10.3766 23.3809 11.6637 23.1372 12.957C23.0247 13.5723 22.5685 14.018 21.9436 14.1185C19.9626 14.4387 18.9066 16.2594 19.6002 18.1491C19.8314 18.777 19.6752 19.3608 19.1565 19.794C18.2879 20.5098 17.338 21.0811 16.2945 21.5143C15.6196 21.7905 15.0259 21.6399 14.5635 21.0685C13.3886 19.6057 11.3015 19.5115 10.0704 20.8676C9.97042 20.9744 9.88293 21.0999 9.79544 21.2129C9.408 21.7026 8.80809 21.8847 8.22068 21.665C7.00212 21.2192 5.90853 20.5851 4.92118 19.7564C4.44001 19.3483 4.31502 18.733 4.57748 18.1115C4.93368 17.2576 4.92743 16.4163 4.50874 15.5939C4.05256 14.6961 3.30893 14.1687 2.31533 14.018C1.47171 13.8924 1.07177 13.5158 0.940537 12.6745C0.746816 11.4376 0.78431 10.2071 1.02177 8.98283C1.153 8.32361 1.60919 7.91552 2.29658 7.82762C3.85884 7.62044 4.95243 6.35223 4.88369 4.78265C4.87119 4.46874 4.7837 4.14855 4.68997 3.84719C4.465 3.16913 4.62123 2.59153 5.18364 2.15205C6.08976 1.44888 7.07711 0.890116 8.15819 0.494584C8.32067 0.431801 8.50189 0.412967 8.67686 0.369019ZM12.0763 14.8279C14.1448 14.8279 15.8195 13.1391 15.8195 11.0484C15.8195 8.99539 14.1323 7.30653 12.0888 7.30653C10.0142 7.30653 8.32692 8.97655 8.32067 11.0358C8.31442 13.1328 9.98916 14.8216 12.0763 14.8279Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Account settings
                </Button>
              </Link>
              <ProfileSectionDropdown>
                <Button
                  className="min-h-11 group flex h-full w-full items-center justify-start gap-3 rounded-xl text-base font-bold leading-[33px] group-hover:text-white"
                  variant={"secondary_outline"}
                >
                  <div className="flex items-center justify-center rounded-full bg-secondary p-1.5 group-hover:bg-white">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white group-hover:fill-sky-900"
                        id="Union"
                        d="M5.14551 0.10144C4.65761 0.10144 4.26208 0.496963 4.26208 0.984866V4.28486H0.961551C0.473648 4.28486 0.078125 4.68038 0.078125 5.16828C0.078125 5.65618 0.473648 6.05171 0.96155 6.05171H4.26208V9.35226C4.26208 9.84016 4.65761 10.2357 5.14551 10.2357C5.63341 10.2357 6.02893 9.84016 6.02893 9.35226V6.05171H9.32894C9.81684 6.05171 10.2124 5.65619 10.2124 5.16828C10.2124 4.68038 9.81684 4.28486 9.32894 4.28486H6.02893V0.984867C6.02893 0.496964 5.63341 0.10144 5.14551 0.10144Z"
                      />
                    </svg>
                  </div>
                  Add profile section
                </Button>
              </ProfileSectionDropdown>
            </div>
          </div>
          <Separator />
          <Tabs />
        </Card>
        {children}
      </section>
    </div>
  )
}
