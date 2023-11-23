export function convertTimestamp(updatedAt: Date): string {
  const currentTime = new Date()
  const timeDifference = currentTime.getTime() - updatedAt.getTime()
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)

  if (seconds < 60) {
    return `Updated just now`
  } else if (minutes < 60) {
    return `Updated ${minutes} minute${minutes > 1 ? "s" : ""} ago`
  } else if (hours < 24) {
    return `Updated ${hours} hour${hours > 1 ? "s" : ""} ago`
  } else if (days < 30) {
    return `Updated ${days} day${days > 1 ? "s" : ""} ago`
  } else if (months < 12) {
    return `Updated ${months} month${months > 1 ? "s" : ""} ago`
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return `Updated on ${updatedAt.toLocaleDateString("en-US", options)}`
  }
}
