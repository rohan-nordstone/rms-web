import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import Details from "./Details"
import LatestRatingFooter from "./LatestRatingFooter"
import Ratings from "./Ratings"
import Review from "./Review"
import ReviewHeader from "./ReviewHeader"
import Tags from "./Tags"

export default function LatestRatingCard() {
  return (
    <Card className="p-4 md:p-8">
      <ReviewHeader />
      <Separator className="mt-6 border-stone-300" />
      <Review />
      <Details />
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-5">
        <Ratings
          className="col-span-1"
          size="rating-md"
          variant="newsRoom"
          stars={4}
        />
        <Ratings
          className="col-span-1"
          size="rating-md"
          variant="coworker"
          stars={5}
        />
        <Ratings
          className="col-span-1"
          size="rating-md"
          variant="recommendation"
          stars={3}
        />
      </div>
      <Tags />
      <Separator />
      <LatestRatingFooter />
    </Card>
  )
}
