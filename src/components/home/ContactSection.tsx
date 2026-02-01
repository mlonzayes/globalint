'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import Image from 'next/image';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(formData)
    }

    return (
        <section id="contact-section" className="w-full py-16 sm:py-24 bg-[#EAF7FC]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-sm font-bold tracking-widest text-[#2D8CBA] uppercase">Contacto</span>
                                <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0F1D23] leading-tight">
                                    ¿Hablamos de tu próximo proyecto?
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Nuestro equipo de expertos está listo para resolver tus dudas y optimizar tus operaciones de comercio exterior.
                                </p>
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-6 h-6 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0F1D23]">Dirección</h3>
                                        <p className="text-gray-600">Rivadavia 926 3er piso<br />Ciudad Autónoma de Buenos Aires</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-6 h-6 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0F1D23]">Teléfono</h3>
                                        <a href="tel:+541152632127" className="text-gray-600 hover:text-[#2D8CBA] transition-colors">
                                            +54-11-5263-2127
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-6 h-6 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0F1D23]">Email</h3>
                                        <a href="mailto:info@globalinttrade.com" className="text-gray-600 hover:text-[#2D8CBA] transition-colors">
                                            info@globalinttrade.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-5 sm:p-8 border border-gray-100"
                        >
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Apellido</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Servicio de interés</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all appearance-none"
                                        required
                                    >
                                        <option value="">Seleccionar opción</option>
                                        <option value="logistica">Logística Integral</option>
                                        <option value="terciarizacion">Terciarización Comex</option>
                                        <option value="despacho">Despacho de Aduana</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
                                    <TextArea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Cuéntanos sobre tu necesidad..."
                                        rows={4}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 bg-[#2D8CBA] hover:bg-[#237ba5] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-bold flex items-center justify-center text-base font-sans"
                                >
                                    ENVIAR CONSULTA
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
