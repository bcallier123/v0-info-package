import type { StudentPathway } from "@/lib/types"

export const pathways: StudentPathway[] = [
  {
    id: "p1",
    type: "freshman",
    label: "First-Year Freshman",
    description: "High school senior or recent graduate applying to college for the first time.",
    steps: [
      { order: 1, title: "Submit Application", description: "Complete your free application at myexperience.miles.edu.", link: "/apply" },
      { order: 2, title: "Send Transcripts", description: "Request official high school transcripts be sent to Miles College Admissions.", link: "/admissions" },
      { order: 3, title: "Submit Test Scores", description: "Send ACT or SAT scores directly from the testing agency.", link: "/admissions" },
      { order: 4, title: "File the FAFSA", description: "Complete your FAFSA at studentaid.gov using school code 001028.", link: "/financial-aid" },
      { order: 5, title: "Apply for Scholarships", description: "Browse and apply for institutional and external scholarships.", deadline: "March 1, 2026", link: "/scholarships" },
      { order: 6, title: "Accept Your Offer", description: "Review and accept your admissions offer and financial aid package." },
      { order: 7, title: "Pay Housing Deposit", description: "Secure your on-campus housing with a $200 deposit.", deadline: "June 15, 2026", link: "/housing-dining" },
      { order: 8, title: "Attend Orientation", description: "Register for and attend New Student Orientation.", deadline: "August 1, 2026" },
    ],
  },
  {
    id: "p2",
    type: "transfer",
    label: "Transfer Student",
    description: "Currently attending or previously attended another college or university.",
    steps: [
      { order: 1, title: "Submit Application", description: "Complete your free application at myexperience.miles.edu.", link: "/apply" },
      { order: 2, title: "Send All Transcripts", description: "Request official transcripts from ALL previously attended institutions.", link: "/admissions" },
      { order: 3, title: "File the FAFSA", description: "Complete your FAFSA at studentaid.gov using school code 001028.", link: "/financial-aid" },
      { order: 4, title: "Credit Evaluation", description: "Our registrar will evaluate your transcripts for transfer credit eligibility." },
      { order: 5, title: "Apply for Scholarships", description: "Transfer students are eligible for merit awards up to $6,000/year.", deadline: "June 1, 2026", link: "/scholarships" },
      { order: 6, title: "Meet with Advisor", description: "Schedule a meeting with your academic advisor to plan your degree completion path." },
    ],
  },
  {
    id: "p3",
    type: "international",
    label: "International Student",
    description: "Student applying from outside the United States.",
    steps: [
      { order: 1, title: "Submit Application", description: "Complete your application with international student documentation.", link: "/apply" },
      { order: 2, title: "Submit Academic Records", description: "Provide official academic records with certified English translations." },
      { order: 3, title: "English Proficiency", description: "Submit TOEFL (minimum 61 iBT) or IELTS (minimum 6.0) scores." },
      { order: 4, title: "Financial Documentation", description: "Provide evidence of financial support for I-20 processing.", deadline: "April 15, 2026" },
      { order: 5, title: "Receive I-20", description: "Once admitted, receive your I-20 form for F-1 visa application." },
      { order: 6, title: "Apply for F-1 Visa", description: "Schedule and attend your visa interview at the nearest U.S. embassy or consulate." },
    ],
  },
  {
    id: "p4",
    type: "returning",
    label: "Returning Student",
    description: "Previously enrolled at Miles College and seeking readmission.",
    steps: [
      { order: 1, title: "Apply for Readmission", description: "Submit a readmission application through the Registrar's Office.", link: "/apply" },
      { order: 2, title: "Clear Any Holds", description: "Resolve any financial or academic holds on your account with the Business Office." },
      { order: 3, title: "File the FAFSA", description: "Complete a new FAFSA for the upcoming academic year.", link: "/financial-aid" },
      { order: 4, title: "Meet with Advisor", description: "Review your remaining degree requirements and create an updated academic plan." },
      { order: 5, title: "Register for Classes", description: "Register for courses through the MyExperience student portal." },
    ],
  },
]
