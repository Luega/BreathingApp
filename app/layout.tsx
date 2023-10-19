import type { Metadata } from 'next'
import './style/globals.css'
import './style/variables.css'

export const metadata: Metadata = {
  title: 'BreathingApp',
  description: 'Take a break from the daily stress.',
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
