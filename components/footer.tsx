import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] text-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-10">
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">Miles College</h3>
            <p className="text-white/80 text-xl font-semibold">Where Excellence Meets Tradition</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-sm px-6 py-3 uppercase tracking-wide">
              NCAA Division II
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-sm px-6 py-3 uppercase tracking-wide">
              SIAC Conference
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-sm px-6 py-3 uppercase tracking-wide">
              SACS Accredited
            </Badge>
          </div>

          <div className="py-10 border-y border-white/20">
            <div className="max-w-2xl mx-auto">
              <p className="text-sm font-black text-secondary mb-4 uppercase tracking-widest">
                Questions? Contact Your Recruiter
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center">
                    <Icons.phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-black">Baily Callier</span>
                </div>
                <a href="tel:3342947984" className="hover:text-secondary transition-colors font-black text-xl">
                  (334) 294-7984
                </a>
                <span className="text-white/40 hidden md:inline">•</span>
                <a href="mailto:bcallier@miles.edu" className="hover:text-secondary transition-colors font-bold">
                  bcallier@miles.edu
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-white/60 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-6">
              Miles College is accredited by the Southern Association of Colleges and Schools Commission on Colleges
              (SACSCOC) to award baccalaureate degrees. Questions about accreditation may be directed to SACSCOC at 1866
              Southern Lane, Decatur, GA 30033-4097, by calling (404) 679-4500, or by visiting www.sacscoc.org.
            </p>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/50 font-semibold">
              © {new Date().getFullYear()} Miles College. All rights reserved. • Fairfield, Alabama
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
