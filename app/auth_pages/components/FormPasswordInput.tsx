"use client"

import { cn } from "@/lib/utils"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type Props = {
  form: any
  label: string
  name: string
  placeholder?: string
}

export default function FormPasswordInput({
  form,
  label,
  name,
  placeholder,
}: Props) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className="h-12 rounded-lg bg-zinc-100"
                placeholder={
                  placeholder ? placeholder : "Type your password here..."
                }
                {...field}
              />
              <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center">
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setShowPassword(!showPassword)}
                  className={cn(
                    "mr-5 fill-current text-[#828282]",
                    showPassword && "text-primary"
                  )}
                >
                  <path d="M0.472656 8.17802C0.730085 7.7862 0.95612 7.36782 1.23866 7.00256C2.77696 5.02355 4.57896 3.36995 6.75769 2.20113C8.24575 1.40422 9.80916 0.899502 11.473 0.733478C14.7003 0.40807 17.6262 1.31788 20.301 3.20392C22.0402 4.4325 23.4843 5.97321 24.7463 7.71979C25.0603 8.15145 25.0603 8.61632 24.7463 9.04799C23.2896 11.0668 21.5881 12.8001 19.5098 14.0885C17.7895 15.1577 15.9498 15.8351 13.9531 16.0343C11.0524 16.3265 8.37133 15.6093 5.87866 14.0486C3.81923 12.7603 2.13025 11.027 0.692413 9.02142C0.598231 8.8886 0.541723 8.72922 0.472656 8.58312C0.472656 8.4503 0.472656 8.31748 0.472656 8.17802ZM12.5593 2.93828C9.76521 2.99141 7.52997 5.50834 7.57393 8.54327C7.61788 11.5118 10.0038 13.8826 12.8857 13.8229C15.6735 13.7697 17.9213 11.2395 17.8711 8.21786C17.8271 5.24934 15.4412 2.88516 12.5593 2.93828ZM9.95357 8.39717C9.95357 9.99101 11.203 11.3126 12.7099 11.3126C14.2608 11.3126 15.5103 9.97772 15.504 8.32412C15.4977 6.75021 14.242 5.44193 12.7351 5.44857C11.2093 5.44857 9.95357 6.77677 9.95357 8.39717Z" />
                </svg>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
