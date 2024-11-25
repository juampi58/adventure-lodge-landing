import './ui/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Navbar from './ui/navbar';

const inter = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poi Ranch',
  description: 'Experiomentá la naturaleza en Poi Ranch',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
