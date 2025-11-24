'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { PiMoon, PiSun } from 'react-icons/pi';

import { Switch } from '@/components/ui/switch';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <PiSun className="h-5 w-5 text-yellow-500" />
      <Switch
        id="dark-mode-switch"
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        aria-label="Toggle dark mode"
      />
      <PiMoon className="h-5 w-5 text-gray-500" />
    </div>
  );
}
