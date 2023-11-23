import axios, { isAxiosError } from "axios"

export default async function reportSubmitHandler(
  job_id: number | undefined,
  reason: string
) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${job_id}/report`
    const { data } = await axios.post<boolean>(url, {
      reason: reason,
    })
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
