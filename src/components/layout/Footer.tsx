import Contact from '../Contact';
import { Separator } from '../ui/separator';
import React from 'react';

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
      <div className="flex w-full flex-1 justify-between">
        <p>
          Designed by{' '}
          <a target="_blank" href="https://www.linkedin.com/in/mauriciolizama/">
            Mauricio Lizama
          </a>{' '}
          using <a href="https://nextjs.org/">Next.js</a>
        </p>
        <p>© Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
