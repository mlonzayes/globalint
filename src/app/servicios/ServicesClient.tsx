'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ContactSection from '@/components/home/ContactSection'; // Reusing ContactSection for CTA
import PageLoader from '@/components/ui/PageLoader';

// Data for services
const services = [
    {
        id: 'despacho',
        title: 'Despacho Aduanero',
        shortDescription: 'Gestión ágil y segura de tus trámites aduaneros.',
        fullDescription: 'Gestión aduanera integral para todas tus operaciones.',
        features: ['Importación y Exportación', 'Gestión de Documentación', 'Trámites ante Organismos', 'Asesoramiento Técnico'],
        icon: '📋',
        image: '/services/importacion.png',
        benefits: [
            { title: "Rapidez", desc: "Liberación de cargas en tiempo récord." },
            { title: "Seguridad", desc: "Cumplimiento total de regulaciones." },
            { title: "Expertise", desc: "Equipo especializado en normativas complejas." }
        ]
    },
    {
        id: 'logistica',
        title: 'Logística Integral',
        shortDescription: 'Un sistema global a la medida de tu compañía.',
        fullDescription: 'Ofrecemos un servicio a la medida de los requerimientos de nuestros clientes, en función de necesidades puntuales y adaptándose a cada compañía. Cada servicio es estipulado según procedimientos escritos, sobre los cuales se efectúa un permanente control. Al mismo tiempo se estipulan plazos de gestión los cuales serán auditables y monitoreados por nuestro personal. Nuestra obligación se centra en la simplificación de tramites, asumiendo la responsabilidad de brindar un sistema global de comercio exterior.',
        features: ['Procedimientos Escritos', 'Auditoría de Plazos', 'Control Permanente', 'Sistema Global'],
        icon: '🚢',
        image: '/logistics_cargo_ship_photo_1769982467110.png',
        benefits: [
            { title: "Personalización", desc: "Servicio adaptado a tus necesidades puntuales." },
            { title: "Control", desc: "Monitoreo permanente sobre procedimientos escritos." },
            { title: "Simplificación", desc: "Gestión integral para reducir burocracia." }
        ]
    },
    {
        id: 'terciarizacion',
        title: 'Terciarización Comex',
        shortDescription: 'Soluciones integrales para que te focalices en tu negocio.',
        fullDescription: 'Nuestra misión es proporcionar a nuestros clientes servicios de soporte a su operación central, a calidad y precios competitivos, que aportando soluciones integrales y efectivas, les permitan focalizarse en las actividades estratégicas de su negocio. Ofrecemos un servicio integral para la tramitación de importaciones y exportaciones de cualquier rubro, en todas las modalidades y en los tiempos y las formas que requiera cada operación.',
        features: ['Importaciones y Exportaciones', 'Todas las Modalidades', 'Gestión Integral', 'Soporte Estratégico'],
        icon: '🤝',
        image: '/logistics_team_meeting_photo_1769982501582.png',
        benefits: [
            { title: "Foco", desc: "Dedicate a tu negocio, nosotros al comex." },
            { title: "Calidad", desc: "Servicios de soporte a precios competitivos." },
            { title: "Integralidad", desc: "Soluciones efectivas para cualquier rubro." }
        ]
    }
];

const LogisticsRoadmap = () => {
    const steps = [
        {
            title: "Diagnóstico y Adaptación",
            desc: "Analizamos tus necesidades puntuales para diseñar un servicio a la medida de tu compañía.",
            image: "/logistics_planning.png"
        },
        {
            title: "Procedimientos y Control",
            desc: "Estipulamos cada acción según procedimientos escritos, asegurando un control permanente y riguroso.",
            image: "/logistics_process_check.png"
        },
        {
            title: "Auditoría de Plazos",
            desc: "Gestionamos plazos auditables y monitoreados constantemente por nuestro personal experto.",
            image: "/logistics_monitoring.png"
        },
        {
            title: "Sistema Global",
            desc: "Simplificamos trámites asumiendo la responsabilidad total para brindarte un sistema de comercio exterior sin fricciones.",
            image: "/global_trade_network.png"
        }
    ];

    return (
        <div className="py-10 sm:py-16 w-full max-w-5xl mx-auto px-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0F1D23] mb-8 sm:mb-12">Nuestro Proceso de Valor</h3>
            <div className="space-y-12 sm:space-y-24 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#33C9F4]/20 via-[#33C9F4] to-[#33C9F4]/20 -translate-x-1/2" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`flex flex-col sm:flex-row items-center gap-8 sm:gap-16 relative ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                            }`}
                    >
                        {/* Step Marker */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#33C9F4] rounded-full shadow-[0_0_0_8px_rgba(51,201,244,0.15)] hidden sm:block z-10" />

                        {/* Image Side */}
                        <div className="w-full sm:w-1/2 group perspective">
                            <motion.div
                                whileHover={{ rotateY: 5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform"
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D23]/60 to-transparent" />
                            </motion.div>
                        </div>

                        {/* Text Side */}
                        <div className={`w-full sm:w-1/2 text-center ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                            <div className="inline-block px-4 py-1 rounded-full bg-[#33C9F4]/10 text-[#2D8CBA] font-bold text-sm mb-4">
                                PASO 0{index + 1}
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-bold text-[#0F1D23] mb-4">{step.title}</h4>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const OutsourcingScope = () => {
    const scopes = [
        {
            title: "Clasificación y Valoración",
            desc: "Clasificación arancelaria precisa y valoración aduanera experta para asegurar el cumplimiento normativo.",
            image: "/customs_classification.png"
        },
        {
            title: "Oficialización de Destinaciones",
            desc: "Gestión completa de destinaciones definitivas, temporales, en consignación, régimen de muestras y más.",
            image: "/customs_declaration.png"
        },
        {
            title: "Presencia Federal",
            desc: "Operatividad en distintas aduanas del país, zonas francas y áreas aduaneras especiales.",
            image: "/federal_customs_presence.png"
        }
    ];

    return (
        <div className="py-10 sm:py-16 w-full max-w-5xl mx-auto px-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0F1D23] mb-4">Gestión Aduanera</h3>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10 sm:mb-16">
                Abarcamos todas las instancias operativas para garantizar el éxito de tus operaciones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {scopes.map((scope, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="group relative h-[300px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={scope.image}
                            alt={scope.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D23] via-[#0F1D23]/60 to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-12 h-1 bg-[#33C9F4] mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-3">{scope.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {scope.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const CustomsOperations = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Importación",
            desc: "Nos ocupamos de la confección y tramitación del despacho de importación, admisiones temporales, depósitos fiscales y zonas francas. Coordinamos el retiro de mercadería en puertos y aeropuertos, el transporte hasta destino final y la gestión de operaciones especiales, muestras y retornos. Controlamos el estado de la mercadería y gestionamos reclamos ante seguros cuando es necesario. Nos ocupamos de la de la liberación de todo tipo de operaciones de importación, Importaciones a consumo, admisiones temporales, proyectos especiales, llave en mano, etc. El servicio es customizado para cada cliente según sus necesidades que van desde el retiro de la mercadería en origen, hasta la entrega en el domicilio que se requiera",
            image: "/services/importacion.png"
        },
        {
            title: "Exportación",
            desc: "Gestionamos el despacho de exportación, la coordinación de embarques, el manejo de contenedores y la negociación de fletes marítimos y aéreos. Nos encargamos de la documentación de embarque, certificados de origen, beneficios a la exportación y cobros mediante cartas de crédito, asegurando operaciones eficientes y sin errores.",
            image: "/services/exportacion.jpg"
        },
        {
            title: "Tramitación ante Terceros Organismos",
            desc: "Realizamos gestiones ante todos los organismos competentes (SENASA, ANMAT, INAL, Secretaria de Industria y Comercio,  cámaras, otros), garantizando el cumplimiento normativo y la agilidad en cada operación.",
            image: "/services/tramitacion_terceros.jpg"
        }
    ];

    return (
        <div className="py-16 w-full max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#0F1D23] mb-12">Operativa Aduanera</h3>

            {/* Desktop View: Top Tabs + Split Content */}
            <div className="hidden lg:block">
                {/* Horizontal Tabs */}
                <div className="flex justify-center mb-12 bg-gray-100 p-1 rounded-full max-w-3xl mx-auto">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 py-4 px-6 rounded-full text-center transition-all duration-300 font-bold text-lg ${activeTab === index
                                ? 'bg-white text-[#33C9F4] shadow-md'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Desktop Content Area */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px] flex">
                    {/* Content Left - Image Right layout for variety or classic Split */}
                    <div className="w-1/2 p-12 flex flex-col justify-center bg-white relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className="text-3xl font-bold text-[#0F1D23] mb-6">{tabs[activeTab].title}</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {tabs[activeTab].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="w-1/2 relative bg-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                src={tabs[activeTab].image}
                                alt={tabs[activeTab].title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5" />
                    </div>
                </div>
            </div>

            {/* Mobile View: Stacked Cards */}
            <div className="lg:hidden space-y-8">
                {tabs.map((tab, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                    >
                        <div className="h-56 relative">
                            <img
                                src={tab.image}
                                alt={tab.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h4 className="absolute bottom-4 left-6 text-2xl font-bold text-white shadow-sm">{tab.title}</h4>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 text-base leading-relaxed">
                                {tab.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

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

    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);

    useEffect(() => {
        // Check if video is already loaded
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setVideoLoaded(true);
            setMinTimeElapsed(true);
            return;
        }

        const timer = setTimeout(() => {
            setMinTimeElapsed(true);
        }, 2000); // Reduced to 2 seconds

        return () => clearTimeout(timer);
    }, []);

    const isLoading = !videoLoaded || !minTimeElapsed;

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col text-[#0F1D23] overflow-x-hidden w-full">
            <PageLoader isVisible={isLoading} />
            <Header forceScrolled={true} />

            {/* Detailed Landing Hero */}
            <section className="relative w-full py-28 sm:py-36 lg:py-44 overflow-hidden" style={{ maxWidth: '100vw' }}>
                {/* Background Video */}
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
                    {/* Dark Overlay for contrast */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            key={selectedService.id} // Re-animate on change
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#33C9F4] font-bold tracking-widest uppercase text-sm mb-4 block">Nuestros Servicios</span>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-normal text-white mb-6 leading-tight break-words">
                                {selectedService.title}
                            </h1>
                            <p className="text-base sm:text-xl text-gray-100 leading-relaxed mb-8 max-w-lg mx-auto px-2 sm:px-0">
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
            <section className="py-20 sm:py-28 bg-gray-50 relative">
                <div className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="prose prose-lg max-w-none mb-10 sm:mb-16 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1D23] mb-6">¿En qué consiste?</h3>
                        <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                            {selectedService.fullDescription}
                        </p>
                    </div>

                    {/* Logistics Roadmap - Conditional Render */}
                    {/* Detailed Service Modules */}
                    {selectedService.id === 'despacho' && (
                        <div className="mb-14 sm:mb-24">
                            <CustomsOperations />
                        </div>
                    )}

                    {selectedService.id === 'logistica' && (
                        <div className="mb-14 sm:mb-24">
                            <LogisticsRoadmap />
                        </div>
                    )}

                    {/* Outsourcing Scope - Conditional Render */}
                    {selectedService.id === 'terciarizacion' && (
                        <div className="mb-14 sm:mb-24">
                            <OutsourcingScope />
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
                        {selectedService.benefits?.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-center"
                            >
                                <h4 className="text-[#33C9F4] text-xl font-bold mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 font-medium">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-[#0F1D23] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#33C9F4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-8 relative z-10 text-center sm:text-left">Características Clave</h3>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 sm:gap-y-6 relative z-10">
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
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
            <ServicesContent />
        </Suspense>
    );
};

export default ServicesClient;
