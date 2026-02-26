import { notFound } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { getApplicantById, applicants } from "@/lib/data/applicants"

export function generateStaticParams() {
  return applicants.map((a) => ({ id: a.id }))
}

export default async function ApplicantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const applicant = getApplicantById(id)
  if (!applicant) notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="font-bold" asChild>
          <Link href="/admin/applicants">
            <Icons.arrowRight className="w-4 h-4 mr-2 rotate-180" /> Back
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-black text-foreground">{applicant.firstName} {applicant.lastName}</h1>
          <p className="text-muted-foreground text-sm">{applicant.email}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <Card className="p-6 bg-card border-border">
            <h2 className="text-lg font-black mb-4 text-foreground">Applicant Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Student Type</p>
                <p className="font-bold text-foreground capitalize">{applicant.studentType}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Status</p>
                <Badge className={`text-xs font-bold capitalize ${
                  applicant.status === "enrolled" ? "bg-green-500/10 text-green-600 border-green-500/30" :
                  applicant.status === "accepted" ? "bg-blue-500/10 text-blue-600 border-blue-500/30" :
                  applicant.status === "under-review" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" :
                  applicant.status === "denied" ? "bg-red-500/10 text-red-600 border-red-500/30" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {applicant.status.replace("-", " ")}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Intended Major</p>
                <p className="font-bold text-foreground">{applicant.intendedMajor}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">GPA</p>
                <p className="font-bold text-foreground">{applicant.gpa.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Phone</p>
                <p className="font-bold text-foreground">{applicant.phone}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Applied</p>
                <p className="font-bold text-foreground">{applicant.appliedDate}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h2 className="text-lg font-black mb-4 text-foreground">Documents</h2>
            <div className="flex flex-col gap-3">
              {applicant.documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <Icons.fileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">{doc.name}</span>
                  </div>
                  <Badge className={`text-xs font-bold capitalize ${
                    doc.status === "received" ? "bg-green-500/10 text-green-600 border-green-500/30" :
                    doc.status === "pending" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" :
                    "bg-red-500/10 text-red-600 border-red-500/30"
                  }`}>
                    {doc.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-secondary/10 border-secondary/30">
            <h3 className="font-black text-foreground mb-3">Actions</h3>
            <p className="text-sm text-muted-foreground mb-4">Admin actions will be available in Phase 2 with database integration.</p>
            <div className="flex flex-col gap-2">
              <Button className="w-full bg-secondary text-primary font-bold hover:bg-yellow-400" disabled>Accept</Button>
              <Button variant="outline" className="w-full font-bold" disabled>Request Documents</Button>
              <Button variant="outline" className="w-full font-bold text-destructive border-destructive/30 hover:bg-destructive/10" disabled>Deny</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
