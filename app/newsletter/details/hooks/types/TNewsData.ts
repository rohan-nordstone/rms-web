type TNewsAuthor = {
  id: number
  name: string
  email: string
  username: string
  type: number
  stationType: number
  createdAt: string
  updatedAt: string
}

export type TNewsData = {
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
  author: TNewsAuthor
  likesCount: number
  commentsCount: number
  sharesCount: number
}
