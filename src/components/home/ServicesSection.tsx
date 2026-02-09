'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGlobeAmericas, FaBriefcase, FaFileContract } from 'react-icons/fa';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        id: 3,
        title: 'Despacho de Aduana',
        description: 'Gestionamos toda la operatoria, documentación y logística para que tu mercadería llegue a destino de forma segura.',
        icon: <FaFileContract className="w-8 h-8" />
    },
    {
        id: 1,
        title: 'Logística Integral',
        description: 'Simplificamos trámites y asumimos la gestión total del comercio exterior para que tu empresa avance sin fricciones.',
        icon: <FaGlobeAmericas className="w-8 h-8" />
    },
    {
        id: 2,
        title: 'Terciarización Comex',
        description: 'Outsourcing en comercio exterior para que te enfoques en lo estratégico. Nos ocupamos de toda la operatoria con eficiencia.',
        icon: <FaBriefcase className="w-8 h-8" />
    }
]

const ServicesSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="w-full py-16 sm:py-24 bg-[#0F1D23] relative overflow-hidden">

            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-96 h-96 bg-[#2D8CBA]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#33C9F4]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-[#2D8CBA] uppercase"
                    >
                        Nuestras Soluciones
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6"
                    >
                        Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Simplificamos la logística global y el comercio internacional a través de procesos ágiles, seguros y totalmente transparentes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-cyan-500/10 hover:border-[#33C9F4]/50 transition-all duration-300 group cursor-default flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-[#2D8CBA]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#33C9F4] transition-colors duration-300">
                                <div className="text-white group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed font-medium mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="pt-6 border-t border-white/10 group-hover:border-[#2D8CBA]/30 transition-colors mt-auto">
                                <a href={`/servicios?service=${service.id === 3 ? 'despacho' : service.id === 1 ? 'logistica' : 'terciarizacion'}`}
                                    className="inline-flex items-center text-sm font-bold text-[#33C9F4] group-hover:text-white transition-colors">
                                    Ver más
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
