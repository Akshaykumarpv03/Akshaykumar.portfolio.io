import { motion } from 'framer-motion'

export default function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
            >
                <div className="text-2xl font-bold text-on-surface mb-6 tracking-tighter">
                    AK.
                </div>

                <div className="w-48 h-[2px] bg-surface-variant rounded-full overflow-hidden mb-4">
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="h-full bg-primary rounded-full"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xs text-outline uppercase tracking-[3px] font-medium"
                >
                    Loading
                </motion.p>
            </motion.div>
        </motion.div>
    )
}
