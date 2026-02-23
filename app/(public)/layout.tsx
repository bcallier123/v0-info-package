import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingChatWidget } from "@/components/floating-chat-widget"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <div className="pt-16">{children}</div>
      <Footer />
      <FloatingChatWidget />
    </>
  )
}
