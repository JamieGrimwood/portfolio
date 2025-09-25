import { motion } from 'framer-motion'

export default function SkillCircle({ skillsInView, skill, index, selectedSkill, setSelectedSkill }: { skillsInView: boolean, skill: any, index: number, selectedSkill: any, setSelectedSkill: any }) {
    return (
        <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15,
            }}
            className="flex flex-col items-center cursor-pointer"
            //onClick={() => setSelectedSkill(skill)}
        >
            <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${selectedSkill?.name === skill.name ? 'border border-white ' : ''}`}
                style={{
                    background: `radial-gradient(circle at center, ${skill.color}33, transparent)`,
                    boxShadow: `0 0 15px ${skill.color}33`,
                }}
                whileHover={{
                    scale: 1.15,
                    boxShadow: `0 0 20px ${skill.color}66`,
                    transition: { duration: 0.2 },
                }}
            >
                <motion.div
                    className="text-3xl"
                    style={{ color: skill.color }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                    <skill.icon />
                </motion.div>
            </motion.div>
            <motion.span
                className="text-sm font-medium text-gray-300"
                initial={{ opacity: 0, y: -5 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
            >
                {skill.name}
            </motion.span>
        </motion.div>
    )
}