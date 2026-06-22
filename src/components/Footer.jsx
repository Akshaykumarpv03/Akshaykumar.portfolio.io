export default function Footer() {
    return (
        <footer className="border-t border-surface-variant bg-surface-bright pt-24 pb-12">
            {/* Top CTA */}
            <div className="max-w-[1280px] mx-auto px-6 mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8">
                    Let's work together
                </h2>
                <a href="#contact" className="btn-primary text-lg px-8 py-4">
                    Get in Touch
                </a>
            </div>

            {/* Links Columns */}
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-4 lg:col-span-2">
                    <div className="text-2xl font-bold tracking-tighter text-on-surface mb-6">
                        Akshay Kumar
                    </div>
                    <p className="text-sm text-on-surface-variant mb-6 pr-4">
                        Developer • AI Enthusiast • Creator
                    </p>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email-subscribe" className="text-xs font-medium text-on-surface">Subscribe to updates</label>
                        <div className="flex">
                            <input 
                                id="email-subscribe" 
                                type="email" 
                                placeholder="Email address"
                                className="bg-surface-container border border-outline-variant text-on-surface text-sm rounded-l-md px-3 py-2 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <button className="bg-primary text-on-primary px-4 py-2 rounded-r-md text-sm font-medium hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Column */}
                <div>
                    <h4 className="text-xs font-medium text-on-surface uppercase tracking-wider mb-4">Navigation</h4>
                    <ul className="space-y-3 text-xs text-on-surface-variant">
                        <li><a href="#home" className="hover:text-on-surface transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-on-surface transition-colors">About</a></li>
                        <li><a href="#skills" className="hover:text-on-surface transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-on-surface transition-colors">Projects</a></li>
                        <li><a href="#experience" className="hover:text-on-surface transition-colors">Experience</a></li>
                        <li><a href="#contact" className="hover:text-on-surface transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Social Column */}
                <div>
                    <h4 className="text-xs font-medium text-on-surface uppercase tracking-wider mb-4">Social</h4>
                    <ul className="space-y-3 text-xs text-on-surface-variant">
                        <li><a href="https://www.linkedin.com/in/akshay-kumar-ims/" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">LinkedIn</a></li>
                        <li><a href="https://github.com/Akshaykumarpv03" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">GitHub</a></li>
                        <li><a href="https://www.instagram.com/akshay__ims" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="col-span-2 md:col-span-1 lg:col-span-2">
                    <h4 className="text-xs font-medium text-on-surface uppercase tracking-wider mb-4">Contact</h4>
                    <ul className="space-y-3 text-xs text-on-surface-variant">
                        <li><a href="mailto:akshaykumarpv0987@gmail.com" className="hover:text-on-surface transition-colors">akshaykumarpv0987@gmail.com</a></li>
                        <li className="pt-2">Kerala, India</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1280px] mx-auto px-6 pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-xs text-outline">
                    © 2025 Akshay Kumar P V. All rights reserved.
                </div>
                <div className="flex space-x-4 text-outline">
                    <a href="https://www.linkedin.com/in/akshay-kumar-ims/" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors" aria-label="LinkedIn">
                        <span className="text-sm font-bold">in</span>
                    </a>
                    <a href="https://github.com/Akshaykumarpv03" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors" aria-label="GitHub">
                        <span className="material-symbols-outlined text-[20px]">code</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
