'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import Image from 'next/image';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
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
        <section id="contact-section" className="w-full py-10 sm:py-16 bg-[#EAF7FC]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Information */}
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-xs font-bold tracking-widest text-[#2D8CBA] uppercase">Contacto</span>
                                <h2 className="mt-1 text-2xl sm:text-3xl font-medium text-[#0F1D23] leading-tight">
                                    ¿Hablamos de tu próximo proyecto?
                                </h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    Nuestro equipo de expertos está listo para resolver tus dudas y optimizar tus operaciones.
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-5 h-5 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#0F1D23]">Dirección</h3>
                                        <p className="text-sm text-gray-600">Rivadavia 926 3er piso, CABA</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-5 h-5 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#0F1D23]">Teléfono</h3>
                                        <a href="tel:+541152632127" className="text-sm text-gray-600 hover:text-[#2D8CBA] transition-colors">
                                            +54-11-5263-2127
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#2D8CBA]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D8CBA] transition-colors duration-300">
                                        <svg className="w-5 h-5 text-[#2D8CBA] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#0F1D23]">Email</h3>
                                        <a href="mailto:info@globalinttrade.com" className="text-sm text-gray-600 hover:text-[#2D8CBA] transition-colors">
                                            info@globalinttrade.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 flex-grow flex flex-col min-h-[220px]">
                                <h3 className="text-sm font-bold text-[#0F1D23] mb-2 hidden sm:block">Ubicación</h3>
                                <div className="flex-grow w-full h-full rounded-xl overflow-hidden drop-shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9213123849557!2d-58.3821013!3d-34.6061304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb63dbb4d7%3A0xe54955d8f6d3f237!2sAv.%20Rivadavia%20926%2C%20C1002AAS%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-2xl p-5 sm:p-8 border border-gray-100 flex flex-col justify-center shadow-inner"
                        >
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">Nombre completo</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all shadow-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all shadow-sm"
                                        required
                                    />
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
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#2D8CBA] focus:border-transparent transition-all shadow-sm"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 mt-2 bg-[#2D8CBA] hover:bg-[#237ba5] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-bold flex items-center justify-center text-base font-sans"
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
