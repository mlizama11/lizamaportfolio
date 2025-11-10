'use client';

import Image from 'next/image';
import { PiCopyLight, PiLinkedinLogoThin, PiMapPin } from 'react-icons/pi';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Intro() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="home" className="scroll-mt-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Image
            className="h-[122px] w-[122px] rounded-lg border-none object-cover"
            src="/assets/mlizama768x512.jpg"
            alt="Next.js logo"
            width={768}
            height={512}
            priority
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">Mauricio Lizama</h1>
              <h2 className="text-xl">Full Stack Developer</h2>
              <div className="flex items-center gap-1">
                <PiMapPin className="h-4 w-4 text-gray-500" />
                <p className="text-gray-500">Aachen, Germany</p>
              </div>
            </div>
            <div className="flex items-center gap-1 font-medium text-green-700">
              <div className="flex justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
              </div>
              <span>Available to work</span>
            </div>
          </div>
        </div>
        <div>other content</div>
      </div>
      <div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon-lg"
            className="w-fit cursor-pointer px-2 hover:bg-none"
            onClick={async () => {
              await navigator.clipboard.writeText('mlizamaoliger@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <PiCopyLight size={14} />
            <p>{copied ? 'Copied!' : 'mlizamaoliger@gmail.com'}</p>
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            className="w-fit cursor-pointer px-2 hover:bg-none"
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/mauriciolizama/',
                '_blank'
              );
            }}
          >
            <PiLinkedinLogoThin className="shrink-0" size={24} />{' '}
            <span>LinkedIn</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
