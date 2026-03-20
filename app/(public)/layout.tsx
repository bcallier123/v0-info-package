"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingChatWidget } from "@/components/floating-chat-widget"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isImmersivePage = pathname?.startsWith("/journey")

  return (
    <>
      <Navigation />
      <div className={isImmersivePage ? "" : "pt-16"}>{children}</div>
      {!isImmersivePage && <Footer />}
      <FloatingChatWidget />
    </>
  )
}
