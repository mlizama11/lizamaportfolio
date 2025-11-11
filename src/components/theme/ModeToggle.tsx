'use client';

import * as React from 'react';
import { PiMoon, PiSun } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <PiSun className="h-5 w-5 text-yellow-500" />
      <Switch
        className="cursor-pointer"
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light');
        }}
      />
      <PiMoon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
    </div>
  );
}
