import { MenuDesktop } from '../MenuDesktop';
import { MenuMobileorTablet } from '../MenuMobileorTablet';

export default function Header() {
  return (
    <header className="relative flex h-20 w-full items-center justify-center">
      <MenuMobileorTablet />
      <MenuDesktop />
    </header>
  );
}
