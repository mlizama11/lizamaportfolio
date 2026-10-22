import Image from 'next/image';
import { PiDownload, PiMapPin } from 'react-icons/pi';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

import { CopyEmailButton } from './CopyEmailButton';
import SocialMediaShareButton from './SocialMediaShareButton';
import { Section } from './layout/Section';
import { ModeToggle } from './theme/ModeToggle';

export default function Intro() {
  return (
    <Section>
      <div className="flex w-full flex-1 grow items-end justify-between gap-4 max-[700px]:flex-col max-[700px]:items-center">
        <div className="flex h-full gap-4 max-[700px]:flex-col max-[700px]:items-center">
          <Image
            className="h-36 w-36 rounded-md border-none object-cover"
            src="/assets/mlizama768x512.jpg"
            alt="Next.js logo"
            width={768}
            height={512}
            priority
          />
          <div className="flex flex-col justify-between gap-4 max-[700px]:items-center">
            <div className="flex flex-col gap-3 max-[700px]:items-center">
              <h1 className="font-bold">Mauricio Lizama</h1>
              <div>
                <p className="text-lg font-medium">Full Stack Developer &</p>
                <p className="text-lg font-medium">Communications Specialist</p>
              </div>
              <div className="flex items-center gap-1">
                <PiMapPin className="h-4 w-4 text-gray-500 dark:text-gray-200" />
                <p className="text-gray-500 dark:text-gray-200">
                  European Union
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-36 flex-col items-end justify-between gap-4 max-[700px]:h-fit max-[700px]:flex-col-reverse max-[700px]:items-center max-[700px]:justify-center">
          <a
            href="https://linko.page/mlizama"
            target="_blank"
            className="bg-white"
          >
            <Image
              className="h-20 w-auto"
              src="/assets/mlizamaqrcode.png"
              alt="GitHub Logo"
              width={256}
              height={256}
            />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="z-30 flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium text-black outline-none hover:text-blue-400 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 dark:text-gray-300 dark:hover:text-blue-400">
              <PiDownload className="mb-2 size-6 shrink-0" />
              <span>Download CV</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a
                  href="/assets/mlizama-resume-functional.pdf"
                  target="_blank"
                  download
                >
                  Functional
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/assets/mlizama-resume-creative.pdf"
                  target="_blank"
                  download
                >
                  Creative
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between max-[500px]:flex-col-reverse max-[500px]:justify-center max-[500px]:gap-4">
          <CopyEmailButton />
          <div className="flex items-center gap-4">
            <SocialMediaShareButton />
            <ModeToggle />
          </div>
        </div>
      </div>
    </Section>
  );
}
