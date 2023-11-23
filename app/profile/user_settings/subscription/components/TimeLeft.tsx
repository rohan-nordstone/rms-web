"use client"

import { useState } from "react"

import { Progress } from "@/components/ui/progress"

export default function TimeLeft() {
  const [progress, setProgress] = useState(40)

  return (
    <div className="relative max-w-[578px] rounded-lg border-2 border-neutral-200">
      <Progress
        value={progress}
        className="h-[118px] w-full rounded-lg bg-white"
      />
      <div className="absolute inset-0 flex items-center justify-between p-9">
        <div className="text-center">
          <h4 className="text-4xl font-bold leading-relaxed text-white">
            1 Month
          </h4>
          <h6 className="text-2xl font-light leading-relaxed text-white">
            subcription
          </h6>
        </div>
        <div>
          <h4 className="text-right text-[28px] font-semibold leading-relaxed text-sky-900">
            $34.95/m
          </h4>
          <p className="text-right text-base font-light leading-relaxed text-zinc-500">
            Active until Dec 21, 2022
          </p>
        </div>
      </div>
    </div>
  )
}
