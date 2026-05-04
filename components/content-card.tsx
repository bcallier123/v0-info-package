import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

interface ContentCardProps {
  title: string
  description: string
  href: string
  badge?: string
  tags?: string[]
  meta?: string
}

export function ContentCard({ title, description, href, badge, tags, meta }: ContentCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="relative p-6 h-full border border-border hover:border-[#C9A227]/40 bg-card text-card-foreground transition-all duration-500 hover:shadow-xl hover:shadow-[#C9A227]/5 overflow-hidden">
        {/* Hover accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A227] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Hover glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C9A227]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col h-full">
          {badge && (
            <Badge className="self-start mb-3 bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30 font-bold text-[10px] uppercase tracking-wider">
              {badge}
            </Badge>
          )}
          <h3 className="text-lg font-black mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] font-medium border-border text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            {meta && <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{meta}</span>}
            <span className="text-[#C9A227] font-bold text-sm flex items-center gap-1.5 ml-auto">
              Learn more
              <Icons.arrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
