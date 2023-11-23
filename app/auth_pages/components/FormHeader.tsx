"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function FormHeader() {
  const pathname = usePathname()

  return (
    <div className="flex">
      <div className="flex w-1/2 flex-col items-center">
        <Link
          href={pathname.replace("newsroom", "employee")}
          className={cn(
            "pb-5 text-xl font-bold text-zinc-500 sm:pb-8 sm:text-2xl",
            pathname.startsWith("/auth_pages/employee") && "text-primary"
          )}
        >
          Employee
        </Link>
        <div
          className={cn(
            "h-1.5 w-full rounded-l-full bg-zinc-100 sm:h-2",
            pathname.startsWith("/auth_pages/employee") && "bg-primary"
          )}
        ></div>
      </div>
      <div className="flex w-1/2 flex-col items-center">
        <Link
          href={pathname.replace("employee", "newsroom")}
          className={cn(
            "pb-5 text-xl font-bold text-zinc-500 sm:pb-8 sm:text-2xl",
            pathname.startsWith("/auth_pages/newsroom") && "text-primary"
          )}
        >
          Newsroom
        </Link>
        <div
          className={cn(
            "h-1.5 w-full rounded-r-full bg-zinc-100 sm:h-2",
            pathname.startsWith("/auth_pages/newsroom") && "bg-primary"
          )}
        ></div>
      </div>
    </div>
  )
}
