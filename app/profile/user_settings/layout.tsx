import { ReactNode } from "react"

import { Card } from "@/components/ui/card"

import Tabs from "./components/Tabs"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <section className="container items-center pb-8 pt-16">
      <Card className="flex">
        <div className="bottom-t-0 border border-b-0 border-l-0 border-r-2 border-neutral-200 md:max-w-[33%] lg:max-w-[426px]">
          <h1 className="m-9 text-4xl font-bold text-black">
            Account settings
          </h1>
          <Tabs />
        </div>
        <div className="flex-1">{children}</div>
      </Card>
    </section>
  )
}
