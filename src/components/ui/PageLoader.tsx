'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            opacity: { duration: 0.5 },
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64"
                    >
                        <Image
                            src="/logo.png"
                            alt="Global International Trade"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
