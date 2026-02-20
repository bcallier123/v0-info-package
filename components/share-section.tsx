"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import Link from "next/link"

export function ShareSection() {
  const [copied, setCopied] = useState(false)
  const shareUrl = "https://www.enrollatmiles.today"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent("Discover Miles College - Birmingham's Premier HBCU")
    const body = encodeURIComponent(
      `I wanted to share this comprehensive information package about Miles College with you.\n\nMiles College is Birmingham's Premier HBCU with:\n• 97% of students receive scholarships\n• 30+ degree programs\n• 17:1 student-teacher ratio\n• NCAA Division II athletics\n• Award-winning Purple Marching Machine band (ESPN Band of the Year 2024)\n\nLearn more: ${shareUrl}`,
    )
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank")
  }

  const shareViaSMS = () => {
    const message = encodeURIComponent(
      `Discover Miles College! 97% scholarships, 30+ majors, NCAA Division II athletics, ESPN Band of the Year 2024. Learn more: ${shareUrl}`,
    )
    window.open(`sms:?body=${message}`, "_blank")
  }

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(
      "Discover Miles College - Birmingham's Premier HBCU! 97% scholarships, 30+ majors, NCAA Division II athletics",
    )
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${text}`,
      "_blank",
      "width=600,height=400",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400",
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-base px-4 py-2">
            Share & Connect
          </Badge>
          <h2 className="text-5xl font-black text-white mb-4">Share This Information</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Help future Golden Bears discover their path to excellence at Miles College
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/95 backdrop-blur">
          <CardContent className="p-6 md:p-12">
            <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
              <p className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wide">
                Share This Link
              </p>
              <p className="text-center font-mono text-lg font-bold text-primary break-all">
                {shareUrl}
              </p>
            </div>

            <Button
              onClick={copyToClipboard}
              size="lg"
              className={`w-full text-xl py-7 font-bold mb-6 transition-all min-h-[60px] ${
                copied ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
              }`}
            >
              <Icons.link className="w-6 h-6 mr-3 flex-shrink-0" />
              <span className="truncate">{copied ? "Link Copied!" : "Copy Link to Share"}</span>
            </Button>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                onClick={shareViaEmail}
                size="lg"
                variant="outline"
                className="text-base py-6 font-semibold border-2 hover:bg-primary/5 bg-transparent min-h-[60px]"
              >
                <Icons.mail className="w-5 h-5 mr-2 flex-shrink-0" />
                Share via Email
              </Button>

              <Button
                onClick={shareViaSMS}
                size="lg"
                variant="outline"
                className="text-base py-6 font-semibold border-2 hover:bg-primary/5 bg-transparent min-h-[60px]"
              >
                <Icons.phone className="w-5 h-5 mr-2 flex-shrink-0" />
                Share via Text
              </Button>

              <Link href="/presentation" className="contents">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base py-6 font-semibold border-2 hover:bg-primary/5 bg-transparent min-h-[60px] col-span-2"
                >
                  <Icons.presentation className="w-5 h-5 mr-2 flex-shrink-0" />
                  Start Presentation Mode
                </Button>
              </Link>
            </div>

            <div className="mb-8">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                Share on Social Media
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  onClick={shareOnFacebook}
                  variant="outline"
                  className="py-6 border-2 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 bg-transparent min-h-[60px] justify-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2 font-semibold">Facebook</span>
                </Button>

                <Button
                  onClick={shareOnTwitter}
                  variant="outline"
                  className="py-6 border-2 hover:bg-sky-50 hover:border-sky-500 hover:text-sky-600 bg-transparent min-h-[60px] justify-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="ml-2 font-semibold">Twitter</span>
                </Button>

                <Button
                  onClick={shareOnLinkedIn}
                  variant="outline"
                  className="py-6 border-2 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 bg-transparent min-h-[60px] justify-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="ml-2 font-semibold">LinkedIn</span>
                </Button>
              </div>
            </div>

            <div className="pt-8 border-t-2 border-primary/10">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">Quick Access QR Code</h3>
                <p className="text-base text-muted-foreground">
                  Scan with any smartphone camera to instantly access this information
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl border-4 border-primary/20 shadow-lg">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shareUrl)}&color=5B2C6F`}
                    alt="QR Code for Miles College Information"
                    className="w-56 h-56"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                Point your camera at the QR code - No app needed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
