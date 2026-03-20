import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const footerLinks = {
  journey: [
    { label: "Start Your Journey", href: "/journey/onboarding" },
    { label: "Journey Dashboard", href: "/journey/dashboard" },
    { label: "Explore Campus", href: "/journey/explore" },
    { label: "Career Pathways", href: "/journey/careers" },
    { label: "Student Success", href: "/journey/success" },
    { label: "Alumni Network", href: "/journey/alumni" },
  ],
  admissions: [
    { label: "Apply Now", href: "/apply" },
    { label: "Admissions Overview", href: "/admissions" },
    { label: "Deadlines", href: "/deadlines" },
    { label: "Visit Campus", href: "/visit" },
  ],
  financials: [
    { label: "Tuition & Costs", href: "/costs" },
    { label: "Financial Aid", href: "/financial-aid" },
    { label: "Scholarships", href: "/scholarships" },
  ],
  campus: [
    { label: "Campus Life", href: "/campus-life" },
    { label: "Housing & Dining", href: "/housing-dining" },
    { label: "Programs", href: "/programs" },
    { label: "FAQ", href: "/faq" },
    { label: "Ask Miles AI", href: "/chat" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0415] via-[#1a0a2e] to-[#0a0415] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] hidden sm:block" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#4B2E83]/5 rounded-full blur-[80px] hidden sm:block" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">Journey</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.journey.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#C9A227] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">Admissions</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#C9A227] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">Financials</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.financials.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#C9A227] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">Campus</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.campus.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#C9A227] transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 uppercase tracking-wide">
              Miles College
            </h3>
            <p className="text-white/50 text-base sm:text-lg font-medium">
              Your Journey From Discovery to Career Success
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-white/5 text-white/60 border border-white/10 font-bold text-xs px-4 py-2 uppercase tracking-wide">
              HBCU Since 1898
            </Badge>
            <Badge className="bg-white/5 text-white/60 border border-white/10 font-bold text-xs px-4 py-2 uppercase tracking-wide">
              NCAA Division II
            </Badge>
            <Badge className="bg-white/5 text-white/60 border border-white/10 font-bold text-xs px-4 py-2 uppercase tracking-wide">
              SACSCOC Accredited
            </Badge>
          </div>

          <div className="py-8 border-y border-white/10">
            <p className="text-xs font-bold text-[#C9A227] mb-3 uppercase tracking-widest">
              Questions? We are here for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a href="tel:2059291657" className="hover:text-[#C9A227] transition-colors font-bold text-lg flex items-center gap-2">
                <Icons.phone className="w-4 h-4 text-[#C9A227]" />
                (205) 929-1657
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a href="mailto:admissions@miles.edu" className="hover:text-[#C9A227] transition-colors font-medium">
                admissions@miles.edu
              </a>
            </div>
          </div>

          <div className="text-xs text-white/30 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              Miles College is accredited by the Southern Association of Colleges and Schools Commission on Colleges
              (SACSCOC) to award baccalaureate degrees.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/30 font-medium">
              {new Date().getFullYear()} Miles College Journey Experience Platform. All rights reserved.
              <span className="block sm:inline sm:ml-1">Fairfield, Alabama</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
