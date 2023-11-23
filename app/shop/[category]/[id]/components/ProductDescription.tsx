"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Product } from "@/app/shop/hooks/types/best-seller-product-types"

type Props = {
  product: Product | undefined
}

export default function ProductDescription({ product }: Props) {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className="space-y-4 text-base font-light">
      <h3 className="text-xl font-bold text-secondary">Description</h3>
      <p className={cn("text-black", collapsed ? "line-clamp-[10]" : "")}>
        {product?.description}
      </p>
      <h4
        onClick={() => {
          setCollapsed((prev) => !prev)
        }}
        className="cursor-pointer text-base font-semibold text-primary"
      >
        {collapsed ? "See more" : "See less"}
      </h4>
    </div>
  )
}
