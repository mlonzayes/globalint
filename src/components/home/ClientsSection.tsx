'use client';

import { motion } from 'framer-motion';

const ClientsSection = () => {
    const clients = [
        { id: 1, name: 'ACA', logo: '/clients/aca.png' },
        { id: 2, name: 'American Agro', logo: '/clients/american_agro.png' },
        { id: 3, name: 'American Vial', logo: '/clients/american_vial.png' },
        { id: 4, name: 'APM', logo: '/clients/apm.png' },
        { id: 5, name: 'Cheeky', logo: '/clients/cheeky.png' },
        { id: 6, name: 'Enjoy', logo: '/clients/enjoy.png' },
        { id: 7, name: 'John Car', logo: '/clients/john_car.png' },
        { id: 8, name: 'Le Pain Quotidien', logo: '/clients/lepain.png' },
        { id: 9, name: 'MSC', logo: '/clients/msc.png' },
        { id: 10, name: 'Neumen', logo: '/clients/neumen.png' },
        { id: 11, name: 'UAR', logo: '/clients/uar.png' },
    ];

    // Create a large enough list to ensure seamless scrolling on large screens
    const tripleClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="w-full py-16 sm:py-24 bg-gray-50 overflow-hidden">
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 60s linear infinite;
                    width: max-content;
                }
                .animate-scroll-right {
                    animation: scroll-right 60s linear infinite;
                    width: max-content;
                }
                .pause-on-hover:hover .animate-scroll-left,
                .pause-on-hover:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0F1D23]"
                >
                    Nuestros clientes
                </motion.h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left */}
                <div className="relative w-full overflow-hidden pause-on-hover">
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-scroll-left gap-12 sm:gap-24 px-12">
                        {tripleClients.map((client, index) => (
                            <div
                                key={`r1-${index}`}
                                className="relative w-32 h-24 sm:w-48 sm:h-32 flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-md flex items-center justify-center p-4 group hover:shadow-xl hover:border-[#33C9F4]/30"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain filter drop-shadow-sm transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right */}
                <div className="relative w-full overflow-hidden pause-on-hover">
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-scroll-right gap-12 sm:gap-24 px-12">
                        {tripleClients.map((client, index) => (
                            <div
                                key={`r2-${index}`}
                                className="relative w-32 h-24 sm:w-48 sm:h-32 flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-md flex items-center justify-center p-4 group hover:shadow-xl hover:border-[#33C9F4]/30"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain filter drop-shadow-sm transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
