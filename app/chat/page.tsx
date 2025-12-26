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
    if (part.startsWith("#")) {
      const headerText = part.replace(/^#+\s*/, "")
      return (
        <span key={index} className="text-sm sm:text-lg font-black text-secondary block mb-2">
          {headerText}
        </span>
      )
    }
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
        "Hello! I'm the Miles College AI Enrollment Coach. I'm here to help you with admissions, programs, financial aid, and more.\n\n**What can I help you with?**",
      timestamp: new Date(),
      buttons: [
        { text: "How do I apply?", action: "apply", type: "primary" },
        { text: "Financial Aid", action: "fafsa" },
        { text: "Programs", action: "programs" },
        { text: "Visit Campus", action: "visits" },
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
    { icon: Icons.fileText, text: "How do I apply?", category: "Apply" },
    { icon: Icons.dollarSign, text: "Financial aid?", category: "Aid" },
    { icon: Icons.graduationCap, text: "What programs?", category: "Programs" },
    { icon: Icons.users, text: "Campus life?", category: "Life" },
  ]

  const personas = [
    { id: "freshman", label: "Student", icon: Icons.graduationCap },
    { id: "transfer", label: "Transfer", icon: Icons.arrowRight },
    { id: "parent", label: "Parent", icon: Icons.users },
  ]

  const handleButtonAction = async (button: ActionButton) => {
    if (button.action.startsWith("http") || button.action.startsWith("mailto:") || button.action.startsWith("tel:")) {
      window.open(button.action, "_blank")
    } else {
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
          content: `I'm having trouble connecting. Please contact Miles College:\n\n**Admissions:** (205) 929-1657\n**Email:** admissions@miles.edu`,
          timestamp: new Date(),
          buttons: [
            { text: "Call Now", action: "tel:2059291657", type: "primary" },
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
    <div className="min-h-[100svh] bg-gradient-to-br from-[#1a0a2e] via-primary/95 to-background pb-16 lg:pb-0">
      <div className="sticky top-0 z-50 border-b-2 border-secondary/30 bg-[#1a0a2e]/95 backdrop-blur-xl shadow-xl safe-top">
        <div className="container mx-auto px-3 sm:px-6 py-2 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Link
                href="/"
                className="text-white hover:text-secondary transition-colors group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10"
              >
                <Icons.arrowRight className="w-5 h-5 rotate-180" />
              </Link>
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary via-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl shadow-secondary/50">
                    <Icons.sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#1a0a2e] ${
                      connectionStatus.checking
                        ? "bg-yellow-400 animate-pulse"
                        : connectionStatus.connected
                          ? "bg-green-400"
                          : "bg-orange-400"
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="font-black text-sm sm:text-xl text-white tracking-tight">MILES AI</h1>
                  <p className="text-[9px] sm:text-xs text-white/70 font-bold uppercase tracking-wider hidden sm:block">
                    Enrollment Coach
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                {personas.map((p) => {
                  const IconComp = p.icon
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPersona(persona === p.id ? null : p.id)}
                      className={`px-2 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase rounded-full transition-all flex items-center gap-1 whitespace-nowrap ${
                        persona === p.id ? "bg-secondary text-primary" : "bg-white/10 text-white/70"
                      }`}
                    >
                      <IconComp className="w-3 h-3" />
                      <span className="hidden xs:inline">{p.label}</span>
                    </button>
                  )
                })}
              </div>
              <Badge
                className={`px-2 py-1 border-0 font-black uppercase text-[8px] sm:text-xs shadow-lg flex-shrink-0 ${
                  connectionStatus.checking
                    ? "bg-yellow-400 text-primary"
                    : connectionStatus.connected
                      ? "bg-green-500 text-white"
                      : "bg-secondary text-primary"
                }`}
              >
                {connectionStatus.checking ? "..." : connectionStatus.connected ? "AI" : "FAQ"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-6 py-3 sm:py-8 max-w-5xl">
        <Card className="bg-white/5 backdrop-blur-xl border-2 border-white/10 shadow-2xl overflow-hidden">
          <ScrollArea className="h-[calc(100svh-220px)] sm:h-[55vh] md:h-[60vh] px-3 sm:px-6 py-3 sm:py-6">
            <div className="space-y-3 sm:space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 sm:gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/40">
                      <Icons.sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5 sm:gap-2 max-w-[85%] sm:max-w-[80%]">
                    <div
                      className={`p-3 sm:p-5 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-secondary to-yellow-400 text-primary shadow-xl shadow-secondary/30"
                          : "bg-white/10 text-white backdrop-blur-sm border border-white/20"
                      }`}
                    >
                      <div className="text-[12px] sm:text-base leading-relaxed whitespace-pre-wrap">
                        {renderMarkdown(message.content)}
                      </div>
                    </div>
                    {message.buttons && message.buttons.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {message.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            onClick={() => handleButtonAction(button)}
                            className={`px-2.5 py-1.5 text-[10px] sm:text-sm font-bold rounded-full transition-all ${
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
                      <span className="text-[8px] sm:text-xs text-white/40 px-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30">
                      <Icons.users className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 sm:gap-4 justify-start">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/40">
                    <Icons.sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-primary animate-spin" />
                  </div>
                  <div className="bg-white/10 text-white backdrop-blur-sm border border-white/20 p-3 sm:p-5 rounded-2xl">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-bounce" />
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {messages.length === 1 && (
            <div className="px-3 sm:px-6 pb-3 sm:pb-6 pt-2 border-t border-white/10">
              <p className="text-white/60 text-[9px] sm:text-sm font-bold mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Icons.messageCircle className="w-3 h-3" />
                Quick Questions:
              </p>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                {quickQuestions.map((question, index) => {
                  const IconComponent = question.icon
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.text)}
                      className="group text-left p-2 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-secondary/50 transition-all text-white text-[10px] sm:text-sm flex items-center gap-2 rounded-xl"
                    >
                      <IconComponent className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="font-semibold line-clamp-1">{question.text}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-3 sm:p-6 border-t border-white/10 bg-white/5 safe-bottom">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-secondary text-white placeholder:text-white/40 px-4 py-4 sm:py-6 text-sm pr-10 rounded-xl transition-all"
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-secondary to-yellow-400 hover:from-yellow-400 hover:to-secondary text-primary font-black px-4 sm:px-8 shadow-xl shadow-secondary/40 transition-all disabled:opacity-50 rounded-xl h-auto"
              >
                {isLoading ? <Icons.sparkles className="w-5 h-5 animate-spin" /> : <Icons.send className="w-5 h-5" />}
              </Button>
            </div>
            <p className="text-[8px] sm:text-xs text-white/40 mt-1.5 text-center">
              {connectionStatus.connected ? "Powered by DGX Spark AI" : "Using FAQ database"}
            </p>
          </form>
        </Card>

        <div className="mt-3 sm:mt-6 flex overflow-x-auto sm:overflow-visible sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 pb-2 sm:pb-0 scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0">
          <a
            href="https://myexperience.miles.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-primary font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-secondary/30 text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
          >
            <Icons.fileText className="w-4 h-4" />
            Apply Free
          </a>
          <a
            href="https://studentaid.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/30 text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
          >
            <Icons.dollarSign className="w-4 h-4" />
            FAFSA
          </a>
          <a
            href="tel:2059291657"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/30 text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
          >
            <Icons.phone className="w-4 h-4" />
            Call
          </a>
        </div>
      </div>
    </div>
  )
}
