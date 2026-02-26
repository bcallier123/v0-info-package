import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Icons } from "@/components/icons"
import { costs } from "@/lib/data/costs"

export default function CostsPage() {
  const grouped = {
    tuition: costs.filter((c) => c.category === "tuition"),
    fees: costs.filter((c) => c.category === "fees"),
    room: costs.filter((c) => c.category === "room"),
    board: costs.filter((c) => c.category === "board"),
    other: costs.filter((c) => c.category === "books" || c.category === "personal"),
  }

  const total = costs.reduce((sum, c) => sum + (c.per === "semester" ? c.amount * 2 : c.amount), 0)

  return (
    <main>
      <PageHeader
        title="Tuition & Costs"
        subtitle="Miles College is committed to making education affordable. 97% of students receive financial aid."
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
                <p className="text-sm font-bold text-secondary uppercase tracking-wider">Estimated Annual Cost</p>
                <p className="text-3xl font-black text-foreground">${total.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Before financial aid and scholarships</p>
              </div>
            </div>
          </Card>

          {Object.entries(grouped).map(([key, items]) => {
            if (items.length === 0) return null
            const labels: Record<string, string> = { tuition: "Tuition", fees: "Fees", room: "Room", board: "Board", other: "Books & Personal" }
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
                        <TableCell className="text-right text-muted-foreground capitalize">{item.per}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
