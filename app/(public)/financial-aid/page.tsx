import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { financialAidArticles } from "@/lib/data/financial-aid"

export default function FinancialAidPage() {
  const fafsaArticle = financialAidArticles.find((a) => a.type === "fafsa")
  const otherArticles = financialAidArticles.filter((a) => a.type !== "fafsa")

  return (
    <main>
      <PageHeader
        title="Financial Aid"
        subtitle="97% of Miles College students receive financial assistance. We are here to help you afford your education."
        breadcrumbs={[{ label: "Financial Aid" }]}
      />
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {fafsaArticle && (
            <Card className="p-6 md:p-8 mb-10 border-secondary/30 bg-secondary/5">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icons.fileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-foreground mb-2">{fafsaArticle.title}</h2>
                  <p className="text-muted-foreground">{fafsaArticle.content}</p>
                </div>
              </div>
              {fafsaArticle.steps && (
                <ol className="flex flex-col gap-4 mb-6">
                  {fafsaArticle.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-secondary text-primary font-black text-sm flex items-center justify-center flex-shrink-0">{i + 1}</div>
                      <span className="text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-secondary text-primary font-bold hover:bg-yellow-400" asChild>
                  <a href="https://studentaid.gov" target="_blank" rel="noopener noreferrer">
                    Start Your FAFSA <Icons.externalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" className="font-bold" asChild>
                  <Link href="/scholarships">View Scholarships</Link>
                </Button>
              </div>
            </Card>
          )}

          <h2 className="text-2xl font-black text-foreground mb-6">Types of Financial Aid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <Card key={article.id} className="p-6 bg-card border-border">
                <h3 className="text-lg font-black mb-2 text-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
