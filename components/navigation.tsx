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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-300",
        isScrolled ? "shadow-xl py-2" : "shadow-lg py-2 sm:py-3",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo - smaller on mobile */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <Image
                src="/images/design-mode/IMG_1498.PNG.png"
                alt="Miles College"
                width={160}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto"
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

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <Icons.close className="w-5 h-5" /> : <Icons.menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Content */}
            <div className="lg:hidden fixed left-0 right-0 top-[56px] sm:top-[64px] bg-primary z-50 border-t border-white/10 max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)] overflow-y-auto">
              <div className="py-3">
                {/* About */}
                <a
                  href="#about"
                  className="block py-3 px-6 text-sm font-semibold hover:text-secondary hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Miles College
                </a>

                {/* Admissions Section */}
                <div className="border-t border-white/10 mt-2 pt-2">
                  <p className="px-6 py-2 text-[10px] font-bold uppercase tracking-wider text-secondary">Admissions</p>
                  {admissionsLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block py-2.5 px-6 text-sm hover:text-secondary hover:bg-white/5 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* Academics Section */}
                <div className="border-t border-white/10 mt-2 pt-2">
                  <p className="px-6 py-2 text-[10px] font-bold uppercase tracking-wider text-secondary">Academics</p>
                  {academicsLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block py-2.5 px-6 text-sm hover:text-secondary hover:bg-white/5 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* Campus Life Section */}
                <div className="border-t border-white/10 mt-2 pt-2">
                  <p className="px-6 py-2 text-[10px] font-bold uppercase tracking-wider text-secondary">Campus Life</p>
                  {campusLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block py-2.5 px-6 text-sm hover:text-secondary hover:bg-white/5 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="px-4 py-4 space-y-2 border-t border-white/10 mt-2">
                  <Button
                    variant="outline"
                    size="default"
                    className="w-full font-semibold bg-transparent text-sm h-11"
                    asChild
                  >
                    <a href="tel:205-929-1657">
                      <Icons.phone className="w-4 h-4 mr-2" />
                      Call Admissions
                    </a>
                  </Button>
                  <Button variant="secondary" size="default" className="w-full font-bold text-sm h-11" asChild>
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
  )
}
