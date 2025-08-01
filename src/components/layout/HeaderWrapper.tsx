'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const hideHeader = pathname !== '/' || pathname.startsWith('/legal');

  if (hideHeader) {
    return null;
  }

  return <Header />;
} 