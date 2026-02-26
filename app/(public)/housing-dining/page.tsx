import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { housingOptions } from "@/lib/data/housing"

export default function HousingDiningPage() {
  const residenceHalls = housingOptions.filter((h) => h.type === "residence-hall")
  const mealPlans = housingOptions.filter((h) => h.type === "meal-plan")

  return (
    <main>
      <PageHeader
        title="Housing & Dining"
        subtitle="Experience the Golden Bear community with comfortable on-campus living and flexible meal options."
        breadcrumbs={[{ label: "Housing & Dining" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Residence Halls</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {residenceHalls.map((hall) => (
              <Card key={hall.id} className="p-6 bg-card border-border">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-black text-foreground">{hall.name}</h3>
                  {hall.gender && (
                    <Badge variant="outline" className="text-xs capitalize font-medium">{hall.gender}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{hall.description}</p>
                {hall.amenities && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hall.amenities.map((a) => (
                      <span key={a} className="text-xs bg-muted px-2 py-1 font-medium text-muted-foreground">{a}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-secondary font-black text-lg">{hall.cost}</span>
                  {hall.capacity && <span className="text-xs text-muted-foreground">Capacity: {hall.capacity}</span>}
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-black mb-6 text-foreground">Meal Plans</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className="p-6 bg-card border-border">
                <h3 className="text-lg font-black text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <p className="text-secondary font-black text-lg">{plan.cost}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 bg-secondary/10 border-secondary/30">
            <h3 className="text-xl font-black text-foreground mb-2">Ready to Secure Your Housing?</h3>
            <p className="text-muted-foreground mb-4">Submit your $200 housing deposit to guarantee your spot.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
                <a href="https://myexperience.miles.edu" target="_blank" rel="noopener noreferrer">
                  Reserve Housing <Icons.arrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="font-bold" asChild>
                <Link href="/visit">Schedule a Tour</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
