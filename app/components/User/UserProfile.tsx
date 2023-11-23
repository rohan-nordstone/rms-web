"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { UserDropDown } from "./UserDropdown"

export default function UserProfile() {
  const { data: session } = useSession()

  return (
    <UserDropDown>
      <div className="flex items-center gap-3 pr-3 text-base font-bold leading-[33px] text-black">
        <Link
          href={
            session?.user.isEmployee ? "/profile/user" : "/profile/newsroom"
          }
          className="z-10"
        >
          <Image
            className="rounded-[5px]"
            src={
              session?.user.photo?.url
                ? session?.user.photo?.url
                : session?.user.isEmployee
                ? "/user/news_director.webp"
                : "/images/station_logo.webp"
            }
            alt={session!?.user.username}
            width={44}
            height={44}
          />
        </Link>
        {session?.user.username}
      </div>
    </UserDropDown>
  )
}
