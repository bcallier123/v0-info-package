"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

interface ActionButton {
  text: string
  action: string
  type?: string
}

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp?: Date
  buttons?: ActionButton[]
}

interface ConnectionStatus {
  connected: boolean
  checking: boolean
  lastCheck?: Date
}

function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|#[^\n]+)/g)

  return parts.map((part, index) => {
    // Headers (# text)
    if (part.startsWith("#")) {
      const headerText = part.replace(/^#+\s*/, "")
      return (
        <span key={index} className="text-xl font-black text-secondary block mb-2">
          {headerText}
        </span>
      )
    }
    // Bold (**text**)
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="font-bold text-secondary">
          {part.slice(2, -2)}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Miles College AI Enrollment Coach. I'm here to help you learn about admissions, programs, financial aid, campus life, and more.\n\n**What can I help you with today?**",
      timestamp: new Date(),
      buttons: [
        { text: "How do I apply?", action: "apply", type: "primary" },
        { text: "Financial Aid Info", action: "fafsa" },
        { text: "View Programs", action: "programs" },
        { text: "Schedule a Visit", action: "visits" },
      ],
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>({
    connected: false,
    checking: true,
  })
  const [persona, setPersona] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    checkConnection()
    const interval = setInterval(checkConnection, 120000)
    return () => clearInterval(interval)
  }, [])

  const checkConnection = async () => {
    setConnectionStatus((prev) => ({ ...prev, checking: true }))
    try {
      const response = await fetch("/api/chat", { method: "GET" })
      const data = await response.json()
      setConnectionStatus({
        connected: data.dgxConnected || false,
        checking: false,
        lastCheck: new Date(),
      })
    } catch (error) {
      setConnectionStatus({
        connected: false,
        checking: false,
        lastCheck: new Date(),
      })
    }
  }

  const quickQuestions = [
    { icon: Icons.graduationCap, text: "What programs does Miles offer?", category: "Academics" },
    { icon: Icons.fileText, text: "How do I apply?", category: "Admissions" },
    { icon: Icons.dollarSign, text: "What financial aid is available?", category: "Financial Aid" },
    { icon: Icons.users, text: "Tell me about campus life", category: "Campus Life" },
    { icon: Icons.trophy, text: "What about athletics?", category: "Athletics" },
    { icon: Icons.building, text: "Can I tour the campus?", category: "Visits" },
  ]

  const personas = [
    { id: "freshman", label: "Prospective Student", icon: Icons.graduationCap },
    { id: "transfer", label: "Transfer Student", icon: Icons.arrowRight },
    { id: "parent", label: "Parent/Guardian", icon: Icons.users },
  ]

  const handleButtonAction = async (button: ActionButton) => {
    if (button.action.startsWith("http") || button.action.startsWith("mailto:") || button.action.startsWith("tel:")) {
      window.open(button.action, "_blank")
    } else {
      // Internal action - send as message
      await sendMessage(button.text)
    }
  }

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return

    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          persona,
          conversationHistory: messages.slice(-6),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.error || "Failed to get response")
      }

      const data = await response.json()

      if (data.isOffline || data.isDGXError) {
        setConnectionStatus((prev) => ({ ...prev, connected: false, lastCheck: new Date() }))
      } else if (data.source === "dgx-ai") {
        setConnectionStatus((prev) => ({ ...prev, connected: true, lastCheck: new Date() }))
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
          buttons: data.buttons,
        },
      ])
    } catch (error) {
      setConnectionStatus((prev) => ({ ...prev, connected: false, lastCheck: new Date() }))
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having trouble connecting right now. Please contact Miles College directly:\n\n**Admissions Office:**\nPhone: (205) 929-1657\nEmail: admissions@miles.edu\n\n**Apply online:** myexperience.miles.edu`,
          timestamp: new Date(),
          buttons: [
            { text: "Call Admissions", action: "tel:2059291657", type: "primary" },
            { text: "Apply Online", action: "https://myexperience.miles.edu" },
          ],
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendMessage(input)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] via-primary/95 to-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b-2 border-secondary/30 bg-[#1a0a2e]/90 backdrop-blur-xl shadow-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-white hover:text-secondary transition-colors group flex items-center gap-2"
              >
                <Icons.arrowRight className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-black uppercase hidden md:inline">Back to Home</span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary via-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl shadow-secondary/50">
                    <Icons.sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#1a0a2e] ${
                      connectionStatus.checking
                        ? "bg-yellow-400 animate-pulse"
                        : connectionStatus.connected
                          ? "bg-green-400"
                          : "bg-orange-400"
                    }`}
                    title={
                      connectionStatus.checking
                        ? "Checking connection..."
                        : connectionStatus.connected
                          ? "AI Connected"
                          : "Using Smart Responses"
                    }
                  />
                </div>
                <div>
                  <h1 className="font-black text-2xl text-white tracking-tight">MILES AI COACH</h1>
                  <p className="text-xs text-white/70 font-bold uppercase tracking-wider">Your Enrollment Assistant</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Persona Selector */}
              <div className="hidden md:flex items-center gap-2">
                {personas.map((p) => {
                  const IconComp = p.icon
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPersona(persona === p.id ? null : p.id)}
                      className={`px-3 py-1.5 text-xs font-bold uppercase rounded-full transition-all flex items-center gap-1 ${
                        persona === p.id ? "bg-secondary text-primary" : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      <IconComp className="w-3 h-3" />
                      {p.label}
                    </button>
                  )
                })}
              </div>
              <Badge
                className={`px-4 py-2 border-0 font-black uppercase text-xs shadow-lg ${
                  connectionStatus.checking
                    ? "bg-yellow-400 text-primary"
                    : connectionStatus.connected
                      ? "bg-green-500 text-white"
                      : "bg-secondary text-primary"
                }`}
              >
                {connectionStatus.checking ? "Connecting..." : connectionStatus.connected ? "AI Live" : "Smart Mode"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <Card className="bg-white/5 backdrop-blur-2xl border-2 border-white/10 shadow-2xl overflow-hidden">
          {/* Messages */}
          <ScrollArea className="h-[60vh] px-6 py-6">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  {message.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/40">
                      <Icons.sparkles className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className="flex flex-col gap-3 max-w-[80%]">
                    <div
                      className={`p-5 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-secondary to-yellow-400 text-primary shadow-xl shadow-secondary/30"
                          : "bg-white/10 text-white backdrop-blur-sm border border-white/20"
                      }`}
                    >
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {renderMarkdown(message.content)}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    {message.buttons && message.buttons.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {message.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            onClick={() => handleButtonAction(button)}
                            className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                              button.type === "primary"
                                ? "bg-secondary text-primary hover:bg-yellow-400 shadow-lg shadow-secondary/30"
                                : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
                            }`}
                          >
                            {button.text}
                          </button>
                        ))}
                      </div>
                    )}
                    {message.timestamp && (
                      <span className="text-xs text-white/40 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30">
                      <Icons.users className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4 justify-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/40">
                    <Icons.sparkles className="w-5 h-5 text-primary animate-spin" />
                  </div>
                  <div className="bg-white/10 text-white backdrop-blur-sm border border-white/20 p-5 rounded-2xl">
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
          </ScrollArea>

          {/* Quick Questions - Show only at start */}
          {messages.length === 1 && (
            <div className="px-6 pb-6 pt-2 border-t border-white/10">
              <p className="text-white/60 text-sm font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
                <Icons.messageCircle className="w-4 h-4" />
                Popular Questions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {quickQuestions.map((question, index) => {
                  const IconComponent = question.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.text)}
                      className="group text-left p-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-secondary/50 transition-all text-white text-sm flex flex-col gap-2 rounded-xl hover:shadow-lg hover:shadow-secondary/10"
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-white/50 uppercase tracking-wider font-bold">
                          {question.category}
                        </span>
                      </div>
                      <span className="font-semibold">{question.text}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-white/10 bg-white/5">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Miles College..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-secondary text-white placeholder:text-white/40 px-6 py-6 text-base pr-12 rounded-xl transition-all"
                  disabled={isLoading}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Icons.messageCircle className="w-5 h-5 text-white/30" />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-secondary via-yellow-400 to-secondary hover:from-yellow-400 hover:via-secondary hover:to-yellow-400 text-primary font-black px-8 shadow-xl shadow-secondary/40 hover:shadow-secondary/60 transition-all disabled:opacity-50 rounded-xl"
              >
                {isLoading ? <Icons.sparkles className="w-5 h-5 animate-spin" /> : <Icons.send className="w-5 h-5" />}
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-3 text-center">
              {connectionStatus.connected
                ? "Powered by DGX Spark AI"
                : "Using comprehensive FAQ database - always accurate!"}
            </p>
          </form>
        </Card>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://myexperience.miles.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-secondary/30"
          >
            <Icons.fileText className="w-4 h-4" />
            Apply Now - FREE!
          </a>
          <a
            href="https://studentaid.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/30"
          >
            <Icons.dollarSign className="w-4 h-4" />
            Complete FAFSA
          </a>
          <a
            href="tel:2059291657"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/30"
          >
            <Icons.phone className="w-4 h-4" />
            Call (205) 929-1657
          </a>
        </div>
      </div>
    </div>
  )
}
