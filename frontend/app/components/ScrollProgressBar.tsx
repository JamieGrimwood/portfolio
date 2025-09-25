import { motion } from "framer-motion"
import { useScrollProgress } from "~/hooks/useScrollProgress";

export default function ScrollProgressBar() {
    const scrollProgress = useScrollProgress()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50 origin-left shadow-lg shadow-blue-500/20"
            style={{ scaleX: scrollProgress }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        />
    )
}