export const faqLikeClickHandler = async (
  questionID: number | undefined,
  token: string
) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs/questions/${questionID}/like`
    const response = await fetch(url, {
      cache: "no-store",
      method: "GET",
      headers: headers,
    })

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
