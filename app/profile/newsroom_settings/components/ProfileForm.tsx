"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  stasions_name: z
    .string()
    .min(2, {
      message: "Station's name must be at least 2 characters.",
    })
    .max(30, {
      message: "Station's name must not be longer than 30 characters.",
    }),
  stations_type: z.string({
    required_error: "Please select a station type to display.",
  }),
  stasions_address: z
    .string()
    .min(2, {
      message: "Station's address must be at least 2 characters.",
    })
    .max(30, {
      message: "Station's address must not be longer than 30 characters.",
    }),
  stasions_DMA: z.string({
    required_error: "Please select a station DMA to display.",
  }),
})

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      stasions_name: "",
      stations_type: "Choose options 1",
      stasions_address: "",
      stasions_DMA: "Choose options 1",
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-5 space-y-5">
          <FormField
            control={form.control}
            name="stasions_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station's name</FormLabel>
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
          <FormField
            control={form.control}
            name="stations_type"
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
            name="stasions_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station's address</FormLabel>
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
          <FormField
            control={form.control}
            name="stasions_DMA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station's DMA</FormLabel>
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
          <div className="flex gap-5">
            <Button className="h-[46px] w-[133px]" variant={"secondary"}>
              Save
            </Button>
            <Button
              className="h-[46px] w-[133px]"
              variant={"secondary_outline"}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
