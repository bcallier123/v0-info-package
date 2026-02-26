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
    <Link href={href} className="group block">
      <Card className="p-6 h-full border border-border hover:border-secondary/50 bg-card text-card-foreground transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col h-full">
          {badge && (
            <Badge className="self-start mb-3 bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase tracking-wider">
              {badge}
            </Badge>
          )}
          <h3 className="text-lg font-black mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-medium border-border">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            {meta && <span className="text-xs text-muted-foreground font-semibold">{meta}</span>}
            <span className="text-secondary font-bold text-sm flex items-center gap-1 ml-auto">
              Learn more
              <Icons.arrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
