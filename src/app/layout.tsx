import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { siteDescription, siteTitle, siteUrl } from '@/constants';

const firaCode = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicon/android-chrome-512x512.png',
    },
  ],
  manifest: '/favicon/manifest.json',
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          firaCode.className,
          'flex items-center justify-center antialiased outline-dashed'
        )}
      >
        <div
          className={cn(
            'flex min-h-screen w-[1200px] flex-col justify-between gap-8 scroll-smooth'
          )}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
