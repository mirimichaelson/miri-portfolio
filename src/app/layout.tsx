import './globals.css'
import type { Metadata } from 'next'
import { mynerve, roboto_mono } from './fonts'
import { ActiveBarProvider } from './contexts/activeBar'


export const metadata: Metadata = {
  title: 'Miri Michaelson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.svg'/>
      </head>

      <ActiveBarProvider>
          <body className={roboto_mono.className}>{children}</body>
      </ActiveBarProvider>
    </html>
  )
}
