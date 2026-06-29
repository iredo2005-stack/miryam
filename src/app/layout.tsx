import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'מרים יוסף — הסיפור שלנו',
  description: 'מכתב אהבה בקוד.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-cream text-gray-800 antialiased">{children}</body>
    </html>
  )
}
