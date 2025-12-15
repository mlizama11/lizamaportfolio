'use client';

import { MenuDesktop } from '../MenuDesktop';
import { MenuMobileorTablet } from '../MenuMobileorTablet';

export default function Header() {
  return (
    <header
      id="home"
      className="relative flex h-20 w-full items-center justify-center"
    >
      <MenuMobileorTablet />
      <MenuDesktop />
    </header>
  );
}
