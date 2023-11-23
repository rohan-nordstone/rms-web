import { useEffect, useLayoutEffect, useState } from "react"

export function UseWindowSize() {
  const isClient = typeof window === "object" // Check if window is defined

  const [size, setSize] = useState(
    isClient ? [window.innerWidth, window.innerHeight] : [1920, 1080]
  )

  function updateSize() {
    setSize([window.innerWidth, window.innerHeight])
  }

  useEffect(() => {
    if (isClient) {
      setSize([window.innerWidth, window.innerHeight])
    }
  }, [])

  useLayoutEffect(() => {
    if (isClient) {
      window.addEventListener("resize", updateSize)
      return () => window.removeEventListener("resize", updateSize)
    }
  }, [isClient])

  return size
}
