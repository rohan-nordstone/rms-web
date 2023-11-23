"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { isAxiosError } from "axios"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { StationType } from "@/lib/enums/station"
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

import FormPasswordInput from "../../components/FormPasswordInput"

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(30, {
        message: "Username must not be longer than 30 characters.",
      })
      .refine((value) => value.trim() !== "", {
        message: "Username is required.",
      }),
    stationname: z
      .string()
      .min(2, {
        message: "Station's name must be at least 2 characters.",
      })
      .max(30, {
        message: "Station's name must not be longer than 30 characters.",
      })
      .refine((value) => value.trim() !== "", {
        message: "Station's name is required.",
      }),
    station_type: z.string(),
    subscription: z.string({
      required_error: "Please select a subscription.",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters.",
      })
      .refine((value) => value.trim() !== "", {
        message: "Password is required.",
      }),
    confirm_password: z.string(),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    termsAndConditions: z.boolean(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirm_password"],
      })
    }
  })

export default function page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      stationname: "",
      password: "",
      confirm_password: "",
      station_type: StationType.TV,
      subscription: "1_month",
      email: "",
      termsAndConditions: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { confirm_password, termsAndConditions, ...rest } = values
    if (confirm_password !== rest.password) {
      toast.error("The passwords did not match")
    }

    try {
      toast.loading("Registering newsroom...")
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/newsroom`,
        {
          username: rest.username,
          stationName: rest.stationname,
          password: rest.password,
          stationType: rest.station_type,
          subscription: rest.subscription,
          email: rest.email,
        }
      )
      const token = res.data.token
      const response = await signIn("credentials", {
        username: rest.username,
        password: rest.password,
        role: "newsroom",
        token: token,
        redirect: false,
      })
      if (response?.error) {
        toast.error(response.error)
      } else if (response?.ok && response.status === 200) {
        toast.success("Logged in successfully!")
        router.push("/profile/newsroom")
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(JSON.stringify(error.response?.data?.message))
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 pt-12"
      >
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          <div className="col-span-2 lg:col-span-1">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormField
              control={form.control}
              name="station_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Station's type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={`${field.value}`}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-lg bg-zinc-100">
                        <SelectValue placeholder="Choose options" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={StationType.TV}>
                        {StationType.TV.toUpperCase()}
                      </SelectItem>
                      <SelectItem value={StationType.RADIO}>
                        {StationType.RADIO.toUpperCase()}
                      </SelectItem>
                      <SelectItem value={StationType.NEWSPAPER}>
                        {StationType.NEWSPAPER.toUpperCase()}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="stationname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Station's Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="h-12 rounded-lg bg-zinc-100"
                      placeholder="Type your station's name here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="h-12 rounded-lg bg-zinc-100"
                      placeholder="Type your email here..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormPasswordInput
              form={form}
              placeholder={"09saasd79a"}
              name={"password"}
              label={"Password"}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormPasswordInput
              form={form}
              placeholder={"Re-type password"}
              name={"confirm_password"}
              label={"Confirm Password"}
            />
          </div>
        </div>
        <div className="col-span-2">
          <FormField
            control={form.control}
            name="subscription"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Choose subscription</FormLabel>

                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex w-full flex-wrap items-center justify-center gap-3 pt-2"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-secondary">
                        <FormControl>
                          <RadioGroupItem value="1_month" className="sr-only" />
                        </FormControl>
                        <div
                          className={cn(
                            "relative flex h-32 w-32 flex-col items-center justify-center rounded-lg border border-neutral-200 hover:border-secondary",
                            field.value === "1_month" &&
                              "border-2 border-secondary"
                          )}
                        >
                          <div className="text-center text-xl font-bold leading-relaxed text-secondary">
                            1 Month
                          </div>
                          <div className="text-center text-base font-light leading-relaxed text-zinc-500">
                            subcription
                          </div>
                          <div className="mt-3 text-center text-lg font-semibold leading-relaxed text-black">
                            $34.95/m
                          </div>
                        </div>
                      </FormLabel>
                    </FormItem>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-secondary">
                        <FormControl>
                          <RadioGroupItem
                            value="2_months"
                            className="sr-only"
                          />
                        </FormControl>
                        <div
                          className={cn(
                            "relative flex h-32 w-32 flex-col items-center justify-center rounded-lg border border-neutral-200 hover:border-secondary",
                            field.value === "2_months" &&
                              "border-2 border-secondary"
                          )}
                        >
                          <div className="text-center text-xl font-bold leading-relaxed text-secondary">
                            2 Months
                          </div>
                          <div className="text-center text-base font-light leading-relaxed text-zinc-500">
                            subcription
                          </div>
                          <div className="mt-3 text-center text-lg font-semibold leading-relaxed text-black">
                            $19.95/m
                          </div>
                          <Badge
                            className="left-1/5 right-1/5 absolute -bottom-3 flex items-center justify-center bg-secondary text-center text-xs font-semibold text-white"
                            variant="outline"
                          >
                            <span>Save 30%</span>
                          </Badge>
                        </div>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-secondary">
                        <FormControl>
                          <RadioGroupItem
                            value="6_months"
                            className="sr-only"
                          />
                        </FormControl>
                        <div
                          className={cn(
                            "relative flex h-32 w-32 flex-col items-center justify-center rounded-lg border border-neutral-200 hover:border-secondary",
                            field.value === "6_months" &&
                              "border-2 border-secondary"
                          )}
                        >
                          <div className="text-center text-xl font-bold leading-relaxed text-secondary">
                            6 Months
                          </div>
                          <div className="text-center text-base font-light leading-relaxed text-zinc-500">
                            subcription
                          </div>
                          <div className="mt-3 text-center text-lg font-semibold leading-relaxed text-black">
                            $9.95/m
                          </div>
                          <Badge
                            className="left-1/5 right-1/5 absolute -bottom-3 flex items-center justify-center bg-secondary text-center text-xs font-semibold text-white"
                            variant="outline"
                          >
                            <span>Save 40%</span>
                          </Badge>
                        </div>
                      </FormLabel>
                    </FormItem>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col-reverse gap-x-9 gap-y-5 md:items-center lg:flex-row lg:flex-wrap">
          <div className="md:text-center lg:mt-8 lg:w-full lg:text-start">
            <span className="text-sm font-light leading-relaxed text-zinc-500">
              This is recurring subcription that you can cancel anytime.{" "}
            </span>
            <Link
              href="/subscription"
              className="text-sm font-semibold leading-relaxed text-primary underline"
            >
              Learn more
            </Link>
          </div>
          <Button
            disabled={
              form.getValues("termsAndConditions") === false ||
              form.getValues("password") !==
                form.getValues("confirm_password") ||
              form.getValues("password") === ""
                ? true
                : false
            }
            className="h-14 w-full rounded-lg text-center text-base font-bold leading-tight text-secondary lg:w-48"
            variant={"secondary_outline"}
          >
            Register
          </Button>
          <FormField
            control={form.control}
            name="termsAndConditions"
            render={({ field }) => (
              <div className="mt-8 flex flex-row items-center gap-x-1 lg:mt-0 lg:gap-x-3">
                <FormControl>
                  <Checkbox
                    className="h-4 w-4 border border-muted-foreground xl:h-6 xl:w-6"
                    checked={field.value}
                    // @ts-ignore
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex-1 text-xs font-light leading-[14.40px] text-black lg:leading-relaxed xl:text-base">
                  Terms & Conditions
                </div>
              </div>
            )}
          />
        </div>
      </form>
    </Form>
  )
}
