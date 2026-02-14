import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'

const roles = ['Developer', 'Coder', 'Creator', 'Builder', 'Designer']

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timeout
        if (!isDeleting && displayed.length < currentRole.length) {
            timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 90)
        } else if (!isDeleting && displayed.length === currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2200)
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
        }
        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, roleIndex])

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <Scene3D />

            {/* Ambient */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center py-32">
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                    className="mb-10"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1.5 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 rounded-full opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500">
                            <img
                                src={`${import.meta.env.BASE_URL}dp.jpeg`}
                                alt="Akshay Kumar"
                                className="w-full h-full rounded-full object-cover border-[3px] dark:border-[#050508] border-[#f8f9fc]"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-purple-400 font-semibold tracking-[4px] uppercase text-base mb-4"
                >
                    Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 gradient-text-animated"
                >
                    Akshay Kumar
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-3xl font-medium dark:text-white/35 text-gray-400 mb-5 h-12 flex items-center justify-center gap-2"
                >
                    <span>A</span>
                    <span className="text-cyan-400 font-semibold min-w-[140px] text-left">{displayed}</span>
                    <span className="text-purple-400 animate-[blink_0.8s_steps(1)_infinite]">|</span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="dark:text-white/40 text-gray-500 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
                >
                    Turning ideas into clean, functional code. Passionate about building futuristic digital experiences.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-5 flex-wrap justify-center"
                >
                    <a
                        href="#projects"
                        className="px-9 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-base rounded-xl shadow-[0_6px_25px_rgba(168,85,247,0.3)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.45)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="flex items-center gap-3">
                            <i className="fas fa-layer-group text-lg" />
                            View Projects
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="px-9 py-4 border-2 border-purple-500/25 dark:text-white/80 text-gray-700 font-semibold text-base rounded-xl hover:bg-purple-500/[0.06] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="flex items-center gap-3">
                            <i className="fas fa-paper-plane text-lg" />
                            Contact Me
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <div className="w-6 h-10 border-2 border-purple-500/25 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2.5 bg-purple-500 rounded-full animate-[scroll-bounce_1.8s_ease-in-out_infinite]" />
                </div>
                <span className="text-xs dark:text-white/20 text-gray-400 tracking-[3px] uppercase">Scroll</span>
            </motion.div>
        </section>
    )
}
