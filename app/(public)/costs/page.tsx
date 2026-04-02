import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Icons } from "@/components/icons"
import { costs, housingTotals } from "@/lib/data/costs"

export default function CostsPage() {
  const grouped = {
    tuition: costs.filter((c) => c.category === "tuition"),
    fees: costs.filter((c) => c.category === "fees"),
    room: costs.filter((c) => c.category === "room"),
    board: costs.filter((c) => c.category === "board"),
    books: costs.filter((c) => c.category === "books"),
  }

  return (
    <main>
      <PageHeader
        title="Tuition & Costs"
        subtitle="Miles College is committed to making education affordable. 97% of students receive financial aid. Estimated costs for school year 2025-2026."
        breadcrumbs={[{ label: "Costs" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-6 mb-8 bg-secondary/10 border-secondary/30">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary flex items-center justify-center">
                <Icons.dollarSign className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary uppercase tracking-wider">Full-Time Tuition (Annual)</p>
                <p className="text-3xl font-black text-foreground">$11,764</p>
                <p className="text-xs text-muted-foreground">12-18 credit hours | $490 per credit hour over 18 or under 12 hours</p>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-black text-foreground mb-6">Estimated Annual Totals by Housing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <Card className="p-5 bg-card border-border">
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Off-Campus</div>
              <div className="text-3xl font-black text-primary">${housingTotals.offCampus.toLocaleString()}</div>
            </Card>
            <Card className="p-5 bg-card border-border">
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Murchison Hall</div>
              <div className="text-3xl font-black text-primary">${housingTotals.murchison.toLocaleString()}</div>
            </Card>
            <Card className="p-5 bg-card border-border">
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Bass Hall / Stewart-Reddick</div>
              <div className="text-3xl font-black text-primary">${housingTotals.bassHallStewartReddick.toLocaleString()}</div>
            </Card>
            <Card className="p-5 bg-card border-border">
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Snorton Hall</div>
              <div className="text-3xl font-black text-primary">${housingTotals.snorton.toLocaleString()}</div>
            </Card>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-6">Detailed Cost Breakdown</h2>
          {Object.entries(grouped).map(([key, items]) => {
            if (items.length === 0) return null
            const labels: Record<string, string> = { tuition: "Tuition", fees: "Mandatory Fees", room: "Residence Halls", board: "Meal Plan", books: "Books & Materials" }
            return (
              <Card key={key} className="mb-6 overflow-hidden bg-card border-border">
                <div className="px-6 py-4 bg-muted/50 border-b border-border">
                  <h3 className="font-black text-foreground uppercase tracking-wide">{labels[key]}</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-foreground font-bold">Item</TableHead>
                      <TableHead className="text-right text-foreground font-bold">Amount</TableHead>
                      <TableHead className="text-right text-foreground font-bold">Per</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="text-foreground">
                          {item.item}
                          {item.notes && <span className="block text-xs text-muted-foreground">{item.notes}</span>}
                        </TableCell>
                        <TableCell className="text-right font-bold text-foreground">${item.amount.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-muted-foreground capitalize">{item.per === "one-time" ? "per class" : item.per}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )
          })}

          <Card className="p-6 mt-8 bg-muted/30 border-border">
            <h3 className="font-black text-foreground mb-3">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>Comprehensive Fee for part-time students (1-11 hours): $375/semester</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>Credit hours over 18 or below 12 are charged at $490 per credit hour</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>All costs are estimated and subject to change by the Board of Trustees</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>97% of Miles College students receive financial aid to help cover these costs</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  )
}
