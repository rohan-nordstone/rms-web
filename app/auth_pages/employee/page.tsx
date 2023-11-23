"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { isAxiosError } from "axios"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import FormPasswordInput from "../components/FormPasswordInput"

const formSchema = z.object({
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
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .refine((value) => value.trim() !== "", {
      message: "Password is required.",
    }),
  role: z.string(),
})

export default function page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      role: "employee",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      toast.loading("Logging in...")
      const response = await signIn("credentials", {
        username: values.username,
        password: values.password,
        role: values.role,
        redirect: false,
      })
      if (response?.error) {
        toast.error(response.error)
      } else if (response?.ok && response.status === 200) {
        toast.success("Logged in successfully!")
        router.push("/profile/user")
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
        className="flex h-full flex-1 flex-col gap-5 pt-12"
      >
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
        <FormPasswordInput
          form={form}
          placeholder={"Type your password here..."}
          name={"password"}
          label={"Password"}
        />
        <div className="flex items-center justify-between gap-5 py-2">
          <Button
            className="h-11 w-48 rounded-lg"
            variant={"secondary_outline"}
          >
            <p className="text-center text-base font-bold leading-loose">
              Login
            </p>
          </Button>
          <Link
            href={"/"}
            className="text-right text-base font-light leading-relaxed text-muted-foreground"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-auto">
          <span className="text-base font-light leading-relaxed text-neutral-500">
            Don’t have any account?{" "}
          </span>
          <Link
            href={"/auth_pages/employee/register"}
            className="text-base font-bold leading-relaxed text-lime-500 underline"
          >
            Register here
          </Link>
        </div>
      </form>
    </Form>
  )
}
