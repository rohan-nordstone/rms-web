"use client"

import { useState } from "react"
import Link from "next/link"

import { Input } from "@/components/ui/input"

import { SearchDropDown } from "./SearchDropDown"

export default function InputSearch() {
  const [findStation, setFindStation] = useState(true)
  return (
    <>
      <div className="flex items-center justify-center py-12">
        <div className="relative hidden max-h-[83px] w-full max-w-[964px] items-center overflow-hidden rounded-[25px] bg-white shadow-xl lg:flex">
          {findStation && <SearchDropDown />}
          <Input
            placeholder={
              findStation ? "Search Stations..." : "Search News Director..."
            }
            className="h-full min-h-[83px] rounded-l-none px-9 text-xl font-light leading-relaxed placeholder:text-zinc-500 "
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
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4695 0.727051C6.79299 0.727051 0.569946 6.9501 0.569946 14.6266C0.569946 22.3031 6.79299 28.5262 14.4695 28.5262C17.6879 28.5262 20.6508 27.4324 23.0067 25.5962L28.9133 31.5028C29.5847 32.1743 30.6733 32.1743 31.3448 31.5028C32.0162 30.8314 32.0162 29.7428 31.3448 29.0714L25.4382 23.1649C27.2749 20.8088 28.3691 17.8455 28.3691 14.6266C28.3691 6.9501 22.146 0.727051 14.4695 0.727051ZM4.00851 14.6266C4.00851 8.84916 8.69206 4.16561 14.4695 4.16561C20.247 4.16561 24.9305 8.84916 24.9305 14.6266C24.9305 20.4041 20.247 25.0876 14.4695 25.0876C8.69206 25.0876 4.00851 20.4041 4.00851 14.6266Z"
                  fill="#194D79"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full space-y-6 lg:hidden">
          {findStation && <SearchDropDown />}
          <div className="relative inline-block w-full max-w-[574px]">
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
        </div>
      </div>
      <div
        onClick={() => {
          setFindStation(!findStation)
        }}
        className="cursor-pointer text-center text-base font-semibold leading-normal text-white underline lg:text-2xl lg:font-bold"
      >
        {findStation
          ? "Find a News Director by name"
          : "Find a Station by name"}
      </div>
    </>
  )
}
