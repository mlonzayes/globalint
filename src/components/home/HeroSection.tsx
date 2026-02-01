'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
    const handleConsultationClick = () => {
        const consultationSection = document.getElementById('contact-section')
        consultationSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 px-2 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-4 sm:pb-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-[85vh] sm:h-[600px] lg:h-[680px] overflow-hidden rounded-[20px] sm:rounded-[40px] lg:rounded-[48px] shadow-xl"
            >
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://www.pexels.com/es-es/download/video/30899272/" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/30 sm:to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-5 sm:px-12 lg:px-20 max-w-4xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white mb-3 sm:mb-6 tracking-tight drop-shadow-lg"
                        >
                            Comercio exterior con <br className="hidden sm:block" />
                            enfoque <span className="text-[#33C9F4]">estratégico.</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="text-sm sm:text-base lg:text-xl font-medium leading-relaxed text-gray-100 mb-6 sm:mb-8 max-w-xl drop-shadow-md"
                        >
                            Integración inteligente de logística, normativa y negocio. +30 años potenciando empresas.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            <button
                                onClick={handleConsultationClick}
                                className="bg-[#2D8CBA] hover:bg-[#237ba5] text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Hacer una consulta
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
