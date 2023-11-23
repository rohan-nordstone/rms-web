

import { Button } from "@/components/ui/button"

export default function PostJobCard() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-9 rounded-2xl bg-backgroundSVG bg-cover bg-center px-8 py-14 lg:max-w-[284px] xl:max-w-[384px]">
      <h1 className="max-w-[500px] text-center text-[28px] font-bold text-white lg:text-4xl">
        Hire the right employee for your company now!
      </h1>
      <h4 className="max-w-[500px] text-center text-lg font-medium leading-loose text-white lg:text-xl">
        Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam.{" "}
      </h4>
      <div className="flex w-full max-w-[500px] items-center justify-center">
        <Button className="h-16 w-56 rounded-xl bg-white hover:bg-zinc-100">
          <p className="text-center text-xl font-bold leading-9 text-black">
            Post job opening
          </p>
        </Button>
      </div>
    </div>
  )
}
