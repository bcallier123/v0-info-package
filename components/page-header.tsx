"use client"

import Link from "next/link"
import { Icons } from "@/components/icons"
import { motion } from "framer-motion"

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#2d1b4e] text-primary-foreground py-20 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A227]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4B2E83]/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201, 162, 39, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 162, 39, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4B2E83]/30 to-transparent" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/50">
              <li>
                <Link href="/" className="hover:text-[#C9A227] transition-colors font-medium">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icons.chevronRight className="w-3 h-3" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#C9A227] transition-colors font-medium">{crumb.label}</Link>
                  ) : (
                    <span className="text-[#C9A227] font-bold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-[#C9A227] to-transparent" />
            <span className="text-[#C9A227] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Miles College Online</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance text-white">
            {title}
          </h1>
        </motion.div>
        {subtitle && (
          <motion.p
            className="mt-5 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#C9A227]/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#C9A227]/50 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none hidden sm:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#C9A227]/50 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-[#C9A227]/50 to-transparent" />
      </div>
    </section>
  )
}
