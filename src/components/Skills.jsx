import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
    { icon: 'fab fa-html5', name: 'HTML', color: '#e34f26' },
    { icon: 'fab fa-css3-alt', name: 'CSS', color: '#1572b6' },
    { icon: 'fab fa-js-square', name: 'JavaScript', color: '#f7df1e' },
    { icon: 'fas fa-database', name: 'MySQL', color: '#4479a1' },
    { icon: 'fas fa-c', name: 'C', color: '#a8b9cc' },
    { icon: 'fab fa-java', name: 'Java', color: '#ed8b00' },
    { icon: 'fab fa-python', name: 'Python', color: '#3776ab' },
]

export default function Skills() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="skills" className="relative py-28 md:py-36">
            <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div ref={ref} className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-tag mb-4 inline-flex">
                        <i className="fas fa-code" /> My Skills
                    </span>
                    <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mt-4 dark:text-white text-gray-900">
                        Tech Stack
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5 md:gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 40, scale: 0.8 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.08, type: 'spring', stiffness: 120 }}
                            whileHover={{ y: -10, scale: 1.08 }}
                            className="group flex flex-col items-center gap-3 p-5 md:p-6 rounded-2xl glass-card cursor-default hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
                        >
                            <div className="w-20 h-20 rounded-2xl dark:bg-white/[0.04] bg-black/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <i className={`${skill.icon} text-5xl`} style={{ color: skill.color }} />
                            </div>
                            <span className="text-sm font-semibold dark:text-white/40 text-gray-500 uppercase tracking-[1.5px]">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
