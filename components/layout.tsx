'use client'

import { ThemeProvider } from 'next-themes'
import Footer from './footer'

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex flex-col min-h-screen">
        {/* Your header and navigation components go here */}
        <header className="bg-white dark:bg-[#1A091F] text-gray-800 dark:text-white">
          {/* Add your header content here */}
        </header>
        
        <main className="flex-grow bg-gray-100 dark:bg-[#2D1535]">
          {children}
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}