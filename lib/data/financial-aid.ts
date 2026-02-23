import type { FinancialAidArticle } from "@/lib/types"

export const financialAidArticles: FinancialAidArticle[] = [
  {
    id: "fa1",
    title: "FAFSA: Your First Step to Affordability",
    content: "The Free Application for Federal Student Aid (FAFSA) is the gateway to federal grants, loans, work-study, and many institutional scholarships. Filing early maximizes your aid opportunities. Miles College's school code is 001028.",
    type: "fafsa",
    steps: [
      "Create an FSA ID at studentaid.gov (student and one parent)",
      "Gather tax returns, W-2s, and financial documents",
      "Complete the FAFSA at studentaid.gov using school code 001028",
      "Review your Student Aid Report (SAR) for accuracy",
      "Accept your financial aid award from Miles College",
      "Complete entrance counseling and sign your Master Promissory Note if borrowing loans",
    ],
  },
  {
    id: "fa2",
    title: "Federal & State Grants",
    content: "Grants are free money that does not need to be repaid. Miles College students may qualify for Federal Pell Grants (up to $7,395/year), Federal Supplemental Educational Opportunity Grants (FSEOG), and Alabama Student Assistance Program grants.",
    type: "grants",
  },
  {
    id: "fa3",
    title: "Federal Student Loans",
    content: "Federal Direct Loans offer lower interest rates and more flexible repayment options than private loans. Subsidized loans are need-based and the government pays interest while you're in school. Unsubsidized loans are available regardless of need.",
    type: "loans",
  },
  {
    id: "fa4",
    title: "Federal Work-Study Program",
    content: "The Federal Work-Study Program provides part-time employment for students with financial need, allowing you to earn money while gaining valuable work experience. Positions are available both on-campus and with approved off-campus employers.",
    type: "work-study",
  },
  {
    id: "fa5",
    title: "Making Miles College Affordable",
    content: "With 97% of students receiving scholarships or financial aid, Miles College is committed to making a quality education accessible. Between federal aid, institutional scholarships, and state grants, the average student pays significantly less than the published cost of attendance.",
    type: "overview",
  },
]
