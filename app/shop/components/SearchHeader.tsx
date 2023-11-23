import { Input } from "@/components/ui/input"

import FilterSelect from "./FilterSelect"
import ShortSelect from "./ShortSelect"

export default function SearchHeader() {
  return (
    <div className="my-12 flex flex-col justify-between gap-8 md:flex-row">
      <div className="relative w-full md:max-w-[50%] lg:max-w-[582px]">
        <Input
          type="text"
          placeholder="Search product"
          className="h-11 rounded-[10px] border border-zinc-500 text-base font-normal leading-tight placeholder:text-zinc-500"
        />
        <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.63059 0.569763C3.86405 0.569763 0 4.43381 0 9.20035C0 13.9669 3.86405 17.8309 8.63059 17.8309C10.629 17.8309 12.4687 17.1518 13.9315 16.0116L17.5991 19.6792C18.016 20.0961 18.692 20.0961 19.1089 19.6792C19.5258 19.2623 19.5258 18.5864 19.1089 18.1695L15.4414 14.502C16.5818 13.039 17.2612 11.199 17.2612 9.20035C17.2612 4.43381 13.3971 0.569763 8.63059 0.569763ZM2.13509 9.20035C2.13509 5.61299 5.04323 2.70485 8.63059 2.70485C12.218 2.70485 15.1261 5.61299 15.1261 9.20035C15.1261 12.7877 12.218 15.6958 8.63059 15.6958C5.04323 15.6958 2.13509 12.7877 2.13509 9.20035Z"
              fill="#828282"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 gap-x-5 md:ml-auto">
        <FilterSelect className="md:ml-auto" />
        <ShortSelect />
      </div>
    </div>
  )
}
