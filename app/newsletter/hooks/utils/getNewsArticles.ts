import axios, { isAxiosError } from "axios"

import { TNewsResponseData } from "../types/TNewsResponseData"

export default async function getNewsArticles(
  keyword: string,
  sortBy: string,
  page: number,
  itemsPerPage: number
) {
  try {
    //  http://localhost:5000/news/search
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/search?page=${page}&itemsPerPage=${itemsPerPage}`
    const { data } = await axios.post<TNewsResponseData>(url, {
      keyword,
      sortBy,
    })
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
