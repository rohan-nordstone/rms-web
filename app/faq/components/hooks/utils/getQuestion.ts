import { TFaqQuestionResponse } from "../types/TFaqQuestionResponse"

export default async function getQuestion(id: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs/questions/${id}`
    const response = await fetch(url, {
      cache: "no-store",
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status}`)
    }
    const data = (await response.json()) as TFaqQuestionResponse
    return data
  } catch (error) {
    console.error(error)
  }
}
