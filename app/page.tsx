"use client"

import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Server,
  Database,
  Globe,
  Zap,
  Terminal,
  Cloud,
  Monitor,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const fullText = "Systems Engineer & Backend Developer"

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[100]">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div
        className="fixed w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out blur-sm"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
        }}
      />
      <div
        className="fixed w-4 h-4 bg-primary/60 rounded-full pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      <section
        id="hero"
        className="min-h-screen grid-pattern relative flex items-center justify-center pt-24 pb-16"
        style={{
          backgroundPositionY: `${scrollY * 0.5}px`,
        }}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold flex items-center gap-2">
              <Terminal className="text-primary" size={20} />
              JMGcoding.com
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="text-primary font-mono text-lg animate-pulse">$ whoami</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 hero-glow text-balance animate-fade-in">Jamie Grimwood</h1>
          <div className="text-2xl md:text-3xl text-primary font-mono mb-8 h-12 flex items-center justify-center">
            {typedText}
            <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance">
            I build{" "}
            <span className="text-foreground font-medium hover:text-primary transition-colors">
              scalable backend systems
            </span>{" "}
            and manage infrastructure. Specializing in JavaScript, Hono, PostgreSQL, and cloud infrastructure for
            businesses that need reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="flex items-center gap-2">
                <Zap size={16} className="group-hover:rotate-12 transition-transform" />
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
            {/*
            <a
              href="/Resume-Redacted-Mobile-Number.pdf"
              className="flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Download size={16} />
              Resume
            </a>
            */}
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 text-left hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-breathe"></div>
              <div
                className="w-3 h-3 rounded-full bg-yellow-500 animate-breathe"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-green-500 animate-breathe"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <span className="text-muted-foreground text-sm ml-4">~ jamie@jmgcoding.com</span>
              <div className="ml-auto flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse-ring relative">
                  <div className="absolute inset-0 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs text-primary animate-pulse">LIVE</span>
              </div>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div className="text-green-400">$ bun run dev --port 3000</div>
              <div className="text-muted-foreground">Starting Hono server on http://localhost:3000</div>
              <div className="text-green-400">$ psql -U postgres -d screendisplay</div>
              <div className="text-muted-foreground">Connected to PostgreSQL database</div>
              <div className="text-blue-400 flex items-center gap-2">
                <span className="animate-pulse">$</span>
                <span>Ready to build something amazing?</span>
                <Zap size={14} className="text-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-card scroll-animate">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Building Systems That Scale</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a backend developer and systems engineer who builds robust, scalable infrastructure for modern
                businesses. From hosting platforms to digital signage systems, I create architectures that handle
                real-world demands while maintaining clean, maintainable codebases.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Currently running <span className="text-foreground font-medium">Falcon Hosting</span>, a UK-based
                hosting business, and built <span className="text-foreground font-medium">ScreenDisplay</span>, a
                digital signage platform with a Hono backend. Experienced in{" "}
                <span className="text-foreground font-medium">JavaScript, PostgreSQL, Redis, and Supabase</span>, with
                growing expertise in <span className="text-foreground font-medium">.NET and Go (Fiber)</span>.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Hono</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="font-medium">React</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium">Redis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Supabase</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">.NET</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="font-medium">Go (Fiber)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Get in touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/jamiegrimwood"
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/jamiegrimwood"
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://jmgcoding.com"
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Globe size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="text-primary" size={24} />
                  <span className="text-2xl font-bold">3</span>
                </div>
                <p className="text-muted-foreground">Active businesses</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="text-primary" size={24} />
                  <span className="text-2xl font-bold">99.9%</span>
                </div>
                <p className="text-muted-foreground">System uptime</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="text-primary" size={24} />
                  <span className="text-2xl font-bold">Proxmox</span>
                </div>
                <p className="text-muted-foreground">Virtualization expert</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-primary" size={24} />
                  <span className="text-2xl font-bold">Linux & Windows</span>
                </div>
                <p className="text-muted-foreground">Server administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 scroll-animate">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:text-right">
                <span className="text-sm text-muted-foreground">2022 — PRESENT</span>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Founder & Systems Engineer</h3>
                <p className="text-primary mb-4">Falcon Hosting</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded and operate a UK-based hosting business, managing infrastructure, virtual environments, and
                  customer systems. Handle server administration across Linux and Windows Server, utilizing Proxmox and
                  VMware for virtualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Linux</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                    Windows Server
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Proxmox</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">VMware</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:text-right">
                <span className="text-sm text-muted-foreground">2021 — PRESENT</span>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Full-Stack Developer & Founder</h3>
                <p className="text-primary mb-4">ScreenDisplay</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Built a complete digital signage platform from the ground up with a Hono backend. Handles content
                  management, display scheduling, and real-time updates for digital signage systems. Manages PostgreSQL
                  databases and Redis caching.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Hono</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Supabase</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Redis</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Next.js</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:text-right">
                <span className="text-sm text-muted-foreground">2023 — 2024</span>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Chief Technical Officer & Systems Administrator</h3>
                <p className="text-primary mb-4">Omero Systems</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Managed complete IT infrastructure, setting up virtual environments, configuring remote
                  access for employees, implementing HR systems, and deploying phone systems. Handled everything from
                  hardware to software deployment including datacenter setup and networking environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                    System Administration
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                    Virtualization
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Network Setup</span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">Remote Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-card scroll-animate">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
            Real-world systems and platforms I've built and currently operate.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Falcon Hosting</h3>
                  <div className="flex flex-col items-center text-center text-muted-foreground cursor-pointer" onClick={() => window.open("https://falconhosting.co.uk")}>
                    <ExternalLink
                      className="text-muted-foreground hover:text-foreground transition-all group-hover:scale-110 group-hover:rotate-12"
                      size={20}
                    />
                    <span className="text-xs">Visit Website</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  UK-based hosting business providing managed infrastructure solutions. Built on enterprise-grade
                  virtualization with Proxmox and VMware, offering Linux and Windows Server hosting with 99.9% uptime
                  SLA.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Proxmox
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    VMware
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Linux
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Windows Server
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">ScreenDisplay</h3>
                  <div className="flex flex-col items-center text-center text-muted-foreground cursor-pointer" onClick={() => window.open("https://screendisplay.org")}>
                    <ExternalLink
                      className="text-muted-foreground hover:text-foreground transition-all group-hover:scale-110 group-hover:rotate-12"
                      size={20}
                    />
                    <span className="text-xs">Visit Website</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Complete digital signage platform built from scratch with a Hono backend. Manages content scheduling,
                  real-time display updates, and multi-screen coordination. Uses PostgreSQL for data persistence and
                  Redis for caching.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Hono
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Redis
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    React
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    My Country
                  </h3>
                  <div className="flex flex-col items-center text-center text-muted-foreground cursor-pointer" onClick={() => window.open("https://github.com/JamieGrimwood/My-Country")}>
                    <Github
                      className="text-muted-foreground hover:text-foreground transition-all group-hover:scale-110 group-hover:rotate-12"
                      size={20}
                    />
                    <span className="text-xs">Visit Github</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bit of a weird one, I decided to learn C#, i'm going to try and build all the infrastructure that a country needs! Starting off with banking systems. I'm trying to replicate real life banking communications, using TCP/IP sockets, with my own version of Visa, banking, and stripe, and trying to adopt banking communication ISO standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    System Administration
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Virtualization
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Network Setup
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Christmas Countdown
                  </h3>
                  <div className="flex flex-row gap-4">
                    <div className="flex flex-col items-center text-center text-muted-foreground cursor-pointer" onClick={() => window.open("https://countdown.jmgcoding.com")}>
                      <ExternalLink
                        className="text-muted-foreground hover:text-foreground transition-all group-hover:scale-110 group-hover:rotate-12"
                        size={20}
                      />
                      <span className="text-xs">Visit Website</span>
                    </div>
                    <div className="flex flex-col items-center text-center text-muted-foreground cursor-pointer" onClick={() => window.open("https://github.com/JamieGrimwood/christmas-countdown")}>
                      <Github
                        className="text-muted-foreground hover:text-foreground transition-all group-hover:scale-110 group-hover:rotate-12"
                        size={20}
                      />
                      <span className="text-xs">Visit Github</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Another weird simple one, christmas countdown that i've done for the last few years for a bit of fun. Made in Preact, just an example of my ability to use react, as this was made before GPT released!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    Preact
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                    framer-motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 scroll-animate">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you need a high-performance backend system, want to discuss architecture patterns, or just want to
            chat about the latest in backend development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:jamie@jmgcoding.com"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/jamie-grimwood-6b0a34253/"
              className="flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/JamieGrimwood"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jamiegrimwood"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jamie@jmgcoding.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://jmgcoding.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Jamie Grimwood • JMGcoding.com • Built with Next.JS and deployed on Vercel, because Next.JS is the goat.</p>
        </div>
      </footer>
    </div>
  )
}
