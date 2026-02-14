import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
    {
        icon: 'fas fa-graduation-cap',
        title: 'B.Tech in CSE',
        subtitle: 'College of Engineering Trikaripur',
        desc: 'Pursuing Computer Science and Engineering with focus on real-world application development.',
        period: 'Current',
        color: 'purple',
    },
    {
        icon: 'fas fa-laptop-code',
        title: 'Full Stack Projects',
        subtitle: 'Web Development',
        desc: 'Built Student Management Portal and Job Portal with PHP, MySQL, and modern frontend technologies.',
        period: 'Ongoing',
        color: 'blue',
    },
    {
        icon: 'fas fa-brain',
        title: 'AI & Machine Learning',
        subtitle: 'Continuous Learning',
        desc: 'Exploring AI/ML concepts and integrating intelligent features into applications.',
        period: 'Exploring',
        color: 'cyan',
    },
]

const colorMap = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', icon: 'text-purple-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'text-blue-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', icon: 'text-cyan-400' },
}

export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="relative py-28 md:py-36">
            <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div ref={ref} className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-tag mb-4 inline-flex">
                        <i className="fas fa-rocket" /> Journey
                    </span>
                    <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mt-4 dark:text-white text-gray-900">
                        Experience & Achievements
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-transparent" />

                    {achievements.map((item, i) => {
                        const c = colorMap[item.color]
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                                className="relative pl-16 md:pl-22 mb-10 last:mb-0 group"
                            >
                                {/* Dot */}
                                <div className={`absolute left-4 md:left-6 top-8 w-5 h-5 rounded-full ${c.bg} border-2 ${c.border} group-hover:scale-125 transition-transform duration-300`}>
                                    <div className={`absolute inset-1 rounded-full ${c.bg}`} />
                                </div>

                                {/* Card */}
                                <div className="glass-card p-7 md:p-8 rounded-2xl hover:border-purple-500/15 transition-all duration-300">
                                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                                                <i className={`${item.icon} ${c.icon} text-lg`} />
                                            </div>
                                            <div>
                                                <h3 className="font-[var(--font-display)] font-bold text-lg dark:text-white text-gray-900">{item.title}</h3>
                                                <p className="dark:text-white/40 text-gray-500 text-base">{item.subtitle}</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-semibold uppercase tracking-[2px] px-4 py-1.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="dark:text-white/45 text-gray-500 text-base leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
