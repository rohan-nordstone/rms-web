import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

const items = [
  {
    title: "Account Information",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Work for Us",
    href: "/workForUs",
  },
  {
    title: "Subscribe",
    href: "/subscription",
  },
  {
    title: "Advertise",
    href: "/",
  },
  {
    title: "Terms & Conditions",
    href: "/termsAndConditions",
  },
]

export default function Footer() {
  return (
    <>
      <Separator className="bg-neutral-300 lg:hidden" />
      <div className="container flex flex-col-reverse items-center gap-x-4 gap-y-5 py-8 sm:justify-between sm:space-x-0 lg:flex-row">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-10">
          {items?.map(
            (item, index) =>
              item.href && (
                <div className="inline-block">
                  <Link
                    key={index}
                    href={item.href}
                    className="items-center text-base font-medium text-muted-foreground"
                  >
                    <p>{item.title}</p>
                  </Link>
                </div>
              )
          )}
        </div>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center gap-2">
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
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
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
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
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
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
