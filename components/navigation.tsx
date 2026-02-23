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

const admissionsLinks = [
  { title: "Apply Now", href: "/apply", description: "Start your free application" },
  { title: "Admissions Overview", href: "/admissions", description: "Requirements & process" },
  { title: "Deadlines", href: "/deadlines", description: "Important dates by student type" },
  { title: "Tuition & Costs", href: "/costs", description: "Affordable education investment" },
  { title: "Financial Aid", href: "/financial-aid", description: "Scholarships, grants & aid" },
  { title: "Scholarships", href: "/scholarships", description: "Merit & need-based awards" },
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

const resourceLinks = [
  { title: "FAQ", href: "/faq", description: "Frequently asked questions" },
  { title: "Directory", href: "/directory", description: "Offices & contacts" },
  { title: "AI Assistant", href: "/chat", description: "Chat with our AI advisor" },
]

const allMobileLinks = [
  { section: "Admissions", links: admissionsLinks },
  { section: "Academics", links: academicsLinks },
  { section: "Campus", links: campusLinks },
  { section: "Resources", links: resourceLinks },
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

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-300",
        isScrolled ? "shadow-xl" : "shadow-lg",
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center py-2">
              <Image
                src="/images/design-mode/IMG_1498.PNG.png"
                alt="Miles College"
                width={180}
                height={54}
                className="h-10 sm:h-11 md:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link href="/explore" className="text-sm font-semibold hover:text-secondary transition-colors px-3 py-2">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {admissionsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {academicsLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Campus
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {campusLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  <Link href="/faq" className="text-sm font-semibold hover:text-secondary transition-colors px-3 py-2">
                    FAQ
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3 ml-2">
              <Button variant="outline" size="sm" className="font-semibold bg-transparent" asChild>
                <a href="tel:205-929-1657">
                  <Icons.phone className="w-4 h-4 mr-2" />
                  <span className="hidden xl:inline">(205) 929-1657</span>
                  <span className="xl:hidden">Call</span>
                </a>
              </Button>
              <Button variant="secondary" size="sm" className="font-bold shadow-lg" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button variant="secondary" size="sm" className="font-bold shadow-lg" asChild>
              <Link href="/apply">Apply</Link>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
                  <Icons.menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-primary text-primary-foreground border-primary-foreground/10 overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 pt-8">
                  {allMobileLinks.map((section) => (
                    <div key={section.section}>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">{section.section}</p>
                      <div className="flex flex-col gap-1">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                              "flex flex-col px-3 py-2.5 transition-colors touch-target",
                              pathname === link.href
                                ? "bg-primary-foreground/15 text-secondary"
                                : "hover:bg-primary-foreground/10",
                            )}
                          >
                            <span className="text-sm font-semibold">{link.title}</span>
                            <span className="text-xs text-primary-foreground/60">{link.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-primary-foreground/10 flex flex-col gap-3">
                    <Button variant="outline" size="sm" className="w-full font-semibold bg-transparent justify-start" asChild>
                      <a href="tel:205-929-1657">
                        <Icons.phone className="w-4 h-4 mr-2" />
                        (205) 929-1657
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full font-semibold bg-transparent justify-start" asChild>
                      <a href="mailto:admissions@miles.edu">
                        <Icons.mail className="w-4 h-4 mr-2" />
                        admissions@miles.edu
                      </a>
                    </Button>
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
