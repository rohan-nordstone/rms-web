import Image from "next/image"
import Link from "next/link"
import { faker } from "@faker-js/faker"

import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

import { TRecommendedNews } from "./CallForAction/DesktopRecommendations"

type Props = {
  className?: string
  news: TRecommendedNews
}

export default function CardDemo({ news, className }: Props) {
  return (
    <Card className={cn("w-full overflow-hidden", className ?? className)}>
      <Link
        href={`/newsletter/details&news_id=${news.id}`}
        className="flex h-full w-full flex-col"
      >
        <Image
          src={`/newsletter/image_${+faker.finance.amount({
            min: 1,
            max: 3,
            dec: 0,
          })}.webp`}
          alt="item-image"
          width={1000}
          height={1000}
          className="flex-1 bg-cover bg-center"
        />
        <CardHeader className="">
          <CardTitle className="line-clamp-2 text-lg font-bold">
            {news?.title}
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  )
}
