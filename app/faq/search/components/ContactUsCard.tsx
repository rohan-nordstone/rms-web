

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = {
  className?: string
}

export default function ContactUsCard({ className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl bg-backgroundSVG bg-cover bg-center px-9 py-14 text-center",
        className ?? className
      )}
    >
      <h1 className="mb-9 max-w-[300px] text-4xl font-bold text-white">
        Can't find question you're looking for?
      </h1>
      <p className="max-w-[460px] text-xl font-medium leading-loose text-white">
        Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam.
        Et risus commodo natoque pulvinar eu, interdum.{" "}
      </p>
      <Button className="min-h-16 mt-10 w-full max-w-[240px] rounded-2xl bg-white text-center text-xl font-bold leading-[37.50px] text-black hover:bg-gray-100">
        Contact us
      </Button>
    </div>
  )
}
