"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function Tabs() {
  const pathname = usePathname()

  const links = [
    { href: "/profile/user", title: "Profile" },
    { href: "/profile/user/my_ratings", title: "My ratings" },
    { href: "/profile/user/applied_jobs", title: "Applied job" },
    { href: "/profile/user/contact", title: "Contact Info" },
    { href: "/profile/user/subscribed_news", title: "Subscribed News" },
    { href: "/profile/user/saved", title: "Saved" },
  ]
  return (
    <>
      <div className="flex flex-col items-center gap-5 py-5 md:flex-row md:gap-0 md:py-0">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              "flex h-full min-h-[20px] items-center px-3 text-center text-base font-light leading-relaxed text-black md:min-h-[60px]",
              pathname === link.href &&
                "border border-b-4 border-l-0 border-r-0 border-t-0 border-primary font-medium"
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  )
}
