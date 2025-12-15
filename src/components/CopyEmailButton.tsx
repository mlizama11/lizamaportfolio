'use client';

import { useState } from 'react';
import { PiCopyLight } from 'react-icons/pi';

import { Button } from './ui/button';

export function CopyEmailButton() {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div>
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
  );
}
