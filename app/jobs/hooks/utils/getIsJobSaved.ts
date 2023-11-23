import axios, { isAxiosError } from "axios"

export default async function getIsJobSaved(id: number) {
  //demo url http://localhost:5000/jobs/8/isJobSaved
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${id}/isJobSaved`
    const { data } = await axios.get<boolean>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
