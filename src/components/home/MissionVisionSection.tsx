'use client';

import { motion } from 'framer-motion';

const MissionVisionValues = () => {
    const cards = [
        {
            title: "Misión",
            description: "Facilitar operaciones de comercio exterior integrales y estratégicas, permitiendo que empresas exporten e importen con seguridad, eficiencia y menores costos.",
            image: "/mision.png"
        },
        {
            title: "Visión",
            description: "Somos el socio de confianza para compañías que quieren crecer globalmente.",
            image: "/vision.png"
        },
        {
            title: "Valores",
            description: "Compromiso con la excelencia, transparencia en cada operación y enfoque en resultados que generen valor real para nuestros clientes.",
            image: "/valores.png"
        }
    ];

    return (
        <section className="w-full py-16 bg-[#0F1D23]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-8 mx-auto max-w-6xl pb-6 md:pb-0 snap-x snap-mandatory md:snap-none no-scrollbar">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative h-[450px] rounded-[24px] overflow-hidden group cursor-pointer bg-gray-900 flex-shrink-0 w-[85vw] md:w-auto snap-center"
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                            {/* Content Container */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                                <h3 className="text-2xl font-bold mb-3 transform lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-300 text-[#33C9F4]">
                                    {card.title}
                                </h3>

                                <div className="lg:overflow-hidden lg:h-0 lg:group-hover:h-auto lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-base leading-relaxed text-gray-200 font-light">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;
