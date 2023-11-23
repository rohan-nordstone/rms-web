"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type Props = {
  className?: string
}

export default function NewsletterCTA({ className }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Card
      className={cn("w-full bg-primary-foreground p-7", className ?? className)}
    >
      <div className="mx-auto max-w-2xl md:flex">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center md:items-start"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-6">
                  <FormLabel className="max-w-[289px] text-center text-lg font-bold leading-snug text-black lg:text-start">
                    Subscribe to our Newsletter, so you'll never miss one
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mx-auto h-14 max-w-xs rounded-xl md:mx-0 lg:max-w-none"
                      placeholder="Your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"secondary"}
              type="submit"
              className="mt-4 h-14 w-full max-w-[288px] rounded-xl text-center text-lg font-bold leading-relaxed lg:max-w-none"
            >
              Subscribe
            </Button>
          </form>
        </Form>
        <div className="hidden min-w-[130px] space-y-3 md:block lg:hidden">
          <h4 className="text-center text-lg font-bold leading-snug text-black">
            Follow RMS
          </h4>
          <div>
            <div className="flex flex-row items-center justify-center gap-x-12 gap-y-4 md:flex-col lg:items-start lg:gap-0">
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
                <Link
                  className="hidden lg:block"
                  href={siteConfig.links.facebook}
                >
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
                <Link
                  className="hidden lg:block"
                  href={siteConfig.links.instagram}
                >
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
                <Link
                  className="hidden lg:block"
                  href={siteConfig.links.twitter}
                >
                  @RateMyStation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
