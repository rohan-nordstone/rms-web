import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Ratings from "@/app/components/LatestRatings/Ratings"
import ShopSlides from "@/app/newsletter/components/ShopSlides"

import getProduct from "../../hooks/utils/getProduct"
import ImageDisplay from "./components/ImageDisplay"
import ProductDescription from "./components/ProductDescription"
import RateTheProduct from "./components/RateTheProduct"
import Route from "./components/Route"
import SpecsDropDown from "./components/SpecsDropDown"

type Props = {
  params: {
    category: string
    id: string
  }
}

export default async function page({ params: { category, id } }: Props) {
  const product = await getProduct(id)

  return (
    <div className="relative">
      <section className="container items-center">
        <Route />
        <Card className="grid gap-14 px-14 py-10 lg:grid-cols-2">
          <ImageDisplay />
          <div className="">
            <h2 className="text-4xl font-bold">{product?.title}</h2>
            <SpecsDropDown product={product} />
            <Separator className="mb-9" />
            <ProductDescription product={product} />
          </div>
        </Card>
        <div className="mt-7 flex flex-col-reverse gap-6 lg:flex-row">
          <Card className="flex flex-1 flex-col gap-7 p-7">
            <h2 className="text-2xl font-bold leading-[30.50px]">
              Review{" "}
              <span className="text-2xl font-normal leading-[30.50px] text-muted-foreground">
                (5)
              </span>
            </h2>
            <div className="flex gap-5">
              <Image
                className="h-[48.08px] w-[48.08px] rounded-[10px]"
                src="https://via.placeholder.com/48x48"
                alt="user"
                width={50}
                height={50}
              />
              <div className="flex-1 rounded-lg rounded-tl-none bg-zinc-100 px-6 py-4">
                <div className="flex items-center justify-start gap-5">
                  <p className="text-base font-bold leading-relaxed text-black">
                    Jane Cooper
                  </p>
                  <div className="ml-auto flex items-center gap-2">
                    <p className="text-base font-semibold leading-relaxed text-black">
                      5.0
                    </p>
                    <Ratings variant="small" stars={5} />
                  </div>
                </div>
                <p className="mb-2 text-base font-light leading-relaxed text-black">
                  Pretium tortor venenatis, mattis lobortis. Sollicitudin non
                  sed eu, augue. Morbi purus ipsum ipsum ante felis. Nisi,
                  vulputate risus nisl, nulla amet morbi habitant vel.
                  Condimentum egestas vestibulum habitant.
                </p>
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <Image
                className="h-[48.08px] w-[48.08px] rounded-[10px]"
                src="https://via.placeholder.com/48x48"
                alt="user"
                width={50}
                height={50}
              />
              <div className="flex-1 rounded-lg rounded-tl-none bg-zinc-100 px-6 py-4">
                <div className="flex items-center justify-start gap-5">
                  <p className="text-base font-bold leading-relaxed text-black">
                    Ralph Edwards
                  </p>
                  <div className="ml-auto flex items-center gap-2">
                    <p className="text-base font-semibold leading-relaxed text-black">
                      4.0
                    </p>
                    <Ratings variant="small" stars={4} />
                  </div>
                </div>
                <p className="mb-2 text-base font-light leading-relaxed text-black">
                  Pretium tortor venenatis, mattis lobortis. Sollicitudin non
                  sed eu, augue. Morbi purus ipsum ipsum ante felis. Nisi,
                  vulputate risus nisl, nulla amet morbi habitant vel.
                  Condimentum egestas vestibulum habitant.
                </p>
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  3 hours ago
                </p>
              </div>
            </div>
            <Separator className="mt-auto border-stone-300" />
            <div className="flex items-center justify-center">
              <button className="text-center text-lg font-semibold text-sky-900">
                3+ more
              </button>
            </div>
          </Card>
          <div className="">
            <Card className="p-7">
              <div className="text-2xl font-bold leading-[30.50px] text-black">
                Buyer ratings
              </div>
              <div className="my-9">
                <h1 className="text-center text-8xl font-medium text-black">
                  4.8
                  <span className="text-2xl font-normal leading-[30.50px] text-zinc-500">
                    /5.0
                  </span>
                </h1>
                <p className="text-center text-xl font-normal leading-relaxed text-sky-900">
                  98% satisfied buyers
                </p>
                <p className="text-center text-base font-light leading-relaxed text-zinc-500">
                  500 ratings
                </p>
              </div>
              <div>
                <div className="grid grid-cols-7 gap-x-6 gap-y-1">
                  <div className="col-span-1 text-right text-base font-bold leading-[33px] text-black">
                    5
                  </div>
                  <div className="col-span-5 flex items-center">
                    <Progress className="bg-zinc-100" value={60} />
                  </div>
                  <div className="col-span-1 text-base font-light leading-[33px] text-black">
                    60
                  </div>
                  <div className="col-span-1 text-right text-base font-bold leading-[33px] text-black">
                    4
                  </div>
                  <div className="col-span-5 flex items-center">
                    <Progress className="bg-zinc-100" value={20} />
                  </div>
                  <div className="col-span-1 text-base font-light leading-[33px] text-black">
                    20
                  </div>
                  <div className="col-span-1 text-right text-base font-bold leading-[33px] text-black">
                    3
                  </div>
                  <div className="col-span-5 flex items-center">
                    <Progress className="bg-zinc-100" value={10} />
                  </div>
                  <div className="col-span-1 text-base font-light leading-[33px] text-black">
                    10
                  </div>
                  <div className="col-span-1 text-right text-base font-bold leading-[33px] text-black">
                    2
                  </div>
                  <div className="col-span-5 flex items-center">
                    <Progress className="bg-zinc-100" value={5} />
                  </div>
                  <div className="col-span-1 text-base font-light leading-[33px] text-black">
                    5
                  </div>
                  <div className="col-span-1 text-right text-base font-bold leading-[33px] text-black">
                    1
                  </div>
                  <div className="col-span-5 flex items-center">
                    <Progress className="bg-zinc-100" value={5} />
                  </div>
                  <div className="col-span-1 text-base font-light leading-[33px] text-black">
                    5
                  </div>
                </div>
              </div>
              <RateTheProduct>
                <Button
                  className="mt-9 min-h-[46px] w-full rounded-[10px] text-center text-base font-bold leading-[33px]"
                  variant={"secondary_outline"}
                >
                  Rate this product
                </Button>
              </RateTheProduct>
            </Card>
          </div>
        </div>
        <div className="mb-9">
          <div className="my-11 flex items-center justify-end gap-9">
            <h2 className="mr-auto text-center text-2xl font-bold">
              Similar products
            </h2>
            <Link
              href={"/shop"}
              className="text-lg font-light text-secondary underline"
            >
              See all
            </Link>
          </div>
          <ShopSlides />
        </div>
      </section>
    </div>
  )
}
