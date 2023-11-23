import Link from "next/link"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export default function LookingForWork({ className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl bg-backgroundSVG px-11 py-14 text-white",
        className ?? className
      )}
    >
      <h3 className="scroll-m-20 text-center text-3xl font-bold leading-loose tracking-tight lg:text-4xl">
        Looking for Work?
      </h3>
      <p className="my-9 max-w-xl text-center text-lg font-medium leading-normal lg:text-2xl">
        Subscribe to our Job Center for instant access to thousands of job
        opportunities in media.
      </p>
      <Link href={"/subscription"}>
        <button className="h-16 rounded-2xl bg-primary-foreground px-16 text-xl font-bold text-black hover:bg-gray-100">
          Subscribe
        </button>
      </Link>
    </div>
  )
}
