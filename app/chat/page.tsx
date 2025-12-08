"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-black">
      <Navigation />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-yellow-300 transition-colors mb-4"
            >
              <Icons.arrowRight className="w-4 h-4 rotate-180" />
              <span className="font-bold uppercase tracking-wider">Back to Home</span>
            </Link>

            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center">
                <Icons.messageCircle className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              MILES AI
              <span className="block text-secondary">ENROLLMENT COACH</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get instant answers about admissions, programs, costs, and campus life at Miles College
            </p>
          </div>

          {/* Chat Container */}
          <Card className="bg-black/40 backdrop-blur-xl border-white/20 rounded-none shadow-2xl overflow-hidden">
            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-6 max-w-lg">
                    <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icons.sparkles className="w-10 h-10 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white mb-2">ASK ME ANYTHING</h2>
                      <p className="text-white/60">
                        I can help you with admissions requirements, academic programs, financial aid, campus life, and
                        more!
                      </p>
                    </div>

                    {/* Quick Questions */}
                    <div className="grid gap-3 mt-6">
                      <button
                        onClick={() =>
                          handleInputChange({ target: { value: "What programs does Miles College offer?" } } as any)
                        }
                        className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 transition-all text-left rounded-none group"
                      >
                        <p className="text-white font-semibold group-hover:text-secondary transition-colors">
                          What programs does Miles College offer?
                        </p>
                      </button>
                      <button
                        onClick={() =>
                          handleInputChange({ target: { value: "How do I apply to Miles College?" } } as any)
                        }
                        className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 transition-all text-left rounded-none group"
                      >
                        <p className="text-white font-semibold group-hover:text-secondary transition-colors">
                          How do I apply to Miles College?
                        </p>
                      </button>
                      <button
                        onClick={() =>
                          handleInputChange({ target: { value: "What scholarships are available?" } } as any)
                        }
                        className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 transition-all text-left rounded-none group"
                      >
                        <p className="text-white font-semibold group-hover:text-secondary transition-colors">
                          What scholarships are available?
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-4 ${
                        message.role === "user"
                          ? "bg-secondary text-primary rounded-none"
                          : "bg-white/10 text-white border border-white/20 rounded-none"
                      }`}
                    >
                      <p className="text-sm font-semibold mb-2 uppercase tracking-wider opacity-70">
                        {message.role === "user" ? "You" : "Miles AI Coach"}
                      </p>
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 bg-white/10 border border-white/20 rounded-none">
                    <p className="text-sm font-semibold mb-2 uppercase tracking-wider text-white/70">Miles AI Coach</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-white/20 bg-black/20">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about admissions, programs, costs..."
                  className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary rounded-none font-medium"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-8 py-4 bg-secondary hover:bg-yellow-400 text-primary font-black rounded-none shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icons.send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Footer Note */}
          <p className="text-center text-white/40 text-sm mt-6">
            This AI assistant provides information about Miles College. For official enrollment support, contact{" "}
            <a href="mailto:bcallier@miles.edu" className="text-secondary hover:text-yellow-300 transition-colors">
              bcallier@miles.edu
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
