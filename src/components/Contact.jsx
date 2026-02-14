import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [focused, setFocused] = useState('')

    const fields = [
        { id: 'name', icon: 'fas fa-user', type: 'text', placeholder: 'Your Name' },
        { id: 'email', icon: 'fas fa-at', type: 'email', placeholder: 'Your Email' },
        { id: 'subject', icon: 'fas fa-tag', type: 'text', placeholder: 'Subject' },
    ]

    const fieldBase = 'dark:bg-white/[0.02] bg-black/[0.02] dark:border-white/[0.05] border-black/[0.08]'
    const fieldFocus = 'dark:bg-purple-500/[0.03] bg-purple-500/[0.04] border-purple-500/40 shadow-[0_0_0_3px_rgba(168,85,247,0.06)]'

    return (
        <section id="contact" className="relative py-28 md:py-36">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

            <div ref={ref} className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="section-tag mb-4 inline-flex">
                        <i className="fas fa-envelope" /> Get In Touch
                    </span>
                    <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight mt-4 dark:text-white text-gray-900">
                        Contact Me
                    </h2>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/25 via-transparent to-blue-500/25 max-w-2xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-12 rounded-2xl">
                        <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:akshaykumarpv0987@gmail.com'; }} className="flex flex-col gap-5">
                            {fields.map((field, i) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300 ${focused === field.id ? fieldFocus : fieldBase
                                        }`}
                                >
                                    <i className={`${field.icon} text-base transition-colors duration-300 ${focused === field.id ? 'text-purple-400' : 'dark:text-white/20 text-gray-300'
                                        }`} />
                                    <input
                                        required type={field.type} placeholder={field.placeholder}
                                        className="flex-1 bg-transparent border-none outline-none dark:text-white/90 text-gray-800 text-base font-[var(--font-sans)] dark:placeholder-white/25 placeholder-gray-400"
                                        onFocus={() => setFocused(field.id)} onBlur={() => setFocused('')}
                                    />
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.54 }}
                                className={`flex items-start gap-4 px-6 py-4 rounded-xl border transition-all duration-300 ${focused === 'message' ? fieldFocus : fieldBase
                                    }`}
                            >
                                <i className={`fas fa-comment-dots text-base mt-1 transition-colors duration-300 ${focused === 'message' ? 'text-purple-400' : 'dark:text-white/20 text-gray-300'
                                    }`} />
                                <textarea required placeholder="Your Message" rows={5}
                                    className="flex-1 bg-transparent border-none outline-none dark:text-white/90 text-gray-800 text-base resize-y font-[var(--font-sans)] leading-relaxed dark:placeholder-white/25 placeholder-gray-400"
                                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                                />
                            </motion.div>

                            <motion.button type="submit"
                                whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 }}
                                className="w-full mt-3 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-base rounded-xl shadow-[0_6px_25px_rgba(168,85,247,0.3)] hover:shadow-[0_10px_40px_rgba(168,85,247,0.45)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <span className="text-lg">Send Message</span>
                                <i className="fas fa-paper-plane text-base" />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
