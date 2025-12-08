'use client';

import { usePathname } from 'next/navigation';

import { NextLink } from '@/components/NextLink';

export default function NotFound() {
  const pathname = usePathname();
  return (
    <main className="mt-10 flex min-h-[40vh] grow flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <h1>404 - Page Not Found</h1>
        <div>
          <p>The requested resource could not be found on {pathname}.</p>
        </div>
        <NextLink href="/" variant={'secondary'}>
          Go back to Home
        </NextLink>
      </div>
    </main>
  );
}
