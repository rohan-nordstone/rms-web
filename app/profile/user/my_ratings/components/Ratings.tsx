"use client"

import { faker } from "@faker-js/faker"

import { cn } from "@/lib/utils"

interface RatingCategory {
  title: string
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
}

interface RatingsObj {
  product: RatingCategory
  newsRoom: RatingCategory
  coworker: RatingCategory
  recommendation: RatingCategory
  small: RatingCategory
}

const ratingsObj: RatingsObj = {
  product: {
    title: "How is the overall product quality?",
    0: "",
    1: "Very Poor Quality!!",
    2: "Poor Quality!",
    3: "Average Quality",
    4: "Good Quality!",
    5: "Excellent Quality!!",
  },
  newsRoom: {
    title: "Newsroom rating",
    0: "",
    1: "Very Bad Newsroom!!",
    2: "Bad Newsroom!",
    3: "Standard Newsroom",
    4: "Nice Newsroom!",
    5: "Amazing Newsroom!!",
  },
  coworker: {
    title: "Coworker rating",
    0: "",
    1: "Very Not Friendly!!",
    2: "Not Friendly!",
    3: "Fine",
    4: "Friendly!",
    5: "Very Friendly!!",
  },
  recommendation: {
    title: "Would recommend working here?",
    0: "",
    1: "Realy Not Recommend!!",
    2: "Not Recommend!",
    3: "Don’t Know",
    4: "Recommend!",
    5: "Very Recommend!!",
  },
  small: {
    title: "",
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  },
}

type Stars = 0 | 1 | 2 | 3 | 4 | 5

type Props = {
  variant: keyof RatingsObj
  stars: Stars
  className?: string
  size?: "rating-xs" | "rating-sm" | "rating-md" | "rating-lg"
}

export default function Ratings({ variant, stars, className, size }: Props) {
  return (
    <div className={`${className ? className : ""} m-3`}>
      <p className="pb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {ratingsObj[variant].title}
      </p>
      <div className={cn("rating gap-1.5", size && size)}>
        <input
          type="radio"
          name={faker.person.firstName()}
          className="mask-pill mask bg-lime-500"
          disabled={true}
          checked={stars >= 1}
        />
        <input
          type="radio"
          name={faker.person.firstName()}
          className="mask-pill mask bg-lime-500"
          disabled={true}
          checked={stars >= 2}
        />
        <input
          type="radio"
          name={faker.person.firstName()}
          className="mask-pill mask bg-lime-500"
          disabled={true}
          checked={stars >= 3}
        />
        <input
          type="radio"
          name={faker.person.firstName()}
          className="mask-pill mask bg-lime-500"
          disabled={true}
          checked={stars >= 4}
        />
        <input
          type="radio"
          name={faker.person.firstName()}
          className="mask-pill mask bg-lime-500"
          disabled={true}
          checked={stars >= 5}
        />
      </div>
      <p className="pt-4 font-bold text-black text-secondary dark:text-gray-400">
        {ratingsObj[variant][stars]}
      </p>
    </div>
  )
}
