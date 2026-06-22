import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dpImage from '/dp.jpeg?url'

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
        <section id="home" className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center mt-12 mb-[150px]">
            {/* Announcement Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-surface-container-high px-4 py-2 rounded-full mb-8 border border-outline-variant"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-on-surface">Open to Opportunities</span>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 relative"
            >
                <div className="w-32 h-32 rounded-full overflow-hidden border border-outline-variant p-1 bg-surface-container-lowest shadow-sm">
                    <img src={dpImage} alt="Akshay Kumar" className="w-full h-full object-cover rounded-full" />
                </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[48px] md:text-[84px] leading-[1.1] md:leading-[0.95] tracking-[-0.04em] font-[600] text-on-surface max-w-[900px] mb-6"
            >
                Akshay Kumar
            </motion.h1>

            {/* Subtitle with Typewriter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center space-x-2 mb-6 text-on-surface-variant text-lg md:text-xl font-medium"
            >
                <span className="min-w-[100px] text-right">{displayed}</span>
                <span className="animate-[blink_0.8s_steps(1)_infinite]">|</span>
                <span>•</span>
                <span>AI Enthusiast</span>
                <span>•</span>
                <span>Creator</span>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-on-surface-variant max-w-[620px] mb-12"
            >
                Turning ideas into clean, functional code. Passionate about building futuristic digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-24 w-full sm:w-auto"
            >
                <a href="#projects" className="btn-primary w-full sm:w-auto">
                    View Projects
                </a>
                <a href="/Akshaykumar.portfolio.io/Akshay_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                    Download Resume
                </a>
            </motion.div>

            {/* Demo Showcase Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full max-w-[1024px] bg-surface-container-lowest border border-outline-variant rounded-[24px] p-2 shadow-sm"
            >
                <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/50 relative aspect-[16/9] flex items-center justify-center">
                    {/* Abstract background representation */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-outline-variant) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    
                    <div className="z-10 w-full max-w-3xl p-6 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant rounded-xl shadow-sm text-left">
                         <div className="flex space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                            <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                            <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
                        </div>
                        <pre className="font-mono text-sm text-on-surface-variant whitespace-pre-wrap">
                            <code>
<span className="text-secondary">class</span> <span className="font-semibold text-on-surface">Developer</span>:
    <span className="text-secondary">def</span> <span className="font-semibold text-on-surface">__init__</span>(self):
        self.name = <span className="text-outline">"Akshay Kumar"</span>
        self.skills = [<span className="text-outline">"React"</span>, <span className="text-outline">"Python"</span>, <span className="text-outline">"AI/ML"</span>]
        self.passion = <span className="text-outline">"Building the future"</span>

    <span className="text-secondary">def</span> <span className="font-semibold text-on-surface">build_experience</span>(self):
        <span className="text-secondary">return</span> <span className="text-outline">"Clean code & scalable architecture"</span>
                            </code>
                        </pre>
                        
                        <div className="mt-8 border-t border-surface-variant pt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined filled-icon">play_arrow</span>
                                </button>
                                <div>
                                    <div className="text-sm font-medium text-on-surface">Code Execution</div>
                                    <div class="text-xs text-on-surface-variant">Runtime: Python 3.12</div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <div className="w-1 h-6 bg-primary rounded-full animate-pulse"></div>
                                <div className="w-1 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
                                <div className="w-1 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-1 h-7 bg-primary rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                <div className="w-1 h-5 bg-outline rounded-full"></div>
                                <div className="w-1 h-3 bg-outline rounded-full"></div>
                                <div className="w-1 h-2 bg-outline rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
