"use client"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  className?: string
}

export default function DropDown({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <summary className="btn border-none bg-transparent hover:bg-transparent">
          <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <g id="Vector_2">
                <path
                  d="M13.8423 3.42105C13.8423 5.31045 12.3106 6.8421 10.4212 6.8421C8.53181 6.8421 7.00015 5.31045 7.00015 3.42105C7.00015 1.53166 8.53181 0 10.4212 0C12.3106 0 13.8423 1.53166 13.8423 3.42105Z"
                  fill="#828282"
                />
                <path
                  d="M13.8421 13C13.8421 14.8894 12.3104 16.421 10.4211 16.421C8.53166 16.421 7 14.8894 7 13C7 11.1106 8.53166 9.57893 10.4211 9.57893C12.3104 9.57893 13.8421 11.1106 13.8421 13Z"
                  fill="#828282"
                />
                <path
                  d="M13.8421 22.5789C13.8421 24.4683 12.3104 26 10.4211 26C8.53166 26 7 24.4683 7 22.5789C7 20.6895 8.53166 19.1579 10.4211 19.1579C12.3104 19.1579 13.8421 20.6895 13.8421 22.5789Z"
                  fill="#828282"
                />
              </g>
            </g>
          </svg>
        </summary>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("", className ?? className)}>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 text-base font-bold leading-loose text-black">
            <div className="flex h-6 w-6 items-center justify-center">
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6351 19.5734C15.6351 20.3248 14.7789 20.7554 14.1757 20.3073L8.36271 15.9888C8.03903 15.7483 7.59603 15.7483 7.27235 15.9888L1.45937 20.3073C0.856187 20.7554 0 20.3248 0 19.5734V0.914195C0 0.409299 0.409299 0 0.914196 0H14.7209C15.2258 0 15.6351 0.409299 15.6351 0.914196V19.5734Z"
                  fill="#828282"
                />
              </svg>
            </div>
            Save
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 text-base font-bold leading-loose text-black">
            <div className="flex h-6 w-6 items-center justify-center">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4067 20.4855C14.0879 20.3935 13.7576 20.3334 13.4542 20.1974C12.0256 19.5572 11.2498 18.0168 11.5378 16.4084C11.5609 16.2804 11.5263 16.2323 11.4341 16.1763C9.52927 15.048 7.62439 13.9197 5.71951 12.7834C5.60045 12.7114 5.52748 12.7194 5.42379 12.8154C4.42527 13.7277 3.00429 13.9117 1.82142 13.2956C0.630869 12.6754 -0.106503 11.363 0.0125515 9.99067C0.131606 8.61831 0.811372 7.61804 2.03265 7.0939C3.25392 6.56976 4.40222 6.78582 5.42379 7.66605C5.50828 7.73807 5.56589 7.79409 5.68494 7.72207C7.63591 6.55775 9.59072 5.39744 11.5302 4.24514C11.511 3.90104 11.4726 3.57296 11.4841 3.24087C11.5302 1.64844 12.7438 0.256069 14.2569 0.0400107C14.3068 0.0320086 14.3529 0.0160043 14.4028 0C14.6333 0 14.8637 0 15.0941 0C15.1287 0.0120032 15.1671 0.0280075 15.2017 0.0360096C16.6034 0.248066 17.7325 1.36837 17.9706 2.78474C18.2203 4.26914 17.552 5.71753 16.2924 6.42572C15.0404 7.12591 13.508 6.90185 12.4749 5.86957C12.4288 5.82556 12.3827 5.78155 12.3328 5.73353C10.355 6.90985 8.3848 8.07816 6.4108 9.25047C6.59898 9.92266 6.5913 10.5828 6.41464 11.239C8.39633 12.4153 10.3665 13.5836 12.3674 14.772C12.4135 14.7079 12.4442 14.6479 12.4903 14.6039C13.2661 13.8557 14.1801 13.5436 15.2247 13.6957C16.7225 13.9117 17.9322 15.2601 18.0129 16.7845C18.1051 18.5009 17.1219 19.9533 15.578 20.3735C15.4167 20.4175 15.2554 20.4495 15.0941 20.4895C14.8675 20.4855 14.6371 20.4855 14.4067 20.4855Z"
                  fill="#828282"
                />
              </svg>
            </div>
            Share
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
