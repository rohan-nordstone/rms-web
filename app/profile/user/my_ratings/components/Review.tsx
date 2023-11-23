import Image from "next/image"

import { Badge } from "@/components/ui/badge"

export default function Review() {
  return (
    <div className="my-6 flex flex-col gap-x-11 gap-y-5 rounded-lg bg-zinc-100 p-6 xl:flex-row">
      <div className="flex items-start gap-4">
        <Image
          className="h-12 w-12 rounded-lg"
          width={52}
          height={52}
          src={"/user/news_director.webp"}
          alt="news_director"
        />
        <div>
          <div className="flex gap-2">
            <p className="inline-block text-sm font-semibold text-muted-foreground">
              News Director
            </p>
            <Badge className="max-h-5">Current</Badge>
          </div>
          <p className="text-lg font-semibold">Brooklyn Simmons</p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-light text-zinc-500">
          Review of News Director
        </p>
        <p className="">
          <span className="text-base font-semibold leading-relaxed text-black">
            Nice guy, but lacks decisiveness, leadership, and aggressiveness.
          </span>
          <span className="text-base font-normal leading-relaxed text-black">
            Eu elementum pellentesque nibh molestie. Tempor purus sed
            pellentesque integer non. Nec sed tortor nec quis tempor diam non
            turpis. Sed venenatis at montes, leo tellus egestas. Nulla pharetra.
          </span>
        </p>
      </div>
    </div>
  )
}
