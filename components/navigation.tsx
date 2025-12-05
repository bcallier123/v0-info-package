"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"

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

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Campus Life", href: "#campus-life" },
    { label: "Costs", href: "#costs" },
    { label: "Financial Aid", href: "#financial-aid" },
    { label: "Athletics", href: "#athletics" },
    { label: "Apply", href: "https://myexperience.miles.edu", external: true },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 bg-primary text-primary-foreground transition-all duration-300 ${
        isScrolled ? "shadow-xl py-2" : "shadow-lg py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/images/design-mode/IMG_1498.PNG.png"
              alt="Miles College - Where Excellence Meets Tradition"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-sm font-semibold hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" className="font-bold rounded-lg shadow-md" asChild>
              <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          <button
            className="md:hidden touch-target flex items-center justify-center no-select"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <Icons.close className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in-up border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="block py-3 px-4 text-sm font-semibold hover:text-secondary hover:bg-white/10 transition-colors touch-target rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" size="lg" className="w-full font-bold touch-target mt-4 rounded-lg" asChild>
              <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
