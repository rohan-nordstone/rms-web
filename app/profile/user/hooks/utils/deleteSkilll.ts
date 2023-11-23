export default async function deleteSkill(skillId: number, token: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/skills/${skillId}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
