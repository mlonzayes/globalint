import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Nuestros Servicios | Global International Trade',
    description: 'Soluciones integrales de logística, despacho aduanero y comercio internacional para potenciar tu operación global.',
    keywords: 'servicios logísticos, despacho aduanero, comercio internacional, consultoría comex, tercerización comercio exterior, logística global',
    alternates: {
        canonical: '/servicios',
    },
    openGraph: {
        title: 'Nuestros Servicios | Global International Trade',
        description: 'Soluciones integrales de logística, despacho aduanero y comercio internacional para potenciar tu operación global.',
        url: '/servicios',
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
