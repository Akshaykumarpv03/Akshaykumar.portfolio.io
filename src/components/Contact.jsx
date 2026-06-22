import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const fields = [
        { id: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
        { id: 'email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
        { id: 'subject', type: 'text', label: 'Subject', placeholder: 'How can I help you?' },
    ]

    return (
        <section id="contact" className="max-w-[1280px] mx-auto px-6 mb-[150px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="section-tag mb-4">Get In Touch</span>
                <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-[600] text-on-surface mt-4">
                    Contact Me
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-2xl mx-auto"
            >
                <div className="clean-card p-8 md:p-12">
                    <form 
                        onSubmit={(e) => { 
                            e.preventDefault(); 
                            window.location.href = 'mailto:akshaykumarpv0987@gmail.com'; 
                        }} 
                        className="flex flex-col gap-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {fields.slice(0, 2).map((field) => (
                                <div key={field.id}>
                                    <label className="block text-xs font-medium text-on-surface uppercase tracking-wider mb-2">
                                        {field.label}
                                    </label>
                                    <input
                                        required 
                                        type={field.type} 
                                        placeholder={field.placeholder}
                                        className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-on-surface uppercase tracking-wider mb-2">
                                {fields[2].label}
                            </label>
                            <input
                                required 
                                type={fields[2].type} 
                                placeholder={fields[2].placeholder}
                                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-on-surface uppercase tracking-wider mb-2">
                                Message
                            </label>
                            <textarea 
                                required 
                                placeholder="Your message..." 
                                rows={5}
                                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-shadow"
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn-primary w-full mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-12">
                    <a
                        href="https://www.linkedin.com/in/akshay-kumar-ims/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                        aria-label="LinkedIn"
                    >
                        <span className="text-sm font-bold">in</span>
                    </a>
                    <a
                        href="https://github.com/Akshaykumarpv03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                        aria-label="GitHub"
                    >
                        <span className="material-symbols-outlined text-[20px]">code</span>
                    </a>
                    <a
                        href="https://www.instagram.com/akshay__ims"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                        aria-label="Instagram"
                    >
                        <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
