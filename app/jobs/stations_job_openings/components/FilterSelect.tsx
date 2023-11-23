"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Select, SelectItem } from "@nextui-org/react"

import { createQueryString } from "@/lib/util_functions/createQueryString"
import { cn } from "@/lib/utils"

const crew = [
  {
    label: "Producer",
    value: "producer",
    description:
      "Oversees the production of news programs and makes editorial decisions",
  },
  {
    label: "Manager",
    value: "manager",
    description:
      "Oversees the employees progress makes important bussiness decisions",
  },
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
    value: "camera operator",
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
    label: "Weather Forecaster",
    value: "weather forecaster",
    description: "Provides weather updates and forecasts for viewers",
  },
  {
    label: "Sports Analyst",
    value: "sports analyst",
    description:
      "Covers sports events and provides analysis on sports-related news",
  },
]

type Props = {
  className?: string
}

export default function FilterSelect({ className }: Props) {
  const [value, setValue] = useState<Set<never>>(new Set([]))
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const index = JSON.parse(JSON.stringify(value)).currentKey
    if (!crew[index]) return

    const newSearchParams = [
      { name: "position", value: crew[index].value },
      { name: "page", value: "1" },
    ]
    const queryString = createQueryString(searchParams, newSearchParams)
    router.push(pathname + "?" + queryString)
  }, [value])

  return (
    <Select
      selectedKeys={value}
      // @ts-ignore
      onSelectionChange={setValue}
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
