import Link from "next/link"
import axios, { isAxiosError } from "axios"

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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/recommended?page=1&itemsPerPage=3`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error.response.data.message", error.response?.data.message)
    }
    return [] as TRecommendedNews[]
  }
}

export default async function DesktopRecommendations() {
  const recommendedNews = await getRecommendedNews()

  return (
    <>
      <div className="flex items-center justify-between gap-5">
        <span className="text-2xl font-bold">Recommended</span>
        <Link
          href={"/newsletter"}
          className="text-base font-normal text-secondary"
        >
          See all
        </Link>
      </div>
      <div className="space-y-7 py-9">
        {!recommendedNews.length ? (
          <div className="flex min-h-[300px] w-full items-center justify-center">
            <span className="text-xl font-bold">No recommended news</span>
          </div>
        ) : (
          recommendedNews?.map((news, index) => (
            <NewsletterCard
              key={index}
              className="max-w-[284px] xl:max-w-[384px]"
              news={news}
            />
          ))
        )}
      </div>
    </>
  )
}
