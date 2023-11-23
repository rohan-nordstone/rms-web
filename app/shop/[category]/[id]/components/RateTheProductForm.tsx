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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Ratings from "@/app/components/LatestRatings/Ratings"

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

export default function RateTheProductForm() {
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
        <div className="mb-6 flex flex-wrap gap-6">
          <Image
            width={142}
            height={142}
            alt="America Needs Local News Sweatshirt Blue"
            className="rounded-2xl"
            src="/shop/details/image_1.webp"
          />
          <h3 className="max-w-[250px] text-xl font-bold leading-[30.50px] text-black">
            America Needs Local News Sweatshirt - Black
          </h3>
          <div className="flex flex-1 items-center justify-center">
            {/* NOTE: This is just a temporary component. You need to write a different component to take the input of the user  */}
            <Ratings variant="product" stars={0} />
          </div>
        </div>
        <div className="">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leave a review for this product</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    className="rounded-lg bg-zinc-100"
                    placeholder="Type here..."
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
