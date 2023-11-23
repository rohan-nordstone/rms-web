"use client"

import { useState } from "react"
import Image from "next/image"

const detailsArray = [
  "/shop/details/image_1.webp",
  "/shop/details/image_2.webp",
  "/shop/details/image_3.webp",
  "/shop/details/image_4.webp",
  "/shop/details/image_1.webp",
  "/shop/details/image_2.webp",
  "/shop/details/image_3.webp",
  "/shop/details/image_4.webp",
]

export default function ImageDisplay() {
  const [mainImage, setMainImage] = useState(detailsArray[0])
  return (
    <div className="mx-auto w-full space-y-5 md:w-3/4 lg:w-full">
      <Image
        className="w-full rounded-lg object-cover object-center"
        src={mainImage}
        alt="avatar"
        width={1080}
        height={720}
      />
      <div className="flex overflow-x-scroll">
        {detailsArray.map((image, index) => (
          <Image
            key={index}
            onClick={() => setMainImage(image)}
            src={image}
            alt="product"
            width={125}
            height={125}
            className="h-[125px] w-[125px]"
          />
        ))}
      </div>
    </div>
  )
}
