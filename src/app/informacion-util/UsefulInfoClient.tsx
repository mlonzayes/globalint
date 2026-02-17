'use client';

import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import PageLoader from '@/components/ui/PageLoader';
import ContainerCarousel from '@/components/home/ContainerCarousel';
import IncotermsSelector from '@/components/home/IncotermsSelector';
import { LuBadgeDollarSign, LuBox, LuShip, LuGlobe } from 'react-icons/lu';
import { useState, useEffect, useRef } from 'react';

const UsefulInfoClient = () => {
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

    const resources = [
        {
            title: "Cotización de Divisas",
            desc: "Consulta el tipo de cambio oficial actualizado.",
            icon: <LuBadgeDollarSign className="w-8 h-8 text-[#33C9F4]" />,
            link: "https://www.bna.com.ar/Personas",
            linkText: "Banco Nación"
        },
        {
            title: "Buscador de NCM",
            desc: "Nomenclatura Común del Mercosur.",
            icon: <LuBox className="w-8 h-8 text-[#33C9F4]" />,
            link: "http://www.afip.gob.ar/ncm/",
            linkText: "Consultar AFIP"
        },
        {
            title: "Incoterms 2020",
            desc: "Reglas internacionales para términos comerciales.",
            icon: <LuShip className="w-8 h-8 text-[#33C9F4]" />,
            link: "https://iccwbo.org/business-solutions/incoterms-rules/",
            linkText: "Ver Incoterms"
        },
        {
            title: "Central de Información",
            desc: "Ventanilla Única de Comercio Exterior.",
            icon: <LuGlobe className="w-8 h-8 text-[#33C9F4]" />,
            link: "https://www.argentina.gob.ar/vuce",
            linkText: "Ir a VUCE"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col text-[#0F1D23]">
            <PageLoader isVisible={isLoading} />
            <Header forceScrolled={true} />

            {/* Hero Section with Video */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden min-h-[60vh] flex items-center justify-center">
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
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Información Útil
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Herramientas y recursos esenciales para optimizar tu gestión de comercio exterior.
                    </motion.p>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((resource, index) => (
                            <motion.a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gray-50 rounded-2xl p-8 hover:bg-[#33C9F4]/5 border border-gray-100 hover:border-[#33C9F4]/30 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm shadow-sm hover:shadow-lg"
                            >
                                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {resource.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0F1D23] mb-3 group-hover:text-[#2D8CBA] transition-colors">{resource.title}</h3>
                                <p className="text-gray-500 mb-6 flex-grow">{resource.desc}</p>
                                <span className="text-[#33C9F4] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    {resource.linkText}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Container Types Carousel */}
            <ContainerCarousel />

            {/* Incoterms Selector */}
            <IncotermsSelector />

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default UsefulInfoClient;
