import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, DM_Sans } from "next/font/google"
import { AuthProvider } from "@/lib/auth-context"
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
  metadataBase: new URL("https://www.miles.edu"),
  title: "Miles College Online - Earn Your Accredited Degree 100% Online",
  description:
    "Earn your accredited degree from Miles College 100% online. Flexible scheduling, dedicated support, and HBCU excellence -- from anywhere. 30+ programs, 97% receive financial aid.",
  keywords: [
    "Miles College",
    "Online Degree",
    "Online Learning",
    "HBCU Online",
    "Online College",
    "Flexible Degree Programs",
    "Accredited Online University",
    "Distance Learning",
  ],
  authors: [{ name: "Miles College" }],
  creator: "Miles College",
  publisher: "Miles College",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.miles.edu",
    siteName: "Miles College",
    title: "Miles College Online - Accredited Degrees, 100% Online",
    description:
      "Earn your degree from Miles College 100% online. HBCU excellence with flexible scheduling, 30+ programs, and 97% financial aid rate. Apply today!",
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
    title: "Miles College Online - Accredited Degrees, 100% Online",
    description: "HBCU excellence, 100% online. 30+ programs, flexible scheduling, 97% financial aid rate. Apply today!",
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
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo-clean.png" />
        <link rel="apple-touch-icon" href="/images/logo-clean.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${montserrat.variable} ${dmSans.variable} font-sans antialiased min-h-screen`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
