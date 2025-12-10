"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
  timestamp?: Date
  buttons?: Array<{ text: string; action: string }>
}

type Persona = "freshman" | "transfer" | "parent" | "counselor" | "current" | null

interface LeadData {
  name?: string
  email?: string
  phone?: string
  gradYear?: string
  interest?: string
}

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [persona, setPersona] = useState<Persona>(null)
  const [leadData, setLeadData] = useState<LeadData>({})
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Welcome to Miles College! I'm your AI Enrollment Coach powered by DGX Spark. I'm here to help you 24/7.\n\nWho am I helping today?",
          timestamp: new Date(),
          buttons: [
            { text: "Future Golden Bear (New Freshman)", action: "persona:freshman" },
            { text: "Transfer Student", action: "persona:transfer" },
            { text: "Parent or Guardian", action: "persona:parent" },
            { text: "High School Counselor", action: "persona:counselor" },
            { text: "Current Student", action: "persona:current" },
          ],
        },
      ])
    }
  }, [isOpen, messages.length])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getQuickQuestions = () => {
    const common = [
      { icon: Icons.fileText, text: "How do I apply?", flow: "apply" },
      { icon: Icons.dollarSign, text: "Tell me about FAFSA", flow: "fafsa" },
      { icon: Icons.home, text: "How does housing work?", flow: "housing" },
      { icon: Icons.graduationCap, text: "What programs do you offer?", flow: "programs" },
    ]

    if (persona === "parent") {
      return [
        { icon: Icons.dollarSign, text: "What are the costs?", flow: "cost" },
        { icon: Icons.shield, text: "Is campus safe?", flow: "safety" },
        { icon: Icons.phone, text: "Who can I talk to?", flow: "contact" },
        { icon: Icons.home, text: "Where will my child live?", flow: "housing" },
      ]
    }

    if (persona === "counselor") {
      return [
        { icon: Icons.users, text: "Group campus visits", flow: "visits" },
        { icon: Icons.fileText, text: "How to send transcripts", flow: "transcript" },
        { icon: Icons.calendar, text: "On-site admissions events", flow: "events" },
        { icon: Icons.phone, text: "Recruiter contact", flow: "contact" },
      ]
    }

    return common
  }

  const handleButtonClick = async (action: string) => {
    if (action.startsWith("persona:")) {
      const selectedPersona = action.replace("persona:", "") as Persona
      setPersona(selectedPersona)

      const personaMessages: Record<string, string> = {
        freshman:
          "Great! I'll help you navigate the freshman application process at Miles College. What would you like to know?",
        transfer: "Welcome! I'll help you with the transfer process to Miles College. What questions do you have?",
        parent:
          "Thank you for supporting your student! I'm here to answer your questions about Miles College. What would you like to know?",
        counselor:
          "Welcome, Counselor! I'm here to help you support your students interested in Miles College. How can I assist?",
        current: "Hello, Golden Bear! How can I help you today?",
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: personaMessages[selectedPersona] || "How can I help you?",
          timestamp: new Date(),
        },
      ])
      return
    }

    // Handle flow-based questions
    setInput(getQuickQuestions().find((q) => q.flow === action)?.text || action)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
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
          leadData,
          conversationHistory: messages.slice(-4), // Last 4 messages for context
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const newMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }

      // Add action buttons if provided
      if (data.buttons) {
        newMessage.buttons = data.buttons
      }

      setMessages((prev) => [...prev, newMessage])

      // Check if lead capture is requested
      if (data.captureLeadRequest) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Would you like a recruiter to contact you?\n\nPlease share:\n• Your name\n• Email or phone number\n• Expected graduation year\n• Area of interest (major, athletics, etc.)",
              timestamp: new Date(),
            },
          ])
        }, 1000)
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please call us at (334) 294-7984 or email admissions@miles.edu",
          timestamp: new Date(),
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
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center group transition-all hover:scale-105 shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        style={{ backgroundColor: "#4B2E83" }}
        aria-label={isOpen ? "Close Miles Assistant chat" : "Open Miles Assistant chat"}
      >
        {isOpen ? (
          <Icons.x className="w-7 h-7 text-white transition-transform group-hover:rotate-90" />
        ) : (
          <Icons.messageCircle className="w-7 h-7 text-white" />
        )}
        {!isOpen && (
          <div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white animate-pulse"
            style={{ backgroundColor: "#10B981" }}
            aria-label="Online"
          />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed bottom-[90px] right-6 z-50 w-[calc(100vw-3rem)] md:w-[400px] animate-fade-in-up"
          role="dialog"
          aria-label="Miles Assistant chat window"
        >
          <Card
            className="overflow-hidden"
            style={{
              height: "70vh",
              borderRadius: "18px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div className="h-[70px] px-4 flex items-center justify-between" style={{ backgroundColor: "#4B2E83" }}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  M
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">Miles Assistant</h3>
                  <p className="text-white/80 text-xs leading-tight flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#10B981" }}
                      aria-label="Online status"
                    />
                    Your 24/7 Admissions Guide
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <Icons.x className="w-5 h-5 text-white" />
              </button>
            </div>

            <ScrollArea className="flex-1 px-4 py-4 bg-white" style={{ height: "calc(70vh - 70px - 180px)" }}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index}>
                    <div className={`flex gap-2.5 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      {message.role === "assistant" && (
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                          style={{ backgroundColor: "#4B2E83" }}
                        >
                          M
                        </div>
                      )}
                      <div className="flex flex-col gap-1 max-w-[75%]">
                        <div
                          className={`px-4 py-2.5 text-sm leading-relaxed ${
                            message.role === "user" ? "text-white" : "bg-white border text-gray-900"
                          }`}
                          style={
                            message.role === "user"
                              ? { backgroundColor: "#4B2E83", borderRadius: "16px" }
                              : { borderColor: "#E5E0F4", borderRadius: "16px" }
                          }
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                        {message.timestamp && (
                          <span className="text-[11px] text-gray-400 px-2">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                        )}
                      </div>
                    </div>

                    {message.buttons && message.buttons.length > 0 && (
                      <div className="mt-3 ml-11 space-y-2">
                        {message.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            onClick={() => handleButtonClick(button.action)}
                            className="w-full text-left px-4 py-2.5 bg-white hover:text-white border text-gray-700 text-sm font-medium transition-all touch-target"
                            style={{
                              borderColor: "#4B2E83",
                              borderRadius: "9999px",
                              borderWidth: "1px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#4B2E83"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "white"
                            }}
                          >
                            {button.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2.5 justify-start">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                      style={{ backgroundColor: "#4B2E83" }}
                    >
                      M
                    </div>
                    <div
                      className="bg-white border px-4 py-3 flex items-center gap-1"
                      style={{ borderColor: "#E5E0F4", borderRadius: "16px" }}
                    >
                      <span className="text-xs text-gray-500 mr-2">Miles Assistant is typing</span>
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ backgroundColor: "#4B2E83", animationDelay: "0ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ backgroundColor: "#4B2E83", animationDelay: "150ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-bounce"
                          style={{ backgroundColor: "#4B2E83", animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {persona && messages.length > 1 && (
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                <p className="text-gray-600 text-xs font-semibold mb-2.5">Quick Actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {getQuickQuestions().map((question, index) => {
                    const IconComponent = question.icon
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question.text)}
                        className="text-left p-2.5 bg-white hover:border-2 border text-gray-700 text-xs flex items-start gap-2 transition-all touch-target"
                        style={{
                          borderColor: "#E5E0F4",
                          borderRadius: "12px",
                          borderWidth: "1px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#4B2E83"
                          e.currentTarget.style.borderWidth = "2px"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#E5E0F4"
                          e.currentTarget.style.borderWidth = "1px"
                        }}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4B2E83" }} />
                        <span className="font-medium leading-tight">{question.text}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="px-4 py-4 border-t border-gray-100 bg-white">
              <div className="flex gap-2.5 items-end">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question or choose an option..."
                  className="flex-1 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm px-4 py-3"
                  style={{ borderRadius: "12px", minHeight: "44px" }}
                  disabled={isLoading}
                  aria-label="Type your message"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="text-white font-semibold px-4 py-3 shadow-sm disabled:opacity-50 touch-target"
                  style={{
                    backgroundColor: "#4B2E83",
                    borderRadius: "12px",
                    minHeight: "44px",
                    minWidth: "44px",
                  }}
                  aria-label="Send message"
                >
                  <Icons.send className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  )
}
