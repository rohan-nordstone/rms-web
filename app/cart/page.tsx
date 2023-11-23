"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import QuantityButton from "../shop/[category]/[id]/components/QuantityButton"

export default function page() {
  return (
    <section className="container items-center pb-9 pt-10">
      <h2 className="mb-7 text-4xl font-bold text-black">My Cart</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-2">
          <div className="col-span-2 grid h-14 grid-cols-4">
            <div className="col-span-2">
              <p className="h-full pl-7 text-lg font-medium leading-relaxed text-zinc-500">
                Product
              </p>
            </div>
            <div className="col-span-1">
              <p className="h-full text-center text-lg font-medium leading-relaxed text-zinc-500">
                Quantity
              </p>
            </div>
            <div className="col-span-1">
              <p className="h-full text-center text-lg font-medium leading-relaxed text-zinc-500">
                Total
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="grid grid-cols-4 p-7 pr-0">
              <div className="col-span-2 flex items-center gap-6">
                <Image
                  className="h-[142px] w-[142px] rounded-[15px]"
                  width={142}
                  height={142}
                  src="https://via.placeholder.com/142x142"
                  alt={"avatar"}
                />
                <h4 className="w-[205.45px] text-xl font-bold leading-[30.50px] text-black">
                  America Needs Local News Sweatshirt -<br />
                  Red
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <QuantityButton quantity={3} setQuantity={() => {}} />
              </div>
              <div className="flex items-center justify-end gap-4">
                <h5 className="text-center text-2xl font-semibold leading-[31px] text-black">
                  $33.50
                </h5>
                <Button size={"icon"} variant={"ghost"} className="mr-7">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Component 87">
                      <path
                        id="Union"
                        d="M30.8781 16.4696C30.1912 15.7827 29.0777 15.7827 28.3908 16.4696L23.7438 21.1166L19.0961 16.469C18.4093 15.7821 17.2957 15.7821 16.6089 16.469C15.922 17.1558 15.922 18.2694 16.6089 18.9562L21.2565 23.6039L16.6118 28.2486C15.9249 28.9355 15.9249 30.049 16.6118 30.7359C17.2986 31.4227 18.4122 31.4227 19.099 30.7359L23.7438 26.0911L28.3879 30.7353C29.0748 31.4221 30.1884 31.4221 30.8752 30.7353C31.562 30.0485 31.562 28.9349 30.8752 28.248L26.231 23.6039L30.8781 18.9568C31.5649 18.27 31.5649 17.1564 30.8781 16.4696Z"
                        fill="#828282"
                      />
                    </g>
                  </svg>
                </Button>
              </div>
            </Card>
            <Card className="grid grid-cols-4 p-7 pr-0">
              <div className="col-span-2 flex items-center gap-6">
                <img
                  className="h-[141.71px] w-[142.49px] rounded-[15px]"
                  src="https://via.placeholder.com/142x142"
                />
                <h4 className="w-[205.45px] text-xl font-bold leading-[30.50px] text-black">
                  America Needs Local News Sweatshirt -<br />
                  Red
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <QuantityButton quantity={3} setQuantity={() => {}} />
              </div>
              <div className="flex items-center justify-end gap-4">
                <h5 className="text-center text-2xl font-semibold leading-[31px] text-black">
                  $33.50
                </h5>
                <Button size={"icon"} variant={"ghost"} className="mr-7">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Component 87">
                      <path
                        id="Union"
                        d="M30.8781 16.4696C30.1912 15.7827 29.0777 15.7827 28.3908 16.4696L23.7438 21.1166L19.0961 16.469C18.4093 15.7821 17.2957 15.7821 16.6089 16.469C15.922 17.1558 15.922 18.2694 16.6089 18.9562L21.2565 23.6039L16.6118 28.2486C15.9249 28.9355 15.9249 30.049 16.6118 30.7359C17.2986 31.4227 18.4122 31.4227 19.099 30.7359L23.7438 26.0911L28.3879 30.7353C29.0748 31.4221 30.1884 31.4221 30.8752 30.7353C31.562 30.0485 31.562 28.9349 30.8752 28.248L26.231 23.6039L30.8781 18.9568C31.5649 18.27 31.5649 17.1564 30.8781 16.4696Z"
                        fill="#828282"
                      />
                    </g>
                  </svg>
                </Button>
              </div>
            </Card>
            <Card className="grid grid-cols-4 p-7 pr-0">
              <div className="col-span-2 flex items-center gap-6">
                <img
                  className="h-[141.71px] w-[142.49px] rounded-[15px]"
                  src="https://via.placeholder.com/142x142"
                />
                <h4 className="w-[205.45px] text-xl font-bold leading-[30.50px] text-black">
                  America Needs Local News Sweatshirt -<br />
                  Red
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <QuantityButton quantity={3} setQuantity={() => {}} />
              </div>
              <div className="flex items-center justify-end gap-4">
                <h5 className="text-center text-2xl font-semibold leading-[31px] text-black">
                  $33.50
                </h5>
                <Button size={"icon"} variant={"ghost"} className="mr-7">
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Component 87">
                      <path
                        id="Union"
                        d="M30.8781 16.4696C30.1912 15.7827 29.0777 15.7827 28.3908 16.4696L23.7438 21.1166L19.0961 16.469C18.4093 15.7821 17.2957 15.7821 16.6089 16.469C15.922 17.1558 15.922 18.2694 16.6089 18.9562L21.2565 23.6039L16.6118 28.2486C15.9249 28.9355 15.9249 30.049 16.6118 30.7359C17.2986 31.4227 18.4122 31.4227 19.099 30.7359L23.7438 26.0911L28.3879 30.7353C29.0748 31.4221 30.1884 31.4221 30.8752 30.7353C31.562 30.0485 31.562 28.9349 30.8752 28.248L26.231 23.6039L30.8781 18.9568C31.5649 18.27 31.5649 17.1564 30.8781 16.4696Z"
                        fill="#828282"
                      />
                    </g>
                  </svg>
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Card className="mt-14 px-9 py-7">
            <h4 className="text-2xl font-bold leading-[30.50px] text-black">
              Order Summary
            </h4>
            <div className="mt-10 flex items-center justify-between">
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Subtotal
              </p>
              <p className="text-right text-base font-semibold leading-relaxed text-black">
                $33.50
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-base font-light leading-relaxed text-zinc-500">
                Shipping
              </p>
              <p className="text-right text-base font-semibold leading-relaxed text-black">
                Free
              </p>
            </div>
            <Input
              placeholder="Add cupon code here..."
              className="mb-7 mt-5 h-12 w-full rounded-lg bg-zinc-100"
            />
            <div className="mt-5 flex items-center justify-between">
              <h4 className="text-xl font-semibold leading-[30.50px] text-black">
                Total
              </h4>
              <div className="text-xl font-semibold leading-[30.50px] text-black">
                $33.50
              </div>
            </div>
            <Button
              className="relative mt-4 h-11 w-full rounded-lg"
              variant={"secondary_outline"}
            >
              <p className="text-center text-base font-bold leading-loose">
                Checkout
              </p>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
