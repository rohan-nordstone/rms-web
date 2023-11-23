import Link from "next/link"

import getBestSellerProducts from "../hooks/utils/getBestSellerProducts"
import ShopCard from "./ShopCard"

export default async function BestSellerProducts() {
  const bestSellerProducts = await getBestSellerProducts()
  console.log(bestSellerProducts);

  return (
    <>
      <div className="flex items-center justify-between pb-11">
        <h2 className="text-center text-2xl font-bold">Best Sellers</h2>
        <Link
          href={"/shop"}
          className="text-lg font-light text-secondary underline"
        >
          See all
        </Link>
      </div>
      <div className="grid gap-x-5 gap-y-8 grid-auto-fit">
        {bestSellerProducts?.products.map((product, index) => (
          <ShopCard key={index} product={product} className="w-full" />
        ))}
      </div>
    </>
  )
}
