"use client"

import { Select, SelectItem } from "@nextui-org/react"

import { cn } from "@/lib/utils"

const crew = [
  {
    label: "Anchor",
    value: "anchor",
    description: "The main news presenter who leads the broadcast",
  },
  {
    label: "Reporter",
    value: "reporter",
    description:
      "Field correspondent who gathers news stories and reports from the scene",
  },
  {
    label: "Camera Operator",
    value: "camera_operator",
    description:
      "Responsible for operating the camera during live broadcasts and recordings",
  },
  {
    label: "Editor",
    value: "editor",
    description:
      "Edits and assembles video footage and reports into news stories",
  },
  {
    label: "Producer",
    value: "producer",
    description:
      "Oversees the production of news programs and makes editorial decisions",
  },
  {
    label: "Weather Forecaster",
    value: "weather_forecaster",
    description: "Provides weather updates and forecasts for viewers",
  },
  {
    label: "Sports Analyst",
    value: "sports_analyst",
    description:
      "Covers sports events and provides analysis on sports-related news",
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
      {crew.map((crew, index) => (
        <SelectItem key={index} value={crew.value}>
          {crew.label}
        </SelectItem>
      ))}
    </Select>
  )
}
