import { Outfit } from 'next/font/google';
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Global International Trade',
    template: 'Global International Trade | %s',
  },
  description: 'Global International Trade offers comprehensive logistics solutions with 15+ years experience, 10k+ successful shipments, and 99% success rate. Expert customs clearance and international commerce services.',
  keywords: 'international trade, logistics solutions, customs clearance, global commerce, freight forwarding, import export, supply chain management',

  openGraph: {
    type: 'website',
    title: {
      default: 'Global International Trade',
      template: 'Global International Trade | %s',
    },
    description: 'Partner with Global International Trade for reliable logistics solutions. 15+ years expertise, 50+ global partners, and proven 99% success rate in international commerce.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fglobalint2499back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.16" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}