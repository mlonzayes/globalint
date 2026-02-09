'use client';

import { motion } from 'framer-motion';
import {
    LuFactory,
    LuUtensils,
    LuCompass,
    LuPickaxe,
    LuSyringe,
    LuFlaskConical,
    LuDroplets,
    LuPackage,
    LuFileText,
    LuLeaf,
    LuHammer
} from 'react-icons/lu';

const industries = [
    { name: "Acero", icon: <LuHammer className="w-12 h-12" /> },
    { name: "Alimentos", icon: <LuUtensils className="w-12 h-12" /> },
    { name: "Construcción", icon: <LuCompass className="w-12 h-12" /> },
    { name: "Ind. Mineras", icon: <LuPickaxe className="w-12 h-12" /> },
    { name: "Ind. Farmacéutica", icon: <LuSyringe className="w-12 h-12" /> },
    { name: "Ind. Química", icon: <LuFlaskConical className="w-12 h-12" /> },
    { name: "Higiene", icon: <LuDroplets className="w-12 h-12" /> },
    { name: "Packaging", icon: <LuPackage className="w-12 h-12" /> },
    { name: "Papel", icon: <LuFileText className="w-12 h-12" /> },
    { name: "Fertilizantes", icon: <LuLeaf className="w-12 h-12" /> },
];

const IndustriesSection = () => {
    return (
        <section className="w-full py-16 sm:py-24 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {/* Simplified Header */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1D23] mb-12"
                    >
                        Industrias con las que trabajamos
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-16">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center justify-center text-center cursor-default group"
                        >
                            <div className="mb-4 text-[#2D8CBA] transition-transform duration-300">
                                {industry.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-[#0F1D23]">
                                {industry.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
