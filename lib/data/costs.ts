import type { CostItem } from "@/lib/types"

export const costs: CostItem[] = [
  { id: "c1", category: "tuition", item: "Tuition (12-18 credit hours)", amount: 6407, per: "semester", notes: "Full-time student rate" },
  { id: "c2", category: "fees", item: "Student Activity Fee", amount: 275, per: "semester" },
  { id: "c3", category: "fees", item: "Technology Fee", amount: 350, per: "semester" },
  { id: "c4", category: "fees", item: "Health & Wellness Fee", amount: 150, per: "semester" },
  { id: "c5", category: "fees", item: "Library Fee", amount: 100, per: "semester" },
  { id: "c6", category: "fees", item: "Registration Fee", amount: 50, per: "semester" },
  { id: "c7", category: "room", item: "Standard Double Room", amount: 3200, per: "semester" },
  { id: "c8", category: "room", item: "Single Room (limited)", amount: 4000, per: "semester" },
  { id: "c9", category: "board", item: "19-Meal Plan (recommended)", amount: 2500, per: "semester" },
  { id: "c10", category: "board", item: "14-Meal Plan", amount: 2200, per: "semester" },
  { id: "c11", category: "board", item: "10-Meal Plan", amount: 1800, per: "semester" },
  { id: "c12", category: "books", item: "Books & Supplies (estimated)", amount: 600, per: "semester" },
  { id: "c13", category: "personal", item: "Personal Expenses (estimated)", amount: 1000, per: "semester" },
]

export function getCostsByCategory(category: CostItem["category"]): CostItem[] {
  return costs.filter((c) => c.category === category)
}

export function getTotalSemesterCost(): number {
  const tuition = costs.find((c) => c.id === "c1")?.amount ?? 0
  const fees = costs.filter((c) => c.category === "fees").reduce((sum, c) => sum + c.amount, 0)
  const room = costs.find((c) => c.id === "c7")?.amount ?? 0
  const board = costs.find((c) => c.id === "c9")?.amount ?? 0
  return tuition + fees + room + board
}
