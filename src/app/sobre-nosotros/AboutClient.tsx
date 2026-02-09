'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import AboutSection from '@/components/home/AboutSection';
import MissionVisionValues from '@/components/home/MissionVisionSection';
import { motion } from 'framer-motion';

const AboutClient = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col font-sans text-[#0F1D23]">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33C9F4]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#33C9F4]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-normal text-[#0F1D23] mb-6 tracking-tight"
                    >
                        Sobre <span className="text-[#33C9F4]">Nosotros</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Somos tu socio estratégico en comercio internacional.
                    </motion.p>
                </div>
            </section>

            <AboutSection />
            <MissionVisionValues />

            <Footer />
            <WhatsAppButton />
        </main>
    )
}

export default AboutClient;
