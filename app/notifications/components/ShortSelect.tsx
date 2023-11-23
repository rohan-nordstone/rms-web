"use client"

import { Select, SelectItem } from "@nextui-org/react"

import { cn } from "@/lib/utils"

const recencyOptions = [
  {
    label: "Newest",
    value: "newest",
    description: "Show the newest notifications first",
  },
  {
    label: "All time",
    value: "alltime",
    description: "Show all the notifications",
  },
  {
    label: "Last 7 Days",
    value: "last7days",
    description: "Show notifications from the last 7 days",
  },
  {
    label: "Last 30 Days",
    value: "last30days",
    description: "Show notifications from the last 30 days",
  },
  {
    label: "This Year",
    value: "thisyear",
    description: "Show notifications from the current year",
  },
]
type Props = {
  className?: string
}

export default function FilterSelect({ className }: Props) {
  return (
    <Select
      labelPlacement="outside"
      label="Short:"
      className={cn(
        "max-w-[150px] rounded-[10px] border border-zinc-500 ring-transparent focus:outline-none focus:ring-0 focus:ring-transparent",
        className && className
      )}
    >
      {recencyOptions.map((recencyOption, index) => (
        <SelectItem key={index} value={recencyOption.value}>
          {recencyOption.label}
        </SelectItem>
      ))}
    </Select>
  )
}
