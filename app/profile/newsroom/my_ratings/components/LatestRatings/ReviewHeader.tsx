"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import autoAnimate from "@formkit/auto-animate"

import { cn } from "@/lib/utils"

export default function ReviewHeader() {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return (
    <div className="space-y-5">
      <div className="flex flex-row gap-3">
        <Image
          className="h-[52px] w-[52px] rounded-lg"
          width={52}
          height={52}
          alt="anonymous"
          src="/user/anonymous.webp"
        />
        <div className="flex-1">
          <div className="flex justify-between gap-3">
            <div>
              <p className="text-lg font-semibold leading-relaxed text-black">
                Reporter | MMJ (OMB)
              </p>
              <div
                onClick={reveal}
                className="flex cursor-pointer items-center gap-2"
              >
                <div className="text-sm font-semibold text-sky-900">
                  Job details
                </div>
                <div className={cn("transform", show ? "rotate-180" : "")}>
                  <svg
                    width="7"
                    height="5"
                    viewBox="0 0 7 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.07462 1.09122C6.3047 1.3213 6.3047 1.69433 6.07462 1.9244L3.66244 4.33658C3.43236 4.56666 3.05933 4.56666 2.82926 4.33658L0.417078 1.9244C0.187 1.69433 0.187 1.3213 0.417078 1.09122C0.647155 0.861143 1.02018 0.861143 1.25026 1.09122L3.24585 3.08681L5.24143 1.09122C5.47151 0.861143 5.84454 0.861143 6.07462 1.09122Z"
                      fill="#194D79"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-1 text-base font-medium text-muted-foreground">
              <span className="flex items-center gap-1 text-primary">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.459 17.3605C13.2697 17.3368 13.0153 17.3191 12.7728 17.2717C12.6544 17.248 12.6071 17.2776 12.542 17.3723C11.7493 18.5089 10.6607 19.0713 9.27637 19.018C8.06358 18.9707 7.10518 18.4201 6.40117 17.4315C6.30651 17.3013 6.23552 17.2539 6.06987 17.2835C3.95784 17.6506 2.00554 16.2476 1.72157 14.1224C1.66833 13.7258 1.72749 13.3114 1.75707 12.9088C1.76299 12.7904 1.76299 12.7312 1.6565 12.6602C-0.556106 11.1388 -0.55019 8.02504 1.66241 6.47998C1.75707 6.41486 1.77482 6.36159 1.75707 6.24911C1.37253 4.09432 2.70955 2.18816 4.86891 1.84481C5.27712 1.7797 5.70307 1.85073 6.12311 1.87441C6.2296 1.88033 6.28876 1.88625 6.35976 1.78562C7.92159 -0.440213 10.992 -0.446133 12.5479 1.7797C12.613 1.87441 12.6722 1.88625 12.7846 1.86849C14.938 1.48371 16.8371 2.82157 17.1802 4.9882C17.2453 5.39075 17.1802 5.81105 17.1506 6.21951C17.1388 6.34383 17.1506 6.40894 17.263 6.4859C19.4579 7.9836 19.452 11.1566 17.2571 12.6543C17.1565 12.7253 17.1329 12.7786 17.1565 12.9029C17.5411 15.0518 16.1922 16.952 14.0329 17.3072C13.8554 17.3427 13.6838 17.3427 13.459 17.3605ZM8.56644 10.1621C8.53686 10.168 8.50137 10.1739 8.47179 10.1739C8.43038 10.1029 8.39488 10.0259 8.34163 9.96672C7.98667 9.60561 7.63171 9.23859 7.259 8.88932C6.87445 8.52822 6.3006 8.54598 5.93972 8.90708C5.57884 9.26819 5.56109 9.84832 5.92789 10.2213C6.56682 10.8784 7.21167 11.5236 7.86835 12.1629C8.24106 12.5241 8.79717 12.53 9.16988 12.1629C10.4418 10.908 11.702 9.64113 12.9562 8.3743C13.2105 8.11975 13.2815 7.79417 13.181 7.45082C12.9739 6.74637 12.1279 6.5451 11.5836 7.07788C10.6193 8.03096 9.66091 8.99588 8.70251 9.9608C8.65518 10.02 8.61377 10.097 8.56644 10.1621Z"
                    fill="#89C400"
                  />
                </svg>
                <span className="hidden sm:block">Verified Rating</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul
        ref={parent}
        className={cn(
          "mt-5 flex w-full flex-wrap justify-evenly gap-x-10 gap-y-5 rounded-lg bg-zinc-100 px-5 py-3",
          show ? "" : "hidden"
        )}
      >
        <li>
          <p className="text-sm font-semibold text-zinc-500">Yearly salary</p>
          <p className="text-lg font-semibold leading-relaxed text-black">
            +$100,000
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-zinc-500">Contract</p>
          <p className="text-lg font-semibold leading-relaxed text-black">
            3 years
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-zinc-500">
            Paired with a photog
          </p>
          <p className="text-lg font-semibold leading-relaxed text-black">
            When Necessary
          </p>
        </li>
        <li>
          <p className="text-sm font-semibold text-zinc-500">
            Station market rank
          </p>
          <p className="text-lg font-semibold leading-relaxed text-black">
            Between #1-2
          </p>
        </li>
      </ul>
    </div>
  )
}
