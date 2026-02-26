import Link from "next/link"
import { Icons } from "@/components/icons"

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
    <section className="bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icons.chevronRight className="w-3 h-3" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-secondary transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-secondary font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
