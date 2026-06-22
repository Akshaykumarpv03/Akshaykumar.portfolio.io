import { motion } from 'framer-motion'

export default function Skills() {
    const skillGroups = [
        {
            title: 'Frontend Development',
            icon: 'code',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        },
        {
            title: 'Backend & Database',
            icon: 'dns',
            skills: ['Python', 'Node.js', 'PHP', 'MySQL'],
        },
        {
            title: 'Tools & Learning',
            icon: 'build',
            skills: ['Git', 'VS Code', 'AI/ML'],
        }
    ]

    return (
        <section id="skills" className="max-w-[1280px] mx-auto px-6 mb-[150px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="section-tag mb-4">Tech Stack</span>
                <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-[600] text-on-surface mt-4 mb-4">
                    Core Technologies
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="clean-card p-6 flex flex-col h-full group"
                    >
                        <div className="mb-6 bg-surface-container h-40 rounded-xl overflow-hidden flex items-center justify-center relative transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors">
                                {group.icon}
                            </span>
                        </div>
                        
                        <h3 className="text-xl font-medium text-on-surface mb-4">
                            {group.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                            {group.skills.map(skill => (
                                <span key={skill} className="text-xs px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface-variant font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                        <a href="#projects" className="text-sm font-medium text-on-surface hover:text-primary inline-flex items-center transition-colors">
                            View projects <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
