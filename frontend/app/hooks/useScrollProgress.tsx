import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    calculateScrollProgress()

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress)
    }

    const handleResize = () => {
      setTimeout(calculateScrollProgress, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    const handleLoad = () => {
      setTimeout(calculateScrollProgress, 500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return scrollProgress
}
