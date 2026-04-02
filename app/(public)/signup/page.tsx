"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { signUp, user } = useAuth()

  if (user) {
    router.push(user.onboardingCompleted ? "/journey/dashboard" : "/journey/onboarding")
    return null
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setIsSubmitting(true)

    const result = await signUp({
      email,
      password,
      firstName,
      lastName,
    })

    if (result.success) {
      router.push("/journey/onboarding")
    } else {
      setError(result.error || "Sign up failed. Please try again.")
    }
    setIsSubmitting(false)
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
          <h1 className="text-3xl font-black text-primary-foreground">Create Account</h1>
          <p className="text-primary-foreground/60 mt-1">Start your Miles College journey today</p>
        </div>

        <Card className="p-6 md:p-8 bg-card/95 backdrop-blur-xl border-border">
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                <Icons.alertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName" className="text-foreground font-bold text-sm mb-1.5 block">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jordan"
                  required
                  autoComplete="given-name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-foreground font-bold text-sm mb-1.5 block">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Williams"
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-bold text-sm mb-1.5 block">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@miles.edu"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-foreground font-bold text-sm mb-1.5 block">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  autoComplete="new-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <Icons.eyeOff className="w-4 h-4" />
                  ) : (
                    <Icons.eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="text-foreground font-bold text-sm mb-1.5 block">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                autoComplete="new-password"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-secondary-foreground font-bold hover:bg-yellow-400 mt-2"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
              {!isSubmitting && <Icons.arrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-secondary font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
