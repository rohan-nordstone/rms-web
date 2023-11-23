export default async function likeSubmitHandler(
  comment_id: number | undefined,
  token: string
) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    // http://localhost:5000/news/comments/137/like
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/comments/${comment_id}/like`,
      {
        cache: "no-store",
        method: "GET",
        headers: headers,
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.log("error.response?.data.", errorData.message)
      return false
    }

    const data = (await response.json()) as boolean
    return data
  } catch (error) {
    console.error(error)
  }
}
