import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteLayout from '@/components/SiteLayout';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Pure Organic - Premium Ghee, Oils, Jaggery & Pulses',
  description: '100% organic A2 ghee, cold-pressed oils, organic jaggery, and pure pulses. Traditional methods, authentic taste, farm-fresh delivery.',
  keywords: 'organic ghee, cold pressed oil, organic jaggery, organic pulses, A2 ghee, natural food, healthy products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <SiteLayout>
            {children}
          </SiteLayout>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#374151',
                padding: '16px',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                border: '1px solid #d4894c20',
              },
              success: {
                iconTheme: {
                  primary: '#789d4a',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}