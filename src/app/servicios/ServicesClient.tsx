'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ContactSection from '@/components/home/ContactSection'; // Reusing ContactSection for CTA

// Data for services
const services = [
    {
        id: 'despacho',
        title: 'Despacho Aduanero',
        shortDescription: 'Gestión ágil y segura de tus trámites aduaneros.',
        fullDescription: 'Nuestro equipo de despachantes expertos garantiza el cumplimiento de todas las normativas vigentes. Realizamos clasificaciones arancelarias precisas, gestión de licencias y permisos, y aseguramos una liberación rápida de tu mercadería, minimizando riesgos y demoras en frontera.',
        features: ['Clasificación Arancelaria', 'Permisos y Licencias', 'Tránsitos y Transbordos', 'Asesoría Normativa'],
        icon: '📋',
        image: '/warehouse_workers_photo_1769982485977.png',
        benefits: [
            { title: "Rapidez", desc: "Liberación de cargas en tiempo récord." },
            { title: "Seguridad", desc: "Cumplimiento total de regulaciones." },
            { title: "Expertise", desc: "Equipo especializado en normativas complejas." }
        ]
    },
    {
        id: 'logistica',
        title: 'Logística Integral',
        shortDescription: 'Coordinación eficiente de transporte y almacenamiento para tu carga.',
        fullDescription: 'Optimizamos cada etapa de tu cadena de suministro. Desde la recolección en origen hasta la entrega final, nos encargamos de la coordinación de transporte marítimo, aéreo y terrestre, asegurando tiempos y costos eficientes. Contamos con una red de agentes globales que nos permite ofrecer cobertura mundial.',
        features: ['Transporte Multimodal', 'Gestión de Inventarios', 'Seguimiento en Tiempo Real', 'Optimización de Costos'],
        icon: '🚢',
        image: '/logistics_cargo_ship_photo_1769982467110.png',
        benefits: [
            { title: "Eficiencia", desc: "Rutas optimizadas para reducir costos." },
            { title: "Cobertura", desc: "Red global de agentes en 5 continentes." },
            { title: "Control", desc: "Tracking en tiempo real de tu carga." }
        ]
    },
    {
        id: 'terciarizacion',
        title: 'Terciarización Comex',
        shortDescription: 'Deja tu departamento de comercio exterior en manos expertas.',
        fullDescription: 'Actuamos como tu departamento de comercio exterior externo. Nos integramos a tu empresa para gestionar integralmente tus operaciones, permitiéndote enfocarte en tu "core business" mientras nosotros nos ocupamos de la complejidad operativa y administrativa del comex.',
        features: ['Departamento Externo', 'Reducción de Costos Fijos', 'Profesionales Dedicados', 'Reportes de Gestión'],
        icon: '🤝',
        image: '/logistics_team_meeting_photo_1769982501582.png',
        benefits: [
            { title: "Foco", desc: "Dedicate a tu negocio, nosotros al comex." },
            { title: "Ahorro", desc: "Reduce costos fijos operativos." },
            { title: "Profesionalismo", desc: "Equipo experto a tu disposición." }
        ]
    }
];

const ServicesContent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const serviceId = searchParams.get('service');

    // Default to first service if no param or invalid param
    const selectedService = services.find(s => s.id === serviceId) || services[0];

    // Scroll to top when service changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]); // Depend on serviceId to trigger scroll

    const handleServiceClick = (id: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('service', id);
        router.push(`?${newParams.toString()}`);
    };

    return (
        <main className="min-h-screen bg-white flex flex-col text-[#0F1D23]">
            <Header forceScrolled={true} />

            {/* Detailed Landing Hero */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://www.pexels.com/es-es/download/video/32750416/" type="video/mp4" />
                    </video>
                    {/* Dark Overlay for contrast */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            key={selectedService.id} // Re-animate on change
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#33C9F4] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Servicios</span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal text-white mb-6 leading-tight">
                                {selectedService.title}
                            </h1>
                            <p className="text-xl text-gray-100 leading-relaxed mb-8 max-w-lg mx-auto">
                                {selectedService.shortDescription}
                            </p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#33C9F4] hover:bg-[#2bb4db] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-3"
                                >
                                    Solicitar Asesoramiento
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Details Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none mb-20 text-center">
                        <h3 className="text-3xl font-bold text-[#0F1D23] mb-8">¿En qué consiste?</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {selectedService.fullDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {selectedService.benefits?.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <h4 className="text-[#33C9F4] text-xl font-bold mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 font-medium">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-[#0F1D23] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#33C9F4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-8 relative z-10 text-center sm:text-left">Características Clave</h3>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                            {selectedService.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-[#33C9F4]/20 flex items-center justify-center text-[#33C9F4] flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sticky CTA / Contact Section Wrapper */}
            <div id="contact-cta" className="bg-gray-50 border-t border-gray-200">
                <ContactSection />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

const ServicesClient = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
            <ServicesContent />
        </Suspense>
    );
};

export default ServicesClient;
