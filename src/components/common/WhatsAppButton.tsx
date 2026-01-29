'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "5491152632127"; // Using the phone number from the footer
    const message = "Hola, quisiera hacer una consulta sobre sus servicios de comercio exterior.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300 group"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg font-bold text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap lg:block hidden">
                ¡Contáctanos ahora!
            </span>
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 duration-1000 -z-10"></span>
        </a>
    );
};

export default WhatsAppButton;
