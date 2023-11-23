import { Button } from "@/components/ui/button"

import BestSellerProducts from "./components/BestSellerProducts"
import Categories from "./components/Categories"
import NewArrivals from "./components/NewArrivalsProducts"
import SearchHeader from "./components/SearchHeader"
import ShopHeader from "./components/ShopHeader"

export default function page() {
  return (
    <div className="relative">
      <ShopHeader />
      <section className="container items-center">
        <SearchHeader />
        <BestSellerProducts />
         <NewArrivals />
        <Categories />
        <div className="flex items-center justify-center py-9">
          <Button
            className="min-h-[43px] min-w-[196px] rounded-[40px] text-center text-lg font-bold leading-[33px] shadow"
            variant={"secondary"}
          >
            See All Product
          </Button>
        </div>
      </section>
    </div>
  )
}
