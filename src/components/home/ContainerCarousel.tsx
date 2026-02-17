'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

const containers = [
    {
        name: "Dry Van",
        image: "/containers/container-01.png",
        desc: "Contenedor estándar para carga general."
    },
    {
        name: "Open Top",
        image: "/containers/container-o6.png",
        desc: "Techo abierto para cargas altas."
    },
    {
        name: "High Cube",
        image: "/containers/container-03.png",
        desc: "Mayor altura, ideal para mercancía ligera."
    },
    {
        name: "Tank",
        image: "/containers/container-04.png",
        desc: "Cisterna para líquidos y gases."
    },
    {
        name: "Open Side",
        image: "/containers/container-05.png",
        desc: "Abre lateralmente para facilitar la carga."
    },
    {
        name: "Flat Rack",
        image: "/containers/container-02.png",
        desc: "Sin paredes, para maquinaria pesada."
    },
    {
        name: "Reefer",
        image: "/containers/container-07.png",
        desc: "Refrigerado para perecederos."
    }
];

const ContainerCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matches, setMatches] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches]);

    const itemsPerPage = matches ? 3 : 1;
    const maxIndex = Math.max(0, containers.length - itemsPerPage);

    useEffect(() => {
        controls.start({
            x: `-${currentIndex * (100 / itemsPerPage)}%`,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        });
    }, [currentIndex, matches, itemsPerPage, controls]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50; // Drag threshold
        if (info.offset.x < -threshold) {
            // Dragged left -> Next slide
            if (currentIndex < maxIndex) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Return to start if at end (optional loop) or just bounce back
                // Let's loop for consistency with buttons
                setCurrentIndex(0);
            }
        } else if (info.offset.x > threshold) {
            // Dragged right -> Prev slide
            if (currentIndex > 0) {
                setCurrentIndex(prev => prev - 1);
            } else {
                setCurrentIndex(maxIndex);
            }
        } else {
            // Snap back if not enough drag
            controls.start({
                x: `-${currentIndex * (100 / itemsPerPage)}%`,
                transition: { type: "spring", stiffness: 300, damping: 30 }
            });
        }
    };

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 group relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#0F1D23] mb-4">
                        Tipo de Contenedores
                    </h2>
                    <div className="w-16 h-1 bg-[#33C9F4] mx-auto rounded-full" />
                </div>

                {/* Navigation Buttons (Desktop mostly, but kept for accessibility) */}
                <button
                    onClick={prevSlide}
                    className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-400 hover:text-[#33C9F4] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-gray-400 hover:text-[#33C9F4] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Carousel Window */}
                <div className="overflow-hidden px-4 cursor-grab active:cursor-grabbing">
                    <motion.div
                        className="flex"
                        animate={controls}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        {containers.map((container, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 px-3 sm:px-4 ${matches ? 'w-1/3' : 'w-full'}`}
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-100 select-none">
                                    <div className="relative w-full h-40 mb-4 flex items-center justify-center">
                                        <img
                                            src={container.image}
                                            alt={container.name}
                                            className="w-full h-full object-contain p-2 pointer-events-none"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0F1D23] mb-2">{container.name}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{container.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Dots Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[#33C9F4]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContainerCarousel;
