import Link from "next/link"

import getCurrencySymbol from "@/lib/util_functions/getCurrencySymbol"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { Product } from "../hooks/types/best-seller-product-types"

type Props = {
  product: Product
  className?: string
}

export default function ShopCard({ product, className }: Props) {
  return (
    <Card
      className={cn(
        "flex min-h-[518px] w-[305px] flex-col overflow-hidden rounded-[15px] bg-white shadow",
        className ?? className
      )}
    >
      <div className="relative">
        <div className="aspect aspect-h-3 aspect-w-3 sm:aspect-h-4">
          <img
            className="object-cover object-center"
            alt="avatar"
            src={product.thumbnail}
          />
        </div>
        {"isBestSeller" && false && (
          <div className="absolute left-5 top-0">
            <h3 className="absolute left-1 right-1 top-1 flex flex-col items-center justify-center text-center text-sm font-bold text-primary-foreground">
              <p>Best</p>
              <p className="text-xs font-medium">Seller</p>
            </h3>
            <svg
              width="52"
              height="69"
              viewBox="0 0 52 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-12"
            >
              <path
                d="M51.9613 65.0558C51.9613 67.5216 49.1516 68.9345 47.1722 67.464L28.0965 53.2927C27.0343 52.5036 25.5806 52.5036 24.5184 53.2927L5.44272 67.464C3.46333 68.9345 0.653687 67.5216 0.653687 65.0558V0.824219H51.9613V65.0558Z"
                fill="#89C400"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-auto flex flex-1 flex-col p-[18px]">
        <div className="mb-5 flex flex-1 flex-col justify-between">
          <p className="line-clamp-2 text-xl font-bold leading-[30.50px] text-black">
            {product.title}
          </p>
          <p className="text-base font-medium text-primary">
            {`${getCurrencySymbol(
              product.variants[0].prices[1].currency_code
            )} ${
              product.variants[0].original_price ||
              product.variants[0].prices[1].amount
            }`}
          </p>
        </div>
        <div className="mt-auto flex flex-col items-center gap-3 lg:flex-row lg:gap-[6px]">
          <Link className="w-full flex-1" href={`/shop/category/${product.id}`}>
            <Button
              className="h-12 w-full rounded-[10px] px-0 text-center text-base font-bold leading-[33px]"
              variant={"secondary_outline"}
            >
              View Details
            </Button>
          </Link>
          <Link className="w-full flex-1" href="/cart">
            <Button
              className="h-12 w-full rounded-[10px] px-0 text-center text-base font-bold leading-[33px]"
              variant={"secondary"}
            >
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
