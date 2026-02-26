"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: Icons.trendingUp },
  { label: "Applicants", href: "/admin/applicants", icon: Icons.users },
  { label: "Content", href: "/admin/content", icon: Icons.fileText },
  { label: "Settings", href: "/admin/settings", icon: Icons.shield },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-primary text-primary-foreground">
        <div className="flex items-center h-16 px-6 border-b border-primary-foreground/10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/design-mode/IMG_1498.PNG.png" alt="Miles College" width={140} height={42} className="h-8 w-auto" />
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/50 mb-4 px-3">Administration</p>
          <ul className="flex flex-col gap-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-primary-foreground/15 text-secondary"
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="px-4 py-4 border-t border-primary-foreground/10">
          <Link href="/" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors px-3 py-2">
            <Icons.arrowRight className="w-4 h-4 rotate-180" />
            Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64 flex-1 flex flex-col">
        {/* Admin top bar */}
        <header className="h-16 bg-background border-b flex items-center justify-between px-6 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <Link href="/" className="flex items-center">
                <Image src="/images/design-mode/IMG_1498.PNG.png" alt="Miles College" width={120} height={36} className="h-7 w-auto" />
              </Link>
            </div>
            <h1 className="text-lg font-bold text-foreground hidden lg:block">
              Admissions Command Center
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              A
            </div>
            <span className="text-sm font-semibold text-foreground hidden sm:block">Admin</span>
          </div>
        </header>

        {/* Mobile admin nav */}
        <div className="lg:hidden border-b bg-background overflow-x-auto">
          <div className="flex px-4 py-2 gap-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
