import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        {
            title: 'Student Management Portal',
            desc: 'A complete student record management system with course enrollment and academic tracking.',
            tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
        },
        {
            title: 'Job Portal',
            desc: 'Full-featured job portal designed for Recruiters and Applicants to connect and hire.',
            tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
        },
    ]

    return (
        <section id="projects" className="max-w-[1280px] mx-auto px-6 mb-[150px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="section-tag mb-4">Portfolio</span>
                <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-[600] text-on-surface mt-4">
                    Featured Work
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="clean-card overflow-hidden group flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden bg-surface-container">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-surface/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-medium text-on-surface mb-3">
                                {project.title}
                            </h3>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
                                {project.desc}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-on-surface font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:opacity-70 transition-opacity">
                                View Project <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
