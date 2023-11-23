import axios, { isAxiosError } from "axios"

import { Button } from "@/components/ui/button"

import NewsletterCard from "../NewsletterCard"

export type TRecommendedNews = {
  id: number
  photoId: number
  slug: string
  title: string
  excerpt: string
  content: string
  commentDisabledAt: string
  unpublished: string
  createdAt: string
  updatedAt: string
  visits: any[] // You may want to define a more specific type for visits if needed
}

const getRecommendedNews = async () => {
  // demo url http://localhost:5000/news/recommended?page=1&itemsPerPage=2
  try {
    const { data } = await axios.get<TRecommendedNews[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/recommended?page=1&itemsPerPage=8`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error.response.data.message", error.response?.data.message)
    }
    return [] as TRecommendedNews[]
  }
}

export default async function MobileRecommendations() {
  const recommendedNews = await getRecommendedNews()

  return (
    <div>
      <div className="text-start text-3xl font-bold text-black lg:text-center">
        Newsletter
      </div>
      <div className="my-8 grid gap-x-12 gap-y-6 grid-auto-fit-[290px]">
        {!recommendedNews.length ? (
          <div className="flex min-h-[300px] w-full items-center justify-center">
            <span className="text-xl font-bold">No recommended news</span>
          </div>
        ) : (
          recommendedNews?.map((news, index) => (
            <NewsletterCard key={index} news={news} />
          ))
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant={"secondary"}
          className="mb-8 h-11 w-44  rounded-3xl shadow"
        >
          <p className="text-center text-lg font-bold leading-loose">
            See More
          </p>
        </Button>
      </div>
    </div>
  )
}
