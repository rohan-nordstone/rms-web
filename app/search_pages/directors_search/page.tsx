import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import LookingForWork from "@/app/components/LookingForWork"
import ShopSlides from "@/app/newsletter/components/ShopSlides"

import InputSearch from "../_components/InputSearch"
import DirectorsInfoModal from "./components/DirectorsInfoModal"

const directors = [
  "Brooklyn Simmons",
  "Devon Lane",
  "Darlene Robertson",
  "Esther Howard",
  "Jacob Jones",
  "Albert Flores",
]

export default function page() {
  return (
    <section className="container mb-10">
      <div className="mb-11 mt-8 space-y-3">
        <h1 className="text-4xl font-bold text-black">
          Here are your result for “Loream Ipsum”
        </h1>
        <div>
          <span className="text-lg font-normal text-neutral-600">
            There are
          </span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">
            12 Directors
          </span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">with</span>
          <span className="text-lg font-bold text-black"> “Loream Ipsum”</span>
          <span className="text-lg font-normal text-black"> </span>
          <span className="text-lg font-normal text-neutral-600">on </span>
          <span className="text-lg font-bold text-black">TV News Category</span>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex-1 space-y-7">
          <InputSearch findStation={false} />
          {directors.map((inst, index) => (
            <Card
              key={index}
              className="flex flex-wrap items-center gap-x-7 gap-y-5 p-9"
            >
              <Image
                className="h-24 w-24 rounded-2xl"
                alt="avatar"
                width={96}
                height={96}
                src="https://via.placeholder.com/96x96"
              />
              <div>
                <h3 className="text-2xl font-bold leading-loose text-black">
                  {inst}
                </h3>
                <div>
                  <span className="text-base font-light leading-relaxed text-neutral-500">
                    News Director at{" "}
                  </span>
                  <span className="text-base font-semibold leading-relaxed text-black">
                    KABC
                  </span>
                </div>
              </div>
              <DirectorsInfoModal>
                <Button
                  className="min-h-11 h-full w-full min-w-[192px] rounded-lg text-center text-base font-bold leading-loose md:ml-auto md:w-auto"
                  variant={"secondary_outline"}
                >
                  See Details
                </Button>
              </DirectorsInfoModal>
            </Card>
          ))}
          <div className="flex items-center justify-center">
            <Button
              variant={"secondary"}
              className="mt-4 h-11 w-44 rounded-3xl shadow"
            >
              <p className="text-center text-lg font-bold leading-loose text-white">
                Load more
              </p>
            </Button>
          </div>
        </div>
        <div className="hidden w-full max-w-[284px] rounded-2xl bg-cover bg-center bg-no-repeat px-7 py-14 lg:block xl:max-w-[384px]"></div>
      </div>
      <Separator className="mb-16 mt-14 bg-stone-300" />
      <div className="mb-14">
        <h2 className="mb-14 text-center  text-4xl font-bold text-black">
          RateMyStation's Shop
        </h2>
        <ShopSlides />
      </div>
      <LookingForWork />
    </section>
  )
}
