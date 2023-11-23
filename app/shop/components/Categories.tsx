import Link from "next/link"

import getBestSellerProducts from "../hooks/utils/getBestSellerProducts"
import ShopCard from "./ShopCard"

const categories = [
  "T-shirt",
  "Hoodie/Sweater",
  "Hat",
  "Baby",
  "Accesories",
  "Poster",
  "Sticker",
  "Bag",
  "Mug",
]

export default async function Categories() {
  const bestSellerProducts = await getBestSellerProducts()

  return (
    <div className="">
      <div className="mb-11 mt-14 flex items-center justify-end gap-9">
        <h2 className="mr-auto text-center text-2xl font-bold">Category</h2>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={"/shop"}
            className="text-lg font-light text-muted-foreground"
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="grid gap-x-5 gap-y-8 grid-auto-fit">
        {bestSellerProducts?.products.map((product, index) => (
          <ShopCard key={index} product={product} className="w-full" />
        ))}
      </div>
    </div>
  )
}
