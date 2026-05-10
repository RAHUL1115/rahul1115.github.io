import './globals.css'
import type { Metadata } from 'next';
import TerminalCLI from '#/components/TerminalCLI';

export const metadata: Metadata = {
  title: 'rahul gupta — ~/portfolio',
  description: 'Senior Software Engineer — full-stack, DevOps, and quantitative trading systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var p = JSON.parse(localStorage.getItem('terminal-prefs') || '{}');
            if (p.theme && p.theme !== 'classic') document.documentElement.setAttribute('data-theme', p.theme);
            if (p.scanlines === false) document.body.classList.add('no-scanlines');
            if (p.blinkingCursor === false) document.body.classList.add('no-blink');
          } catch(e) {}
        `}} />
      </head>
      <body>
        {children}
        <TerminalCLI />
      </body>
    </html>
  )
}
