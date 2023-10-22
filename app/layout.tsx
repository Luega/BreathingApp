import type { Metadata } from 'next'
import './style/globals.css'
import './style/variables.css'
import { BreathingAppContextProvider } from './contexts/breathingAppContext'

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
      <BreathingAppContextProvider>
        <body>{children}</body>
      </BreathingAppContextProvider>
    </html>
  )
}
