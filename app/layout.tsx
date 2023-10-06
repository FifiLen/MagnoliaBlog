import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/page'
import Foot from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magnolia Blog',
  description: 'Blog przeznaczony dla walki z uzaleznieniami',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        
        
        {children}
        
       
        <footer>
          <Foot />
        </footer>
        
        </body>
    </html>
  )
}
