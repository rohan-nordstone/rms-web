"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import SessionButton from "@/app/components/NextAuth/SessionButton"

import UserProfile from "../app/components/User/UserProfile"
import NotificationDropDown from "./NotificationDropDown"
import { Separator } from "./ui/separator"

export default function DesktopHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-md">
      <div className="container flex h-[87px] items-center gap-7 space-x-4 sm:justify-between">
        <div className="flex w-full gap-7 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
          </Link>
          {siteConfig.mainNav?.length ? (
            <nav className="flex w-full max-w-xl justify-between gap-3">
              {siteConfig.mainNav?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className="relative flex items-center text-base font-normal"
                    >
                      <p>{item.title}</p>
                      {pathname === item.href && (
                        <Separator className="absolute bottom-2 left-1 right-1 mx-auto h-[2px] w-auto bg-primary" />
                      )}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-5">
            {session && session.user && (
              <>
                <Link href="/chat" rel="noreferrer">
                  <div
                    className={`${buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })} relative`}
                  >
                    <Icons.chat className="fill-current" />
                    <span className="sr-only">Chat</span>
                    <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-center text-xs text-primary-foreground">
                      2
                    </div>
                  </div>
                </Link>
                <NotificationDropDown />
              </>
            )}
            <Link href="/cart" rel="noreferrer">
              <div
                className={`${buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })} relative`}
              >
                <Icons.cart className="fill-current" />
                <span className="sr-only">Cart</span>
                <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-center text-xs text-primary-foreground">
                  2
                </div>
              </div>
            </Link>
            {!session?.user && (
              <Link href={"/auth_pages/employee"}>
                <Button
                  className="h-12 w-36 rounded-lg"
                  variant={"secondary_outline"}
                >
                  <p className="text-center text-base font-bold leading-loose">
                    Login
                  </p>
                </Button>
              </Link>
            )}
            {session && session.user && <UserProfile />}
            <SessionButton />
          </nav>
        </div>
      </div>
      <div className="relative">
        {isMenuOpen &&
          (pathname.startsWith("/search_pages") ||
            pathname.startsWith("/faq/search")) && (
            <div className="absolute left-0 right-0 top-0 flex h-[48px] items-center justify-center bg-neutral-200">
              {siteConfig.mainNav?.length ? (
                <nav className="flex gap-24">
                  {siteConfig.mainNav?.map(
                    (item, index) =>
                      item.href && (
                        <Link
                          onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                          }}
                          key={index}
                          href={item.href}
                          className="relative flex items-center text-base font-normal"
                        >
                          <p>{item.title}</p>
                        </Link>
                      )
                  )}
                </nav>
              ) : null}
            </div>
          )}
      </div>
    </header>
  )
}
