import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function LoadingScreen() {
    const { dark } = useTheme()

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ background: dark ? '#050508' : '#f8f9fc' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="relative mb-8"
            >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                    <span className="text-white font-bold text-3xl font-[var(--font-display)]">&lt;/&gt;</span>
                </div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl font-bold mb-6 font-[var(--font-display)] tracking-tight gradient-text-animated"
            >
                Akshay Kumar
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`w-48 h-[2px] rounded-full overflow-hidden ${dark ? 'bg-white/5' : 'bg-black/10'}`}
            >
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.8 }}
                className={`text-xs mt-4 tracking-[3px] uppercase ${dark ? 'text-white/30' : 'text-black/40'}`}
            >
                Loading Experience
            </motion.p>
        </motion.div>
    )
}
