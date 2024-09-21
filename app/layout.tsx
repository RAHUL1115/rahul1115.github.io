import './globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rahul Gupta | Senior Software Developer portfolio Website',
  description: 'Rahul Gupta | Senior Software Developer portfolio Website',
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
