'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="w-full py-8 sm:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center relative overflow-hidden px-2 sm:px-0">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#2D8CBA]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold tracking-widest text-[#2D8CBA] uppercase mb-4"
                        >
                            Sobre Global International Trade
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl sm:text-4xl lg:text-5xl font-black text-[#0F1D23] mb-5 leading-tight"
                        >
                            ¿Quiénes somos?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-1 w-24 bg-[#2D8CBA] mx-auto mb-8 rounded-full"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg sm:text-l leading-relaxed text-gray-600 max-w-3xl mx-auto"
                        >
                            Somos una organización especializada en negocios internacionales que integra negociación, logística, aduana y consultoría en un solo sistema. Permitimos a las empresas tercerizar su comercio exterior para ganar eficiencia, reducir costos y evitar errores.
                            <br /><br />
                            Acompañamos a empresas en todas las etapas, desde el primer paso hasta operaciones complejas en mercados internacionales, asegurando que cada movimiento sea estratégico y rentable.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
