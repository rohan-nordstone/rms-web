import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import CallForActionSidebar from "../components/CallForAction/CallForActionSidebar"
import MobileCallForActionSidebar from "../components/CallForAction/MobileCallForActionSidebar"
import NewsletterCTA from "../components/CallForAction/NewsletterCTA"
import SocialsCTA from "../components/CallForAction/SocialsCTA"
import NewsletterCard from "../components/NewsletterCard"
import { newsletterArr } from "../components/newsletterArr"
import FilterSelect from "./components/FilterSelect"
import ShortSelect from "./components/ShortSelect"
import NotificationCard from "./components/notification"

export default function page() {
  return (
    <section className="container items-center pb-8 pt-12">
      <div className="flex gap-7">
        <div className="flex-1">
          <div className="mb-12 flex flex-col justify-between gap-8 sm:flex-row">
            <h1 className="text-[28px] font-bold text-black">
              Notifications{" "}
              <span className="text-[28px] font-medium text-zinc-500">(3)</span>
            </h1>
            <div className="flex flex-1 gap-x-5 sm:ml-auto">
              <FilterSelect className="sm:ml-auto" />
              <ShortSelect />
            </div>
          </div>
          <Card className="space-y-2 p-2">
            {[
              { isSeen: false },
              { isSeen: false },
              { isSeen: false },
              { isSeen: true },
              { isSeen: true },
              { isSeen: true },
            ].map((notif, index) => (
              <NotificationCard key={index} notif={notif} />
            ))}
          </Card>
          <div className="my-16 hidden md:block lg:hidden">
            <MobileCallForActionSidebar />
          </div>
        </div>
        <div className="hidden lg:block">
          <CallForActionSidebar />
        </div>
      </div>
    </section>
  )
}
