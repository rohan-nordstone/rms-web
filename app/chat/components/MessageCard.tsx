"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type Props = {
  message: {
    name: string
    lastMessage: string
    time: string
  }
}

export default function MessageCard({ message }: Props) {
  const pathname = usePathname()
  return (
    <Link href={`/chat?id=${message.name}`}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-2 p-4 hover:bg-zinc-100 lg:gap-4",
          pathname === `/chat/${message.name.replace(/ /g, "%20")}` &&
            "bg-zinc-100"
        )}
      >
        <Image
          className="w-[48px] rounded-lg lg:w-14"
          width={56}
          height={56}
          alt="avatar"
          src="https://via.placeholder.com/53x53"
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center">
            <p className="text-base font-semibold leading-5 text-black lg:text-lg">
              {message.name}
            </p>
            <p className="font-4 ml-auto min-w-[60px] text-xs text-zinc-500">
              {message.time}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="line-clamp-1 flex-1 text-sm font-light leading-relaxed text-zinc-500">
              {message.lastMessage}
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
              2
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
