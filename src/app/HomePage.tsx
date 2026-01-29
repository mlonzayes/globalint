'use client';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import MissionVisionValues from '../components/home/MissionVisionSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';

import CTASection from '../components/home/CTASection';
import WhatsAppButton from '../components/common/WhatsAppButton';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-1 w-full relative">
                <HeroSection />
                <AboutSection />
                <MissionVisionValues />
                <ServicesSection />
                <IndustriesSection />
                <ClientsSection />
                <CTASection />
                <ContactSection />
            </main>

            <WhatsAppButton />
            <Footer />
        </div>
    )
}