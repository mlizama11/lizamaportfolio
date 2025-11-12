'use client';

import { MenuDesktop } from '../MenuDesktop';
import { MenuMobileorTablet } from '../MenuMobileorTablet';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
