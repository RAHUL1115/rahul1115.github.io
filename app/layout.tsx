import './globals.css'
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  )
}
