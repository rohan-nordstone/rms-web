"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  station_name: z
    .string()
    .min(2, {
      message: "Station Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Station Name must not be longer than 30 characters.",
    }),
  station_category: z.string({
    required_error: "Please select a station category to display.",
  }),
  state: z
    .string()
    .min(2, {
      message: "State must be at least 2 characters.",
    })
    .max(30, {
      message: "State must not be longer than 30 characters.",
    }),
  station_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  personal_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  stations_website_link: z
    .string()
    .min(2, {
      message: "Station website link must be at least 2 characters.",
    })
    .max(30, {
      message: "Station website link must not be longer than 30 characters.",
    }),
  terms_and_conditions: z.boolean(),
})

export default function page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      station_name: "",
      station_category: "Choose options 1",
      state: "",
      station_email: "",
      personal_email: "",
      stations_website_link: "",
      terms_and_conditions: false,
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // })

    try {
      //   await axios.post(`/api/signup/${values.role}`, {
      //     ...values,
      //   })
      //   await signIn("credentials", {
      //     username: values.username,
      //     password: values.password,
      //     role: values.role,
      //     redirect: true,
      //     callbackUrl: "/profile/newsroom",
      //   })
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error?.response.data.error}</code>
          </pre>
        ),
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2 lg:gap-x-16">
          <FormField
            control={form.control}
            name="station_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What’s the name of the Station?</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="Type your usename here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="station_category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station's type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-lg bg-zinc-100">
                      <SelectValue placeholder="Choose options" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Choose options 1">
                      Choose options 1
                    </SelectItem>
                    <SelectItem value="Choose options 2">
                      Choose options 2
                    </SelectItem>
                    <SelectItem value="Choose options 3">
                      Choose options 3
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What State/Providence is this Station located in?
                </FormLabel>
                <FormControl>
                  <Input
                    type="Type Station location here..."
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="09saasd79a"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="station_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter the Station’s email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="Type Station’s email here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personal_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="Type  your email here..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stations_website_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What’s Station's website link</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="Type Station's website link here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2 lg:hidden">
            <FormField
              control={form.control}
              name="terms_and_conditions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      className="h-6 w-6 border border-muted-foreground"
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Terms & Conditions</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex max-w-sm items-center gap-5 lg:gap-9">
            <Button
              className="min-h-[44px] flex-1 rounded-lg text-center text-base font-bold leading-loose"
              variant={"secondary"}
            >
              Submit
            </Button>
            <Button
              className="min-h-[44px] flex-1 rounded-lg text-center text-base font-bold leading-loose"
              variant={"secondary_outline"}
            >
              Cancel
            </Button>
          </div>
          <div className="hidden items-center space-x-2 lg:flex">
            <FormField
              control={form.control}
              name="terms_and_conditions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      className="h-6 w-6 border border-muted-foreground"
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Terms & Conditions</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
