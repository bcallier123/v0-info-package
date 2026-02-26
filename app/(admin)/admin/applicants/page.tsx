"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Icons } from "@/components/icons"
import { applicants } from "@/lib/data/applicants"

const statusOptions = ["all", "inquiry", "applied", "under-review", "accepted", "enrolled", "denied"]

export default function ApplicantsPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = applicants.filter((a) => {
    const matchesSearch = `${a.firstName} ${a.lastName} ${a.email} ${a.intendedMajor}`.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || a.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Applicants</h1>
        <p className="text-muted-foreground">Manage and review student applications</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search applicants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all border ${
                statusFilter === s
                  ? "bg-secondary text-primary border-secondary"
                  : "bg-card text-foreground border-border hover:border-secondary/40"
              }`}
            >
              {s.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden bg-card border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground font-bold">Name</TableHead>
              <TableHead className="text-foreground font-bold hidden md:table-cell">Major</TableHead>
              <TableHead className="text-foreground font-bold hidden lg:table-cell">Type</TableHead>
              <TableHead className="text-foreground font-bold">GPA</TableHead>
              <TableHead className="text-foreground font-bold">Status</TableHead>
              <TableHead className="text-foreground font-bold hidden lg:table-cell">Docs</TableHead>
              <TableHead className="text-foreground font-bold text-right">Applied</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((a) => {
              const missingDocs = a.documents.filter((d) => d.status === "missing").length
              const pendingDocs = a.documents.filter((d) => d.status === "pending").length
              return (
                <TableRow key={a.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell>
                    <Link href={`/admin/applicants/${a.id}`} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {a.firstName[0]}{a.lastName[0]}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{a.firstName} {a.lastName}</p>
                        <p className="text-xs text-muted-foreground md:hidden">{a.intendedMajor}</p>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm hidden md:table-cell">{a.intendedMajor}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant="outline" className="text-xs capitalize font-medium">{a.studentType}</Badge>
                  </TableCell>
                  <TableCell className="font-bold text-foreground">{a.gpa.toFixed(1)}</TableCell>
                  <TableCell>
                    <Badge className={`text-xs font-bold capitalize ${
                      a.status === "enrolled" ? "bg-green-500/10 text-green-600 border-green-500/30" :
                      a.status === "accepted" ? "bg-blue-500/10 text-blue-600 border-blue-500/30" :
                      a.status === "under-review" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/30" :
                      a.status === "applied" ? "bg-secondary/10 text-secondary border-secondary/30" :
                      a.status === "denied" ? "bg-red-500/10 text-red-600 border-red-500/30" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {a.status.replace("-", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {missingDocs > 0 && <Badge className="bg-red-500/10 text-red-600 border-red-500/30 text-xs mr-1">{missingDocs} missing</Badge>}
                    {pendingDocs > 0 && <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/30 text-xs">{pendingDocs} pending</Badge>}
                    {missingDocs === 0 && pendingDocs === 0 && <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs">Complete</Badge>}
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{a.appliedDate}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">No applicants match your search.</div>
        )}
      </Card>
    </div>
  )
}
