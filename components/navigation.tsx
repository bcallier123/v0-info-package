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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
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
    <>
      {/* Top Navigation Bar - Fixed 64px height */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-300",
          isScrolled ? "shadow-xl" : "shadow-lg",
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
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

            {/* Navigation */}
            <div className="flex items-center gap-4 min-w-0">
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


          </div>


        </div>
      </nav>


    </>
  )
}
