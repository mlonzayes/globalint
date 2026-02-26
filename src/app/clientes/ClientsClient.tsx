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
        "american_vial.png",
        "american_agro.jpg",
        "aca.jpg",
        "tres_arroyos.png",
        "mota.jpg",
        "aca.jpg",
        "lepain.png",
        "Neored.png",
        "apm_terminals.png",
        "MSC-CRUCEROS.jpg",
        "xcmg_group_latam_logo.jpg",
        "nanoteksa_logo.jpg",
        "neumen_cuadrado-jpg.webp",
        "agrofun.jpg",
        "multivag.png",
        "fachman.png",
        "dosicolor.png",
        "enjoy.png",
        "potreto_de_funes.png",
        "jonh_car.png",
        "cosmaca.jpg"
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
                        <source src="/videos/video_6595364.webm" type="video/webm" />
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
                            Algunos de nuestros clientes
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
