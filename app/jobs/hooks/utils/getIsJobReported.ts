import axios, { isAxiosError } from "axios"

export default async function getIsJobReported(id: number | undefined) {
  //demo url http://localhost:5000/jobs/8/isJobReported
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/jobs/${id}/isJobReported`
    const { data } = await axios.get<boolean>(url)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message)
    }
  }
}
