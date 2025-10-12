// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kantora Tech',
  description: 'Microsoft Power Platform Experts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[calc(100vh-80px)]">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
