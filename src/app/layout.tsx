import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junior Green',
  generator: 'Next.js',
  applicationName: 'Junior Green Portfolio',
  authors: [{ name: 'Junior' }],
  colorScheme: 'dark',
  creator: 'Junior Green',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-theme-blue w-full h-full overflow-hidden'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
