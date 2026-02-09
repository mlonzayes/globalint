import { Metadata } from 'next';
import HomePage from '@/app/HomePage';

export const metadata: Metadata = {
  title: 'Global International Trade - Comercio Exterior Estratégico |30+ Años Experiencia',
  description: 'Líder en comercio exterior con enfoque estratégico.30+ años de experiencia, 10k+ envíos realizados, 50+ socios globales y 99% tasa de éxito. Logística integral y despacho aduanero.',
  keywords: 'comercio exterior, logística integral, despacho aduanero, comercio internacional, argentina, global trade, customs clearance, international logistics',

  openGraph: {
    title: 'Global International Trade - Comercio Exterior Estratégico |30+ Años Experiencia',
    description: 'Líder en comercio exterior con enfoque estratégico.30+ años de experiencia, 10k+ envíos realizados, 50+ socios globales y 99% tasa de éxito. Logística integral y despacho aduanero.',
  }
}

export default function Page() {
  return <HomePage />
}