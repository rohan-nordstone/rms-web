"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Select, SelectItem } from "@nextui-org/react"

import { createQueryString } from "@/lib/util_functions/createQueryString"
import { cn } from "@/lib/utils"

const sort = [
  {
    label: "Salary",
    value: "salary",
    description: "Sort according to salary",
  },
  {
    label: "Years of Experience",
    value: "years_of_experience",
    description: "Sort by required years of experience",
  },
  {
    label: "Updated At",
    value: "updatedAt",
    description: "Sort by the last update date of the job",
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
    if (!sort[index]) return

    const newSearchParams = [
      { name: "sortBy", value: sort[index].value },
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
      label="Sort:"
      className={cn(
        "max-w-[150px] rounded-[10px] border border-zinc-500 ring-transparent focus:outline-none focus:ring-0 focus:ring-transparent",
        className && className
      )}
    >
      {sort.map((inst, index) => (
        <SelectItem key={index} value={inst.value}>
          {inst.label}
        </SelectItem>
      ))}
    </Select>
  )
}
