'use client';

import { format, getTime } from 'date-fns';
import { useEffect, useState } from 'react';
import { PiCopyLight, PiLinkedinLogoThin } from 'react-icons/pi';
import { SiXing } from 'react-icons/si';

import { Button } from './ui/button';

export function ContactSideInfos() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(format(getTime(now), 'hh:mm b'));
    };

    update();
    const intervalId = window.setInterval(update, 30_000);
    return () => window.clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col gap-4 border-l-2 border-gray-900 pl-4 max-[700px]:w-full">
      <div className="flex gap-2 whitespace-nowrap">
        <p className="font-semibold">Time for me:</p>
        <p className="text-md font-light">{currentTime || '—'}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Email:</p>
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
      </div>
      <div>
        <p className="font-semibold">Social Media</p>
        <div className="flex flex-col gap-1">
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
          <Button
            variant="ghost"
            onClick={() => {
              window.open(
                'https://www.xing.com/profile/Mauricio_Lizama',
                '_blank'
              );
            }}
          >
            <SiXing className="size-6 shrink-0" /> <span>Xing</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
