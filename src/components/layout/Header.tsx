'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuDesktop from '../MenuDesktop';
import MenuMobileorTablet from '../MenuMobileorTablet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery({ minWidth: 700 });

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center px-4">
      {isMobileOrTablet ? (
        <MenuDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <MenuMobileorTablet isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </header>
  );
}
