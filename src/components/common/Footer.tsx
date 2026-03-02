'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
    className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
    return (
        <footer className={`w-full bg-footer-background text-[#33C9F4] ${className}`}>
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-left">

                    {/* Column 1: Brand & Socials */}
                    <div className="flex flex-col items-start gap-6">
                        <p className="text-white font-bold text-lg">Global International Trade</p>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Tu socio estratégico en comercio exterior. Soluciones integrales para potenciar tu negocio global.
                        </p>
                        <div className="flex gap-3 mt-2">
                            <a href="https://www.instagram.com/global.internationaltrade" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F1D23] border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#33C9F4] hover:text-[#0F1D23] hover:border-[#33C9F4] transition-all duration-300 text-gray-400">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://wa.me/5491154522801" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0F1D23] border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#33C9F4] hover:text-[#0F1D23] hover:border-[#33C9F4] transition-all duration-300 text-gray-400">
                                <FaWhatsapp className="w-4 h-4" />
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

                    {/* Column 3: Contact */}
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

                {/* Logo with Liquid Glass effect — centrado debajo del contenido */}
                <div className="mt-16 flex justify-center">
                    <Link href="/" className="group relative inline-flex items-center justify-center px-8 py-5 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(51,201,244,0.06) 50%, rgba(255,255,255,0.08) 100%)',
                            backdropFilter: 'blur(20px) saturate(1.8)',
                            WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
                            border: '1px solid rgba(255,255,255,0.18)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 40px rgba(51,201,244,0.08)',
                        }}
                    >
                        {/* Inner liquid highlight */}
                        <span
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)',
                            }}
                        />
                        {/* Subtle colour tint shimmer on hover */}
                        <span
                            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: 'radial-gradient(ellipse at 70% 80%, rgba(51,201,244,0.15) 0%, transparent 60%)',
                            }}
                        />
                        <Image
                            src="/logo.png"
                            alt="Global International Trade Logo"
                            width={300}
                            height={118}
                            className="relative z-10 w-52 h-auto"
                        />
                    </Link>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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