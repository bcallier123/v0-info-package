import type { Deadline } from "@/lib/types"

export const deadlines: Deadline[] = [
  {
    id: "d1",
    title: "FAFSA Opens",
    date: "October 1, 2025",
    studentType: "all",
    description: "Submit your Free Application for Federal Student Aid (FAFSA) as early as possible. Use school code 001028.",
    priority: "high",
  },
  {
    id: "d2",
    title: "Priority Scholarship Deadline",
    date: "March 1, 2026",
    studentType: "freshman",
    description: "Apply by this date for maximum scholarship consideration, including the Presidential Scholarship.",
    priority: "high",
  },
  {
    id: "d3",
    title: "Fall Application Priority Deadline",
    date: "May 1, 2026",
    studentType: "freshman",
    description: "Submit your application by this date for priority consideration for fall enrollment, housing, and financial aid.",
    priority: "high",
  },
  {
    id: "d4",
    title: "Transfer Application Deadline",
    date: "June 1, 2026",
    studentType: "transfer",
    description: "Transfer students should submit all application materials and official transcripts by this date.",
    priority: "medium",
  },
  {
    id: "d5",
    title: "Housing Deposit Due",
    date: "June 15, 2026",
    studentType: "all",
    description: "Secure your on-campus housing assignment by submitting your $200 housing deposit.",
    priority: "medium",
  },
  {
    id: "d6",
    title: "New Student Orientation",
    date: "August 1, 2026",
    studentType: "freshman",
    description: "Mandatory orientation for all new freshmen. Register online through MyExperience portal.",
    priority: "high",
  },
  {
    id: "d7",
    title: "International Student Deadline",
    date: "April 15, 2026",
    studentType: "international",
    description: "International students must submit all application materials including I-20 documentation by this date.",
    priority: "high",
  },
  {
    id: "d8",
    title: "Spring Enrollment Deadline",
    date: "November 1, 2025",
    studentType: "all",
    description: "Apply by this date for spring semester enrollment consideration.",
    priority: "medium",
  },
]

export function getDeadlinesByType(type: Deadline["studentType"]): Deadline[] {
  return deadlines.filter((d) => d.studentType === type || d.studentType === "all")
}
