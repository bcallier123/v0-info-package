import type { FinancialAidArticle } from "@/lib/types"

export const financialAidArticles: FinancialAidArticle[] = [
  {
    id: "fa1",
    title: "FAFSA: Your First Step to Affordability",
    content: "The Free Application for Federal Student Aid (FAFSA) is the form your family must complete to be considered for most types of federal student aid, including Miles College scholarships. After you submit your FAFSA, the government calculates your Expected Family Contribution (EFC) based on your family's income, number of children, and other factors. Aid is awarded based on the gap between your EFC and the cost of attendance. Miles College's school code is 001028.",
    type: "fafsa",
    steps: [
      "Create an FSA ID at studentaid.gov (student and one parent)",
      "Gather tax returns, W-2s, and financial documents",
      "Complete the FAFSA at studentaid.gov using Miles College school code 001028",
      "Review your Student Aid Report (SAR) for accuracy",
      "Accept your financial aid award from Miles College",
      "Complete entrance counseling and sign your Master Promissory Note if borrowing loans",
    ],
  },
  {
    id: "fa2",
    title: "Federal & State Grants",
    content: "Grants are free money awarded by the federal and/or state government based on financial need. You never have to repay a grant as long as you stay enrolled during the semester for which you received it. Financial need is determined by the FAFSA and awarded automatically if eligible. Alabama residents may also be eligible for state grants. Available federal grants include: Federal Pell Grant, Federal Supplemental Educational Opportunity Grant (FSEOG, for students with fewer than 120 attempted credits), and the Federal TEACH Grant (for education students planning to teach in a high-need area).",
    type: "grants",
  },
  {
    id: "fa3",
    title: "Federal Student Loans",
    content: "If your grants and work-study don't cover your college costs, you can apply for a federal loan to close the gap. Most federal loans at Miles are subsidized by the government and have lower interest rates than private loans. Both students and parents can take out subsidized federal loans. Your eligibility for a subsidized loan is determined by the FAFSA.",
    type: "loans",
  },
  {
    id: "fa4",
    title: "Federal Work-Study Program",
    content: "The federal government offers students with financial need the option to work in a job on campus to help pay for college expenses. Financial need is determined by the FAFSA. Work-study provides part-time employment and valuable work experience while you pursue your degree.",
    type: "work-study",
  },
  {
    id: "fa5",
    title: "Making Miles College Affordable",
    content: "With 97% of students receiving scholarships or financial aid, Miles College is committed to making a quality education accessible. Unlike grants, work-study, and subsidized loans, many scholarships are awarded based on academic or athletic strength. A scholarship is a gift that does not have to be repaid, as long as you remain enrolled for the period it covers. To be considered for Miles College scholarships, you must complete and submit the FAFSA. Additional scholarships are available through organizations like the United Negro College Fund, and some labor unions, corporations, and large employers.",
    type: "overview",
  },
]
