'use client';

import { motion } from 'framer-motion';

import { FaCar, FaLaptop, FaTractor, FaHeartbeat, FaIndustry, FaTshirt, FaBolt, FaShoppingCart } from 'react-icons/fa';

const industries = [
    { name: "Automotriz", icon: <FaCar className="w-10 h-10" /> },
    { name: "Tecnología", icon: <FaLaptop className="w-10 h-10" /> },
    { name: "Agroindustria", icon: <FaTractor className="w-10 h-10" /> },
    { name: "Salud y Farma", icon: <FaHeartbeat className="w-10 h-10" /> },
    { name: "Manufactura", icon: <FaIndustry className="w-10 h-10" /> },
    { name: "Textil", icon: <FaTshirt className="w-10 h-10" /> },
    { name: "Energía", icon: <FaBolt className="w-10 h-10" /> },
    { name: "Consumo Masivo", icon: <FaShoppingCart className="w-10 h-10" /> },
];

const IndustriesSection = () => {
    return (
        <section className="w-full py-8 sm:py-24 bg-[#0F1D23] text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-[#2D8CBA] uppercase"
                    >
                        Sectores
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-xl sm:text-4xl lg:text-5xl font-black mb-6"
                    >
                        Industrias con las que trabajamos
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Tenemos experiencia adaptando nuestras soluciones logísticas a las normativas y requerimientos específicos de cada sector.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(45, 140, 186, 0.1)" }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300 backdrop-blur-sm"
                        >
                            <span className="mb-4 text-[#2D8CBA]">{industry.icon}</span>
                            <h3 className="text-lg font-bold">{industry.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
