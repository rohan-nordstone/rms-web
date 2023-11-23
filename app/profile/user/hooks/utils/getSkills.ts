import { TSkill } from "../types/TSkill"

export default async function getSkills(token: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/skills`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = (await response.json()) as TSkill[]
    return data
  } catch (error) {
    console.log(error)
  }
}
