import axios, { isAxiosError } from "axios"

import { TNewsData } from "../types/TNewsData"

export default async function getNewsData(id: number) {
  // demo url http://localhost:5000/news/26
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${id}`
    const { data } = await axios.get<TNewsData>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
