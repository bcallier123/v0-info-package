"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = ["hero", "about", "apply", "academics", "campus-life", "athletics"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const admissionsLinks = [
    { title: "Apply Now", href: "https://myexperience.miles.edu", description: "Start your application online" },
    { title: "How to Apply", href: "#apply", description: "3 simple steps to enrollment" },
    { title: "Tuition & Costs", href: "#costs", description: "Affordable education investment" },
    { title: "Financial Aid", href: "#financial-aid", description: "Scholarships, grants, and aid options" },
    { title: "Schedule a Visit", href: "https://www.miles.edu/visit", description: "Tour our Birmingham campus" },
  ]

  const academicsLinks = [
    { title: "Academic Programs", href: "#academics", description: "30+ degree programs" },
    { title: "Accreditation", href: "https://www.miles.edu/accreditation", description: "SACSCOC accredited" },
    { title: "Faculty", href: "https://www.miles.edu/faculty", description: "Expert instructors" },
    { title: "Career Services", href: "https://www.miles.edu/career-services", description: "Job placement support" },
  ]

  const campusLinks = [
    { title: "Campus Life", href: "#campus-life", description: "Student organizations & activities" },
    { title: "Athletics", href: "#athletics", description: "NCAA Division II sports" },
    { title: "Housing", href: "https://www.miles.edu/housing", description: "On-campus residence halls" },
    { title: "Student Resources", href: "https://www.miles.edu/student-services", description: "Support services" },
  ]

  const bottomNavItems = [
    { id: "hero", icon: Icons.home, label: "Home", href: "#hero" },
    { id: "apply", icon: Icons.fileText, label: "Apply", href: "#apply" },
    { id: "academics", icon: Icons.graduationCap, label: "Programs", href: "#academics" },
    { id: "campus-life", icon: Icons.heart, label: "Campus", href: "#campus-life" },
    { id: "chat", icon: Icons.messageCircle, label: "Chat", href: "/chat" },
  ]

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-300 safe-top",
          isScrolled ? "shadow-xl" : "shadow-lg",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-shrink-0">
              <a href="#hero" className="flex items-center py-2">
                <Image
                  src="/images/design-mode/IMG_1498.PNG.png"
                  alt="Miles College"
                  width={180}
                  height={54}
                  className="h-10 sm:h-11 md:h-12 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <a href="#about" className="text-sm font-semibold hover:text-secondary transition-colors px-3 py-2">
                      About
                    </a>
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
                              <a
                                href={link.href}
                                {...(link.href.startsWith("http") && {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                })}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-semibold leading-none">{link.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {link.description}
                                </p>
                              </a>
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
                              <a
                                href={link.href}
                                {...(link.href.startsWith("http") && {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                })}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-semibold leading-none">{link.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {link.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                      Campus Life
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {campusLinks.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <a
                                href={link.href}
                                {...(link.href.startsWith("http") && {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                })}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-semibold leading-none">{link.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {link.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-3 ml-2">
                <Button variant="outline" size="sm" className="font-semibold bg-transparent" asChild>
                  <a href="tel:205-929-1657">
                    <Icons.phone className="w-4 h-4 mr-2" />
                    (205) 929-1657
                  </a>
                </Button>
                <Button variant="secondary" size="sm" className="font-bold shadow-lg" asChild>
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:2059291657"
                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Call Admissions"
              >
                <Icons.phone className="w-5 h-5" />
              </a>
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <Icons.close className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <>
              <div
                className="lg:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
                onClick={() => setIsOpen(false)}
              />
              <div className="lg:hidden fixed left-0 right-0 top-16 bg-primary z-50 border-t border-white/10 max-h-[calc(100vh-64px-72px)] overflow-y-auto animate-fade-in-up">
                <div className="py-3">
                  <a
                    href="#about"
                    className="flex items-center gap-4 py-4 px-6 text-lg font-semibold hover:text-secondary hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icons.info className="w-6 h-6 text-secondary" />
                    About Miles College
                  </a>

                  <div className="border-t border-white/10 mt-2 pt-2">
                    <p className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary">Admissions</p>
                    {admissionsLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center gap-4 py-4 px-6 text-base hover:text-secondary hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icons.chevronRight className="w-5 h-5 text-white/40" />
                        {link.title}
                      </a>
                    ))}
                  </div>

                  <div className="border-t border-white/10 mt-2 pt-2">
                    <p className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary">Academics</p>
                    {academicsLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center gap-4 py-4 px-6 text-base hover:text-secondary hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icons.chevronRight className="w-5 h-5 text-white/40" />
                        {link.title}
                      </a>
                    ))}
                  </div>

                  <div className="border-t border-white/10 mt-2 pt-2">
                    <p className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary">Campus Life</p>
                    {campusLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center gap-4 py-4 px-6 text-base hover:text-secondary hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icons.chevronRight className="w-5 h-5 text-white/40" />
                        {link.title}
                      </a>
                    ))}
                  </div>

                  <div className="px-5 py-5 space-y-3 border-t border-white/10 mt-3">
                    <Button variant="secondary" size="lg" className="w-full font-bold text-lg h-14" asChild>
                      <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                        Apply Now - FREE
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary/98 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around h-[72px] px-1 safe-bottom">
          {bottomNavItems.map((item) => {
            const IconComponent = item.icon
            const isActive =
              activeSection === item.id ||
              (item.id === "chat" && typeof window !== "undefined" && window.location.pathname === "/chat")
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 h-14 rounded-lg transition-all relative mx-0.5 touch-target",
                  isActive ? "text-secondary bg-white/10" : "text-white/70 hover:text-white",
                )}
              >
                <IconComponent className={cn("w-6 h-6 mb-1", isActive && "scale-110")} />
                <span className="text-[11px] font-bold uppercase tracking-wide">{item.label}</span>
                {isActive && <span className="absolute bottom-1.5 w-1.5 h-1.5 bg-secondary rounded-full" />}
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
