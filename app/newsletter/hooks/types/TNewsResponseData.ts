import { StationType } from "@/lib/enums/station"
import { UserType } from "@/lib/enums/user"

interface TAuthor {
  id: number
  name: string
  email: string
  username: string
  type: UserType
  stationType: StationType
  createdAt: string
  updatedAt: string
}

export interface TNews {
  id: number
  photoId: number
  slug: string
  title: string
  excerpt: string
  content: string
  commentDisabledAt: string
  unpublished: string
  likesCount: number
  commentsCount: number
  sharesCount: number
  createdAt: string
  updatedAt: string
  author: TAuthor
}

export interface TNewsResponseData {
  news: TNews[]
  totalPages: number
}
