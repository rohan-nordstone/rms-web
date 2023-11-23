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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  job_position: z.string({
    required_error: "Please select a job position.",
  }),
  currently_working_here: z.boolean(),
  station_ratings_ranking: z.string({
    required_error: "Please select a station rating ranking.",
  }),
  paired_with_photo: z.string({
    required_error: "Please pair with a photo.",
  }),
  sign_contract_requirement: z.boolean(),
  contract_duration: z.string({
    required_error: "Please select a contract duration to display.",
  }),
  yearly_salary: z.string({
    required_error: "Please select a yearly salary to display.",
  }),
  current_news_director: z.string({
    required_error: "Please select a current news director to display.",
  }),
  brief_experience: z.string(),
  explaination: z.string(),
  extra_thoughts: z.string(),
  link_experience: z.boolean(),
})

export default function RateTheStationForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      job_position: "",
      currently_working_here: false,
      station_ratings_ranking: "",
      paired_with_photo: "",
      sign_contract_requirement: false,
      contract_duration: "",
      yearly_salary: "",
      current_news_director: "Choose options 1",
      brief_experience: "",
      explaination: "",
      extra_thoughts: "",
      link_experience: false,
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
      // await axios.post(`/api/signup/${values.role}`, {
      //   ...values,
      // })
      // await signIn("credentials", {
      //   username: values.username,
      //   password: values.password,
      //   role: values.role,
      //   redirect: true,
      //   callbackUrl: "/",
      // })
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 pt-6"
      >
        <div className="col-span-2 flex items-center gap-7">
          <Image
            className="h-[90px] w-[90px] rounded-[10px]"
            src="https://via.placeholder.com/158x158"
            alt="profile image"
            width={90}
            height={90}
          />
          <div>
            <span className="text-base font-light text-secondary">
              Upload Image in{" "}
            </span>
            <span className="text-base font-bold text-secondary">
              jpg or png format
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>News director’s name</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="h-12 rounded-lg bg-zinc-100"
                    placeholder="Type here..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-end">
            <div className="flex h-[50px] items-center">
              <FormField
                control={form.control}
                name="currently_working_here"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6 border border-muted-foreground bg-background"
                        checked={field.value}
                        // @ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="flex items-center gap-2 leading-none">
                      <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                        Current news director
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What station does/did this News Director work for?
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
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
              name="station_ratings_ranking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Station's website</FormLabel>
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
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>News director’s social media</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="email"
                        className="h-12 rounded-lg bg-zinc-100"
                        placeholder="Type here..."
                        {...field}
                      />
                      <div className="absolute bottom-0 right-0 top-0 mr-3 flex items-center justify-center">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Union"
                            d="M18.1789 8.82623C18.1789 7.98129 17.4939 7.29633 16.649 7.29633L10.9342 7.29633L10.9342 1.58068C10.9342 0.735738 10.2492 0.0507812 9.40428 0.0507812C8.55934 0.0507812 7.87438 0.73574 7.87438 1.58068L7.87438 7.29633H2.15856C1.31362 7.29633 0.628662 7.98129 0.628662 8.82623C0.628662 9.67116 1.31362 10.3561 2.15856 10.3561H7.87438L7.87438 16.0711C7.87438 16.9161 8.55934 17.601 9.40427 17.601C10.2492 17.601 10.9342 16.916 10.9342 16.0711V10.3561H16.649C17.4939 10.3561 18.1789 9.67116 18.1789 8.82623Z"
                            fill="#BDBDBD"
                          />
                        </svg>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}
