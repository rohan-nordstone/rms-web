"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sizes = [
  {
    value: "s",
    label: "S",
  },
  {
    value: "m",
    label: "M",
  },
  {
    value: "l",
    label: "L",
  },
  {
    value: "xl",
    label: "XL",
  },
  {
    value: "xxl",
    label: "XXL",
  },
  {
    value: "xxxl",
    label: "XXXL",
  },
]

export default function ColourSelect() {
  return (
    <Select defaultValue={sizes[0].value}>
      <SelectTrigger className="h-[46px] w-[159px] rounded-[10px] bg-zinc-100">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sizes.map((size, index) => (
            <SelectItem key={index} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
