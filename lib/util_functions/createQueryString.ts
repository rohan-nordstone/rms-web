export function createQueryString(
  searchParams: URLSearchParams,
  newSearchParams: { name: string; value: string }[]
): string {
  const params = new URLSearchParams(searchParams.toString())
  for (let { name, value } of newSearchParams) {
    if (value !== "") params.set(name, value)
    else params.delete(name)
  }
  return params.toString()
}
