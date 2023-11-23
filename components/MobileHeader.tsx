"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import UserProfile from "@/app/components/User/UserProfile"

import NotificationDropDown from "./NotificationDropDown"

export default function MobileHeader() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleLinkClick = () => {
    if (inputRef.current) {
      inputRef.current.click() // Programmatically trigger the click event
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-[87px] items-center gap-7 space-x-4 sm:justify-between">
        <div className="flex w-full justify-between gap-7">
          <label className="swap-rotate btn btn-circle swap">
            {/* this hidden checkbox controls the state */}
            <input
              ref={inputRef}
              onChange={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
              type="checkbox"
            />
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            {/* close icon */}
            <svg
              className="swap-on fill-current text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <Link href="/" className="flex items-center space-x-2">
            <div className="hidden md:block">
              <Icons.logo />
            </div>
            <div className="md:hidden">
              <Icons.logoRMS />
            </div>
          </Link>
          <div className="flex items-center space-x-4">
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
              {/* {session && session.user && <UserProfile />} */}
              {/* <SessionButton /> */}
              {/* <ThemeToggle /> */}
            </nav>
          </div>
        </div>
      </div>
      <div className="relative">
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-0 bg-neutral-50 shadow-lg">
            {siteConfig.mainNav?.length ? (
              <nav className="flex flex-col items-center gap-5 py-8">
                {!session?.user && (
                  <Link onClick={handleLinkClick} href={"/auth_pages/employee"}>
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
                {siteConfig.mainNav?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        onClick={handleLinkClick}
                        key={index}
                        href={item.href}
                        className="relative text-center text-base font-medium leading-loose text-black"
                      >
                        {item.title}
                        {pathname === item.href && (
                          <div className="absolute bottom-0 left-2 right-2 border-b-2 border-primary" />
                        )}
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
