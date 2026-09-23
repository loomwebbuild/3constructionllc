import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3 Construction LLC | Turnkey, Concrete, Dirt Work & Land Clearing',
  description:
    'Premier turnkey construction contractor in Central Texas specializing in concrete foundations, precision dirt work & grading, forestry land clearing, and custom residential & commercial new home construction. Call (254) 447-4500.',
  openGraph: {
    title: '3 Construction LLC | Turnkey, Concrete, Dirt Work & Land Clearing',
    description:
      'Premier turnkey construction contractor in Central Texas specializing in concrete foundations, precision dirt work & grading, forestry land clearing, and custom residential & commercial new home construction.',
    type: 'website',
    images: [
      {
        url: '/images/hero_construction_turnkey.jpg',
        width: 1200,
        height: 630,
        alt: '3 Construction LLC - Turnkey, Concrete, Dirt Work and Land Clearing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Construction LLC | Turnkey, Concrete, Dirt Work & Land Clearing',
    description:
      'Turnkey site prep, concrete foundations, dirt work, land clearing & new home construction in Central Texas. Direct estimates: (254) 447-4500.',
    images: ['/images/hero_construction_turnkey.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased font-sans selection:bg-amber-500 selection:text-neutral-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

