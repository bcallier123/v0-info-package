import { NextResponse } from "next/server"

const DGX_API_URL = process.env.NEXT_PUBLIC_MILES_API_URL || "http://192.168.1.25:8000"
const DGX_MODEL = process.env.DGX_MODEL || "llama3"

// System prompt for Miles College context
const SYSTEM_PROMPT = `You are an AI enrollment coach for Miles College, a prestigious HBCU in Birmingham, Alabama established in 1898. 

Key Facts:
- The ONLY 4-year HBCU in Birmingham
- 30+ degree programs across Business, Education, Humanities, Natural Sciences, and Social Sciences
- 17:1 student-faculty ratio (personalized attention)
- NCAA Division II athletics (Purple Bears)
- 126+ years of excellence
- Tuition: $9,500/semester ($19,000/year for full-time)
- Application portal: myexperience.miles.edu
- Contact: Baily Callier, Admissions Recruiter - bcallier@miles.edu or (334) 294-7984

Be friendly, helpful, and enthusiastic about Miles College. Provide accurate information and encourage prospective students to apply or contact admissions for more details.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    console.log("[v0] Sending message to DGX:", message)

    // Call DGX Spark API (OpenAI-compatible format)
    const response = await fetch(`${DGX_API_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: DGX_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      console.error("[v0] DGX API error:", response.status, response.statusText)
      throw new Error(`DGX API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] DGX response:", data)

    const assistantMessage =
      data.choices?.[0]?.message?.content || "I'm having trouble responding right now. Please try again."

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json(
      {
        error: "Failed to get response from AI",
        message: "I'm having trouble connecting. Please try again later or contact us directly.",
      },
      { status: 500 },
    )
  }
}
