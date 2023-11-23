"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "@/components/ui/use-toast"

import SubmitNewsDirector from "./SubmitNewsDirector"

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
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email address</FormLabel>
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
          <FormField
            control={form.control}
            name="job_position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is/was your job position?</FormLabel>
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
          <div className="flex items-end">
            <div className="flex h-[50px] items-center">
              <FormField
                control={form.control}
                name="currently_working_here"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
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
                        I am currently working for this station
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div>
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Vector">
                                  <path
                                    id="Vector_2"
                                    d="M0.44873 10.5951C0.44873 10.208 0.44873 9.81329 0.44873 9.42619C0.463916 9.28198 0.479103 9.14536 0.494289 9.00114C0.737265 6.84555 1.55731 4.94801 3.00758 3.3389C4.54896 1.63112 6.4624 0.560916 8.73271 0.158639C9.11236 0.0903274 9.49201 0.0523767 9.87166 0.00683594C10.2589 0.00683594 10.6537 0.00683594 11.041 0.00683594C11.3751 0.0523767 11.7092 0.0827373 12.0433 0.135868C14.1313 0.485014 15.9537 1.38065 17.4495 2.8835C19.697 5.13018 20.6841 7.85503 20.3956 11.0201C20.2058 13.1378 19.3705 15.0125 17.9506 16.6065C16.0676 18.7241 13.6985 19.8626 10.8663 19.9992C8.89216 20.0979 7.03947 19.6349 5.34622 18.6027C2.74941 17.0163 1.15488 14.7241 0.592998 11.7336C0.532254 11.3541 0.501882 10.9746 0.44873 10.5951ZM10.4563 1.82847C5.96885 1.81329 2.30143 5.47173 2.27105 9.98786C2.24068 14.4736 5.93089 18.17 10.4487 18.1852C14.9438 18.2004 18.6112 14.5419 18.6416 10.0182C18.6644 5.54004 14.9742 1.83606 10.4563 1.82847ZM9.54516 12.1207C9.54516 13.0239 9.53757 13.9271 9.54516 14.8304C9.55275 15.3844 9.95518 15.7791 10.4791 15.7564C10.9878 15.7412 11.3523 15.3541 11.3523 14.8C11.3599 13.7222 11.3523 12.6368 11.3523 11.559C11.3523 10.8531 11.3523 10.1548 11.3523 9.44896C11.3523 9.16813 11.2688 8.91765 11.0638 8.73549C10.7828 8.48501 10.4487 8.4167 10.0995 8.56092C9.75017 8.70513 9.54516 8.97837 9.54516 9.35788C9.54516 10.2839 9.55275 11.2023 9.54516 12.1207ZM9.24144 5.44896C9.23385 6.1093 9.77295 6.67097 10.4487 6.67856C11.1017 6.68615 11.656 6.13966 11.6636 5.48691C11.6712 4.81898 11.1321 4.2649 10.4563 4.2649C9.79573 4.24972 9.25663 4.78103 9.24144 5.44896Z"
                                    fill="#194D79"
                                  />
                                </g>
                              </svg>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondary">
                            <p>
                              This information is taken
                              <br />
                              for verification purposes,
                              <br />
                              and will remain private.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="station_ratings_ranking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    In the market, where does this station rank in ratings?
                  </FormLabel>
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
              name="paired_with_photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    (For reportesr only) Paired with a photo?
                  </FormLabel>
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
          <FormField
            control={form.control}
            name="sign_contract_requirement"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-x-3 space-y-0">
                <FormLabel>
                  Does this station require you to sign a contract?
                </FormLabel>
                <div className="flex w-full items-center pt-5">
                  <div className="flex gap-3">
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6 border border-muted-foreground bg-white"
                        checked={field.value}
                        onClick={() => field.onChange(!field.value)}
                        // @ts-ignore
                        // onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="flex items-center gap-2 leading-none">
                      <FormLabel>Yes</FormLabel>
                    </div>
                  </div>
                  <div className="mx-auto flex gap-3">
                    <FormControl>
                      <Checkbox
                        className="h-6 w-6 border border-muted-foreground bg-white"
                        checked={!field.value}
                        onClick={() => field.onChange(!field.value)}
                        // @ts-ignore
                        // onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="flex items-center gap-2 leading-none">
                      <FormLabel>No</FormLabel>
                    </div>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contract_duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>If so, for how long?</FormLabel>
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
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="yearly_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is/was your yearly salary?</FormLabel>
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
              name="current_news_director"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who is the current news director?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-16 rounded-lg bg-zinc-100">
                        <SelectValue placeholder="Choose options" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="space-y-2">
                      <SelectItem value="Choose options 1">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-[51.99px] w-[51.99px] rounded-lg"
                            src="https://via.placeholder.com/52x52"
                          />
                          <p className="text-lg font-semibold leading-relaxed text-black">
                            Brooklyn Simmons
                          </p>
                          <Badge>Current</Badge>
                        </div>
                      </SelectItem>
                      <SelectItem value="Choose options 2">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-[51.99px] w-[51.99px] rounded-lg"
                            src="https://via.placeholder.com/52x52"
                          />
                          <p className="text-lg font-semibold leading-relaxed text-black">
                            Theresa Webb
                          </p>
                        </div>
                      </SelectItem>
                      <SelectItem value="Choose options 3">
                        <div className="flex items-center gap-4">
                          <img
                            className="h-[51.99px] w-[51.99px] rounded-lg"
                            src="https://via.placeholder.com/52x52"
                          />
                          <p className="text-lg font-semibold leading-relaxed text-black">
                            Cody Fisher
                          </p>
                        </div>
                      </SelectItem>
                      <Separator />
                      <SubmitNewsDirector>
                        <h4 className="cursor-pointer py-4 text-center text-sm font-semibold text-muted-foreground hover:underline">
                          Add news director
                        </h4>
                      </SubmitNewsDirector>
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
              name="brief_experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Briefly describe your overall experience working for
                    him/her?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-44 rounded-lg bg-zinc-100"
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
              name="currently_working_here"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start space-x-3 space-y-0">
                  <FormLabel>
                    While working for this station have you experienced...
                  </FormLabel>
                  <div className="grid w-full gap-x-3 gap-y-5 pt-5 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Sexual Harassment
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Racial Discrimination
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Sexual Discrimination
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          An Overall Toxic Work Environment
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="explaination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    If you answered yes to any of the previous, please explain
                    more.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-44 rounded-lg bg-zinc-100"
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
              name="currently_working_here"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start space-x-3 space-y-0">
                  <FormLabel>
                    While working for this station have you experienced...
                  </FormLabel>
                  <div className="grid w-full gap-y-5 pt-5 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Organized
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Unorganized
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Educational
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Open to Creative Control
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Positive, Fun
                        </FormLabel>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 border border-muted-foreground bg-white"
                          checked={field.value}
                          // @ts-ignore
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="flex items-center gap-2 leading-none">
                        <FormLabel className="text-sm font-light leading-relaxed text-black sm:text-base">
                          Negative, Toxic
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="extra_thoughts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Is there anything else you think we should know about this
                    station?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-44 rounded-lg bg-zinc-100"
                      placeholder="Type here..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 flex flex-wrap items-center justify-center gap-x-20 gap-y-5 py-6">
            <div className="space-y-5">
              <p className="text-sm font-normal text-black">Newsroom rating</p>
              <div className={cn("rating gap-1.5")}>
                <input
                  type="radio"
                  name={"newsroom_rating"}
                  className="mask-pill mask bg-lime-500"
                  checked={true}
                />
                <input
                  type="radio"
                  name={"newsroom_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"newsroom_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"newsroom_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"newsroom_rating"}
                  className="mask-pill mask bg-lime-500"
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm font-normal text-black">Coworker rating</p>
              <div className={cn("rating gap-1.5")}>
                <input
                  type="radio"
                  name={"coworker_rating"}
                  className="mask-pill mask bg-lime-500"
                  checked={true}
                />
                <input
                  type="radio"
                  name={"coworker_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"coworker_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"coworker_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"coworker_rating"}
                  className="mask-pill mask bg-lime-500"
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm font-normal text-black">
                Would recommend working here?
              </p>
              <div className={cn("rating gap-1.5")}>
                <input
                  type="radio"
                  name={"work_recommendation_rating"}
                  className="mask-pill mask bg-lime-500"
                  checked={true}
                />
                <input
                  type="radio"
                  name={"work_recommendation_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"work_recommendation_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"work_recommendation_rating"}
                  className="mask-pill mask bg-lime-500"
                />
                <input
                  type="radio"
                  name={"work_recommendation_rating"}
                  className="mask-pill mask bg-lime-500"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <FormField
              control={form.control}
              name="currently_working_here"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please verified your rating</FormLabel>
                  <div className="flex items-center gap-5">
                    <div className="inline-block cursor-pointer rounded-[10px] border-2 border-dashed border-[#828282] p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus h-[38px] w-[38px] fill-current text-[#828282]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </div>
                    <p className="cursor-pointer text-base font-light text-secondary">
                      Upload work document here
                    </p>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 flex items-end sm:col-span-1">
            <div className="flex items-center sm:h-[76px]">
              <FormField
                control={form.control}
                name="link_experience"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
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
                        Link my profile experience information
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div>
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Vector">
                                  <path
                                    id="Vector_2"
                                    d="M0.44873 10.5951C0.44873 10.208 0.44873 9.81329 0.44873 9.42619C0.463916 9.28198 0.479103 9.14536 0.494289 9.00114C0.737265 6.84555 1.55731 4.94801 3.00758 3.3389C4.54896 1.63112 6.4624 0.560916 8.73271 0.158639C9.11236 0.0903274 9.49201 0.0523767 9.87166 0.00683594C10.2589 0.00683594 10.6537 0.00683594 11.041 0.00683594C11.3751 0.0523767 11.7092 0.0827373 12.0433 0.135868C14.1313 0.485014 15.9537 1.38065 17.4495 2.8835C19.697 5.13018 20.6841 7.85503 20.3956 11.0201C20.2058 13.1378 19.3705 15.0125 17.9506 16.6065C16.0676 18.7241 13.6985 19.8626 10.8663 19.9992C8.89216 20.0979 7.03947 19.6349 5.34622 18.6027C2.74941 17.0163 1.15488 14.7241 0.592998 11.7336C0.532254 11.3541 0.501882 10.9746 0.44873 10.5951ZM10.4563 1.82847C5.96885 1.81329 2.30143 5.47173 2.27105 9.98786C2.24068 14.4736 5.93089 18.17 10.4487 18.1852C14.9438 18.2004 18.6112 14.5419 18.6416 10.0182C18.6644 5.54004 14.9742 1.83606 10.4563 1.82847ZM9.54516 12.1207C9.54516 13.0239 9.53757 13.9271 9.54516 14.8304C9.55275 15.3844 9.95518 15.7791 10.4791 15.7564C10.9878 15.7412 11.3523 15.3541 11.3523 14.8C11.3599 13.7222 11.3523 12.6368 11.3523 11.559C11.3523 10.8531 11.3523 10.1548 11.3523 9.44896C11.3523 9.16813 11.2688 8.91765 11.0638 8.73549C10.7828 8.48501 10.4487 8.4167 10.0995 8.56092C9.75017 8.70513 9.54516 8.97837 9.54516 9.35788C9.54516 10.2839 9.55275 11.2023 9.54516 12.1207ZM9.24144 5.44896C9.23385 6.1093 9.77295 6.67097 10.4487 6.67856C11.1017 6.68615 11.656 6.13966 11.6636 5.48691C11.6712 4.81898 11.1321 4.2649 10.4563 4.2649C9.79573 4.24972 9.25663 4.78103 9.24144 5.44896Z"
                                    fill="#194D79"
                                  />
                                </g>
                              </svg>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-secondary">
                            <p>
                              This information is taken
                              <br />
                              for verification purposes,
                              <br />
                              and will remain private.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
