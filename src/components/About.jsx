import { motion } from 'framer-motion'

export default function About() {
    const stats = [
        { value: 'B.Tech', label: 'Degree' },
        { value: 'CSE', label: 'Branch' },
        { value: '2+', label: 'Projects' },
        { value: '7+', label: 'Technologies' },
    ]

    return (
        <section id="about" className="max-w-[1280px] mx-auto px-6 mb-[150px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left Side: Content */}
                <div className="md:col-span-5 flex flex-col space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-tag mb-6">About Me</span>
                        <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-[600] text-on-surface mb-6">
                            Passionate about building the future
                        </h2>
                        
                        <p className="font-body text-on-surface-variant mb-6">
                            I'm a student at College of Engineering Trikaripur, pursuing B.Tech in Computer Science and Engineering. I'm passionate about learning, growing, and using my skills to build something meaningful and inspiring.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[20px]">check_circle</span>
                                <span className="text-on-surface-variant text-sm">B.Tech in Computer Science and Engineering</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[20px]">check_circle</span>
                                <span className="text-on-surface-variant text-sm">Passionate about AI/ML and web development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-primary mr-3 mt-1 text-[20px]">check_circle</span>
                                <span className="text-on-surface-variant text-sm">Building real-world projects with modern technologies</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Right Side: Stats Grid */}
                <div className="md:col-span-7">
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                className="clean-card p-6 bg-surface-container-lowest text-center flex flex-col items-center justify-center min-h-[160px]"
                            >
                                <span className="text-3xl font-bold text-on-surface mb-2">{stat.value}</span>
                                <span className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
