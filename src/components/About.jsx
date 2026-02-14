import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (!inView) return
        const num = parseInt(target)
        if (isNaN(num)) { setCount(target); return }
        let start = 0
        const step = Math.max(1, Math.floor(num / 40))
        const interval = setInterval(() => {
            start += step
            if (start >= num) { setCount(num); clearInterval(interval) }
            else setCount(start)
        }, 40)
        return () => clearInterval(interval)
    }, [inView, target])

    return (
        <span ref={ref} className="font-[var(--font-display)] text-3xl md:text-4xl font-bold gradient-text-animated">
            {count}{suffix}
        </span>
    )
}

const stats = [
    { value: 'B.Tech', label: 'Degree' },
    { value: 'CSE', label: 'Branch' },
    { value: '2', label: 'Projects', suffix: '+' },
    { value: '7', label: 'Technologies', suffix: '+' },
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div ref={ref} className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-tag mb-4 inline-flex">
                        <i className="fas fa-user" /> About Me
                    </span>
                    <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mt-4 dark:text-white text-gray-900">
                        Who I Am
                    </h2>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30 max-w-3xl mx-auto"
                >
                    <div className="glass-card p-10 md:p-14 rounded-2xl">
                        <p className="text-center dark:text-white/55 text-gray-500 text-lg md:text-xl leading-[1.9] mb-12">
                            I'm a student at <strong className="dark:text-white/85 text-gray-800 font-semibold">College of Engineering Trikaripur</strong>,
                            pursuing <strong className="dark:text-white/85 text-gray-800 font-semibold">B.Tech in Computer Science and Engineering</strong>.
                            I'm passionate about learning, growing, and using my skills to build something meaningful and inspiring.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="text-center p-5 rounded-xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/[0.04] border-black/[0.06] hover:border-purple-500/20 transition-all duration-300"
                                >
                                    {isNaN(parseInt(stat.value)) ? (
                                        <span className="font-[var(--font-display)] text-3xl md:text-4xl font-bold gradient-text-animated block mb-2">
                                            {stat.value}
                                        </span>
                                    ) : (
                                        <span className="block mb-2">
                                            <AnimatedCounter target={stat.value} suffix={stat.suffix || ''} />
                                        </span>
                                    )}
                                    <span className="text-xs dark:text-white/35 text-gray-400 uppercase tracking-[2px] font-semibold">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
