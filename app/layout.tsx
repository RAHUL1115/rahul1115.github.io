import './globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rahul Gupta | Senior Software Developer',
  description: 'Rahul Gupta | Full Stack Developer & Data Analyst portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--bg)', color: 'var(--text)' }}>{children}</body>
    </html>
  )
}
