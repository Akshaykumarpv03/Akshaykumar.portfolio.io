import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
    { href: 'https://www.linkedin.com/in/akshay-kumar-ims/', icon: 'fab fa-linkedin-in', label: 'LinkedIn', hoverBg: '#0274b3' },
    { href: 'https://github.com/Akshaykumarpv03', icon: 'fab fa-github', label: 'GitHub', hoverBg: '#6e5494' },
    { href: 'https://www.instagram.com/akshay__ims', icon: 'fab fa-instagram', label: 'Instagram', hoverBg: '#c135b4' },
]

export default function Footer() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <footer ref={ref} className="py-16 text-center relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center gap-5 mb-10"
                >
                    {socials.map(s => (
                        <motion.a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="w-14 h-14 rounded-full flex items-center justify-center glass-card dark:text-white/50 text-gray-400 text-xl transition-all duration-300 hover:text-white"
                            onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.borderColor = s.hoverBg; e.currentTarget.style.boxShadow = `0 8px 28px ${s.hoverBg}55` }}
                            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = '' }}
                            aria-label={s.label}
                        >
                            <i className={s.icon} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full" />
                    <p className="dark:text-white/30 text-gray-400 text-base">
                        &copy; 2025 <span className="gradient-text font-semibold">Akshay Kumar P V</span>. All rights reserved.
                    </p>
                    <p className="dark:text-white/20 text-gray-300 text-sm mt-3 tracking-wider">
                        Built with React, Three.js & Framer Motion
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
