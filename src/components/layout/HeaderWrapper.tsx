'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const showHeader = pathname === '/' || pathname === '/recursos' || pathname === '/sobre-nos' || pathname === '/ajuda' || pathname === '/contato';

  if (!showHeader) {
    return null;
  }

  return <Header />;
} 