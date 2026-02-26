"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in production this would authenticate against the database
    if (email && password) {
      router.push("/portal")
    }
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center py-12 bg-gradient-to-br from-[#1a0a2e] via-primary to-[#2d1b4e] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10 max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/images/design-mode/IMG_1498.PNG.png"
              alt="Miles College"
              width={200}
              height={60}
              className="h-14 w-auto mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-black text-primary-foreground">Student Portal</h1>
          <p className="text-primary-foreground/60 mt-1">Sign in to access your dashboard</p>
        </div>

        <Card className="p-6 md:p-8 bg-card/95 backdrop-blur-xl border-border">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email" className="text-foreground font-bold text-sm mb-1.5 block">Email or Student ID</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@miles.edu"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-foreground font-bold text-sm mb-1.5 block">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-secondary text-primary font-bold hover:bg-yellow-400 mt-2">
              Sign In <Icons.arrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Demo login: use any email and password to access the portal preview.
            </p>
          </div>
        </Card>

        <div className="text-center mt-6 flex flex-col gap-2">
          <Link href="/apply" className="text-secondary hover:underline text-sm font-bold">
            New Student? Apply Now
          </Link>
          <Link href="/" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
