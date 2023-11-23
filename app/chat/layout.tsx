"use client"

import { ReactNode, useState } from "react"
import { useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import MessageCard from "./components/MessageCard"
import { messages } from "./messages"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [searchName, setSearchName] = useState("")

  const searchParams = useSearchParams()

  const id = searchParams.get("id")

  return (
    <section className="items-center p-3 lg:container lg:pt-5">
      <Card className="relative flex h-[80vh] overflow-hidden">
        <div
          className={cn(
            "flex flex-1 flex-col border-r-2 border-neutral-200 md:min-w-[284px] md:max-w-sm",
            id ? "hidden md:flex" : ""
          )}
        >
          <div className="p-5 pb-3">
            <h1 className="text-2xl font-bold text-black lg:text-3xl">
              My Messages
            </h1>
            <div className="relative mt-4 w-full">
              <Input
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                type="text"
                placeholder="Search messages"
                className="h-11"
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transform"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.63059 0.569763C3.86405 0.569763 0 4.43381 0 9.20035C0 13.9669 3.86405 17.8309 8.63059 17.8309C10.629 17.8309 12.4687 17.1518 13.9315 16.0116L17.5991 19.6792C18.016 20.0961 18.692 20.0961 19.1089 19.6792C19.5258 19.2623 19.5258 18.5864 19.1089 18.1695L15.4414 14.502C16.5818 13.039 17.2612 11.199 17.2612 9.20035C17.2612 4.43381 13.3971 0.569763 8.63059 0.569763ZM2.13509 9.20035C2.13509 5.61299 5.04323 2.70485 8.63059 2.70485C12.218 2.70485 15.1261 5.61299 15.1261 9.20035C15.1261 12.7877 12.218 15.6958 8.63059 15.6958C5.04323 15.6958 2.13509 12.7877 2.13509 9.20035Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 overflow-y-scroll">
            {messages
              .filter((inst) =>
                inst.name.toLowerCase().includes(searchName.toLowerCase())
              )
              .map((message, index) => (
                <MessageCard key={index} message={message} />
              ))}
          </div>
        </div>
        <div
          className={cn(
            "w-full bg-white md:relative md:w-2/3 lg:w-auto lg:flex-1",
            id ? "block" : "hidden md:block"
          )}
        >
          {children}
        </div>
      </Card>
    </section>
  )
}
