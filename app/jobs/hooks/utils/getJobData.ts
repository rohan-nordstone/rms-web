import { TJobResponseData } from "../types/TJobResponseData"

export default async function getJobData(
  position: string,
  location: string,
  stationName: string,
  page: string,
  itemsPerPage: string,
  sortBy: string
) {
  // Demo url for frontend http://localhost:3000/jobs?page=1&itemsPerPage=10&position=operations&location=suite&stationName=frami
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/search?page=${
      page || 1
    }&itemsPerPage=${itemsPerPage || 10}`

    const response = await fetch(url, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: position,
        location: location,
        stationName: stationName,
        sortBy: sortBy,
      }),
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status}`)
    }
    const data = (await response.json()) as TJobResponseData
    return data
  } catch (error) {
    console.error(error)
  }
}
