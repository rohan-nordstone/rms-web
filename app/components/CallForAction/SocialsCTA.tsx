import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

type Props = {
  className?: string
}

export default function SocialsCTA({ className }: Props) {
  return (
    <Card className={cn("mb-5 w-full overflow-hidden", className ?? className)}>
      <div className="flex flex-row items-center justify-center gap-12 p-5 md:flex-col lg:items-start lg:gap-0">
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.facebook className="h-6 w-6 fill-current" />
              <span className="sr-only">facebook</span>
            </div>
          </Link>
          <Link className="hidden lg:block" href={siteConfig.links.facebook}>
            @RateMyStation
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.instagram className="h-6 w-6 fill-current" />
              <span className="sr-only">instagram</span>
            </div>
          </Link>
          <Link className="hidden lg:block" href={siteConfig.links.instagram}>
            @RateMyStation
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.twitter className="h-6 w-6 fill-current" />
              <span className="sr-only">twitter</span>
            </div>
          </Link>
          <Link className="hidden lg:block" href={siteConfig.links.twitter}>
            @RateMyStation
          </Link>
        </div>
      </div>
    </Card>
  )
}
