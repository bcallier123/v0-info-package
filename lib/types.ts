// ── Core Content Types ──

export interface Program {
  slug: string
  name: string
  degreeType: "B.A." | "B.S." | "B.S.W." | "B.B.A."
  department: string
  description: string
  careerOutcomes: string[]
  highlights: string[]
  category: "business" | "education" | "humanities" | "sciences" | "social-sciences"
}

export interface Scholarship {
  id: string
  name: string
  amount: string
  eligibility: string[]
  deadline: string
  type: "merit" | "need-based" | "athletic" | "departmental" | "external"
  renewable: boolean
  description: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: "admissions" | "financial-aid" | "housing" | "academics" | "campus-life" | "general"
}

export interface Deadline {
  id: string
  title: string
  date: string
  studentType: "freshman" | "transfer" | "international" | "returning" | "all"
  description: string
  priority: "high" | "medium" | "low"
}

export interface DirectoryEntry {
  id: string
  name: string
  title: string
  department: string
  phone: string
  email: string
  office: string
  hours: string
}

export interface CostItem {
  id: string
  category: "tuition" | "fees" | "room" | "board" | "books" | "personal"
  item: string
  amount: number
  per: "semester" | "year" | "one-time"
  notes?: string
}

export interface FinancialAidArticle {
  id: string
  title: string
  content: string
  type: "fafsa" | "grants" | "loans" | "work-study" | "overview"
  steps?: string[]
}

export interface HousingOption {
  id: string
  name: string
  type: "residence-hall" | "meal-plan"
  description: string
  amenities?: string[]
  cost: string
  capacity?: string
  gender?: "male" | "female" | "coed"
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  category: "admissions" | "academic" | "social" | "athletic"
}

export interface CampusLifeItem {
  id: string
  name: string
  category: "organization" | "activity" | "service"
  description: string
  meetingTime?: string
}

export interface StudentPathway {
  id: string
  type: "freshman" | "transfer" | "international" | "returning" | "graduate"
  label: string
  description: string
  steps: PathwayStep[]
}

export interface PathwayStep {
  order: number
  title: string
  description: string
  deadline?: string
  link?: string
  completed?: boolean
}

// ── Admin Types ──

export interface Applicant {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  studentType: "freshman" | "transfer" | "international" | "returning"
  status: "inquiry" | "applied" | "under-review" | "accepted" | "enrolled" | "denied"
  gpa: number
  intendedMajor: string
  appliedDate: string
  lastActivity: string
  documents: { name: string; status: "received" | "pending" | "missing" }[]
}

export interface ContentItem {
  id: string
  type: "program" | "scholarship" | "faq" | "event" | "page"
  title: string
  status: "published" | "draft" | "archived"
  lastModified: string
  author: string
}

export interface AuditLogEntry {
  id: string
  action: string
  user: string
  timestamp: string
  details: string
}

// ── Search Types ──

export interface SearchResult {
  title: string
  description: string
  url: string
  category: "programs" | "scholarships" | "financial-aid" | "admissions" | "housing" | "campus-life" | "faq" | "directory" | "costs"
}
