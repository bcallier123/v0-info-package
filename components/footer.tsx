import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Miles College</h3>
            <p className="text-background/80">Where Excellence Meets Tradition</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-background text-background">
              NCAA Division II
            </Badge>
            <Badge variant="outline" className="border-background text-background">
              SIAC Conference
            </Badge>
            <Badge variant="outline" className="border-background text-background">
              SACS Accredited
            </Badge>
          </div>

          <div className="py-6 border-y border-background/20">
            <div className="max-w-2xl mx-auto">
              <p className="text-sm font-bold text-background/90 mb-3">Questions? Contact Your Recruiter:</p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icons.phone className="w-4 h-4" />
                  <span className="font-semibold">Baily Callier</span>
                </div>
                <a href="tel:3342947984" className="hover:text-primary transition-colors font-bold">
                  (334) 294-7984
                </a>
                <span className="text-background/40">•</span>
                <a href="mailto:bcallier@miles.edu" className="hover:text-primary transition-colors font-bold">
                  bcallier@miles.edu
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-background/70 max-w-3xl mx-auto">
            <p className="mb-4">
              Miles College is accredited by the Southern Association of Colleges and Schools Commission on Colleges
              (SACSCOC) to award baccalaureate degrees. Questions about accreditation may be directed to SACSCOC at 1866
              Southern Lane, Decatur, GA 30033-4097, by calling (404) 679-4500, or by visiting www.sacscoc.org.
            </p>
          </div>

          <div className="pt-6 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Miles College. All rights reserved. • Fairfield, Alabama
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
