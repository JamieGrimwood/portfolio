import { motion } from "framer-motion"

export default function FloatingShapes() {
    const shapes = [
        { size: 60, x: "10%", y: "20%", delay: 0 },
        { size: 40, x: "80%", y: "10%", delay: 1 },
        { size: 80, x: "15%", y: "70%", delay: 2 },
        { size: 50, x: "85%", y: "60%", delay: 1.5 },
        { size: 30, x: "50%", y: "15%", delay: 0.5 },
        { size: 70, x: "70%", y: "80%", delay: 2.5 },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: shape.x,
                        top: shape.y,
                        width: shape.size,
                        height: shape.size,
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{
                        opacity: [0, 0.1, 0],
                        scale: [0, 1, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 8,
                        delay: shape.delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-sm" />
                </motion.div>
            ))}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`geo-${i}`}
                    className="absolute w-20 h-20 border border-blue-400/20"
                    style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    )
}
