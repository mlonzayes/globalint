'use client';

import { motion, AnimatePresence } from 'framer-motion';
interface PageLoaderProps {
    isVisible: boolean;
}

const PageLoader = ({ isVisible }: PageLoaderProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Spinning Animated Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute w-16 h-16 rounded-full border-4 border-transparent border-t-[#33C9F4] border-l-[#2D8CBA] border-b-[#0F1D23]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute w-24 h-24 rounded-full border-4 border-transparent border-r-[#33C9F4] border-t-[#0F1D23] opacity-60"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
