"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const journeyLinks = [
  { title: "Start Your Journey", href: "/journey/onboarding", description: "Personalized onboarding experience" },
  { title: "My Dashboard", href: "/journey/dashboard", description: "Your journey command center" },
  { title: "Explore Campus", href: "/journey/explore", description: "Digital campus exploration" },
  { title: "Career Pathways", href: "/journey/careers", description: "Major-to-career visualization" },
  { title: "Student Success", href: "/journey/success", description: "Academic command center" },
  { title: "Alumni Network", href: "/journey/alumni", description: "Post-graduation journey" },
]

const admissionsLinks = [
  { title: "Apply Now", href: "/apply", description: "Start your free application" },
  { title: "Admissions Overview", href: "/admissions", description: "Requirements & process" },
  { title: "Deadlines", href: "/deadlines", description: "Important dates by student type" },
  { title: "Tuition & Costs", href: "/costs", description: "Affordable education investment" },
  { title: "Financial Aid", href: "/financial-aid", description: "Scholarships, grants & aid" },
  { title: "Visit Campus", href: "/visit", description: "Schedule a tour" },
]

const academicsLinks = [
  { title: "Programs", href: "/programs", description: "30+ degree programs" },
  { title: "Explore Miles", href: "/explore", description: "Why choose Miles College?" },
]

const campusLinks = [
  { title: "Campus Life", href: "/campus-life", description: "Student organizations & activities" },
  { title: "Housing & Dining", href: "/housing-dining", description: "Residence halls & meal plans" },
]

const allMobileLinks = [
  { section: "Journey", links: journeyLinks },
  { section: "Admissions", links: admissionsLinks },
  { section: "Academics", links: academicsLinks },
  { section: "Campus", links: campusLinks },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isJourneyPage = pathname?.startsWith("/journey")

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#1a0a2e]/95 backdrop-blur-xl shadow-xl border-b border-white/5"
          : isJourneyPage
            ? "bg-transparent"
            : "bg-primary shadow-lg",
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 py-2">
            <Image
              src="/images/design-mode/IMG_1498.PNG.png"
              alt="Miles College"
              width={180}
              height={54}
              className="hidden sm:block h-10 md:h-12 w-auto"
              priority
            />
            <span className="sm:hidden text-base font-black tracking-tight text-white">
              MILES<span className="text-[#C9A227]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold text-white/90 hover:text-[#C9A227] data-[state=open]:text-[#C9A227]">
                    Journey
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {journeyLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-semibold leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold text-white/90 hover:text-[#C9A227]">
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {admissionsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-semibold leading-none">{link.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/programs" className="text-sm font-semibold text-white/90 hover:text-[#C9A227] transition-colors px-3 py-2">
                    Academics
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/campus-life" className="text-sm font-semibold text-white/90 hover:text-[#C9A227] transition-colors px-3 py-2">
                    Campus
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/chat" className="text-sm font-semibold text-white/90 hover:text-[#C9A227] transition-colors px-3 py-2">
                    Ask Miles
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3 ml-2">
              <Button
                size="sm"
                className="font-bold bg-[#C9A227] text-[#1a0a2e] hover:bg-yellow-400 shadow-lg"
                asChild
              >
                <Link href="/journey/onboarding">Start Journey</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              className="font-bold bg-[#C9A227] text-[#1a0a2e] hover:bg-yellow-400 shadow-lg text-xs h-9 px-3 rounded-full"
              asChild
            >
              <Link href="/journey/onboarding">Start</Link>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors"
                  aria-label="Open menu"
                >
                  <Icons.menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-[320px] bg-[#0a0415] text-white border-white/10 p-0 overflow-y-auto"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Mobile nav header */}
                <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-white/10">
                  <span className="text-lg font-black tracking-tight text-white">
                    MILES<span className="text-[#C9A227]">.</span>
                  </span>
                </div>

                {/* Mobile nav sections */}
                <div className="px-5 py-4 flex flex-col gap-5">
                  {allMobileLinks.map((section) => (
                    <div key={section.section}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A227]/70 mb-2 px-1">
                        {section.section}
                      </p>
                      <div className="flex flex-col">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors",
                              pathname === link.href
                                ? "bg-[#C9A227]/10 text-[#C9A227]"
                                : "text-white/80 active:bg-white/5",
                            )}
                          >
                            <div className="min-w-0">
                              <span className="text-sm font-semibold block truncate">{link.title}</span>
                              <span className="text-[11px] text-white/40 block truncate">{link.description}</span>
                            </div>
                            <Icons.arrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Contact section */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    <Button
                      size="sm"
                      className="w-full font-bold bg-[#C9A227] text-[#1a0a2e] hover:bg-yellow-400 h-11 rounded-lg"
                      asChild
                    >
                      <Link href="/journey/onboarding">Start Your Journey</Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:205-929-1657"
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/5 text-white/70 text-xs font-medium"
                      >
                        <Icons.phone className="w-3.5 h-3.5 text-[#C9A227]" />
                        Call
                      </a>
                      <a
                        href="mailto:admissions@miles.edu"
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/5 text-white/70 text-xs font-medium"
                      >
                        <Icons.mail className="w-3.5 h-3.5 text-[#C9A227]" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
