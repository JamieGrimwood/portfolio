import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from 'framer-motion';
import { lazy, useState, Suspense } from 'react';

const FaReact = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaReact })));
const FaNodeJs = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaNodeJs })));
const FaDocker = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaDocker })));
const FaAws = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaAws })));
const SiNextdotjs = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiNextdotjs })));
const SiTypescript = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiTypescript })));
const SiTailwindcss = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiTailwindcss })));
const SiPostgresql = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiPostgresql })));
const SiGo = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiGo })));
const SiRemix = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiRemix })));
const SiMongodb = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiMongodb })));

const SkillCircle = lazy(() => import('./SkillCircle'));

export default function SkillsContainer() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const skills = [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Remix", icon: SiRemix, color: "#00D8FF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Go", icon: SiGo, color: "#00ADD8" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
    ]

    return (
        <motion.div
            ref={skillsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-24"
        >
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                My Skills
            </h2>
            {/* <h3 className="text-xs text-center text-gray-400">(Click a skill, any skill)</h3> */}

            <div className="flex flex-row mt-16">
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mx-auto"
                    layout
                    style={{
                        width: selectedSkill ? '50%' : 'min(100%, 56rem)',
                        maxWidth: '100%'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5
                    }}
                >
                    {skills.map((skill, index) => (
                        <Suspense key={skill.toString()} fallback={
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 bg-gray-800 animate-pulse">
                                <div className="w-6 h-6 bg-gray-700 rounded"></div>
                            </div>
                        }>
                            <motion.div layout transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.5
                            }}>
                                <SkillCircle
                                    skillsInView={skillsInView}
                                    skill={skill}
                                    index={index}
                                    selectedSkill={selectedSkill}
                                    setSelectedSkill={setSelectedSkill}
                                />
                            </motion.div>
                        </Suspense>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    {selectedSkill && (
                        <motion.div
                            className="w-1/2"
                            initial={{
                                opacity: 0,
                                x: 50,
                                width: 0
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                width: '50%'
                            }}
                            exit={{
                                opacity: 0,
                                x: 50,
                                width: 0
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.5
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-6"
                            >
                                <div>
                                    <h2 className="text-2xl font-bold text-blue-400 mb-4">
                                        {selectedSkill?.name || 'Skill Details'}
                                    </h2>
                                    <p className="text-gray-300">
                                        {selectedSkill?.description || 'Information about this skill will appear here.'}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}