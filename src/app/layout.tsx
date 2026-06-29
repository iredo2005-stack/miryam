import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Miryam Yosef — Our Story So Far',
  description: 'A love letter in code.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-800 antialiased">{children}</body>
    </html>
  )
}
