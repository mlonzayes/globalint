'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

interface FooterProps {
    className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
    return (
        <footer className={`w-full bg-footer-background text-[#33C9F4] ${className}`}>
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-left">

                    {/* Column 1: Brand & Socials */}
                    <div className="flex flex-col items-start gap-6">
                        {/* Logo Removed */}
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Tu socio estratégico en comercio exterior. Soluciones integrales para potenciar tu negocio global.
                        </p>
                        <div className="flex gap-3 mt-2">
                            <a href="#" className="w-10 h-10 bg-[#0F1D23] border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#33C9F4] hover:text-[#0F1D23] hover:border-[#33C9F4] transition-all duration-300 text-gray-400">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#0F1D23] border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#33C9F4] hover:text-[#0F1D23] hover:border-[#33C9F4] transition-all duration-300 text-gray-400">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Navegación</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Inicio</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Clientes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Información útil</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
                        <ul className="space-y-4">
                            <li><a href="/servicios" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Logística Integral</a></li>
                            <li><a href="/servicios" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Despacho Aduanero</a></li>
                            <li><a href="/servicios" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Comercio Internacional</a></li>
                            <li><a href="/servicios" className="text-gray-400 hover:text-[#33C9F4] transition-colors">Terciarización Comex</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <FaMapMarkerAlt className="w-5 h-5 text-[#33C9F4] mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Rivadavia 926 3er piso<br />CABA, Argentina</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt className="w-5 h-5 text-[#33C9F4] flex-shrink-0" />
                                <a href="tel:+541152632127" className="text-gray-400 hover:text-[#33C9F4] transition-colors text-sm">+54-11-5263-2127</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaEnvelope className="w-5 h-5 text-[#33C9F4] flex-shrink-0" />
                                <a href="mailto:info@globalinttrade.com" className="text-gray-400 hover:text-[#33C9F4] transition-colors text-sm">info@globalinttrade.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Global International Trade. Todos los derechos reservados.
                    </p>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">
                        POWERED BY <span className="font-bold text-[#33C9F4]">MWStudio</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer