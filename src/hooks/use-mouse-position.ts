import { useEffect, useState } from "react"

export function useMousePosition(): { x: number; y: number } {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    })

    return () =>
      document.removeEventListener("mousemove", (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
  }, [])

  return position
}
