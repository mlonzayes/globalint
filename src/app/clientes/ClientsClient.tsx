'use client';

import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactSection from '@/components/home/ContactSection';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import PageLoader from '@/components/ui/PageLoader';
import { useState, useEffect, useRef } from 'react';

const ClientsClient = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setVideoLoaded(true);
            setMinTimeElapsed(true);
            return;
        }

        const timer = setTimeout(() => {
            setMinTimeElapsed(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const isLoading = !videoLoaded || !minTimeElapsed;

    // List of images from public/clients/clients_page
    const clientImages = [
        "03_cosmacasrllogo_29777.jpg",
        "1658578442-e84ada33d0fbe8fd2ad8e6e0140a4b1b7833c7762c8956d9c553c8a7fc02ddd5-d.webp",
        "1721139197457.jpg",
        "4fe4c4_0d7af00753004654871adaab95bf396b~mv2.png",
        "AVEX-SA.png",
        "Diseño sin título (2).png",
        "MSC-CRUCEROS_1516035502.jpg",
        "acacoop_logo.jpg",
        "images (1).png",
        "images (10).png",
        "images (2).png",
        "images (3).jpg",
        "images (3).png",
        "images (4).jpg",
        "images (4).png",
        "images (5).jpg",
        "images (5).png",
        "images (6).png",
        "images (7).png",
        "images (8).png",
        "images (9).png",
        "imposudamericana_logo.jpg",
        "logo-header.png",
        "mooving_s_r_l_logo.jpg",
        "nanoteksa_logo.jpg",
        "neumen_cuadrado-jpg.webp",
        "screen-0.jpg",
        "unnamed.jpg",
        "unnamed.png",
        "xcmg_group_latam_logo.jpg"
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col text-[#0F1D23]">
            <PageLoader isVisible={isLoading} />
            <Header forceScrolled={true} />

            {/* Hero Section */}
            {/* Hero Section with Video */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedData={() => setVideoLoaded(true)}
                        className="w-full h-full object-cover"
                    >
                        <source src="https://www.pexels.com/es-es/download/video/32750416/" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-normal text-white mb-6 leading-tight"
                        >
                            Nuestros Clientes
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-100 leading-relaxed mb-8 max-w-lg mx-auto"
                        >
                            Empresas líderes que confían en nuestra experiencia y compromiso.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {clientImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 aspect-square border border-gray-100"
                        >
                            <img
                                src={`/clients/clients_page/${image}`}
                                alt={`Cliente ${index + 1}`}
                                className="w-full h-full object-contain filter hover:brightness-110 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default ClientsClient;
