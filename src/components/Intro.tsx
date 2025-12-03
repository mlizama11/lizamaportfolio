'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  PiCopyLight,
  PiDownload,
  PiLinkedinLogoThin,
  PiMapPin
} from 'react-icons/pi';

import { Separator } from '@/components/ui/separator';

import { NextLink } from './NextLink';
import { Section } from './layout/Section';
import { ModeToggle } from './theme/ModeToggle';
import { Button } from './ui/button';

export default function Intro() {
  const [copied, setCopied] = useState(false);

  return (
    <Section id="home">
      <div className="flex w-full flex-1 grow items-end justify-between gap-4 max-[700px]:flex-col max-[700px]:items-center">
        <div className="flex h-full gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <Image
            className="h-36 w-36 rounded-lg border-none object-cover"
            src="/assets/mlizama768x512.jpg"
            alt="Next.js logo"
            width={768}
            height={512}
            priority
          />
          <div className="flex flex-col justify-between gap-4 max-[700px]:items-center">
            <div className="flex flex-col gap-1 max-[700px]:items-center">
              <h1 className="font-bold">Mauricio Lizama</h1>
              <h3 className="font-medium">Full Stack Developer</h3>
              <div className="flex items-center gap-1">
                <PiMapPin className="h-4 w-4 text-gray-500 dark:text-gray-200" />
                <p className="text-gray-500 dark:text-gray-200">
                  Aachen, Germany
                </p>
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
        <div className="flex h-36 flex-col items-end justify-between gap-4 max-[700px]:h-fit max-[700px]:flex-col-reverse max-[700px]:items-center max-[700px]:justify-center">
          <div>
            <ModeToggle />
          </div>
          <NextLink
            variant="primary"
            className="flex items-center justify-center gap-2"
            href="/assets/mlizama-resume.pdf"
            target="_blank"
            download
          >
            <PiDownload className="mb-2 size-6 shrink-0 cursor-pointer" />
            <p>Download CV</p>
          </NextLink>
        </div>
      </div>
      <div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={async () => {
              await navigator.clipboard.writeText('mlizamaoliger@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <PiCopyLight className="size-6 shrink-0" />
            <p>{copied ? 'Copied!' : 'mlizamaoliger@gmail.com'}</p>
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/mauriciolizama/',
                '_blank'
              );
            }}
          >
            <PiLinkedinLogoThin className="size-6 shrink-0" />{' '}
            <span>LinkedIn</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
