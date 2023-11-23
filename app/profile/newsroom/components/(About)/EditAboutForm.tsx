"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  description: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .max(30, {
      message: "Description must not be longer than 30 characters.",
    }),
  station_address: z
    .string()
    .min(2, {
      message: "Station address must be at least 2 characters.",
    })
    .max(30, {
      message: "Station address must not be longer than 30 characters.",
    }),
  industry: z.string({
    required_error: "Please select an industry to display.",
  }),
})

export default function AddAboutForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      description: "",
      station_address: "",
      industry: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                You can write about your years of experience, industry, or
                skills.
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  className="rounded-[10px] bg-zinc-100 p-4"
                  placeholder="Type here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <div className="mt-auto flex h-[50px] w-full items-center">
              <FormItem className="w-full">
                <Select onValueChange={field.onChange}>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-lg bg-zinc-100">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="option_1">Option 1</SelectItem>
                    <SelectItem value="option_2">Option 2</SelectItem>
                    <SelectItem value="option_3">Option 3</SelectItem>
                    <SelectItem value="option_4">Option 4</SelectItem>
                    <SelectItem value="option_5">Option 5</SelectItem>
                    <SelectItem value="option_6">Option 6</SelectItem>
                    <SelectItem value="option_7">Option 7</SelectItem>
                    <SelectItem value="option_8">Option 8</SelectItem>
                    <SelectItem value="option_9">Option 9</SelectItem>
                    <SelectItem value="option_10">Option 10</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <FormField
          control={form.control}
          name="station_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Station Address</FormLabel>
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
      </form>
    </Form>
  )
}
