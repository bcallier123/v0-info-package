import { NextResponse } from "next/server"

const DGX_API_URL = process.env.NEXT_PUBLIC_MILES_API_URL || "http://192.168.1.25:8000"
const DGX_MODEL = process.env.DGX_MODEL || "llama3"

const KNOWLEDGE_BASE = {
  apply: {
    freshman: `Here's how to apply to Miles College as a freshman:

**Step 1:** Apply online at myexperience.miles.edu
**Step 2:** Send your high school transcript (counselor sends electronically or mail to Admissions)
**Step 3:** Complete FAFSA at studentaid.gov (Miles School Code: 001028)
**Step 4:** Take placement test if no ACT/SAT scores
**Step 5:** Get your Miles email & student ID
**Step 6:** Pay orientation/housing fees and apply for housing

Need help with any of these steps?`,
    transfer: `Welcome, transfer student! Here's your application process:

**Step 1:** Apply online at myexperience.miles.edu
**Step 2:** Request official transcripts from ALL previous colleges
**Step 3:** Complete FAFSA at studentaid.gov (Code: 001028)
**Step 4:** Submit final high school transcript if you have less than 24 college credits
**Step 5:** Get your Miles email & student ID
**Step 6:** Pay orientation/housing fees and apply for housing

Questions about credit transfer?`,
  },
  transcript: {
    highschool: `**High School Transcript:**
• Your counselor should send it electronically to Miles College Admissions
• Or mail to: Miles College, Office of Admissions, 5500 Myron Massey Blvd, Fairfield, AL 35064
• Use Parchment for electronic ordering if available at your school
• Must be an official transcript with school seal`,
    college: `**College Transcript:**
• Request official transcripts from ALL colleges attended
• Send directly to Miles College Admissions Office
• Electronic transcripts preferred
• Allow 7-10 business days for processing
• Include transcript from any dual enrollment or AP credits`,
  },
  fafsa: `**FAFSA Information:**

1. Complete at studentaid.gov
2. Miles College School Code: **001028** (Important!)
3. You'll need:
   • Social Security Number
   • Driver's License (if you have one)
   • Federal tax information
   • Records of untaxed income

**For Parents:** FAFSA shows what federal aid your student qualifies for. Complete it ASAP after October 1st for best financial aid packages.

**Priority Deadline:** File by March 1st for best consideration

Need help? Contact our Financial Aid office at (205) 929-1665`,
  housing: `**Housing at Miles College:**

1. Apply for housing through your student portal (OneLogin)
2. Pay housing deposit: $300 (required to reserve room)
3. Complete housing application and roommate preferences
4. Submit shot records and medical forms

**Housing Options:**
• Traditional residence halls
• Suite-style living
• All include meal plans

**Move-In:** Typically one week before classes start. You'll receive specific dates after acceptance.

Questions about dorms or what to bring?`,
  placementTest: `**Placement Test Information:**

If you don't have ACT or SAT scores, you'll take the Miles College Placement Test to help us place you in the right English and Math courses.

**Contact:** Mrs. Underwood
**Phone:** (205) 929-1000 (ask for Testing Center)

**What to expect:**
• Reading comprehension
• Math skills assessment
• Essay writing
• Takes about 2-3 hours

**Prep:** Review basic algebra and grammar. Get plenty of rest the night before!

Ready to schedule yours?`,
  costs: `**Miles College Tuition & Costs:**

**Tuition:** $9,500 per semester ($19,000 per year for full-time)
**Room & Board:** Varies by housing option ($4,000-$5,500 per semester)
**Fees:** 
• Orientation Fee: $150 (one-time, required for new students)
• Housing Deposit: $300 (if living on campus)

**Financial Aid Available:**
• Federal Pell Grants
• Alabama Student Grant Program
• Miles College Scholarships
• Work-Study Programs

Most students receive financial aid! Complete your FAFSA (Code: 001028) to see what you qualify for.`,
  programs: `**Miles College Programs:**

We offer 30+ degree programs across:

**Business:** Accounting, Business Administration, Marketing
**Education:** Elementary Education, Secondary Education
**Humanities:** English, Music, Communications
**Natural Sciences:** Biology, Chemistry, Math, Computer Science
**Social Sciences:** Criminal Justice, History, Political Science, Psychology, Social Work

**Popular Programs:**
• Business Administration
• Criminal Justice
• Biology (Pre-Med track)
• Education
• Social Work

**Special Features:**
• 17:1 student-faculty ratio
• Honors Program
• Study abroad opportunities

Want to know more about a specific major?`,
}

const getSystemPrompt = (persona: string | null) => {
  const basePrompt = `You are an AI enrollment coach for Miles College, a prestigious HBCU in Birmingham, Alabama established in 1898.

**Key Facts:**
- The ONLY 4-year HBCU in Birmingham
- 30+ degree programs across Business, Education, Humanities, Natural Sciences, and Social Sciences
- 17:1 student-faculty ratio (personalized attention)
- NCAA Division II athletics (Golden Bears / Purple Bears)
- 126+ years of excellence
- Tuition: $9,500/semester ($19,000/year for full-time)
- Application portal: myexperience.miles.edu
- School Code: 001028
- Contact: Baily Callier, Admissions Recruiter - bcallier@miles.edu or (334) 294-7984`

  const personaContext = {
    freshman:
      "\n\nYou're helping a prospective freshman. Focus on the freshman application process, campus life, and first-year experience.",
    transfer:
      "\n\nYou're helping a transfer student. Focus on credit transfer, transcript requirements, and transition support.",
    parent:
      "\n\nYou're helping a parent. Focus on safety, cost, support systems, and ways to stay involved in their student's education.",
    counselor:
      "\n\nYou're helping a high school counselor. Focus on group visits, transcript processes, admission events, and recruiter contacts.",
    current:
      "\n\nYou're helping a current Miles College student. Focus on campus resources, academic support, and student services.",
  }

  return (
    basePrompt +
    ((persona && personaContext[persona as keyof typeof personaContext]) || "") +
    "\n\nBe friendly, helpful, and enthusiastic. Provide accurate information and encourage action (apply, contact admissions, schedule visits)."
  )
}

function detectIntent(message: string): string | null {
  const intents = {
    apply: ["apply", "application", "how to apply", "start application", "enroll"],
    transcript: ["transcript", "send grades", "high school transcript", "college transcript"],
    fafsa: ["fafsa", "financial aid", "money", "scholarships", "grants", "cost"],
    housing: ["housing", "dorms", "residence hall", "move in", "roommate"],
    placementTest: ["placement test", "no act", "no sat", "test scores"],
    programs: ["programs", "majors", "degrees", "what can i study"],
    costs: ["how much", "tuition", "price", "afford"],
    status: ["application status", "am i accepted", "did i get in", "acceptance"],
  }

  const lowerMessage = message.toLowerCase()

  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return intent
    }
  }

  return null
}

function getRuleBasedResponse(
  intent: string,
  persona: string | null,
): { message: string; buttons?: Array<{ text: string; action: string }>; captureLeadRequest?: boolean } {
  const responses: Record<string, any> = {
    apply: {
      message: KNOWLEDGE_BASE.apply[persona === "transfer" ? "transfer" : "freshman"],
      buttons: [
        { text: "Start My Application", action: "https://myexperience.miles.edu" },
        { text: "How do I send my transcript?", action: "transcript" },
        { text: "Talk to a recruiter", action: "contact" },
      ],
      captureLeadRequest: true,
    },
    transcript: {
      message: persona === "transfer" ? KNOWLEDGE_BASE.transcript.college : KNOWLEDGE_BASE.transcript.highschool,
      buttons: [
        { text: "Got it! What's next?", action: "apply" },
        { text: "I need more help", action: "contact" },
      ],
    },
    fafsa: {
      message: KNOWLEDGE_BASE.fafsa,
      buttons: [
        { text: "Start FAFSA at studentaid.gov", action: "https://studentaid.gov" },
        { text: "What scholarships are available?", action: "scholarships" },
        { text: "Talk to Financial Aid", action: "contact" },
      ],
    },
    housing: {
      message: KNOWLEDGE_BASE.housing,
      buttons: [
        { text: "What should I bring?", action: "packing" },
        { text: "Tell me about meal plans", action: "meals" },
        { text: "Contact Housing", action: "contact" },
      ],
    },
    placementTest: {
      message: KNOWLEDGE_BASE.placementTest,
      buttons: [
        { text: "Schedule my test", action: "contact" },
        { text: "What should I study?", action: "test-prep" },
      ],
    },
    programs: {
      message: KNOWLEDGE_BASE.programs,
      buttons: [
        { text: "Tell me about Business", action: "business" },
        { text: "Tell me about Sciences", action: "sciences" },
        { text: "Tell me about Education", action: "education" },
      ],
    },
    costs: {
      message: KNOWLEDGE_BASE.costs,
      buttons: [
        { text: "How do I apply for aid?", action: "fafsa" },
        { text: "What scholarships exist?", action: "scholarships" },
      ],
      captureLeadRequest: true,
    },
    status: {
      message: `I can't access private application status information, but I can help you get connected!

**To check your status:**
1. Log in to myexperience.miles.edu
2. Or contact Admissions directly:
   • Baily Callier: (334) 294-7984
   • Email: bcallier@miles.edu

Would you like me to have someone reach out to you?`,
      captureLeadRequest: true,
    },
  }

  return responses[intent] || { message: "" }
}

export async function POST(req: Request) {
  try {
    const { message, persona, leadData, conversationHistory } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    const intent = detectIntent(message)

    if (intent) {
      const ruleResponse = getRuleBasedResponse(intent, persona)
      if (ruleResponse.message) {
        return NextResponse.json(ruleResponse)
      }
    }

    const systemPrompt = getSystemPrompt(persona)

    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []).map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ]

    const response = await fetch(`${DGX_API_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: DGX_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error(`DGX API error: ${response.status}`)
    }

    const data = await response.json()
    const assistantMessage =
      data.choices?.[0]?.message?.content || "I'm having trouble responding right now. Please try again."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json(
      {
        error: "Failed to get response from AI",
        message:
          "I'm having trouble connecting. Please contact Baily Callier at (334) 294-7984 or bcallier@miles.edu for immediate assistance.",
      },
      { status: 500 },
    )
  }
}
