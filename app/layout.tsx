import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suhas Sharma — Solutions Engineer',
  description:
    'Solutions Engineer at the intersection of identity, developer experience, and AI agents.',
  metadataBase: new URL('https://profile-suhasbr.vercel.app'),
  openGraph: {
    title: 'Suhas Sharma — Solutions Engineer',
    description:
      'Solutions Engineer at the intersection of identity, developer experience, and AI agents.',
    url: 'https://profile-suhasbr.vercel.app',
    siteName: 'Suhas Sharma',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Suhas Sharma' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhas Sharma — Solutions Engineer',
    description:
      'Solutions Engineer at the intersection of identity, developer experience, and AI agents.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
