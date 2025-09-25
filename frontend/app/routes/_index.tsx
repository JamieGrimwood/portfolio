import { useEffect, useState, lazy, Suspense } from 'react';
import type { MetaFunction } from "@remix-run/node";
import { motion, useAnimation, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const SkillsContainer = lazy(() => import('~/components/SkillsContainer'));
const AboutMeContainer = lazy(() => import('~/components/AboutMeContainer'));

import ScrollProgressBar from '~/components/ScrollProgressBar';
import Projects from '~/components/Projects';

import FloatingShapes from '~/components/FloatingShapes';
import TypewriterText from '~/components/TypewriterText';

export const meta: MetaFunction = () => {
  return [
    { title: "Jamie Grimwood - JMGCoding" },
    { name: "description", content: "Jamie Grimwood - UK based software engineer specializing in modern web development" },
  ];
};

export default function Index() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  const socialVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    }),
  }

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about-me-scroll-point")
    if (aboutElement) {
      const offsetTop = aboutElement.getBoundingClientRect().top + window.scrollY - 20
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ScrollProgressBar />

      <div className="absolute inset-0 pointer-events-none">
        <FloatingShapes />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center min-h-[90vh] text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <TypewriterText
              text="Jamie Grimwood"
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-3xl font-light text-slate-300 tracking-wide">
              UK Based{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                  Software Engineer
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
          >
            Passionate about crafting <span className="text-blue-400 font-medium">modern</span>,{" "}
            <span className="text-purple-400 font-medium">scalable applications</span> with a focus on exceptional user
            experiences and clean, maintainable code.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToAbout}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Discover My Journey</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <FaArrowDown className="w-4 h-4" />
                </motion.div>
              </span>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            </motion.button>
          </motion.div>

          <motion.div
            ref={socialRef}
            initial="hidden"
            animate={socialInView ? "visible" : "hidden"}
            className="flex gap-8 mt-16"
          >
            {[
              {
                icon: FaGithub,
                href: "https://github.com/JamieGrimwood",
                label: "GitHub",
                color: "hover:text-slate-300",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/jamie-grimwood-6b0a34253/",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                custom={index}
                variants={socialVariants}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-4 text-2xl md:text-3xl text-slate-400 transition-all duration-300 ${social.color} group`}
                aria-label={social.label}
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />

                {/* Icon background glow */}
                <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg" />

                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-sm font-light tracking-wider">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Suspense fallback={
        <div className="h-96 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }>
        <AboutMeContainer />
      </Suspense>
      <Projects />
      <Suspense fallback={
        <div className="h-96 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }>
        <SkillsContainer />
      </Suspense>
    </div>
  );
}