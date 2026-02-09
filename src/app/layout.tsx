import { Manrope } from 'next/font/google';
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://www.globalinternationaltrade.com'), // TODO: Update with actual domain
  title: {
    default: 'Global International Trade',
    template: 'Global International Trade | %s',
  },
  description: 'Global International Trade offers comprehensive logistics solutions with 30+ years experience, 10k+ successful shipments, and 99% success rate. Expert customs clearance and international commerce services.',
  keywords: 'international trade, logistics solutions, customs clearance, global commerce, freight forwarding, import export, supply chain management',

  openGraph: {
    type: 'website',
    title: {
      default: 'Global International Trade',
      template: 'Global International Trade | %s',
    },
    description: 'Partner with Global International Trade for reliable logistics solutions.30+ years expertise, 50+ global partners, and proven 99% success rate in international commerce.',
  },
  icons: {
    icon: '/global.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fglobalint2499back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.16" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}