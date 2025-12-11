import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ReadyToApplyBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary via-purple-700 to-primary text-white overflow-hidden">
      {/* Decorative blur orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Compelling headline & CTA */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/50 rounded-full">
              <p className="text-sm font-bold uppercase tracking-wider text-secondary">Start Your Journey Today</p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to <span className="text-secondary">Apply?</span>
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Join the Miles College family in just three simple steps. Your future starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group text-lg px-8 py-6 font-black bg-secondary hover:bg-yellow-400 text-primary shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg hover:scale-105"
                asChild
              >
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Apply Now
                    <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-bold border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-lg transition-all"
                asChild
              >
                <a href="tel:205-929-1657">
                  <span className="flex items-center gap-2">
                    <Icons.phone className="w-5 h-5" />
                    (205) 929-1657
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right: 3-step process */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-center lg:text-left">
              <span className="text-secondary">3 Simple Steps</span> to Enrollment
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-lg md:text-xl font-bold mb-1">Complete Your Application</h4>
                  <p className="text-white/80 text-sm md:text-base">
                    Submit your online application at{" "}
                    <a
                      href="https://myexperience.miles.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-yellow-400 font-bold underline"
                    >
                      myexperience.miles.edu
                    </a>
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-6 md:ml-7 w-0.5 h-4 bg-gradient-to-b from-secondary to-white/30" />

              {/* Step 2 */}
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-lg md:text-xl font-bold mb-1">Submit Your Documents</h4>
                  <p className="text-white/80 text-sm md:text-base">
                    Send transcripts and test scores to complete your application file
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-6 md:ml-7 w-0.5 h-4 bg-gradient-to-b from-secondary to-white/30" />

              {/* Step 3 */}
              <div className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-black text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-lg md:text-xl font-bold mb-1">Become a Golden Bear</h4>
                  <p className="text-white/80 text-sm md:text-base">
                    Receive your acceptance and start your journey to excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-center gap-2 text-sm text-white/70">
              <Icons.check className="w-4 h-4 text-secondary" />
              <span className="font-semibold">No application fee required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-yellow-400 to-secondary" />
    </div>
  )
}
