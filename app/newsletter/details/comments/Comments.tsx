import Image from "next/image"
import axios, { isAxiosError } from "axios"

import Comment from "./Comment"
import SubmitComment from "./SubmitComment"

interface User {
  id: number
  name: string
  email: string
  username: string
  type: number
  stationType: number
  createdAt: string
  updatedAt: string
}

export interface TComment {
  id: number
  comment: string
  createdAt: string
  updatedAt: string
  user: User
  subComments: TComment[]
}

type Props = {
  commentsCount: number | undefined
  news_id: string | undefined
}

const getComments = async (
  news_id: string | undefined,
  page: number,
  itemsPerPage: number
) => {
  // demo url http://localhost:5000/news/1/comments?page=1&itemsPerPage=10
  try {
    const { data } = await axios.get<TComment[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/comments?page=${page}&itemsPerPage=${itemsPerPage}`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
    return {} as TComment[]
  }
}

export default async function Comments({ commentsCount, news_id }: Props) {
  const comments = await getComments(news_id, 1, 10)

  return (
    <div>
      <h3 className="pb-7 text-lg font-bold">
        {(commentsCount || 0) > 1
          ? `${commentsCount} comments`
          : `${commentsCount} comment`}
      </h3>
      <div className="flex flex-col gap-7">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <div className="my-7 flex gap-5">
        <Image
          className="h-12 w-12 rounded-md"
          src={"/comments/image_3.webp"}
          alt={"/comments/image_3.webp"}
          width={1080}
          height={1080}
        />
        <SubmitComment news_id={news_id} />
      </div>
    </div>
  )
}
