"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Student Type", description: "Tell us about yourself" },
  { id: 2, title: "Personal Info", description: "Basic information" },
  { id: 3, title: "Academic", description: "Education background" },
  { id: 4, title: "Review", description: "Confirm & submit" },
]

const studentTypes = [
  { value: "freshman", label: "First-Year Freshman", description: "High school senior or recent graduate" },
  { value: "transfer", label: "Transfer Student", description: "Currently or previously at another college" },
  { value: "international", label: "International Student", description: "Applying from outside the U.S." },
  { value: "returning", label: "Returning Student", description: "Previously enrolled at Miles College" },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", highSchool: "", gpa: "" })

  return (
    <main>
      <PageHeader
        title="Apply to Miles College"
        subtitle="Your free application takes just 15 minutes. Start your journey to becoming a Golden Bear."
        breadcrumbs={[{ label: "Apply" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center text-center">
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center font-black text-sm transition-all",
                    currentStep >= step.id ? "bg-secondary text-primary" : "bg-muted text-muted-foreground"
                  )}>
                    {currentStep > step.id ? <Icons.check className="w-5 h-5" /> : step.id}
                  </div>
                  <span className="text-xs font-bold mt-2 text-foreground hidden sm:block">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={cn(
                    "h-0.5 flex-1 mx-2",
                    currentStep > step.id ? "bg-secondary" : "bg-border"
                  )} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-2 text-foreground">What type of student are you?</h2>
              <p className="text-muted-foreground mb-6">Select the option that best describes you.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {studentTypes.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setSelectedType(t.value)}
                    className={cn(
                      "p-5 border-2 text-left transition-all",
                      selectedType === t.value
                        ? "border-secondary bg-secondary/10"
                        : "border-border hover:border-secondary/40"
                    )}
                  >
                    <p className="font-black text-foreground">{t.label}</p>
                    <p className="text-sm text-muted-foreground">{t.description}</p>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => setCurrentStep(2)}
                disabled={!selectedType}
                className="mt-6 bg-secondary text-primary font-bold hover:bg-yellow-400"
              >
                Continue <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-6 text-foreground">Personal Information</h2>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground font-bold text-sm mb-1.5 block">First Name</Label>
                    <Input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" />
                  </div>
                  <div>
                    <Label className="text-foreground font-bold text-sm mb-1.5 block">Last Name</Label>
                    <Input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <Label className="text-foreground font-bold text-sm mb-1.5 block">Email</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div>
                  <Label className="text-foreground font-bold text-sm mb-1.5 block">Phone</Label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(205) 555-0123" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setCurrentStep(1)} className="font-bold">Back</Button>
                <Button onClick={() => setCurrentStep(3)} className="bg-secondary text-primary font-bold hover:bg-yellow-400">
                  Continue <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-6 text-foreground">Academic Background</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <Label className="text-foreground font-bold text-sm mb-1.5 block">High School / Previous Institution</Label>
                  <Input value={form.highSchool} onChange={(e) => setForm({ ...form, highSchool: e.target.value })} placeholder="School name" />
                </div>
                <div>
                  <Label className="text-foreground font-bold text-sm mb-1.5 block">GPA</Label>
                  <Input value={form.gpa} onChange={(e) => setForm({ ...form, gpa: e.target.value })} placeholder="e.g. 3.5" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setCurrentStep(2)} className="font-bold">Back</Button>
                <Button onClick={() => setCurrentStep(4)} className="bg-secondary text-primary font-bold hover:bg-yellow-400">
                  Continue <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="p-6 md:p-8 bg-card border-border">
              <h2 className="text-xl font-black mb-4 text-foreground">Review Your Application</h2>
              <p className="text-muted-foreground mb-6">Please review your information before submitting.</p>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground font-semibold">Student Type</span>
                  <span className="text-sm font-bold text-foreground capitalize">{selectedType || "Not selected"}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground font-semibold">Name</span>
                  <span className="text-sm font-bold text-foreground">{form.firstName} {form.lastName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground font-semibold">Email</span>
                  <span className="text-sm font-bold text-foreground">{form.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground font-semibold">School</span>
                  <span className="text-sm font-bold text-foreground">{form.highSchool}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground font-semibold">GPA</span>
                  <span className="text-sm font-bold text-foreground">{form.gpa}</span>
                </div>
              </div>
              <div className="bg-muted/50 p-4 mb-6 text-sm text-muted-foreground">
                <p className="font-bold text-foreground mb-1">Note: This is a demo application form.</p>
                <p>In production, this would submit to the Miles College admissions system. To apply for real, please use the official application portal.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={() => setCurrentStep(3)} className="font-bold">Back</Button>
                <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
                  <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                    Apply on Official Portal <Icons.externalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}
