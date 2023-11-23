"use client"

import { Select, SelectItem } from "@nextui-org/react"

import { cn } from "@/lib/utils"

export const notificationOptions = [
  {
    label: "Read",
    value: "read",
    description: "View read notifications",
  },
  {
    label: "Unread",
    value: "unread",
    description: "View unread notifications",
  },
]

type Props = {
  className?: string
}

export default function FilterSelect({ className }: Props) {
  return (
    <Select
      labelPlacement="outside"
      label="Filter:"
      className={cn(
        "max-w-[150px] rounded-[10px] border border-zinc-500 ring-transparent focus:outline-none focus:ring-0 focus:ring-transparent",
        className && className
      )}
    >
      {notificationOptions.map((notificationOption, index) => (
        <SelectItem
          key={index} 
          value={notificationOption.value}
        >
          {notificationOption.label}
        </SelectItem>
      ))}
    </Select>
  )
}
