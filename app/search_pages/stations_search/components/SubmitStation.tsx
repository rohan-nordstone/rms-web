import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function SubmitStation() {
  return (
    <div>
      <div className="w-full max-w-[284px] rounded-2xl bg-backgroundSVG bg-cover bg-center bg-no-repeat px-7 py-14 xl:max-w-[384px]">
        <p className="mb-8 text-center text-4xl font-bold text-white">
          Can't find Station you're looking for?
        </p>
        <p className="text-center text-xl font-medium leading-loose text-white">
          Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
          quam. Et risus commodo natoque pulvinar eu, interdum.
        </p>
        <div className="mt-11 flex items-center justify-center">
          <Link href={"/search_pages/stations_search/submit_station"}>
            <Button className="min-h-16 h-full rounded-2xl bg-white text-center text-xl font-bold leading-9 text-black hover:bg-zinc-100">
              Submit a Station
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
