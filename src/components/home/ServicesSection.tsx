'use client';

import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaBriefcase, FaFileContract } from 'react-icons/fa';
import Image from 'next/image';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
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
    },
    {
        id: 3,
        title: 'Despacho de Aduana',
        description: 'Gestionamos toda la operatoria, documentación y logística para que tu mercadería llegue a destino de forma segura.',
        icon: <FaFileContract className="w-8 h-8" />
    }
]

const ServicesSection = () => {
    return (
        <section className="w-full py-8 sm:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
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
                        className="mt-2 text-xl sm:text-4xl lg:text-5xl font-black text-[#0F1D23] mb-4"
                    >
                        Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
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
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-[#2D8CBA]/30 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-[#2D8CBA]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                <div className="text-[#2D8CBA] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#0F1D23] mb-4 group-hover:text-[#2D8CBA] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed font-medium">
                                {service.description}
                            </p>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <a href="#" className="inline-flex items-center text-sm font-bold text-[#2D8CBA] hover:text-[#237ba5] transition-colors">
                                    Ver más
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
