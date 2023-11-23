import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ContactUsCTA() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-backgroundSVG bg-cover bg-center px-8 py-14">
      <h3 className="mb-6 text-center text-4xl font-bold text-white">
        Stil have question?
      </h3>
      <p className="mb-9 text-center text-xl font-medium leading-loose text-white">
        Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam.
        Et risus commodo natoque pulvinar eu, interdum.
      </p>
      <Link href={"/contact"}>
        <Button
          size={"xl"}
          className="h-16 rounded-2xl bg-white text-center text-xl font-bold leading-[37.50px] text-black hover:bg-gray-100"
        >
          Contact us
        </Button>
      </Link>
    </div>
  )
}
