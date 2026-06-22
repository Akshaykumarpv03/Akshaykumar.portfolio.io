import { motion } from 'framer-motion'

export default function Experience() {
    const achievements = [
        {
            icon: 'school',
            title: 'B.Tech in CSE',
            subtitle: 'College of Engineering Trikaripur',
            desc: 'Pursuing Computer Science and Engineering with focus on real-world application development.',
            period: 'Current',
        },
        {
            icon: 'code',
            title: 'Full Stack Projects',
            subtitle: 'Web Development',
            desc: 'Built Student Management Portal and Job Portal with PHP, MySQL, and modern frontend technologies.',
            period: 'Ongoing',
        },
        {
            icon: 'psychology',
            title: 'AI & Machine Learning',
            subtitle: 'Continuous Learning',
            desc: 'Exploring AI/ML concepts and integrating intelligent features into applications.',
            period: 'Exploring',
        },
    ]

    return (
        <section id="experience" className="max-w-[1280px] mx-auto px-6 mb-[150px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="section-tag mb-4">Journey</span>
                <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-[600] text-on-surface mt-4">
                    Experience & Achievements
                </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-outline-variant" />

                {achievements.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="relative pl-20 pb-12 last:pb-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full border-2 border-outline-variant bg-surface-container z-10" />

                        {/* Card */}
                        <div className="clean-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                                        <span className="material-symbols-outlined text-on-surface text-xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-on-surface leading-tight mb-1">{item.title}</h3>
                                        <p className="text-sm text-outline">{item.subtitle}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-outline self-start sm:self-auto uppercase tracking-wider">
                                    {item.period}
                                </span>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
