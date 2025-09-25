import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaCode, FaLaptopCode, FaHiking, FaGamepad, FaMusic } from "react-icons/fa"

export default function AboutMeContainer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4" id="about-me-scroll-point">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                    >
                        About Me
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={imageVariants} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg blur opacity-20 transform -rotate-3" />
                            <div className="relative rounded-lg overflow-hidden border-2 border-gray-800 shadow-xl aspect-[3/4] w-full max-h-[550px]">
                                <img
                                    src="/IMG_6580.jpg"
                                    alt="Jamie Grimwood"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="absolute -bottom-8 -right-6 bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-800"
                            >
                                <div className="flex gap-3 text-xs max-w-64 text-center">
                                    That's me, on the right, recieving the Computer Science Award the HMS Nelson Ward Room
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white">
                                Hi, I'm Jamie
                            </motion.h3>

                            <motion.p variants={itemVariants} className="text-gray-300">
                                I'm a UK-based software engineer with a passion for creating programs that solve a problem. I started at the age of 12, when
                                I couldn't afford a minecraft plugin I wanted, so I taught myself how to make it. From there, I started venturing into the world
                                of web development, and then eventually backend and APIs.
                            </motion.p>

                            <motion.p variants={itemVariants} className="text-gray-300">
                                Beyond coding, you'll probably find me working on my car, or working as a technician on a gig. I have an side passion for Audio Visual,
                                starting my own business called ClearStage AV.
                            </motion.p>

                            <motion.div variants={itemVariants} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-8">
                                <h4 className="text-xl font-medium text-blue-400 mb-3">Interested in what I do?</h4>
                                <p className="text-gray-300">
                                    If you're interested in what I do and want to get in touch, you can email me at jamie@jmgcoding.com
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl font-bold mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                    >
                        When I'm not programming:
                    </motion.h2>
                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {[
                            {
                                title: "Live events technician",
                                content:
                                    "Above is one of the gigs I recently did, Takedown Festival at Portsmouth Guildhall",
                                image: "/IMG_2813.jpg",
                            },
                            {
                                title: "Fixing My Car",
                                content:
                                    "It breaks. All the time. In the above instance, the airbag unit failed, so the car refused to start. Managed to fix it with my trusty screwdriver and a bit of luck however.",
                                image: "/IMG_2666.jpg",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}