import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { campusLifeItems } from "@/lib/data/campus-life"
import { events } from "@/lib/data/events"

export default function CampusLifePage() {
  const organizations = campusLifeItems.filter((c) => c.category === "organization")
  const activities = campusLifeItems.filter((c) => c.category === "activity" || c.category === "service")
  const upcomingEvents = events.slice(0, 4)

  return (
    <main>
      <PageHeader
        title="Campus Life"
        subtitle="From student organizations to campus events, discover what makes the Golden Bear experience special."
        breadcrumbs={[{ label: "Campus Life" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Student Organizations</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {organizations.map((org) => (
              <Card key={org.id} className="p-5 bg-card border-border">
                <h3 className="font-black text-foreground mb-1">{org.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{org.description}</p>
                {org.meetingTime && (
                  <span className="text-xs text-secondary font-bold">{org.meetingTime}</span>
                )}
              </Card>
            ))}
          </div>

          {activities.length > 0 && (
            <>
              <h2 className="text-2xl font-black mb-6 text-foreground">Activities & Services</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {activities.map((item) => (
                  <Card key={item.id} className="p-5 bg-card border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-black text-foreground">{item.name}</h3>
                      <Badge variant="outline" className="text-xs capitalize font-medium">{item.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </>
          )}

          <h2 className="text-2xl font-black mb-6 text-foreground">Upcoming Events</h2>
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-5 bg-card border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-16 h-16 bg-secondary/10 flex flex-col items-center justify-center flex-shrink-0">
                    <Icons.calendar className="w-5 h-5 text-secondary mb-1" />
                    <span className="text-xs font-bold text-secondary">{event.date.split(",")[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Icons.calendar className="w-3 h-3" /> {event.time}</span>
                      <span className="flex items-center gap-1"><Icons.mapPin className="w-3 h-3" /> {event.location}</span>
                    </div>
                  </div>
                  <Badge className="self-start bg-secondary/10 text-secondary border-secondary/30 font-bold text-xs uppercase">{event.category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
