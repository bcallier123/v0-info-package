import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function DgxSparkSection() {
  const specs = [
    {
      icon: Icons.cpu,
      label: "GB10 Grace Blackwell Superchip",
      description: "NVIDIA's most advanced AI processor",
    },
    {
      icon: Icons.zap,
      label: "20-Core Arm Processor",
      description: "High-performance computing power",
    },
    {
      icon: Icons.database,
      label: "128 GB Unified Memory",
      description: "Massive memory for large AI models",
    },
    {
      icon: Icons.brain,
      label: "Up to 200B Parameters",
      description: "Run the largest AI models locally",
    },
  ]

  const opportunities = [
    "Hands-on AI/ML model training and development",
    "Research in natural language processing and computer vision",
    "Deep learning coursework with real hardware",
    "Industry-relevant skills for AI careers",
    "Collaboration with NVIDIA's academic programs",
    "Student-led AI research projects",
  ]

  return (
    <section
      id="dgx-spark"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden"
    >
      {/* NVIDIA Green accent glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#76b900]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #76b900 1px, transparent 1px), linear-gradient(to bottom, #76b900 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="mb-6 bg-[#76b900] text-black font-black text-xs uppercase tracking-wider px-4 py-2 border-0">
            AI Innovation at Miles
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            NVIDIA <span className="text-[#76b900]">DGX SPARK</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Miles College brings cutting-edge AI technology to students with the NVIDIA DGX Spark — a personal AI
            supercomputer designed for the next generation of innovators.
          </p>
        </div>

        {/* Main Feature Card */}
        <Card className="max-w-5xl mx-auto mb-12 sm:mb-16 border-2 border-[#76b900]/30 bg-white/5 backdrop-blur-sm shadow-2xl shadow-[#76b900]/10 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image/Visual */}
              <div className="relative bg-gradient-to-br from-[#76b900]/20 to-transparent p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3NmI5MDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-[#76b900] to-[#5a9000] flex items-center justify-center shadow-2xl shadow-[#76b900]/50">
                    <Icons.cpu className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#76b900] flex items-center justify-center">
                    <Icons.zap className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-wide">
                  Personal AI Supercomputer
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Powered by the NVIDIA GB10 Grace Blackwell Superchip, the DGX Spark enables students to train, fine-tune,
                  and run AI models with up to 200 billion parameters — right here on campus.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-[#76b900]/50 text-[#76b900] font-bold">
                    Machine Learning
                  </Badge>
                  <Badge variant="outline" className="border-[#76b900]/50 text-[#76b900] font-bold">
                    Deep Learning
                  </Badge>
                  <Badge variant="outline" className="border-[#76b900]/50 text-[#76b900] font-bold">
                    Generative AI
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {specs.map((spec, index) => {
            const IconComponent = spec.icon
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#76b900]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#76b900]/20 flex items-center justify-center mb-4 group-hover:bg-[#76b900]/30 transition-colors">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#76b900]" />
                </div>
                <h4 className="text-sm sm:text-base font-black text-white mb-1 leading-tight">{spec.label}</h4>
                <p className="text-xs sm:text-sm text-white/60">{spec.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Opportunities */}
        <Card className="max-w-5xl mx-auto border-2 border-primary/30 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
                <Icons.graduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                  Student Opportunities
                </h3>
                <p className="text-white/60 text-sm">What you can do with DGX Spark at Miles</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-6 h-6 bg-[#76b900] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icons.check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm sm:text-base text-white/90 font-medium">{opportunity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/60 mb-6 text-lg">
            Ready to shape the future with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#76b900] hover:bg-[#5a9000] text-black font-black px-8 py-6 text-base shadow-xl shadow-[#76b900]/20 hover:-translate-y-1 transition-all uppercase tracking-wide"
            >
              <a href="#academics">Explore CIS Programs</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-black px-8 py-6 text-base hover:-translate-y-1 transition-all uppercase tracking-wide bg-transparent"
            >
              <a href="#apply">Apply to Miles</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#76b900] to-transparent" />
    </section>
  )
}
