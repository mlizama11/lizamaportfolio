import type { Metadata, Viewport } from 'next';
import { Fira_Code, Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { siteDescription, siteTitle, siteUrl } from '@/constants/site';
import { cn } from '@/lib/utils';

import './globals.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  icons: [
    { rel: 'icon', type: 'image/x-icon', url: '/favicon/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/favicon/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon/android-chrome-192x192.png',
      sizes: '192x192'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/favicon/android-chrome-512x512.png'
    }
  ],
  manifest: '/favicon/manifest.json'
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          firaCode.variable,
          montserrat.variable,
          'font-fira-code flex items-center justify-center antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              'flex min-h-screen w-[1200px] flex-col justify-between gap-8 scroll-smooth'
            )}
          >
            <Header />
            <main className="flex grow flex-col gap-15 px-6">
              {children}
              <Toaster richColors />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
