import axios, { isAxiosError } from "axios"

import { TNews } from "../types/TNewsResponseData"

export default async function getRecommendedNews() {
  // demo url http://localhost:5000/news/recommended?page=1&itemsPerPage=2
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/recommended?page=1&itemsPerPage=3`
    const { data } = await axios.get<TNews[]>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error.response.data.message", error.response?.data.message)
    }
  }
}
