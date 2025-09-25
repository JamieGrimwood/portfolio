"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

    const projects = [
        {
            id: 1,
            title: "ScreenDisplay Ltd",
            description: "Digital signage business, all created and maintained by me.",
            longDescription: "ScreenDisplay is a digital signage platform I founded to provide a scalable, user-friendly solution for managing screen content remotely. Originally built with Next.js, the platform now uses Remix for a modern, reactive frontend and Hono for a lightweight, high-performance backend. It supports dynamic scene scheduling, remote device control, and multi-user access, making it ideal for retail, education, and corporate environments.",
            technologies: ["Remix.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Redis", "Hono"],
            thumbnail: "/ScreenDisplay/SD-2.png",
            images: [
                "/ScreenDisplay/Website.png",
                "/ScreenDisplay/Login.png",
                "/ScreenDisplay/Scenes.png",
                "/ScreenDisplay/Invoices.png",
                "/ScreenDisplay/Screen.png",
            ],
            liveUrl: "https://screendisplay.org",
            githubUrl: "https://github.com/screendisplay",
        },
        {
            id: 2,
            title: "CircleUp",
            description: "A mobile app in React Native designed to allow people to meet up together through a mixture of free and paid events.",
            longDescription: "A collection of custom Minecraft plugins including economy systems, custom game modes, and server management tools. Started as a personal project when I couldn't afford existing plugins, now used by multiple servers.",
            technologies: ["Go", "React Native", "Supabase", "Tailwind CSS (Nativewind)", "Gorm", "Fiber (go)"],
            thumbnail: "/CircleUp/CircleUp.png",
            images: [
                "/CircleUp/1.png",
                "/CircleUp/2.png",
                "/CircleUp/3.png"
            ],
            githubUrl: "https://github.com/jamie/minecraft-plugins",
        },
    ]

    const openProject = (project) => {
        setSelectedProject(project)
        setCurrentImageIndex(0)
    }

    const closeProject = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
        }
    }

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
        }
    }

    return (
        <>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="mt-24"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    Featured Projects
                </motion.h2>

                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
                            onClick={() => openProject(project)}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-30 transform rotate-1" />
                                <img
                                    src={project.thumbnail || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-contain bg-gray-800/50 group-hover:scale-105 transition-transform duration-500 relative z-10 rounded-t-lg shadow-lg shadow-blue-500/10"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={JSON.stringify(tech)} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeProject}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 rounded-xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                        <div className="flex gap-4">
                                            {selectedProject.liveUrl && (
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                                >
                                                    <ExternalLink size={16} />
                                                    Live Demo
                                                </a>
                                            )}
                                            {selectedProject.githubUrl && (
                                                <a
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                                                >
                                                    <Github size={16} />
                                                    Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <button onClick={closeProject} className="text-gray-400 hover:text-white transition-colors">
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Image Carousel */}
                                <div className="relative mb-6">
                                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                                        <img
                                            src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                                            alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                            >
                                                <ChevronRight size={20} />
                                            </button>

                                            <div className="flex justify-center gap-2 mt-4">
                                                {selectedProject.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-500"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span key={JSON.stringify(tech)} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
