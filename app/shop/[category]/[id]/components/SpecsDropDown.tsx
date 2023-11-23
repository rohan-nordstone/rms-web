"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import getCurrencySymbol from "@/lib/util_functions/getCurrencySymbol"
import { Button } from "@/components/ui/button"
import { Product } from "@/app/shop/hooks/types/best-seller-product-types"

import ColourSelect from "./ColourSelect"
import QuantityButton from "./QuantityButton"
import SizeSelect from "./SizeSelect"

type Props = {
  product: Product | undefined
}

export default function SpecsDropDown({ product }: Props) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [defaultValue, setDefaultValue] = useState(
    product?.variants[0].prices[1].amount
  )

  return (
    <div className="grid gap-8 py-10 grid-auto-fit-[210px] lg:gap-5 xl:gap-8">
      <div className="flex items-center justify-start gap-5 lg:justify-start">
        <div className="w-[60px] text-base font-semibold leading-relaxed text-black">
          Color
        </div>
        <ColourSelect />
      </div>
      <div className="flex items-center justify-start gap-5 lg:justify-start">
        <div className="w-[60px] text-base font-semibold leading-relaxed text-black">
          Size
        </div>
        <SizeSelect />
      </div>
      <div className="flex items-center justify-start gap-5 lg:justify-start">
        <div className="w-[60px] text-base font-semibold leading-relaxed text-black">
          Qty
        </div>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex items-center justify-start gap-5 lg:justify-start">
        <div className="w-[60px] text-2xl font-semibold leading-[31px] text-black">
          {getCurrencySymbol(product?.variants[0].prices[1].currency_code!)}
          {defaultValue! * quantity}
        </div>
        <Button
          className="h-[46px] w-[159px] rounded-[10px] text-center text-base font-bold leading-[33px]"
          variant={"secondary_outline"}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
