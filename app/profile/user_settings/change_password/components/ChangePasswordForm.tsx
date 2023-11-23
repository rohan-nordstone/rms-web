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
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  recovery_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  current_password: z.string(),
  new_password: z.string().min(10, {
    message: "New password should be at least 5 characters long",
  }),
  confirm_new_password: z.string().min(10, {
    message: "Confirm new password should be at least 5 characters long",
  }),
})

export default function ChangePasswordForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      recovery_email: "",
      current_password: "",
      new_password: "",
      confirm_new_password: "",
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
            name="recovery_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recovery email</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="recovery@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="pb-1 pt-5 text-2xl font-bold leading-[30.50px] text-black">
            Change password
          </h4>
          <FormField
            control={form.control}
            name="current_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current password</FormLabel>
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
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
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
            name="confirm_new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm new password</FormLabel>
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
          <div className="flex gap-5">
            <Button
              className="min-h-[46px] min-w-[133px] rounded-[10px] text-center text-base font-bold leading-[33px]"
              variant={"secondary"}
            >
              Save
            </Button>
            <Button
              className="min-h-[46px] min-w-[133px] rounded-[10px] text-center text-base font-bold leading-[33px]"
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
