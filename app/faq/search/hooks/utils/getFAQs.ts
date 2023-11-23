import { TFaqQuestion } from "../types/TFaqQuestion"

export default async function getFAQs(body: {
  keyword?: string
  category?: string
}) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/faqs/search`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status}`)
    }

    const data = (await response.json()) as TFaqQuestion[]
    return data
  } catch (error) {
    console.error("Unexpected error fetching FAQs:", error)
  }
}
