"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Miles College AI Enrollment Coach, powered by DGX Spark. I'm here to help you learn about admissions, programs, financial aid, campus life, and more. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickQuestions = [
    "What programs does Miles College offer?",
    "How do I apply?",
    "What financial aid is available?",
    "Tell me about campus life",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again or contact us directly at (334) 294-7984.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-white/20 bg-primary/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white hover:text-secondary transition-colors">
                <Icons.arrowRight className="w-6 h-6 rotate-180" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary via-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-secondary/50">
                  <Icons.sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="font-black text-xl text-white">Miles AI Coach</h1>
                  <p className="text-xs text-white/70 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Powered by DGX Spark
                  </p>
                </div>
              </div>
            </div>
            <Badge className="px-4 py-2 bg-secondary text-primary border-0 font-black uppercase text-xs">Live AI</Badge>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <Card className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-none shadow-2xl overflow-hidden">
          {/* Messages */}
          <div className="h-[60vh] overflow-y-auto p-6 space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              >
                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/30">
                    <Icons.sparkles className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-4 ${
                    message.role === "user"
                      ? "bg-secondary text-primary rounded-l-2xl rounded-tr-2xl shadow-lg shadow-secondary/30"
                      : "bg-white/20 text-white rounded-r-2xl rounded-tl-2xl backdrop-blur-sm border border-white/30"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border-2 border-white/40">
                    <Icons.users className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start animate-fade-in-up">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/30">
                  <Icons.sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="bg-white/20 text-white rounded-r-2xl rounded-tl-2xl backdrop-blur-sm border border-white/30 p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-white/70 text-sm font-bold mb-3 uppercase tracking-wider">Quick Questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left p-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-secondary/50 transition-all text-white text-sm rounded-lg"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-white/20 bg-white/5">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Miles College..."
                className="flex-1 bg-white/10 backdrop-blur-sm border-2 border-white/30 focus:border-secondary text-white placeholder:text-white/50 rounded-none px-6 py-6 text-base"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-secondary hover:bg-yellow-400 text-primary font-black px-8 rounded-none shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all disabled:opacity-50"
              >
                <Icons.send className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
