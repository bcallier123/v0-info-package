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
        subtitle="97% of Miles College students receive financial assistance. You may be eligible for grants, work-study, loans, and scholarships."
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

          <Card className="p-6 md:p-8 mb-10 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                <Icons.info className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-foreground mb-2">{"What Is \"Financial Need\"?"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Financial need is the gap between the cost of the college you want to attend and your family&apos;s financial situation. After you submit your FAFSA, the government calculates your Expected Family Contribution (EFC) based on your family&apos;s income, number of children in the family, and other factors. Grants and other types of aid are awarded based on the gap between your EFC and the cost of attendance at Miles College.
                </p>
              </div>
            </div>
          </Card>

          <h2 className="text-2xl font-black text-foreground mb-6">Types of Financial Aid</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {otherArticles.map((article) => (
              <Card key={article.id} className="p-6 bg-card border-border">
                <h3 className="text-lg font-black mb-2 text-foreground">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.content}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 bg-muted/30 border-border">
            <h2 className="text-2xl font-black text-foreground mb-4">Student Freedom Initiative</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Miles College participates in the Student Freedom Initiative, which provides an income-contingent alternative to Parent PLUS and private student loans for juniors and seniors majoring in STEM fields. Learn more about how this program can reduce your student debt burden.
            </p>
            <Button variant="outline" className="font-bold" asChild>
              <a href="https://studentfreedominitiative.org" target="_blank" rel="noopener noreferrer">
                Learn About the Student Freedom Initiative <Icons.externalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  )
}
