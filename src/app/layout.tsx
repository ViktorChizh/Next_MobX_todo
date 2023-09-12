import './globals.css'
import { Inter } from 'next/font/google'
import React, { FC } from 'react'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo',
  description: 'ToDo - your personal helpers',
}

type RootLayoutProps = {
  children: React.ReactNode
};

const RootLayout: FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout