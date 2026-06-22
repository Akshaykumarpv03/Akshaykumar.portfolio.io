import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('home')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = document.querySelectorAll('section[id]')
            let current = 'home'
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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-surface/80 backdrop-blur-xl border-outline-variant shadow-sm'
                    : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex justify-between items-center">
                {/* Brand */}
                <a href="#home" className="text-xl font-bold tracking-tighter text-on-surface">
                    Akshay Kumar
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`relative tracking-tight font-medium text-sm transition-colors duration-200 ease-in-out pb-1 ${active === item.href.slice(1)
                                        ? 'text-on-surface font-semibold border-b-2 border-on-surface'
                                        : 'text-outline hover:text-on-surface hover:opacity-80 active:scale-95'
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right: CTA + Mobile Hamburger */}
                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden md:flex btn-primary">
                        Get in Touch
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-on-surface flex items-center justify-center p-2"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 top-20 bg-surface/95 backdrop-blur-3xl border-t border-outline-variant py-6 px-6 z-40 h-screen"
                    >
                        <nav className="flex flex-col items-center space-y-6 pt-10">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-2xl font-bold tracking-tight transition-colors ${active === item.href.slice(1) ? 'text-on-surface' : 'text-outline hover:text-on-surface'
                                        }`}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.05 }}
                                onClick={() => setMobileOpen(false)}
                                className="mt-8 btn-primary w-full max-w-[200px]"
                            >
                                Get in Touch
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
