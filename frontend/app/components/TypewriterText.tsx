import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
    text: string
    className?: string
    delay?: number
    speed?: number
}

export default function TypewriterText({ text, className = "", delay = 0.5, speed = 5 }: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const timer = setTimeout(
            () => {
                if (currentIndex < text.length) {
                    setDisplayText((prev) => prev + text[currentIndex])
                    setCurrentIndex((prev) => prev + 1)
                }
            },
            delay * 1000 + currentIndex * speed,
        )

        return () => clearTimeout(timer)
    }, [currentIndex, text, delay, speed])

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)

        return () => clearInterval(cursorTimer)
    }, [])

    return (
        <motion.h1 className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
        </motion.h1>
    )
}