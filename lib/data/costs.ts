import type { CostItem } from "@/lib/types"

export const costs: CostItem[] = [
  { id: "c1", category: "tuition", item: "Tuition (12-18 credit hours)", amount: 5882, per: "semester", notes: "Full-time student rate. $490 per credit hour over 18 or under 12 hours." },
  { id: "c2", category: "fees", item: "Comprehensive Fee (12-18 hrs)", amount: 750, per: "semester" },
  { id: "c3", category: "fees", item: "Technology Fee", amount: 130, per: "semester" },
  { id: "c4", category: "fees", item: "Health Insurance", amount: 70, per: "semester" },
  { id: "c5", category: "fees", item: "Dorm Usage Fee", amount: 125, per: "semester", notes: "On-campus students only" },
  { id: "c6", category: "fees", item: "Late Registration Fee", amount: 100, per: "semester", notes: "If applicable" },
  { id: "c7", category: "fees", item: "Science Lab Fee", amount: 60, per: "one-time", notes: "Per class, if applicable" },
  { id: "c8", category: "fees", item: "Music Lab Fee", amount: 100, per: "one-time", notes: "Per class, if applicable" },
  { id: "c9", category: "fees", item: "Online Course Fee", amount: 60, per: "semester", notes: "Per online class" },
  { id: "c10", category: "books", item: "Book Fee", amount: 200, per: "semester" },
  { id: "c11", category: "room", item: "Murchison Hall", amount: 1750, per: "semester", notes: "Traditional residence hall" },
  { id: "c12", category: "room", item: "Bass Hall / Stewart-Reddick", amount: 2300, per: "semester", notes: "Modern amenities and community living" },
  { id: "c13", category: "room", item: "Snorton Hall", amount: 2400, per: "semester", notes: "Premium housing with enhanced facilities" },
  { id: "c14", category: "board", item: "Meal Plan", amount: 2033, per: "semester" },
]

export function getCostsByCategory(category: CostItem["category"]): CostItem[] {
  return costs.filter((c) => c.category === category)
}

export function getTotalSemesterCost(): number {
  // Off-campus full-time total (no room/board/dorm)
  const tuition = costs.find((c) => c.id === "c1")?.amount ?? 0
  const compFee = costs.find((c) => c.id === "c2")?.amount ?? 0
  const techFee = costs.find((c) => c.id === "c3")?.amount ?? 0
  const insurance = costs.find((c) => c.id === "c4")?.amount ?? 0
  const books = costs.find((c) => c.id === "c10")?.amount ?? 0
  return (tuition + compFee + techFee + insurance + books) * 2
}

export const housingTotals = {
  offCampus: 14064,
  murchison: 21880,
  bassHallStewartReddick: 22980,
  snorton: 23180,
}
