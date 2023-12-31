"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function LatestRatingFooter() {
  const [isLiked, setIsLiked] = useState(false)
  const [isReported, setIsReported] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={cn(
              "flex w-28 justify-center gap-2 rounded-lg bg-muted p-2 shadow-sm hover:bg-muted/80 hover:shadow-md",
              isLiked ? "font-bold text-primary" : "text-muted-foreground"
            )}
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8722 9.71504C21.8722 9.93251 21.8722 10.1559 21.8722 10.3733C21.8604 10.391 21.8428 10.4086 21.8369 10.4262C21.5078 11.9485 21.1786 13.4767 20.8495 14.9989C20.6732 15.8218 20.5086 16.6505 20.3029 17.4675C19.9209 19.025 18.5102 20.0889 16.8469 20.0947C14.5606 20.1006 12.2742 20.1006 9.98197 20.0947C7.91896 20.0947 6.38493 18.549 6.37905 16.4918C6.37905 14.0879 6.37905 11.684 6.37905 9.27423C6.37905 8.32207 6.69644 7.49922 7.33709 6.79392C8.20696 5.83 9.07683 4.86609 9.94083 3.90218C10.9047 2.83247 11.8687 1.76864 12.8208 0.698932C13.0618 0.428566 13.3322 0.328649 13.6848 0.428567C13.961 0.504974 14.2373 0.569627 14.5135 0.640157C16.0182 1.0222 16.653 2.47394 15.9065 3.83165C15.4539 4.64275 15.0014 5.45972 14.5547 6.27082C14.2079 6.89971 14.5194 7.42281 15.2365 7.42281C16.5883 7.42281 17.9342 7.41106 19.2861 7.42869C20.2324 7.44044 20.9847 7.85775 21.4725 8.67472C21.6606 8.99211 21.7429 9.36827 21.8722 9.71504ZM5.18004 18.261V8.72174C5.18004 7.70493 4.35719 6.88208 3.34038 6.88208H2.47638C1.45957 6.88208 0.636719 7.70493 0.636719 8.72174V18.261C0.636719 19.2778 1.45957 20.1006 2.47638 20.1006H3.34038C4.35719 20.1006 5.18004 19.2778 5.18004 18.261Z"
                fill={isLiked ? "#89C400" : "#828282"}
              />
            </svg>
            {isLiked ? "Liked" : "Like"}
          </button>
          <button
            onClick={() => setIsReported(!isReported)}
            className={cn(
              "flex w-28 justify-center gap-2 rounded-lg bg-muted p-2 shadow-sm hover:bg-muted/80 hover:shadow-md",
              isReported ? "font-bold text-warning" : "text-muted-foreground"
            )}
          >
            <svg
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59389 2.58948C4.11295 2.64507 4.60731 2.65125 5.07694 2.76243C6.15833 3.02805 7.23354 3.33072 8.30258 3.64575C9.316 3.94225 10.3232 4.2511 11.3799 4.34994C12.6158 4.4673 13.8208 4.30052 15.001 3.91754C15.5263 3.75076 15.9774 4.05344 16.033 4.6032C16.0392 4.68967 16.0392 4.76998 16.0392 4.85645C16.0392 7.43229 16.0392 10.0143 16.0392 12.5901C16.0392 13.3375 15.86 13.5785 15.1308 13.8008C13.2832 14.3691 11.4417 14.3197 9.60643 13.7267C8.54975 13.387 7.50544 13.0287 6.44258 12.7198C5.57747 12.4666 4.68764 12.3801 3.79163 12.4357C3.73601 12.4357 3.68658 12.4481 3.60007 12.4604C3.60007 12.5531 3.60007 12.6457 3.60007 12.7322C3.60007 14.8015 3.60007 16.8708 3.60007 18.9401C3.60007 19.0884 3.60007 19.2366 3.57535 19.3787C3.48266 19.8852 3.11189 20.2126 2.59901 20.2311C2.16027 20.2435 1.72153 20.2435 1.2828 20.2311C0.708114 20.2126 0.318813 19.8173 0.269378 19.2305C0.257019 19.1563 0.257019 19.076 0.257019 19.0019C0.257019 13.3375 0.257019 7.66701 0.257019 2.00266C0.257019 1.15022 0.757549 0.489279 1.54233 0.29779C2.54339 0.0507083 3.54445 0.791954 3.59389 1.82352C3.60007 2.07678 3.59389 2.33004 3.59389 2.58948Z"
                fill={isReported ? "#eb5757" : "#828282"}
              />
            </svg>
            {isReported ? "Reported" : "Report"}
          </button>
        </div>
        <p className="text-sm font-light text-muted-foreground">
          submitted: 03-24-21
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          className="h-11 w-14"
          width={57}
          height={44}
          alt="station_logo"
          src={"/images/station_logo.webp"}
        />
        <div className="relative flex-1">
          <Input
            placeholder="Write a review..."
            className="h-14 w-full rounded-lg bg-zinc-100"
          />
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-5 right-5 top-5 cursor-pointer"
          >
            <path
              id="Vector"
              d="M10.1492 10.4967C10.017 10.5599 9.93651 10.5944 9.86178 10.6289C8.79268 11.1634 7.71782 11.6922 6.65446 12.2383C6.30959 12.4165 6.01645 12.3992 5.68882 12.1923C3.94146 11.0887 2.1826 9.99086 0.423748 8.89876C0.153597 8.73207 -0.0303358 8.51939 0.00415153 8.18602C0.032891 7.85264 0.251311 7.6802 0.550201 7.56525C6.90162 5.07066 13.2473 2.57608 19.593 0.0757424C20.162 -0.148425 20.5759 0.161961 20.6276 0.524078C20.6506 0.702263 20.6103 0.909187 20.5414 1.08162C19.4952 3.76589 18.4376 6.45015 17.3858 9.13442C15.9545 12.7843 14.5176 16.4342 13.0864 20.0842C12.9082 20.544 12.5518 20.7452 12.1724 20.5842C12.0287 20.5267 11.885 20.406 11.8046 20.2796C10.6607 18.469 9.52841 16.6527 8.39607 14.8363C8.23513 14.5777 8.24663 14.3305 8.37883 14.0604C8.93063 12.9683 9.47668 11.8704 10.0227 10.7783C10.0515 10.7093 10.086 10.6289 10.1492 10.4967Z"
              fill="#194D79"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
