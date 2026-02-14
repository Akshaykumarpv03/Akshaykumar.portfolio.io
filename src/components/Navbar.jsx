import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('hero')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = document.querySelectorAll('section[id]')
            let current = 'hero'
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 140) current = s.id
            })
            setActive(current)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled
                    ? 'dark:bg-[rgba(5,5,8,0.88)] bg-[rgba(248,249,252,0.9)] backdrop-blur-2xl border-b dark:border-white/[0.04] border-black/[0.06] shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Brand */}
                <a href="#hero" className="flex items-center gap-3 group">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-base font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">
                        &lt;/&gt;
                    </span>
                    <span className="font-[var(--font-display)] text-xl font-bold dark:text-white/90 text-gray-800 group-hover:dark:text-white group-hover:text-gray-900 transition-colors">
                        Akshay
                    </span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-2">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`relative px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${active === item.href.slice(1)
                                        ? 'dark:text-white text-gray-900'
                                        : 'dark:text-white/40 text-gray-400 hover:dark:text-white/70 hover:text-gray-600'
                                    }`}
                            >
                                {item.label}
                                {active === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right: Theme Toggle + Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-[6px] p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-7 h-[2.5px] dark:bg-white/80 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`} />
                        <span className={`block w-7 h-[2.5px] dark:bg-white/80 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-7 h-[2.5px] dark:bg-white/80 bg-gray-700 rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 right-0 dark:bg-[rgba(5,5,8,0.97)] bg-[rgba(248,249,252,0.97)] backdrop-blur-3xl border-b dark:border-white/[0.04] border-black/[0.06] py-6 px-6"
                    >
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-3.5 text-lg font-medium transition-colors ${active === item.href.slice(1) ? 'text-purple-500' : 'dark:text-white/40 text-gray-400'
                                    }`}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
