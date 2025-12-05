"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, Printer } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PresentationViewProps {
  slides: React.ReactNode[]
}

export function PresentationView({ slides }: PresentationViewProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const router = useRouter()
  const containerRef = React.useRef<HTMLDivElement>(null)

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev))
  }, [slides.length])

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev))
  }, [])

  const handlePrint = () => {
    window.print()
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "Escape") {
        if (isFullscreen) {
          document.exitFullscreen()
        } else {
          router.push("/")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, isFullscreen, router])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div ref={containerRef} className="presentation-container fixed inset-0 bg-background z-50 flex flex-col overflow-hidden">
      {/* Toolbar */}
      <div className="h-14 border-b bg-white/95 backdrop-blur flex items-center justify-between px-4 shrink-0 z-50 no-print">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/")} title="Exit Presentation">
            <X className="h-5 w-5" />
          </Button>
          <span className="font-semibold text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint} title="Print / Save as PDF">
            <Printer className="h-4 w-4 mr-2" /> Save as PDF
          </Button>
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <Button variant="default" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto relative bg-slate-50 presentation-container">
        <div className="min-h-full flex flex-col presentation-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "presentation-slide flex-1 transition-opacity duration-300 absolute inset-0 overflow-y-auto",
                currentSlide === index ? "opacity-100 z-10 relative" : "opacity-0 z-0 hidden"
              )}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-slate-200 shrink-0 no-print">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
