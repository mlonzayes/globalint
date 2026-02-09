'use client';

import { motion } from 'framer-motion';

const UsefulInfoSection = () => {
    const resources = [
        {
            title: "Cotización de Divisas",
            desc: "Consulta el tipo de cambio oficial actualizado.",
            icon: "💱",
            link: "https://www.bna.com.ar/Personas",
            linkText: "Banco Nación"
        },
        {
            title: "Buscador de NCM",
            desc: "Nomenclatura Común del Mercosur.",
            icon: "📦",
            link: "http://www.afip.gob.ar/ncm/",
            linkText: "Consultar AFIP"
        },
        {
            title: "Incoterms 2020",
            desc: "Reglas internacionales para términos comerciales.",
            icon: "🚢",
            link: "https://iccwbo.org/business-solutions/incoterms-rules/",
            linkText: "Ver Incoterms"
        },
        {
            title: "Central de Información",
            desc: "Ventanilla Única de Comercio Exterior.",
            icon: "🌐",
            link: "https://www.argentina.gob.ar/vuce",
            linkText: "Ir a VUCE"
        }
    ];

    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0F1D23] mb-6"
                    >
                        Información Útil
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Accesos rápidos a herramientas y organismos clave para tu gestión diaria.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resources.map((resource, index) => (
                        <motion.a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-gray-50 rounded-2xl p-8 hover:bg-[#33C9F4]/5 border border-gray-100 hover:border-[#33C9F4]/30 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {resource.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0F1D23] mb-3 group-hover:text-[#2D8CBA] transition-colors">{resource.title}</h3>
                            <p className="text-gray-500 mb-6 flex-grow">{resource.desc}</p>
                            <span className="text-[#33C9F4] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                {resource.linkText}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsefulInfoSection;
