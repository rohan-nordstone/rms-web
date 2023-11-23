import axios, { isAxiosError } from "axios"

import { Button } from "@/components/ui/button"

import ArticleSuggestion from "./ArticleSuggestion"

export type TNews = {
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
}

type TUser = {
  id: number
  name: string
  email: string
  username: string
  type: number
  stationType: number
  createdAt: string
  updatedAt: string
  news: TNews[]
  newsCount: number
}

type Props = {
  author_id: number | undefined
}

// http://localhost:5000/news/10/publisher
const getAuthor = async (author_id: number | undefined) => {
  try {
    const { data } = await axios.get<TUser>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${author_id}/publisher`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error.response?.data.message", error.response?.data.message)
    }
    return null
  }
}

export default async function CTA({ author_id }: Props) {
  const author = await getAuthor(author_id)
  return (
    <div>
      <div className="mb-11 flex flex-col items-center gap-7 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-5">
          <div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.316406"
                y="0.51123"
                width="60.9003"
                height="60.9003"
                rx="13"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_72_4903"
                    transform="scale(0.0142857)"
                  />
                </pattern>
                <image
                  id="image0_72_4903"
                  width="70"
                  height="70"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">{author?.name}</h3>
            <p className="text-base font-light text-muted-foreground">
              {author?.newsCount || 0 > 1
                ? `${author?.newsCount} Articles`
                : `${author?.newsCount} Article`}
            </p>
          </div>
        </div>

        <Button
          className="min-h-[58px] w-full min-w-[187px] rounded-[10px] text-center text-base font-bold leading-tight text-sky-900 sm:w-auto lg:leading-[33px]"
          variant={"secondary_outline"}
        >
          Subscribe
        </Button>
      </div>
      <div className="mb-3 rounded-xl bg-zinc-100 p-5 lg:mb-9 lg:p-10">
        <h3 className="mb-5 text-lg font-bold leading-relaxed">
          More from {author?.name}
        </h3>
        <div className="flex flex-col gap-4">
          {author?.news.map((news, index) => (
            <ArticleSuggestion key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  )
}
