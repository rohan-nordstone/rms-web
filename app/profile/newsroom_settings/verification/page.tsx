"use client"

import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="space-y-9 px-12 py-9">
      <h4 className="text-2xl font-bold leading-[30.50px] text-black">
        Request to verify account
      </h4>
      <p className="text-base font-light leading-relaxed text-black">
        Please upload your paperwork so we can review your request.
      </p>

      <div className="flex items-center gap-5">
        <div className="inline-block cursor-pointer rounded-[10px] border-2 border-dashed border-[#828282] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus h-[38px] w-[38px] fill-current text-[#828282]"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
          </svg>
        </div>
        <div className="inline-block cursor-pointer rounded-[10px] border-2 border-dashed border-[#828282] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus h-[38px] w-[38px] fill-current text-[#828282]"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
          </svg>
        </div>
        <div className="inline-block cursor-pointer rounded-[10px] border-2 border-dashed border-[#828282] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus h-[38px] w-[38px] fill-current text-[#828282]"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
          </svg>
        </div>
        <div>
          <span className="text-xl font-light text-sky-900">
            Upload Image in{" "}
          </span>
          <span className="text-xl font-bold text-sky-900">
            jpg or png format
          </span>
        </div>
      </div>
      <Button
        variant={"secondary_outline"}
        className="h-11 w-44 rounded-[10px]"
      >
        Send request
      </Button>
    </div>
  )
}
