'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import TerminalCLI from './TerminalCLI';

export default function TerminalCLIGuard() {
  const pathname = usePathname();
  const isResume = pathname.startsWith('/software-developer');

  useEffect(() => {
    if (isResume) {
      document.documentElement.removeAttribute('data-theme');
      document.body.classList.remove('no-scanlines', 'no-blink');
    }
  }, [isResume]);

  if (isResume) return null;
  return <TerminalCLI />;
}
