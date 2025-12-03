'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MenuDesktop } from '../MenuDesktop';
import { MenuMobileorTablet } from '../MenuMobileorTablet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 700 });

  return (
    <header className="relative flex h-20 w-full items-center justify-center">
      {isMobileOrTablet ? (
        <MenuMobileorTablet isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <MenuDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </header>
  );
}
