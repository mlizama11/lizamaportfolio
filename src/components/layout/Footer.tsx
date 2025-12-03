import React from 'react';
import { PiCopyright } from 'react-icons/pi';

import Contact from '../Contact';
import { NextLink } from '../NextLink';
import { Separator } from '../ui/separator';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="flex h-auto w-full flex-1 scroll-mt-2 flex-col items-center justify-center gap-8 px-4 py-8"
    >
      <div className="flex w-full items-center">
        <h2 className="text-2xl font-bold">Let&apos;s talk</h2>
      </div>
      <Contact />
      <Separator />
      <div className="flex w-full flex-1 justify-between gap-4 text-sm max-[700px]:flex-col max-[700px]:items-center dark:text-gray-300">
        <p>
          Created by{' '}
          <NextLink
            variant="primary"
            target="_blank"
            href="https://www.linkedin.com/in/mauriciolizama/"
          >
            Mauricio Lizama
          </NextLink>{' '}
          using{' '}
          <NextLink variant="primary" href="https://nextjs.org/">
            Next.js
          </NextLink>
        </p>
        <div className="flex items-center justify-center gap-2">
          <PiCopyright className="size-4 shrink-0" />
          <p>Copyright {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
