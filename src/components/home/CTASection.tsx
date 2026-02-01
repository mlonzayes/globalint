'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTASection = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="w-full py-16 sm:py-24 bg-gradient-to-r from-[#0F1D23] to-[#162932] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D8CBA]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D8CBA]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center gap-10 lg:gap-12">
                    <div className="text-center max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
                        >
                            ¿Listo para llevar tu operación <span className="text-[#33C9F4]">al siguiente nivel?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-300 mx-auto leading-relaxed"
                        >
                            Optimizamos tus costos, reducimos tiempos y aseguramos el cumplimiento normativo. Dejanos la logística a nosotros.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <button
                            onClick={scrollToContact}
                            className="bg-[#2D8CBA] hover:bg-[#237ba5] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/10 font-sans"
                        >
                            Solicitar Asesoría
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
