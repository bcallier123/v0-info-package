import type { Applicant } from "@/lib/types"

export const applicants: Applicant[] = [
  {
    id: "app1", firstName: "Jaylen", lastName: "Washington", email: "jwashington@email.com", phone: "(205) 555-0101",
    studentType: "freshman", status: "accepted", gpa: 3.8, intendedMajor: "Biology",
    appliedDate: "2025-11-15", lastActivity: "2026-01-20",
    documents: [{ name: "Transcript", status: "received" }, { name: "ACT Scores", status: "received" }, { name: "FAFSA", status: "received" }],
  },
  {
    id: "app2", firstName: "Amara", lastName: "Johnson", email: "ajohnson@email.com", phone: "(334) 555-0202",
    studentType: "freshman", status: "enrolled", gpa: 3.6, intendedMajor: "Business Administration",
    appliedDate: "2025-10-01", lastActivity: "2026-02-10",
    documents: [{ name: "Transcript", status: "received" }, { name: "SAT Scores", status: "received" }, { name: "FAFSA", status: "received" }],
  },
  {
    id: "app3", firstName: "Marcus", lastName: "Davis", email: "mdavis@email.com", phone: "(256) 555-0303",
    studentType: "transfer", status: "under-review", gpa: 3.2, intendedMajor: "Computer Science",
    appliedDate: "2026-01-05", lastActivity: "2026-02-15",
    documents: [{ name: "College Transcript", status: "received" }, { name: "High School Transcript", status: "received" }, { name: "FAFSA", status: "pending" }],
  },
  {
    id: "app4", firstName: "Destiny", lastName: "Williams", email: "dwilliams@email.com", phone: "(205) 555-0404",
    studentType: "freshman", status: "applied", gpa: 3.4, intendedMajor: "Criminal Justice",
    appliedDate: "2026-02-01", lastActivity: "2026-02-18",
    documents: [{ name: "Transcript", status: "received" }, { name: "ACT Scores", status: "pending" }, { name: "FAFSA", status: "missing" }],
  },
  {
    id: "app5", firstName: "Terrence", lastName: "Brown", email: "tbrown@email.com", phone: "(770) 555-0505",
    studentType: "freshman", status: "accepted", gpa: 3.9, intendedMajor: "Chemistry",
    appliedDate: "2025-12-10", lastActivity: "2026-01-30",
    documents: [{ name: "Transcript", status: "received" }, { name: "SAT Scores", status: "received" }, { name: "FAFSA", status: "received" }],
  },
  {
    id: "app6", firstName: "Aaliyah", lastName: "Carter", email: "acarter@email.com", phone: "(205) 555-0606",
    studentType: "freshman", status: "inquiry", gpa: 3.1, intendedMajor: "Education",
    appliedDate: "2026-02-20", lastActivity: "2026-02-22",
    documents: [{ name: "Transcript", status: "missing" }, { name: "ACT Scores", status: "missing" }, { name: "FAFSA", status: "missing" }],
  },
  {
    id: "app7", firstName: "Darius", lastName: "Mitchell", email: "dmitchell@email.com", phone: "(404) 555-0707",
    studentType: "transfer", status: "accepted", gpa: 3.5, intendedMajor: "Communications",
    appliedDate: "2025-12-20", lastActivity: "2026-02-05",
    documents: [{ name: "College Transcript", status: "received" }, { name: "FAFSA", status: "received" }],
  },
  {
    id: "app8", firstName: "Kiara", lastName: "Robinson", email: "krobinson@email.com", phone: "(205) 555-0808",
    studentType: "international", status: "under-review", gpa: 3.7, intendedMajor: "Mathematics",
    appliedDate: "2026-01-15", lastActivity: "2026-02-12",
    documents: [{ name: "Academic Records", status: "received" }, { name: "TOEFL Scores", status: "received" }, { name: "Financial Documentation", status: "pending" }],
  },
  {
    id: "app9", firstName: "Brandon", lastName: "Harris", email: "bharris@email.com", phone: "(256) 555-0909",
    studentType: "returning", status: "applied", gpa: 2.8, intendedMajor: "Social Work",
    appliedDate: "2026-02-10", lastActivity: "2026-02-19",
    documents: [{ name: "Readmission Form", status: "received" }, { name: "FAFSA", status: "pending" }],
  },
  {
    id: "app10", firstName: "Jasmine", lastName: "Thomas", email: "jthomas@email.com", phone: "(334) 555-1010",
    studentType: "freshman", status: "denied", gpa: 1.8, intendedMajor: "Political Science",
    appliedDate: "2025-11-01", lastActivity: "2026-01-05",
    documents: [{ name: "Transcript", status: "received" }, { name: "ACT Scores", status: "received" }, { name: "FAFSA", status: "received" }],
  },
]

export function getApplicantById(id: string): Applicant | undefined {
  return applicants.find((a) => a.id === id)
}

export function getApplicantsByStatus(status: Applicant["status"]): Applicant[] {
  return applicants.filter((a) => a.status === status)
}
