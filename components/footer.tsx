import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const footerLinks = {
  admissions: [
    { label: "Apply Now", href: "/apply" },
    { label: "Admissions Overview", href: "/admissions" },
    { label: "Deadlines", href: "/deadlines" },
    { label: "Visit Campus", href: "/visit" },
  ],
  academics: [
    { label: "Programs", href: "/programs" },
    { label: "Explore Miles", href: "/explore" },
  ],
  financials: [
    { label: "Tuition & Costs", href: "/costs" },
    { label: "Financial Aid", href: "/financial-aid" },
    { label: "Scholarships", href: "/scholarships" },
  ],
  campus: [
    { label: "Campus Life", href: "/campus-life" },
    { label: "Housing & Dining", href: "/housing-dining" },
    { label: "FAQ", href: "/faq" },
    { label: "Directory", href: "/directory" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] hidden sm:block" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] hidden sm:block" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-12 sm:py-20">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Admissions</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Academics</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.academics.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Financials</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.financials.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Campus</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.campus.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center section */}
        <div className="text-center space-y-6 sm:space-y-10">
          <div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4 uppercase tracking-wide">
              Miles College
            </h3>
            <p className="text-white/80 text-base sm:text-xl font-semibold">Where Excellence Meets Tradition</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 uppercase tracking-wide">
              NCAA Division II
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 uppercase tracking-wide">
              SIAC Conference
            </Badge>
            <Badge className="bg-white/10 text-white border border-white/20 font-black text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 uppercase tracking-wide">
              SACS Accredited
            </Badge>
          </div>

          <div className="py-6 sm:py-10 border-y border-white/20">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-black text-secondary mb-3 sm:mb-4 uppercase tracking-widest">
                Questions? Contact Admissions
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-6 text-base sm:text-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/20 flex items-center justify-center">
                    <Icons.phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <span className="font-black text-sm sm:text-base">Admissions Office</span>
                </div>
                <a href="tel:2059291657" className="hover:text-secondary transition-colors font-black text-lg sm:text-xl touch-target flex items-center justify-center min-h-[48px]">
                  (205) 929-1657
                </a>
                <span className="text-white/40 hidden md:inline">|</span>
                <a href="mailto:admissions@miles.edu" className="hover:text-secondary transition-colors font-bold text-sm sm:text-base touch-target flex items-center justify-center min-h-[48px]">
                  admissions@miles.edu
                </a>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-white/60 max-w-4xl mx-auto leading-relaxed px-2">
            <p className="mb-4 sm:mb-6">
              Miles College is accredited by the Southern Association of Colleges and Schools Commission on Colleges
              (SACSCOC) to award baccalaureate degrees.
            </p>
          </div>

          <div className="pt-4 sm:pt-8 border-t border-white/20">
            <p className="text-xs sm:text-sm text-white/50 font-semibold">
              {new Date().getFullYear()} Miles College. All rights reserved.
              <span className="block sm:inline sm:ml-1">Fairfield, Alabama</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
