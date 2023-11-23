"use client"

import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { UseWindowSize } from "@/lib/hooks/window_size_hook"
import { cn } from "@/lib/utils"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import CardDemo from "@/app/components/Card"
import { cardsArr } from "@/app/components/cardsArr"

type Props = {
  className?: string
}

export default function ShopSlides({ className }: Props) {
  const [swiperRef, setSwiperRef] = useState(null)
  const [width, height] = UseWindowSize()

  return (
    <div className={cn(className ?? className)}>
      <Swiper
        onSwiper={() => setSwiperRef(swiperRef)}
        // this is suppose to work but isn't working
        // slidesPerView={"auto"}
        slidesPerView={
          width >= 1440
            ? 4
            : width >= 1310
            ? 3.75
            : width >= 1280
            ? 3.5
            : width >= 1200
            ? 3.25
            : width >= 1024
            ? 3
            : 2
        }
        centeredSlides={false}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className={cn(className ?? className)}
      >
        {cardsArr.map((card, index) => (
          <SwiperSlide key={index}>
            <CardDemo card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
