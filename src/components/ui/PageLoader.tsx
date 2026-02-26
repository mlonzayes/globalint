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
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Spinning Animated Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full border-4 border-transparent border-t-[#33C9F4] border-l-[#2D8CBA] border-b-[#0F1D23] opacity-80"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-transparent border-r-[#33C9F4] border-t-[#0F1D23] opacity-40 mix-blend-multiply"
                        />

                        {/* Pulsing Logo */}
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
                            className="relative w-28 h-28 sm:w-40 sm:h-40 bg-white rounded-full flex items-center justify-center p-2 shadow-sm"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/logo.png"
                                    alt="Global International Trade"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
