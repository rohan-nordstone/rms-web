import { faker } from "@faker-js/faker"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
  stars: 0 | 1 | 2 | 3 | 4 | 5
  size?: "rating-sm" | "rating-md" | "rating-lg"
}

export default function Ratings({ className, stars, size }: Props) {
  return (
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
  )
}
