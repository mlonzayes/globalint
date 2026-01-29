'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
    className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <header
                className={`fixed top-0 z-50 transition-all duration-300 ease-in-out ${scrolled
                    ? 'top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] bg-white/95 backdrop-blur-md shadow-md rounded-full py-2 px-6'
                    : 'top-0 left-0 right-0 bg-transparent py-6 w-full'
                    } ${className}`}
            >
                <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8 relative flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-20">
                        <Image
                            src="/logo.png"
                            alt="Global International Trade Logo"
                            width={188}
                            height={74}
                            className={`w-auto transition-all duration-300 ${scrolled ? 'h-6 sm:h-8' : 'h-8 sm:h-10 md:h-12 lg:h-16'}`}
                            priority
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-blue z-20"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-6 h-6 text-text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation - Absolute Center */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
                        <button
                            className="text-sm font-medium text-text-primary hover:text-primary-blue transition-colors duration-200"
                            role="menuitem"
                        >
                            Inicio
                        </button>

                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-primary-blue transition-colors duration-200"
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Servicios
                                <svg
                                    className="w-4 h-4 text-text-secondary group-hover:text-primary-blue transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                <ul role="menu" className="py-2">
                                    <li role="menuitem">
                                        <a href="/servicios" className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50 hover:text-primary-blue transition-colors">
                                            Logística Integral
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a href="/servicios" className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50 hover:text-primary-blue transition-colors">
                                            Despacho Aduanero
                                        </a>
                                    </li>
                                    <li role="menuitem">
                                        <a href="/servicios" className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50 hover:text-primary-blue transition-colors">
                                            Comercio Internacional
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button
                            className="text-sm font-medium text-text-primary hover:text-primary-blue transition-colors duration-200"
                            role="menuitem"
                        >
                            Clientes
                        </button>

                        <button
                            className="text-sm font-medium text-text-primary hover:text-primary-blue transition-colors duration-200"
                            role="menuitem"
                        >
                            Información útil
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {/* Fullscreen Mobile Navigation Menu */}
            <div
                className={`fixed inset-0 bg-white z-[60] flex flex-col transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Close Button Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="w-32">
                        <Image
                            src="/logo.png"
                            alt="Global International Trade Logo"
                            width={120}
                            height={48}
                            className="w-full h-auto"
                        />
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-8 overflow-y-auto">
                    <a
                        href="#"
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-[#0F1D23] hover:text-[#2D8CBA] transition-colors"
                    >
                        Inicio
                    </a>

                    <div className="w-full max-w-xs text-center space-y-4">
                        <p className="text-2xl font-bold text-[#0F1D23] mb-4">Servicios</p>
                        <div className="flex flex-col space-y-3 pl-4 border-l-2 border-[#2D8CBA]/20">
                            <a href="/servicios" onClick={toggleMenu} className="text-lg text-gray-600 hover:text-[#2D8CBA]">Logística Integral</a>
                            <a href="/servicios" onClick={toggleMenu} className="text-lg text-gray-600 hover:text-[#2D8CBA]">Despacho Aduanero</a>
                            <a href="/servicios" onClick={toggleMenu} className="text-lg text-gray-600 hover:text-[#2D8CBA]">Comercio Internacional</a>
                        </div>
                    </div>

                    <a
                        href="#"
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-[#0F1D23] hover:text-[#2D8CBA] transition-colors"
                    >
                        Clientes
                    </a>

                    <a
                        href="#"
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-[#0F1D23] hover:text-[#2D8CBA] transition-colors"
                    >
                        Información útil
                    </a>
                </div>

                {/* Footer / Watermark */}
                <div className="p-6 text-center bg-gray-50 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium tracking-wide">
                        POWERED BY <span className="font-bold text-[#2D8CBA]">MWStudio</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header