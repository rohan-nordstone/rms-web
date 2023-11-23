"use client"

import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  award_title: z
    .string()
    .min(2, {
      message: "Award title must be at least 2 characters.",
    })
    .max(30, {
      message: "Award title must not be longer than 30 characters.",
    }),
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .max(30, {
      message: "Description must not be longer than 30 characters.",
    }),
})

export default function AddAwardsForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      award_title: "",
      description: "",
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
      //     callbackUrl: "/",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="award_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Award title</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 rounded-lg bg-zinc-100"
                      placeholder="Type here..."
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="h-12 rounded-lg bg-zinc-100"
                      placeholder="Type here..."
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
              name="award_title"
              render={({ field }) => (
                <div className="mt-auto flex items-center">
                  <FormItem className="flex items-center gap-7 space-y-0">
                    <FormControl>
                      <Image
                        className="h-[90px] w-[90px] rounded-2xl"
                        width={90}
                        height={90}
                        src="/images/placeholder_image.webp"
                        alt={"avatar"}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-base font-light text-sky-900 hover:underline">
                        Upload Image in{" "}
                        <span className="text-base font-bold text-sky-900">
                          jpg or png format
                        </span>
                      </FormLabel>
                    </div>
                  </FormItem>
                </div>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
