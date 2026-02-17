'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const incoterms = [
    // Multimodal
    {
        code: 'EXW',
        name: 'Ex Works',
        desc: 'El vendedor pone la mercancía a disposición del comprador en sus propias instalaciones (fábrica, almacén, etc.). El comprador asume todos los costos y riesgos desde ese punto, incluyendo carga y transporte.'
    },
    {
        code: 'FCA',
        name: 'Free Carrier',
        desc: 'El vendedor entrega la mercancía al transportista designado por el comprador en las instalaciones del vendedor o lugar acordado. El vendedor despacha la exportación; el riesgo se transfiere al entregar al primer transportista.'
    },
    {
        code: 'CPT',
        name: 'Carriage Paid To',
        desc: 'El vendedor paga el transporte hasta el destino acordado. El riesgo se transfiere al comprador cuando la mercancía se entrega al primer transportista, no al llegar a destino.'
    },
    {
        code: 'CIP',
        name: 'Carriage and Insurance Paid To',
        desc: 'Similar al CPT, pero el vendedor también contrata y paga un seguro de transporte (cobertura amplia ICC A) hasta el destino. El riesgo se transfiere al entregar al primer transportista.'
    },
    {
        code: 'DAP',
        name: 'Delivered at Place',
        desc: 'El vendedor entrega la mercancía y asume costos y riesgos hasta el lugar de destino designado, lista para la descarga. El comprador es responsable de la descarga y trámites de importación.'
    },
    {
        code: 'DPU',
        name: 'Delivered at Place Unloaded',
        desc: 'El vendedor asume costos y riesgos hasta descargar la mercancía en el lugar de destino acordado. Es el único término donde el vendedor debe descargar la mercancía.'
    },
    {
        code: 'DDP',
        name: 'Delivered Duty Paid',
        desc: 'El vendedor asume máxima responsabilidad: entrega la mercancía despachada para importación en el destino, pagando todos los costos, derechos e impuestos.'
    },
    // Maritime
    {
        code: 'FAS',
        name: 'Free Alongside Ship',
        desc: 'El vendedor entrega la mercancía al costado del buque en el puerto de embarque. El comprador asume costos y riesgos desde ese momento.'
    },
    {
        code: 'FOB',
        name: 'Free On Board',
        desc: 'El vendedor entrega la mercancía a bordo del buque en el puerto de embarque. El riesgo se transmite cuando la mercancía está a bordo. El vendedor despacha la exportación.'
    },
    {
        code: 'CFR',
        name: 'Cost and Freight',
        desc: 'El vendedor paga costos y flete hasta el puerto de destino. El riesgo se transfiere al comprador cuando la mercancía está a bordo del buque en el puerto de embarque.'
    },
    {
        code: 'CIF',
        name: 'Cost, Insurance and Freight',
        desc: 'Similar al CFR, pero el vendedor también paga un seguro marítimo (cobertura mínima ICC C). El riesgo se transfiere cuando la mercancía está a bordo en el puerto de embarque.'
    }
];

const IncotermsSelector = () => {
    const [selectedTerm, setSelectedTerm] = useState(incoterms[0]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0F1D23] mb-4 uppercase tracking-wide">
                        Incoterms 2020
                    </h2>
                    <div className="w-20 h-1 bg-[#33C9F4] mx-auto rounded-full" />
                </div>

                {/* Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {incoterms.map((term) => (
                        <button
                            key={term.code}
                            onClick={() => setSelectedTerm(term)}
                            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 border-2 ${selectedTerm.code === term.code
                                    ? 'bg-[#33C9F4] border-[#33C9F4] text-white shadow-lg scale-105'
                                    : 'bg-white border-gray-100 text-gray-500 hover:border-[#33C9F4] hover:text-[#33C9F4]'
                                }`}
                        >
                            {term.code}
                        </button>
                    ))}
                </div>

                {/* Content Display */}
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTerm.code}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-md text-center"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1D23] mb-2">
                                <span className="text-[#33C9F4]">{selectedTerm.code}</span> - {selectedTerm.name}
                            </h3>
                            <div className="w-12 h-1 bg-gray-200 mx-auto my-6" />
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {selectedTerm.desc}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default IncotermsSelector;
