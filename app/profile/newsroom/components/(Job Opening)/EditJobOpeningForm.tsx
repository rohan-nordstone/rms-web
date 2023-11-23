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
  job_title: z
    .string()
    .min(2, {
      message: "Job title must be at least 2 characters.",
    })
    .max(30, {
      message: "Job title must not be longer than 30 characters.",
    }),
  job_description: z
    .string()
    .min(2, {
      message: "Job description must be at least 2 characters.",
    })
    .max(30, {
      message: "Job description must not be longer than 30 characters.",
    }),
  yearly_salary: z
    .string()
    .min(2, {
      message: "Yearly salary must be at least 2 characters.",
    })
    .max(30, {
      message: "Yearly salary must not be longer than 30 characters.",
    }),
  job_type: z
    .string()
    .min(2, {
      message: "Job type must be at least 2 characters.",
    })
    .max(30, {
      message: "Job type must not be longer than 30 characters.",
    }),
  qualification: z
    .string()
    .min(2, {
      message: "Qualification must be at least 2 characters.",
    })
    .max(30, {
      message: "Qualification must not be longer than 30 characters.",
    }),
  career_level: z
    .string()
    .min(2, {
      message: "Career level must be at least 2 characters.",
    })
    .max(30, {
      message: "Career level must not be longer than 30 characters.",
    }),
  years_of_experience: z.string({
    required_error: "Please select the years of experience to display.",
  }),
  education_level: z.string({
    required_error: "Please select education level to display.",
  }),
  start_date: z
    .string()
    .min(2, {
      message: "Start date must be at least 2 characters.",
    })
    .max(30, {
      message: "Start date must not be longer than 30 characters.",
    }),
  end_date: z
    .string()
    .min(2, {
      message: "End date must be at least 2 characters.",
    })
    .max(30, {
      message: "End date must not be longer than 30 characters.",
    }),
})

export default function EditJobOpeningForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      job_title: "",
      job_description: "",
      yearly_salary: "",
      job_type: "",
      qualification: "",
      career_level: "",
      years_of_experience: "",
      education_level: "",
      start_date: "",
      end_date: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-3 space-y-5">
        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="job_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job title</FormLabel>
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
              name="job_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job description</FormLabel>
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
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="yearly_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Yearly salary</FormLabel>
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
              name="job_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job type</FormLabel>
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
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qualification</FormLabel>
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
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="mt-auto">
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
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="mt-auto">
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
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="mt-auto">
                <div className="flex cursor-pointer items-center gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Union"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.68384 0.919922C5.171 0.919922 4.75526 1.33566 4.75526 1.8485V5.3174H1.286C0.773162 5.3174 0.357422 5.73314 0.357422 6.24598C0.357422 6.75882 0.773162 7.17456 1.286 7.17456H4.75526V10.6436C4.75526 11.1564 5.171 11.5722 5.68384 11.5722C6.19668 11.5722 6.61242 11.1564 6.61242 10.6436V7.17456H10.0811C10.5939 7.17456 11.0097 6.75882 11.0097 6.24598C11.0097 5.73314 10.5939 5.3174 10.0811 5.3174H6.61242V1.8485C6.61242 1.33566 6.19668 0.919922 5.68384 0.919922Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-light leading-relaxed text-black">
                    Add more qualification
                  </p>
                </div>
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="career_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career level</FormLabel>
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
              name="years_of_experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of experiance</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-lg bg-zinc-100">
                        <SelectValue placeholder="Choose Options" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
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
              name="education_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education level</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-lg bg-zinc-100">
                        <SelectValue placeholder="Choose Options" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start date</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="mm/dd/yy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End date</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="mm/dd/yy"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}
