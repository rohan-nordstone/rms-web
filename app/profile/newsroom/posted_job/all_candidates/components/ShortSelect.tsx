"use client"

import { Select, SelectItem } from "@nextui-org/react"

import { cn } from "@/lib/utils"

const durations = [
  {
    label: "Shortest",
    value: "shortest",
    description: "A very brief time period, typically seconds or minutes",
  },
  {
    label: "Moderate",
    value: "moderate",
    description: "An intermediate time duration, usually hours or half a day",
  },
  {
    label: "Long",
    value: "long",
    description: "A significant amount of time, often days or weeks",
  },
  {
    label: "Very Long",
    value: "very_long",
    description: "An extended period, often months or years",
  },
]

type Props = {
  className?: string
}

export default function ShortSelect({ className }: Props) {
  return (
    <Select
      labelPlacement="outside"
      label="Short:"
      className={cn(
        "max-w-[150px] rounded-[10px] border border-zinc-500 ring-transparent focus:outline-none focus:ring-0 focus:ring-transparent",
        className && className
      )}
    >
      {durations.map((durations, index) => (
        <SelectItem  key={index}  value={durations.value}>
          {durations.label}
        </SelectItem>
      ))}
    </Select>
  )
}
