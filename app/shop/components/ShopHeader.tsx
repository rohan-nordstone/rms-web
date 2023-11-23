import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ShopHeader() {
  return (
    <div className="bg-backgroundSVG bg-cover bg-center bg-no-repeat">
      <div className="container grid gap-5 px-20 py-12 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        <div className="relative col-span-3 overflow-hidden rounded-2xl bg-white px-11 py-14 md:col-span-2 xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3">
          <div className="relative z-10">
            <h4 className="text-2xl font-medium text-primary">New Arrival</h4>
            <h2 className="my-4 max-w-sm text-5xl font-bold lg:max-w-md">
              America Needs Local News Hoodie
            </h2>
            <p className="max-w-xs text-base font-light">
              Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
              quam. Et risus commodo natoque pulvinar eu, interdum.
            </p>
            <Button
              variant={"secondary_outline"}
              className="mb-4 mt-14 min-h-[47px] min-w-[152px] rounded-[10px] text-center text-base font-bold leading-[33px]"
            >
              Discover now
            </Button>
          </div>
          <img
            src="/shop/header/image_1.webp"
            alt="product_1"
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="relative col-span-3 min-h-[250px] overflow-hidden rounded-2xl bg-white p-5 md:col-span-1 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 xl:w-full">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <h4 className="max-w-[238px] text-2xl font-bold">
              FRIENDS Themed Anchor Bucket Hat
            </h4>
            <Link
              href="/shop"
              className="text-base font-semibold leading-relaxed text-secondary underline"
            >
              Shop now
            </Link>
          </div>
          <img
            src="/shop/header/image_2.webp"
            alt="product_1"
            className="absolute bottom-0 right-0 max-h-[75%]"
          />
        </div>
        <div className="relative col-span-3 min-h-[250px] overflow-hidden rounded-2xl bg-white p-5 md:col-span-1 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 xl:w-full">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <h4 className="max-w-[238px] text-2xl font-bold">
              New Dope Mug Design
            </h4>
            <Link
              href="/shop"
              className="text-base font-semibold leading-relaxed text-secondary underline"
            >
              Shop now
            </Link>
          </div>
          <img
            src="/shop/header/image_3.webp"
            alt="product_1"
            className="absolute bottom-0 right-0 max-h-[75%]"
          />
        </div>
      </div>
    </div>
  )
}
