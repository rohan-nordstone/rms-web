import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import ContactInfoModal from "./components/ContactInfoModal"

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions)

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-72 bg-backgroundSVG bg-cover bg-center"></div>
      <section className="container items-center pb-8 pt-24">
        <Card className="relative mb-7 rounded-2xl bg-white px-7">
          <div className="flex flex-col items-center gap-10 py-9 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-10">
              <div className="relative">
                <Image
                  className="rounded-[15px]"
                  width={158}
                  height={158}
                  alt={session?.user?.username || "User profile picture"}
                  src={"/user/news_director.webp"}
                />
                <Badge className="absolute -bottom-3 left-6 right-6 flex items-center justify-center">
                  <p className="text-sm font-semibold text-white">Subscibed</p>
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="text-3xl font-bold leading-[30.50px] text-black">
                    Brooklyn Simmons
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
                  <span className="text-[22px] font-light leading-relaxed text-zinc-500">
                    News Director at{" "}
                  </span>
                  <span className="text-[22px] font-semibold leading-relaxed text-secondary">
                    KABC
                  </span>
                </div>
                <div className="flex items-center gap-3">
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
                  <p className="text-lg font-light leading-relaxed text-sky-900">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                className="min-h-12 flex h-full w-full min-w-[192px]"
                href={"/profile/user_settings"}
              >
                <Button
                  className="text center min-h-12 flex h-full w-full min-w-[192px] items-center gap-3 rounded-lg text-base font-bold leading-[33px]"
                  size={"lg"}
                  variant={"secondary"}
                >
                  Message
                </Button>
              </Link>
              <ContactInfoModal>
                <Button
                  className="text center min-h-12 flex h-full w-full min-w-[192px] items-center gap-3 rounded-lg text-base font-bold leading-[33px]"
                  size={"lg"}
                  variant={"secondary_outline"}
                >
                  Contact Info
                </Button>
              </ContactInfoModal>
            </div>
          </div>
        </Card>
        {children}
      </section>
    </div>
  )
}
