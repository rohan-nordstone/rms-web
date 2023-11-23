import axios, { isAxiosError } from "axios"

import { TNewsroom } from "../types/TNewsroom"

export default async function getNewsroom(station_id: number | undefined) {
  try {
    // demo url http://localhost:5000/news/10/station
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${station_id}/station`
    const { data } = await axios.get<TNewsroom>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
