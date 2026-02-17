import { Metadata } from 'next';
import UsefulInfoClient from './UsefulInfoClient';

export const metadata: Metadata = {
    title: 'Información Útil | Global International Trade',
    description: 'Recursos y herramientas útiles para el comercio exterior. Cotizaciones, NCM, Incoterms y más.',
}

export default function UsefulInfoPage() {
    return <UsefulInfoClient />
}
