import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Miles College - Where Excellence Meets Tradition",
  description:
    "Discover Miles College, Birmingham's Premier HBCU. 97% of students receive scholarships, 30+ majors, NCAA Division II athletics, and a vibrant campus community. Founded 1898.",
  keywords: [
    "Miles College",
    "HBCU",
    "Birmingham Alabama",
    "College Scholarships",
    "NCAA Division II",
    "Purple Marching Machine",
    "Golden Bears",
    "Christian Methodist Episcopal",
  ],
  authors: [{ name: "Miles College" }],
  creator: "Miles College",
  publisher: "Miles College",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.miles.edu",
    siteName: "Miles College",
    title: "Miles College - Where Excellence Meets Tradition",
    description:
      "Discover Miles College, Birmingham's Premier HBCU. 97% of students receive scholarships, 30+ majors, NCAA Division II athletics. Apply today!",
    images: [
      {
        url: "/images/campus-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Miles College Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miles College - Where Excellence Meets Tradition",
    description: "Birmingham's Premier HBCU. 97% scholarships, 30+ majors, NCAA Division II athletics. Apply today!",
    images: ["/images/campus-hero.jpeg"],
    creator: "@milescollege",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Miles College",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5B2C6F" },
    { media: "(prefers-color-scheme: dark)", color: "#5B2C6F" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-clean.png" />
        <link rel="apple-touch-icon" href="/images/logo-clean.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${montserrat.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
