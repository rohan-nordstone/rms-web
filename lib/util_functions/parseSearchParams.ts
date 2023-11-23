export default function parseSearchParams(searchQuery: string) {
  try {
    return searchQuery.replace("+", " ")
  } catch (error) {
    return ""
  }
}
