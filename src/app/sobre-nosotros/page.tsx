import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'Sobre Nosotros | Global International Trade',
    description: 'Conoce nuestra historia, misión y valores. Somos expertos en comercio exterior y logística integral con 30+ años de experiencia.',
    keywords: 'sobre nosotros global international trade, historia logistics, misión visión valores, equipo comercio exterior',
    alternates: {
        canonical: '/sobre-nosotros',
    },
    openGraph: {
        title: 'Sobre Nosotros | Global International Trade',
        description: 'Conoce nuestra historia, misión y valores. Somos expertos en comercio exterior y logística integral con 30+ años de experiencia.',
        url: '/sobre-nosotros',
        type: 'website',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
