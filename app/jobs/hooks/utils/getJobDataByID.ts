import axios, { isAxiosError } from "axios"

import { TJobIDResponse } from "../types/TJobIDResponse"

export default async function getJobDataByID(id: number) {
  //demo url http://localhost:5000/jobs/8
  try {
    const { data } = await axios.get<TJobIDResponse>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${id}`
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
