import axios, { isAxiosError } from "axios"

import { TJobResponseData } from "@/app/jobs/hooks/types/TJobResponseData"

export default async function getStationJobData(
  station_id: number,
  position: string,
  sortBy: string,
  page: string,
  itemsPerPage: string
) {
  // Demo url for frontend http://localhost:3000/jobs?page=1&itemsPerPage=10&position=operations&location=suite&stationName=frami
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/search?page=${
      page || 1
    }&itemsPerPage=${itemsPerPage || 10}`
    const { data } = await axios.post<TJobResponseData>(url, {
      station_id: station_id,
      position: position,
      sortBy: sortBy,
    })
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
