'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const hideHeader = pathname === '/signup' || pathname === '/registro' || pathname === '/signup/verification';

  if (hideHeader) {
    return null;
  }

  return <Header />;
} 