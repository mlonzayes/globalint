import { Metadata } from 'next';
import ClientsClient from './ClientsClient';

export const metadata: Metadata = {
    title: 'Nuestros Clientes | Global International Trade',
    description: 'Empresas líderes confían en Global International Trade para sus operaciones de comercio exterior. Conoce a nuestros clientes.',
    keywords: 'clientes global international trade, casos de éxito logística, partners comerciales, empresas que confían en nosotros',
    alternates: {
        canonical: '/clientes',
    },
    openGraph: {
        title: 'Nuestros Clientes | Global International Trade',
        description: 'Empresas líderes confían en Global International Trade para sus operaciones de comercio exterior.',
        url: '/clientes',
        type: 'website',
    },
};

export default function ClientsPage() {
    return <ClientsClient />;
}
