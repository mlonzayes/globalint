'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="w-full py-16 sm:py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#2D8CBA]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                    {/* Text Content */}
                    <div className="text-left">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-widest text-[#2D8CBA] uppercase mb-4"
                        >
                            Sobre Global International Trade
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F1D23] mb-6 leading-tight"
                        >
                            ¿Quiénes somos?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-1 w-24 bg-[#2D8CBA] mb-8 rounded-full"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 leading-relaxed space-y-6"
                        >
                            <p>
                                Somos una organización especializada en negocios internacionales que integra negociación, logística, aduana y consultoría en un solo sistema. Permitimos a las empresas tercerizar su comercio exterior para ganar eficiencia, reducir costos y evitar errores.
                            </p>
                            <p>
                                Acompañamos a empresas en todas las etapas, desde el primer paso hasta operaciones complejas en mercados internacionales, asegurando que cada movimiento sea estratégico y rentable.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-md mx-auto">
                            <div className="absolute inset-0 bg-[#0F1D23]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src="/about-us.png"
                                alt="Oficina de Global International Trade"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge (optional aesthetic touch) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#33C9F4]/10 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#33C9F4" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#0F1D23]">15+</p>
                                    <p className="text-sm text-gray-500 font-medium">Años de Experticia</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
