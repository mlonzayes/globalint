'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { motion } from 'framer-motion';

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

const ClientsClient = () => {
    return (
        <main className="min-h-screen bg-white flex flex-col font-sans text-[#0F1D23]">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33C9F4]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#33C9F4]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-normal text-[#0F1D23] mb-6 tracking-tight"
                    >
                        Nuestros <span className="text-[#33C9F4]">Clientes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Confían en nosotros grandes empresas globales.
                    </motion.p>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 flex items-center justify-center h-40 transition-all duration-300 group"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}

export default ClientsClient;
