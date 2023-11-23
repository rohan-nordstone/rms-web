"use client"

import { useSession } from "next-auth/react"

import { Separator } from "@/components/ui/separator"

import FAQLikeButton from "./FAQLikeButton"

type Props = {
  questionID: number | undefined
}

export default function FAQLike({ questionID }: Props) {
  const { data: session } = useSession()
  return (
    <>
      {session?.user && (
        <>
          <Separator className="mt-11 border-stone-300" />
          <div className="flex flex-col items-center gap-x-14 gap-y-5 pt-6 md:flex-row">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Did you find it helpful?
            </h4>
            <FAQLikeButton questionID={questionID} />
          </div>
        </>
      )}
    </>
  )
}
