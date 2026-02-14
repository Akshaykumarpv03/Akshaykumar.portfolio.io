import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
    const { dark, toggle } = useTheme()

    return (
        <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full flex items-center justify-center glass-card cursor-pointer transition-all duration-300 hover:border-purple-500/30"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {dark ? (
                <i className="fas fa-sun text-amber-400 text-base" />
            ) : (
                <i className="fas fa-moon text-violet-500 text-base" />
            )}
        </motion.button>
    )
}
