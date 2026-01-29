'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import WhatsAppButton from '@/components/common/WhatsAppButton';

// Data for services
const services = [
    {
        id: 'logistica',
        title: 'Logística Integral',
        shortDescription: 'Coordinación eficiente de transporte y almacenamiento para tu carga.',
        fullDescription: 'Optimizamos cada etapa de tu cadena de suministro. Desde la recolección en origen hasta la entrega final, nos encargamos de la coordinación de transporte marítimo, aéreo y terrestre, asegurando tiempos y costos eficientes. Contamos con una red de agentes globales que nos permite ofrecer cobertura mundial.',
        features: ['Transporte Multimodal', 'Gestión de Inventarios', 'Seguimiento en Tiempo Real', 'Optimización de Costos'],
        icon: '🚢', // Replace with Image if available
        image: '/images/logistica-detail.jpg' // Placeholder
    },
    {
        id: 'despacho',
        title: 'Despacho Aduanero',
        shortDescription: 'Gestión ágil y segura de tus trámites aduaneros.',
        fullDescription: 'Nuestro equipo de despachantes expertos garantiza el cumplimiento de todas las normativas vigentes. Realizamos clasificaciones arancelarias precisas, gestión de licencias y permisos, y aseguramos una liberación rápida de tu mercadería, minimizando riesgos y demoras en frontera.',
        features: ['Clasificación Arancelaria', 'Permisos y Licencias', 'Tránsitos y Transbordos', 'Asesoría Normativa'],
        icon: '📋',
        image: '/images/despacho-detail.jpg'
    },
    {
        id: 'comercio',
        title: 'Comercio Internacional',
        shortDescription: 'Asesoría estratégica para expandir tu negocio al mundo.',
        fullDescription: 'Te acompañamos en tu proceso de internacionalización. Analizamos mercados potenciales, identificamos oportunidades de negocio y desarrollamos estrategias de entrada efectivas. Ya sea que busques exportar tus productos o importar insumos, te brindamos la inteligencia comercial necesaria.',
        features: ['Estudios de Mercado', 'Búsqueda de Proveedores', 'Negociación Internacional', 'Estrategias de Entrada'],
        icon: '🌍',
        image: '/images/comercio-detail.jpg'
    },
    {
        id: 'terciarizacion',
        title: 'Terciarización Comex',
        shortDescription: 'Deja tu departamento de comercio exterior en manos expertas.',
        fullDescription: 'Actuamos como tu departamento de comercio exterior externo. Nos integramos a tu empresa para gestionar integralmente tus operaciones, permitiéndote enfocarte en tu "core business" mientras nosotros nos ocupamos de la complejidad operativa y administrativa del comex.',
        features: ['Departamento Externo', 'Reducción de Costos Fijos', 'Profesionales Dedicados', 'Reportes de Gestión'],
        icon: '🤝',
        image: '/images/terciarizacion-detail.jpg'
    }
];

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col font-sans text-[#0F1D23]">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#0F1D23] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33C9F4] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#33C9F4] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        Nuestros <span className="text-[#33C9F4]">Servicios</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Soluciones integrales diseñadas para potenciar tu operación global.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            layoutId={`card-${service.id}`}
                            className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -mr-8 -mt-8 z-0 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#EAF7FC]" />

                            <div className="relative z-10">
                                <span className="text-4xl mb-6 block filter grayscale group-hover:grayscale-0 transition-all duration-300">{service.icon}</span>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0F1D23] group-hover:text-[#33C9F4] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.shortDescription}
                                </p>
                                <motion.button
                                    onClick={() => setSelectedService(service)}
                                    layoutId={`button-${service.id}`}
                                    className="inline-flex items-center gap-2 text-base font-bold text-[#33C9F4] hover:text-[#237ba5] transition-colors group/btn"
                                >
                                    Ver detalles
                                    <svg
                                        className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
                        />
                        <motion.div
                            layoutId={`card-${selectedService.id}`}
                            className="fixed inset-0 sm:inset-auto sm:top-[10%] sm:left-1/2 sm:-translate-x-1/2 sm:max-w-3xl w-full sm:h-auto h-full bg-white sm:rounded-[40px] shadow-2xl z-50 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-64 sm:h-80 bg-[#0F1D23] flex-shrink-0">
                                {/* Abstract Background or Image */}
                                <div className="absolute inset-0 opacity-40">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D23] to-transparent" />
                                    {/* Placeholder for actual service image */}
                                    <div className="w-full h-full bg-[#1a2c35] flex items-center justify-center text-white/10 text-9xl font-black overflow-hidden">
                                        {selectedService.icon}
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedService(null); }}
                                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md z-20"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="absolute bottom-8 left-8 sm:left-12 z-10">
                                    <motion.h2
                                        className="text-3xl sm:text-5xl font-black text-white mb-2"
                                    >
                                        {selectedService.title}
                                    </motion.h2>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 sm:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                                        {selectedService.fullDescription}
                                    </p>

                                    <h4 className="text-lg font-bold text-[#0F1D23] mb-4 uppercase tracking-wider">Características Principales</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                                        {selectedService.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-xl">
                                                <svg className="w-5 h-5 text-[#33C9F4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={() => {
                                            setSelectedService(null);
                                            // Optional: Scroll to contact
                                            setTimeout(() => {
                                                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                                            }, 300);
                                        }}
                                        className="bg-[#33C9F4] hover:bg-[#2bb4db] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                    >
                                        Consultar por este servicio
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default ServicesPage;
