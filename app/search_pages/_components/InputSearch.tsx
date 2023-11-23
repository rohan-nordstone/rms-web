"use client"

import { useState } from "react"
import Link from "next/link"

import { Input } from "@/components/ui/input"

import { SearchDropDown } from "./SearchDropDown"

type Props = {
  findStation: boolean
}

export default function InputSearch({ findStation }: Props) {
  return (
    <div className="pb-5">
      <div className="w-full space-y-6">
        <div className="relative inline-block w-full">
          <Input
            placeholder={
              findStation ? "Search Stations..." : "Search News Director..."
            }
            className="mx-auto h-full min-h-[58px] rounded-[25px] bg-white px-9 text-base font-normal leading-relaxed text-zinc-500 shadow placeholder:text-zinc-500 "
          />
          <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center p-6">
            <Link
              href={
                findStation
                  ? "/search_pages/stations_search"
                  : "/search_pages/directors_search"
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99889 0C3.58122 0 0 3.58111 0 7.99864C0 12.4162 3.58122 15.9973 7.99889 15.9973C9.85098 15.9973 11.5561 15.3678 12.9118 14.3112L16.311 17.7102C16.6974 18.0966 17.3238 18.0966 17.7102 17.7102C18.0966 17.3238 18.0966 16.6974 17.7102 16.311L14.3111 12.9121C15.3681 11.5562 15.9978 9.85096 15.9978 7.99864C15.9978 3.58111 12.4165 0 7.99889 0ZM1.97882 7.99864C1.97882 4.67395 4.67409 1.97875 7.99889 1.97875C11.3237 1.97875 14.019 4.67395 14.019 7.99864C14.019 11.3233 11.3237 14.0185 7.99889 14.0185C4.67409 14.0185 1.97882 11.3233 1.97882 7.99864Z"
                  fill="#828282"
                />
              </svg>
            </Link>
          </div>
        </div>
        {findStation && <SearchDropDown />}
      </div>
    </div>
  )
}
