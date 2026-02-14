import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
    {
        title: 'Student Management Portal',
        desc: 'A complete student record management system with course enrollment and academic tracking.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
        tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    },
    {
        title: 'Job Portal',
        desc: 'Full-featured job portal designed for Recruiters and Applicants to connect and hire.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
        tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    },
]

function TiltCard({ children, className }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const handleLeave = () => { x.set(0); y.set(0) }

    return (
        <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className={className}>
            {children}
        </motion.div>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="projects" className="relative py-28 md:py-36">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div ref={ref} className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-tag mb-4 inline-flex">
                        <i className="fas fa-layer-group" /> Portfolio
                    </span>
                    <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mt-4 dark:text-white text-gray-900">
                        My Projects
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
                    {projects.map((project, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 60 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                        >
                            <TiltCard className="group rounded-2xl overflow-hidden glass-card cursor-pointer hover:border-purple-500/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={project.image} alt={project.title} loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                        <span className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-[0_4px_25px_rgba(168,85,247,0.5)]">
                                            <i className="fas fa-external-link-alt text-lg" />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7" style={{ transform: 'translateZ(25px)' }}>
                                    <h3 className="font-[var(--font-display)] text-xl font-bold mb-3 dark:text-white text-gray-900 group-hover:text-purple-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="dark:text-white/40 text-gray-500 text-base leading-relaxed mb-5">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full bg-purple-500/[0.06] text-purple-400 border border-purple-500/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
