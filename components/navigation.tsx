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
        "sticky top-0 z-50 bg-primary text-primary-foreground transition-all duration-300",
        isScrolled ? "shadow-xl py-2" : "shadow-lg py-3",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <Image
                src="/images/design-mode/IMG_1498.PNG.png"
                alt="Miles College - Where Excellence Meets Tradition"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <a href="#about" className="text-sm font-semibold hover:text-secondary transition-colors px-3 py-2">
                    About
                  </a>
                </NavigationMenuItem>

                {/* Admissions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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

                {/* Academics Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
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

                {/* Campus Life Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-semibold hover:text-secondary">
                    Campus Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
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

            <div className="flex items-center gap-3 ml-4">
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden touch-target flex items-center justify-center no-select"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <Icons.close className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 space-y-6 animate-fade-in-up border-t border-white/20 max-h-[80vh] overflow-y-auto">
            {/* About */}
            <div>
              <a
                href="#about"
                className="block py-3 px-4 text-sm font-semibold hover:text-secondary hover:bg-white/10 transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                About Miles College
              </a>
            </div>

            {/* Admissions Section */}
            <div>
              <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-secondary mb-2">Admissions</h3>
              {admissionsLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="block py-2 px-4 text-sm hover:text-secondary hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Academics Section */}
            <div>
              <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-secondary mb-2">Academics</h3>
              {academicsLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="block py-2 px-4 text-sm hover:text-secondary hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Campus Life Section */}
            <div>
              <h3 className="px-4 text-xs font-bold uppercase tracking-wider text-secondary mb-2">Campus Life</h3>
              {campusLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="block py-2 px-4 text-sm hover:text-secondary hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="px-4 space-y-3 pt-4 border-t border-white/20">
              <Button variant="outline" size="lg" className="w-full font-semibold bg-transparent" asChild>
                <a href="tel:205-929-1657">
                  <Icons.phone className="w-4 h-4 mr-2" />
                  Call Admissions
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="w-full font-bold" asChild>
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
