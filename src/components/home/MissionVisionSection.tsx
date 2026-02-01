import { useState } from 'react';
import { motion } from 'framer-motion';

const MissionVisionValues = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

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
        <section className="w-full py-20 bg-[#0F1D23]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {cards.map((card, index) => (
                        <CardItem
                            key={index}
                            card={card}
                            index={index}
                            isActive={activeCard === index}
                            onClick={() => setActiveCard(activeCard === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CardItem = ({ card, index, isActive, onClick }: { card: any, index: number, isActive: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group flex flex-col items-center relative z-0"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="w-full aspect-[4/3] relative rounded-[20px] overflow-hidden shadow-2xl z-20 cursor-pointer">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Mobile Title Overlay (Visible when not active) */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:hidden transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    <h3 className="text-2xl font-bold text-white text-center">{card.title}</h3>
                    <p className="text-white/80 text-xs text-center mt-2">Toca para ver más</p>
                </div>
            </div>

            {/* Content Card - Slides down on hover or click */}
            <div className={`w-[95%] bg-white rounded-b-[20px] sm:rounded-[20px] shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'} group-hover:max-h-[300px] group-hover:opacity-100 group-hover:mt-4`}>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2D8CBA] mb-3">
                        {card.title}
                    </h3>
                    <p className="text-[#0F1D23] text-sm leading-relaxed font-normal">
                        {card.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default MissionVisionValues;
