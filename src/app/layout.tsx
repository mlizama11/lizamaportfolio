import type { Metadata, Viewport } from 'next';
import { Fira_Code, Montserrat } from 'next/font/google';
import { draftMode } from 'next/headers';

import { cn } from '@/lib/utils';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

import ExitDraftModeLink from './ExitDraftModeLink';
import './globals.css';
import { siteDescription, siteTitle, siteUrl } from '@/constants/site';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({
  children,
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
            {(await draftMode()).isEnabled && (
              <p className="bg-orange-200 px-[6vw] py-4">
                Draft mode is on! <ExitDraftModeLink className="underline" />
              </p>
            )}
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
