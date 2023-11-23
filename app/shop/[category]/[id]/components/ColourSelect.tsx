"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const colours = [
  {
    value: "black",
    label: "Black",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "purple",
    label: "Purple",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "orange",
    label: "Orange",
  },
  {
    value: "white",
    label: "White",
  },
]

export default function ColourSelect() {
  return (
    <Select defaultValue={colours[0].value}>
      <SelectTrigger className="h-[46px] w-[159px] rounded-[10px] bg-zinc-100">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {colours.map((colour, index) => (
            <SelectItem key={index} value={colour.value}>
              {colour.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
