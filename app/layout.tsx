import "@/styles/globals.css"
import { ReactNode } from "react"
import { Metadata } from "next"
import axios from "axios"
import { getServerSession } from "next-auth"

import { siteConfig } from "@/config/site"
import { authOptions } from "@/lib/auth"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Providers from "@/components/Providers"
import { SiteHeader } from "@/components/site-header"

import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.webp",
    apple: "/apple-touch-icon.webp",
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)
  if (session?.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${session.token}`
  }
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </Providers>
          <Footer />
        </body>
      </html>
    </>
  )
}
