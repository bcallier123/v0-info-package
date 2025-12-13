import { NextResponse } from "next/server"

const DGX_API_URL = process.env.NEXT_PUBLIC_MILES_API_URL || "http://192.168.1.25:8000/v1"
const DGX_MODEL = process.env.DGX_MODEL || "llama3"
const AI_API_KEY = process.env.AI_API_KEY

let lastHealthCheck: { success: boolean; timestamp: number } | null = null
const HEALTH_CHECK_CACHE_MS = 60000

const KNOWLEDGE_BASE = {
  // APPLICATION & ADMISSIONS PROCESS
  apply: {
    general: `**How to Apply to Miles College:**

1. Visit myexperience.miles.edu to complete your online application
2. There is NO application fee
3. Applications are accepted on a rolling basis
4. You can apply as an adult, non-traditional, or returning student
5. Decision typically takes 2-3 weeks after all documents are received

**To check your application status:**
Log in to myexperience.miles.edu or call (205) 929-1657

**Made a mistake?** Contact admissions to update your application.
**Missing documents?** You can still start the process - submit what you have and complete the rest later.`,

    freshman: `**Freshman Application Process:**

**Step 1:** Apply online at myexperience.miles.edu (FREE - no application fee!)
**Step 2:** Send your high school transcript (counselor sends electronically or mail to Admissions)
**Step 3:** Complete FAFSA at studentaid.gov (Miles School Code: 001028)
**Step 4:** Take placement test if no ACT/SAT scores
**Step 5:** Get your Miles email & student ID
**Step 6:** Pay orientation/housing fees and apply for housing

**Application Deadline:** Rolling admissions - apply anytime!
**Decision Time:** Usually 2-3 weeks after all documents received`,

    transfer: `**Transfer Student Application:**

**Step 1:** Apply online at myexperience.miles.edu (FREE!)
**Step 2:** Request official transcripts from ALL previous colleges
**Step 3:** Complete FAFSA at studentaid.gov (Code: 001028)
**Step 4:** Submit final high school transcript if you have less than 24 college credits
**Step 5:** Get your Miles email & student ID
**Step 6:** Pay orientation/housing fees and apply for housing

**Transfer Credits:** We accept credits from accredited institutions. Your transcript will be evaluated after admission.
**Mid-semester transfers:** Contact admissions to discuss options.`,

    late: `**Late Applications:**
Yes, we accept late applications! Miles College has rolling admissions. Contact the Admissions Office at (205) 929-1657 to discuss your timeline and options.`,

    noSSN: `**Applying Without a Social Security Number:**
Yes, you can apply without a Social Security number. Contact the Admissions Office at (205) 929-1657 for guidance on completing your application.`,
  },

  // ADMISSION REQUIREMENTS
  requirements: {
    gpa: `**GPA Requirements:**
Miles College considers the whole student, not just GPA. While we look for students with strong academic records, we also value leadership, community involvement, and potential. Contact admissions to discuss your specific situation.`,

    testScores: `**ACT/SAT Requirements:**
ACT and SAT scores are NOT required for admission. If you don't have test scores, you'll take our placement test instead to help us place you in the right courses.

**If you have scores:** Submit them - they can help with scholarship consideration.
**No scores?** No problem! Schedule a placement test with Mrs. Underwood at (205) 929-1000.`,

    documents: `**Required Documents for Admission:**
- Completed online application at myexperience.miles.edu
- Official high school transcript (or GED certificate)
- Official college transcripts (for transfer students)
- ACT/SAT scores (optional - placement test available)

**We Accept:**
- GED students
- Homeschool students (with proper documentation)
- International students
- Dual-enrollment students

**Recommendation letters are NOT required** but can strengthen your application.`,

    ged: `**GED Students:**
Yes! Miles College welcomes GED students. Submit your official GED certificate along with your application. You may need to take the placement test for course placement.`,

    homeschool: `**Homeschool Students:**
Yes! We accept homeschool students. You'll need:
- Transcript showing completed coursework
- Documentation of your homeschool program
- ACT/SAT scores OR take our placement test

Contact admissions at (205) 929-1657 for specific requirements.`,

    international: `**International Students:**
Yes! Miles College welcomes international students. Additional requirements include:
- English proficiency documentation (TOEFL/IELTS)
- Credential evaluation of foreign transcripts
- Financial documentation for visa purposes

Contact our International Student Services for guidance.`,
  },

  // TRANSCRIPTS & DOCUMENTS
  transcript: {
    highschool: `**Sending Your High School Transcript:**

**Electronic (Preferred):**
- Have your counselor send via Parchment
- Or use your school's electronic system

**By Mail:**
Miles College, Office of Admissions
5500 Myron Massey Blvd
Fairfield, AL 35064

**Important:**
- Must be OFFICIAL (sealed with school stamp/signature)
- Unofficial transcripts accepted initially, but official required for final enrollment
- Allow 7-10 business days for processing
- Check your portal if it's not showing after 2 weeks`,

    college: `**Sending College Transcripts (Transfer Students):**

Request official transcripts from ALL colleges you've attended - even if you didn't complete the program.

**Send to:**
Miles College, Office of Admissions
5500 Myron Massey Blvd
Fairfield, AL 35064

**Electronic transcripts:** Preferred and process faster
**We accept Parchment:** Yes!
**Processing time:** 7-10 business days

**Not showing in your portal?** Contact admissions at (205) 929-1657`,
  },

  // FINANCIAL AID & FAFSA
  fafsa: `**FAFSA & Financial Aid:**

**Complete FAFSA at:** studentaid.gov
**Miles College School Code:** 001028 (You need this!)

**When to file:** As soon as possible after October 1st
**Priority Deadline:** March 1st for best financial aid packages

**What you need:**
- Social Security Number
- Driver's License (if applicable)
- Federal tax returns
- Records of untaxed income
- FSA ID (create at studentaid.gov)

**Dependent vs Independent:**
- Most students under 24 need parent information
- If parents won't provide info, contact our Financial Aid office for options
- Independent students: You may qualify if you're 24+, married, a veteran, or have dependents

**How long to process:** 3-5 days for electronic submission

**Missed the deadline?** You can still apply - contact Financial Aid at (205) 929-1665`,

  financialAid: `**Financial Aid Available at Miles College:**

**Federal Aid:**
- Pell Grants (don't need to repay!)
- Federal Supplemental Grants
- Federal Work-Study
- Federal Student Loans

**State Aid:**
- Alabama Student Grant Program

**Institutional Aid:**
- Miles College Scholarships
- Academic Scholarships
- Athletic Scholarships
- Music/Band Scholarships

**Payment Plans:** Yes! We offer payment plans. Contact the Business Office.

**Important:** Complete your FAFSA (Code: 001028) to see what you qualify for!

Contact Financial Aid: (205) 929-1665 or financialaid@miles.edu`,

  // SCHOLARSHIPS
  scholarships: `**Scholarships at Miles College:**

**Types Available:**
- Academic Merit Scholarships
- Athletic Scholarships
- Music/Band Scholarships
- Leadership Scholarships
- Departmental Scholarships

**How to Apply:**
Many scholarships are automatically considered when you apply. Additional scholarships may require separate applications.

**Requirements:**
- GPA requirements vary by scholarship
- Test scores can help but are not always required
- Maintain required GPA to renew

**Combining Scholarships:** Yes, some scholarships can be combined with other aid!

**Transfer Students:** Yes, transfer students are eligible for scholarships!

**Adult/Non-traditional Students:** Yes, you can qualify!

**Timeline:** Scholarship decisions usually come with or shortly after your admission decision.

Contact the Financial Aid Office: (205) 929-1665`,

  // HOUSING & CAMPUS LIFE
  housing: `**Housing at Miles College:**

**How to Apply:**
1. Log in to your student portal (OneLogin)
2. Complete the housing application
3. Pay the $300 housing deposit
4. Submit required medical forms and shot records

**Housing Options:**
- Traditional residence halls
- Suite-style living
- All residents must have a meal plan

**Costs:** Varies by room type ($4,000-$5,500 per semester)

**Freshman Requirement:** First-year students are encouraged to live on campus but it's not mandatory.

**Deadlines:** Apply early - housing fills up fast!

**Co-ed Dorms?** Separate male and female residence halls.

**What's Included:** Bed, desk, dresser, closet space. You bring bedding, personal items, and decorations.

**Off-Campus Living:** Upperclassmen may live off campus with approval.

Contact Housing: (205) 929-1000`,

  mealPlans: `**Meal Plans:**
All students living on campus are required to have a meal plan.

**Options vary by tier** - contact the Business Office for current meal plan options and pricing.

**Dining locations:** Main cafeteria and campus eateries

Contact the Business Office for details.`,

  // ACADEMICS & MAJORS
  programs: `**Academic Programs at Miles College:**

We offer 30+ degree programs across 5 divisions:

**Business & Accounting:**
- Business Administration
- Accounting
- Marketing

**Education:**
- Elementary Education
- Secondary Education
- Special Education

**Humanities:**
- English
- Communications/Mass Media
- Music
- Philosophy & Religion

**Natural Sciences & Mathematics:**
- Biology (Pre-Med track available)
- Chemistry
- Mathematics
- Computer Science
- Environmental Science

**Social & Behavioral Sciences:**
- Criminal Justice
- History
- Political Science
- Psychology
- Social Work
- Sociology

**Special Programs:**
- Honors Program
- Pre-Law Track
- Pre-Med Track
- Study Abroad Opportunities
- Internship Programs

**Class Size:** 17:1 student-faculty ratio
**Online Programs:** Some courses available online
**Evening/Weekend:** Contact your advisor about scheduling options

Want details about a specific major? Ask me!`,

  changeMajor: `**Changing Your Major:**
Yes, you can change your major! Many students do. Meet with your academic advisor to discuss your options and create a new academic plan. There's no penalty for changing majors, though it may affect your graduation timeline.`,

  tutoring: `**Tutoring & Academic Support:**
Yes! Free tutoring is available through the Academic Success Center.

**Services include:**
- One-on-one tutoring
- Study groups
- Writing center assistance
- Math lab support

Contact your advisor or the Academic Success Center for schedules.`,

  // TRANSFER & CREDITS
  transfer: `**Transfer Student Information:**

**We Accept Transfer Students!**

**Credit Evaluation:**
- Credits from accredited institutions are evaluated after admission
- Generally, credits with C or better may transfer
- Your transcript is reviewed course-by-course

**GPA Requirement:** Good academic standing from previous institution

**Financial Aid:** Yes, transfer students qualify for federal and institutional aid

**Housing:** Yes, transfer students can live on campus

**Scholarships:** Yes, transfer students are eligible for scholarships

**Mid-semester Transfers:** Contact admissions to discuss options

**Community College Credits:** Yes, we accept them!

To see how your credits might transfer, contact admissions at (205) 929-1657`,

  // PARENT & FAMILY QUESTIONS
  parents: `**Information for Parents & Families:**

**FERPA Notice:** Due to privacy laws, we cannot share student information without written consent from the student. Students can authorize parent access through the Registrar's Office.

**Paying Tuition:**
- Online through the student portal
- Payment plans available through the Business Office
- Third-party billing available

**Campus Safety:**
- 24/7 campus security
- Emergency notification system
- Well-lit campus
- Safe and supportive environment

**Support Services:**
- Academic advising
- Career counseling
- Mental health services
- Disability support services
- First-generation student programs

**Parent Contact:**
Admissions: (205) 929-1657
Financial Aid: (205) 929-1665
Business Office: (205) 929-1000

**Emergency Contact:** Campus Security - available 24/7`,

  // PORTALS, EMAIL & TECH
  portal: `**Student Portal & Technology:**

**OneLogin Portal:**
This is your gateway to everything at Miles College!

**Getting Your Login:**
1. After acceptance, you'll receive your student ID number
2. Your Miles email format: firstnamelastname@students.miles.edu
3. OneLogin access is set up after you pay enrollment fees

**Having Login Issues?**
- Contact IT Help Desk
- Try password reset first
- Allow 24-48 hours after paying fees for portal activation

**What's in OneLogin:**
- Class registration
- Financial aid status
- Housing application
- Academic records
- Campus announcements

**Never received login info?** Contact IT or Admissions at (205) 929-1657`,

  // ORIENTATION, REGISTRATION & NEXT STEPS
  orientation: `**Orientation & Registration:**

**Orientation is REQUIRED** for all new students!

**What Happens at Orientation:**
- Meet faculty and staff
- Take placement tests (if needed)
- Register for classes
- Learn about campus resources
- Get your student ID
- Tour campus
- Meet other new students

**Dates:** Orientation dates are sent after admission. Usually held in summer before fall semester.

**Virtual Option:** Virtual registration may be available - contact admissions.

**Fees:** $150 orientation fee (one-time, required)

**Missed Orientation?** Contact admissions immediately at (205) 929-1657 to make arrangements.

**Class Registration:**
- Happens during or after orientation
- Your advisor will help you select courses
- Register through your student portal`,

  classStart: `**When Do Classes Start?**
- Fall Semester: Usually late August
- Spring Semester: Usually mid-January
- Summer Sessions: May/June

Check the academic calendar on miles.edu for specific dates.`,

  // SUPPORT SERVICES
  support: `**Student Support Services:**

**Academic Support:**
- Academic Advising
- Tutoring Center
- Writing Center
- Math Lab

**Personal Support:**
- Counseling Services (mental health)
- Career Services
- Disability Support Services (ADA accommodations)
- First-Generation Student Programs

**Campus Life:**
- 50+ Student Organizations
- Greek Life
- Student Government
- Campus Ministries
- Mentoring Programs

**Career Development:**
- Career Counseling
- Resume Assistance
- Internship Placement
- Job Fairs

**Childcare:** Contact Student Affairs about local resources.

All support services are here to help you succeed!`,

  // CAMPUS VISITS
  visits: `**Campus Visits & Tours:**

**Schedule a Visit:**
Contact Admissions at (205) 929-1657 or email admissions@miles.edu

**Tour Options:**
- Individual campus tours
- Group visits (high schools, churches, organizations)
- Virtual tours available

**What to Expect:**
- Campus walking tour
- Meet with admissions counselor
- Information session
- Q&A opportunity

**Bring Your Parents:** Family members are welcome.

**Preview Days/Open House:** Special events throughout the year - check miles.edu for dates.

**High School Visits:** Yes, our recruiters visit high schools! Ask your counselor to request a visit.`,

  // SPECIAL SITUATIONS
  nervous: `**Feeling Nervous About College?**
That's completely normal! Here's what helps:

- **Visit campus** - it feels less scary when you know the place
- **Connect with current students** - they were once where you are
- **Reach out to your advisor** - they're here to help
- **Join orientation activities** - you'll meet people just like you
- **Use support services** - tutoring, counseling, everything is free

Miles College has a family atmosphere. You'll find your community here. We believe in you!`,

  outOfSchool: `**Returning After Years Away?**
Welcome back to education! You absolutely can apply.

**What you need:**
- Complete the application at myexperience.miles.edu
- Submit transcripts (high school and any college)
- Complete FAFSA for financial aid
- Take placement test if needed

**Support for Adult Learners:**
- Flexible scheduling options
- Academic support services
- Financial aid available
- Advisors who understand adult student needs

You're never too old to pursue your degree. Contact us at (205) 929-1657!`,

  workFullTime: `**Working Full-Time?**
Many Miles College students work while attending!

**Options:**
- Evening courses may be available
- Some online/hybrid options
- Part-time enrollment is possible
- Financial aid available for part-time students

Talk to an advisor about creating a schedule that works with your job. Call (205) 929-1657.`,

  haveKids: `**Students with Children:**
Yes, you can absolutely attend Miles College as a parent!

**Support Available:**
- Flexible scheduling options
- Financial aid for childcare expenses (through FAFSA)
- Understanding faculty and staff
- Other student-parents in our community

Contact Student Affairs about local childcare resources. You can do this!`,

  oweOtherSchool: `**Owe Another School Money?**
You can still apply and be admitted to Miles College!

**However:** You'll need to resolve holds at previous institutions before official transcripts can be released. This may affect:
- Transfer credit evaluation
- Financial aid processing

**Options:**
- Work with the previous school on a payment plan
- Apply to Miles while resolving the balance
- Talk to our Financial Aid office about options

Contact admissions to discuss your specific situation: (205) 929-1657`,

  denied: `**Previously Denied?**
You may be able to reapply! Circumstances that can help:

- Improved academic record
- Additional coursework completed
- New test scores
- Changed circumstances

Contact admissions at (205) 929-1657 to discuss your situation and reapplication options.`,

  waitlisted: `**What Does Waitlist Mean?**
Being waitlisted means you meet our requirements but we're waiting on space availability.

**What to Do:**
- Keep your application active
- Submit any missing documents
- Consider alternative start terms
- Stay in contact with admissions

You'll be notified as soon as a decision is made. Questions? Call (205) 929-1657.`,
}

const getSystemPrompt = (persona: string | null) => {
  const basePrompt = `You are Miles Assistant, an AI enrollment coach for Miles College, a prestigious HBCU in Birmingham, Alabama established in 1898.

**Key Facts:**
- The ONLY 4-year HBCU in Birmingham
- 30+ degree programs
- 17:1 student-faculty ratio
- NCAA Division II athletics (Golden Bears)
- Tuition: $9,500/semester
- Application portal: myexperience.miles.edu
- FAFSA School Code: 001028
- NO APPLICATION FEE
- Admissions: (205) 929-1657 / admissions@miles.edu
- Financial Aid: (205) 929-1665 / financialaid@miles.edu`

  const personaContext: Record<string, string> = {
    freshman:
      "\n\nYou're helping a prospective freshman. Focus on the freshman application process, campus life, and first-year experience.",
    transfer:
      "\n\nYou're helping a transfer student. Focus on credit transfer, transcript requirements, and transition support.",
    parent:
      "\n\nYou're helping a parent. Focus on safety, cost, support systems, and how to help their student succeed.",
    counselor:
      "\n\nYou're helping a high school counselor. Focus on group visits, transcript processes, admission events, and recruiter contacts.",
    current:
      "\n\nYou're helping a current Miles College student. Focus on campus resources, academic support, and student services.",
  }

  return (
    basePrompt +
    ((persona && personaContext[persona]) || "") +
    "\n\nBe friendly, helpful, and encouraging. Provide accurate information and encourage action."
  )
}

function detectIntent(message: string): string | null {
  const lowerMessage = message.toLowerCase()

  const intents: Record<string, string[]> = {
    // Application & Admissions
    apply: [
      "apply",
      "application",
      "how to apply",
      "start application",
      "enroll",
      "admission",
      "get in",
      "submit application",
    ],
    applicationFee: ["application fee", "cost to apply", "pay to apply"],
    applicationDeadline: ["deadline", "when apply", "last day to apply", "application deadline"],
    applicationStatus: [
      "application status",
      "am i accepted",
      "did i get in",
      "acceptance",
      "check status",
      "hear back",
    ],
    lateApplication: ["late application", "apply late", "missed deadline"],
    updateApplication: ["update application", "change application", "mistake on application", "fix application"],
    noSSN: ["no ssn", "without social security number", "social security"],

    // Requirements
    gpaRequirement: ["gpa", "what gpa", "gpa need", "grades need"],
    testScores: ["act", "sat", "test scores", "test required", "no act", "no sat", "without act", "without sat"],
    requirements: ["requirements", "what do i need", "documents required", "admission requirements"],
    ged: ["ged", "no diploma", "no high school"],
    homeschool: ["homeschool", "home school", "homeschooled"],
    international: ["international", "from another country", "foreign student", "visa"],
    placementTest: ["placement test", "placement exam", "testing", "schedule test"],

    // Transcripts
    transcript: ["transcript", "send grades", "official transcript", "send transcript"],
    transcriptHighSchool: ["high school transcript", "hs transcript"],
    transcriptCollege: ["college transcript", "previous college", "transfer transcript"],
    parchment: ["parchment"],

    // Financial Aid & FAFSA
    fafsa: ["fafsa", "financial aid application", "apply for aid"],
    financialAid: ["financial aid", "money for college", "afford college", "pay for college"],
    schoolCode: ["school code", "fafsa code", "college code", "001028"],
    scholarships: ["scholarship", "scholarships", "free money", "merit aid"],
    paymentPlan: ["payment plan", "pay over time", "installments"],

    // Costs
    costs: ["cost", "tuition", "how much", "price", "afford", "expensive"],

    // Housing
    housing: ["housing", "dorm", "residence hall", "live on campus", "room", "roommate"],
    mealPlan: ["meal plan", "food", "cafeteria", "dining"],
    moveIn: ["move in", "move-in", "when move"],

    // Academics
    programs: ["major", "majors", "program", "programs", "degree", "what can i study", "courses"],
    changeMajor: ["change major", "switch major", "different major"],
    online: ["online", "virtual", "remote", "distance"],
    classSize: ["class size", "how many students", "student faculty ratio"],
    tutoring: ["tutoring", "tutor", "help with classes", "academic help"],
    internship: ["internship", "work experience", "job training"],

    // Transfer
    transfer: ["transfer", "from another college", "community college", "transfer credits", "credits transfer"],

    // Parents
    parents: ["parent", "family", "mom", "dad", "guardian", "pay tuition"],
    safety: ["safe", "safety", "security", "campus security"],

    // Portal & Tech
    portal: ["portal", "login", "sign in", "onelogin", "student email", "email", "password", "can't log in"],
    studentId: ["student id", "id number", "student number"],

    // Orientation & Registration
    orientation: ["orientation", "register for classes", "registration", "enroll in classes"],
    classStart: ["when do classes", "classes start", "semester start", "when does school"],

    // Support Services
    support: ["support", "help", "counseling", "disability", "mental health", "career services", "advising"],
    organizations: ["clubs", "organizations", "activities", "greek", "fraternity", "sorority"],

    // Campus Visits
    visits: ["visit", "tour", "campus tour", "see campus", "open house", "preview day"],

    // Special Situations
    nervous: ["nervous", "scared", "anxious", "worried about college"],
    outOfSchool: ["been years", "out of school", "returning", "adult student", "going back"],
    workFullTime: ["work full time", "working", "have a job", "full time job"],
    haveKids: [
      "have kids",
      "children",
      "single parent",
      "parent student",
      "mom going to college",
      "dad going to college",
    ],
    oweOtherSchool: ["owe another school", "balance at", "hold at", "owe money"],
    denied: ["denied", "rejected", "not accepted", "reapply"],
    waitlisted: ["waitlist", "wait list", "waitlisted"],

    // Contact
    contact: ["contact", "phone number", "email", "talk to someone", "reach", "call"],
  }

  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return intent
    }
  }

  return null
}

function getRuleBasedResponse(
  intent: string,
  persona: string | null,
): {
  message: string
  buttons?: Array<{ text: string; action: string }>
  captureLeadRequest?: boolean
} {
  const responses: Record<string, any> = {
    // Application responses
    apply: {
      message: KNOWLEDGE_BASE.apply[persona === "transfer" ? "transfer" : "freshman"],
      buttons: [
        { text: "Start My Application", action: "https://myexperience.miles.edu" },
        { text: "What documents do I need?", action: "requirements" },
        { text: "Talk to Admissions", action: "contact" },
      ],
      captureLeadRequest: true,
    },
    applicationFee: {
      message: `**Great News - NO Application Fee!**\n\nMiles College does NOT charge an application fee. Apply for FREE at myexperience.miles.edu\n\nReady to get started?`,
      buttons: [{ text: "Apply Now (Free!)", action: "https://myexperience.miles.edu" }],
    },
    applicationDeadline: {
      message: `**Application Deadlines:**\n\nMiles College has **rolling admissions** - which means you can apply anytime!\n\n**However, for best results:**\n- Apply early for best housing options\n- Complete FAFSA by March 1st for priority financial aid\n- Submit all documents promptly for faster decisions\n\nDecisions typically take 2-3 weeks after all documents are received.`,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu" }],
    },
    applicationStatus: {
      message: KNOWLEDGE_BASE.apply.general.split("**To check your status:**")[1]
        ? `**Checking Your Application Status:**\n\n1. Log in to myexperience.miles.edu\n2. View your application dashboard\n3. Check for any missing documents\n\n**Still have questions?**\nCall Admissions: (205) 929-1657\nEmail: admissions@miles.edu\n\nDecisions typically take 2-3 weeks after all documents are received.`
        : `**Check Your Application Status:**\n\nLog in to myexperience.miles.edu to view your status and any missing documents.\n\nQuestions? Call (205) 929-1657`,
      buttons: [
        { text: "Check Status Portal", action: "https://myexperience.miles.edu" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    lateApplication: {
      message: KNOWLEDGE_BASE.apply.late,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu" },
        { text: "Call Admissions", action: "tel:2059291657" },
      ],
    },
    updateApplication: {
      message: `**Need to Update Your Application?**\n\nMade a mistake or need to add information? No problem!\n\n**Contact Admissions:**\n- Phone: (205) 929-1657\n- Email: admissions@miles.edu\n\nThey can help you make corrections or updates to your application.`,
      buttons: [{ text: "Email Admissions", action: "mailto:admissions@miles.edu" }],
    },
    noSSN: {
      message: KNOWLEDGE_BASE.apply.noSSN,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },

    // Requirements responses
    gpaRequirement: {
      message: KNOWLEDGE_BASE.requirements.gpa,
      buttons: [
        { text: "Apply Anyway", action: "https://myexperience.miles.edu" },
        { text: "Talk to Admissions", action: "contact" },
      ],
    },
    testScores: {
      message: KNOWLEDGE_BASE.requirements.testScores,
      buttons: [
        { text: "Schedule Placement Test", action: "contact" },
        { text: "Apply Now", action: "https://myexperience.miles.edu" },
      ],
    },
    requirements: {
      message: KNOWLEDGE_BASE.requirements.documents,
      buttons: [
        { text: "Start Application", action: "https://myexperience.miles.edu" },
        { text: "How do I send transcripts?", action: "transcript" },
      ],
    },
    ged: {
      message: KNOWLEDGE_BASE.requirements.ged,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu" }],
    },
    homeschool: {
      message: KNOWLEDGE_BASE.requirements.homeschool,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },
    international: {
      message: KNOWLEDGE_BASE.requirements.international,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },
    placementTest: {
      message: KNOWLEDGE_BASE.requirements.testScores.includes("placement test")
        ? `**Placement Test Information:**\n\nIf you don't have ACT or SAT scores, you'll take the Miles College Placement Test.\n\n**Contact to Schedule:**\nMrs. Underwood at (205) 929-1000\n\n**What to Expect:**\n- Reading comprehension\n- Math skills assessment\n- Writing sample\n- About 2-3 hours\n\n**Tip:** Review basic algebra and grammar before your test!`
        : `**Placement Test:**\n\nSchedule your placement test by calling (205) 929-1000 and asking for the Testing Center.`,
      buttons: [{ text: "Call to Schedule", action: "tel:2059291000" }],
    },

    // Transcript responses
    transcript: {
      message: persona === "transfer" ? KNOWLEDGE_BASE.transcript.college : KNOWLEDGE_BASE.transcript.highschool,
      buttons: [
        { text: "What's next after transcripts?", action: "apply" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    transcriptHighSchool: {
      message: KNOWLEDGE_BASE.transcript.highschool,
      buttons: [{ text: "Got it! What's next?", action: "apply" }],
    },
    transcriptCollege: {
      message: KNOWLEDGE_BASE.transcript.college,
      buttons: [{ text: "How many credits will transfer?", action: "transfer" }],
    },
    parchment: {
      message: `**Yes, We Accept Parchment!**\n\nHave your school send your transcript through Parchment to Miles College Admissions.\n\n**Processing time:** 7-10 business days after receipt.\n\nNot showing in your portal after 2 weeks? Contact admissions at (205) 929-1657.`,
    },

    // Financial Aid responses
    fafsa: {
      message: KNOWLEDGE_BASE.fafsa,
      buttons: [
        { text: "Go to FAFSA", action: "https://studentaid.gov" },
        { text: "What aid is available?", action: "financialAid" },
        { text: "Contact Financial Aid", action: "contact" },
      ],
    },
    financialAid: {
      message: KNOWLEDGE_BASE.financialAid,
      buttons: [
        { text: "Start FAFSA", action: "https://studentaid.gov" },
        { text: "Learn About Scholarships", action: "scholarships" },
      ],
    },
    schoolCode: {
      message: `**Miles College FAFSA School Code:**\n\n# 001028\n\nEnter this code when completing your FAFSA at studentaid.gov to have your financial aid information sent to Miles College.\n\n**Need help with FAFSA?**\nContact Financial Aid: (205) 929-1665`,
      buttons: [{ text: "Complete FAFSA", action: "https://studentaid.gov" }],
    },
    scholarships: {
      message: KNOWLEDGE_BASE.scholarships,
      buttons: [
        { text: "Apply to Miles", action: "https://myexperience.miles.edu" },
        { text: "Contact Financial Aid", action: "contact" },
      ],
    },
    paymentPlan: {
      message: `**Payment Plans Available!**\n\nYes, Miles College offers payment plans to help manage tuition costs.\n\n**Contact the Business Office:**\nPhone: (205) 929-1000\n\nThey can explain available plans and help you set one up.`,
      buttons: [{ text: "Call Business Office", action: "tel:2059291000" }],
    },

    // Costs
    costs: {
      message: `**Miles College Costs:**\n\n**Tuition:** $9,500 per semester ($19,000/year full-time)\n**Room & Board:** $4,000-$5,500 per semester (varies by room type)\n**Orientation Fee:** $150 (one-time, new students)\n**Housing Deposit:** $300 (if living on campus)\n\n**Good News:**\n- NO application fee!\n- Payment plans available\n- Most students receive financial aid\n\nComplete your FAFSA (Code: 001028) to see what aid you qualify for!`,
      buttons: [
        { text: "Apply for Financial Aid", action: "fafsa" },
        { text: "View Scholarships", action: "scholarships" },
      ],
      captureLeadRequest: true,
    },

    // Housing
    housing: {
      message: KNOWLEDGE_BASE.housing,
      buttons: [
        { text: "Apply for Housing", action: "https://myexperience.miles.edu" },
        { text: "What about meal plans?", action: "mealPlan" },
      ],
    },
    mealPlan: {
      message: KNOWLEDGE_BASE.mealPlans,
    },
    moveIn: {
      message: `**Move-In Information:**\n\nMove-in typically occurs one week before classes start.\n\n**Fall Semester:** Late August\n**Spring Semester:** Early January\n\nYou'll receive specific move-in dates and times after completing your housing application and paying your deposit.\n\n**Questions?** Contact Housing at (205) 929-1000`,
    },

    // Academics
    programs: {
      message: KNOWLEDGE_BASE.programs,
      buttons: [
        { text: "View Full List", action: "https://www.miles.edu/academics" },
        { text: "Apply Now", action: "https://myexperience.miles.edu" },
      ],
    },
    changeMajor: {
      message: KNOWLEDGE_BASE.changeMajor,
    },
    online: {
      message: `**Online & Flexible Options:**\n\nMiles College offers some courses in online and hybrid formats.\n\n**For specific availability:**\nContact your academic advisor or the Registrar's Office.\n\n**Evening/Weekend Classes:** Some programs offer flexible scheduling. Discuss options with your advisor.`,
    },
    classSize: {
      message: `**Class Sizes at Miles College:**\n\n**Student-Faculty Ratio:** 17:1\n\nThis means you get personalized attention from professors who know your name and care about your success!\n\n**Benefits:**\n- Direct access to professors\n- Engaging class discussions\n- Mentorship opportunities\n- No getting lost in large lecture halls`,
    },
    tutoring: {
      message: KNOWLEDGE_BASE.tutoring,
    },
    internship: {
      message: `**Internships at Miles College:**\n\nYes! We help students gain real-world experience through internships.\n\n**Services:**\n- Career Services assistance\n- Industry connections\n- Resume and interview prep\n- Academic credit for internships\n\nContact Career Services for opportunities in your field.`,
    },

    // Transfer
    transfer: {
      message: KNOWLEDGE_BASE.transfer,
      buttons: [
        { text: "Apply as Transfer", action: "https://myexperience.miles.edu" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },

    // Parents
    parents: {
      message: KNOWLEDGE_BASE.parents,
      buttons: [
        { text: "Schedule a Visit", action: "visits" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    safety: {
      message: `**Campus Safety:**\n\nMiles College takes safety seriously!\n\n**Security Features:**\n- 24/7 Campus Security patrol\n- Emergency notification system\n- Well-lit campus grounds\n- Security escorts available\n- Safe and supportive community\n\n**Emergency Contact:**\nCampus Security is available 24/7\n\nWe're committed to providing a safe learning environment for all students.`,
    },

    // Portal & Tech
    portal: {
      message: KNOWLEDGE_BASE.portal,
      buttons: [
        { text: "Go to Portal", action: "https://myexperience.miles.edu" },
        { text: "Contact IT Help", action: "contact" },
      ],
    },
    studentId: {
      message: `**Getting Your Student ID:**\n\nYour student ID number is assigned after your application is processed.\n\n**How to get it:**\n1. Check your acceptance email\n2. Log in to myexperience.miles.edu\n3. Or contact Admissions: (205) 929-1657\n\n**Physical ID Card:** You'll receive this during orientation or at the campus ID office.`,
    },

    // Orientation
    orientation: {
      message: KNOWLEDGE_BASE.orientation,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu" }],
    },
    classStart: {
      message: KNOWLEDGE_BASE.classStart,
    },

    // Support
    support: {
      message: KNOWLEDGE_BASE.support,
    },
    organizations: {
      message: `**Student Organizations:**\n\nMiles College has 50+ student organizations!\n\n**Options Include:**\n- Academic honor societies\n- Greek fraternities and sororities\n- Student Government Association\n- Campus ministries and religious groups\n- Cultural organizations\n- Service and volunteer groups\n- Club sports and recreation\n- Music and arts groups\n\n**Get involved** during orientation or at the beginning of each semester!`,
    },

    // Visits
    visits: {
      message: KNOWLEDGE_BASE.visits,
      buttons: [
        { text: "Schedule a Tour", action: "contact" },
        { text: "Virtual Tour", action: "https://www.miles.edu/visit" },
      ],
      captureLeadRequest: true,
    },

    // Special situations
    nervous: {
      message: KNOWLEDGE_BASE.nervous,
      buttons: [
        { text: "Schedule a Visit", action: "visits" },
        { text: "Talk to Someone", action: "contact" },
      ],
    },
    outOfSchool: {
      message: KNOWLEDGE_BASE.outOfSchool,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu" },
        { text: "Talk to Admissions", action: "contact" },
      ],
    },
    workFullTime: {
      message: KNOWLEDGE_BASE.workFullTime,
      buttons: [{ text: "Contact an Advisor", action: "contact" }],
    },
    haveKids: {
      message: KNOWLEDGE_BASE.haveKids,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu" }],
    },
    oweOtherSchool: {
      message: KNOWLEDGE_BASE.oweOtherSchool,
      buttons: [{ text: "Talk to Admissions", action: "contact" }],
    },
    denied: {
      message: KNOWLEDGE_BASE.denied,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },
    waitlisted: {
      message: KNOWLEDGE_BASE.waitlisted,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },

    // Contact
    contact: {
      message: `**Contact Miles College:**\n\n**Admissions Office:**\nPhone: (205) 929-1657\nEmail: admissions@miles.edu\n\n**Financial Aid Office:**\nPhone: (205) 929-1665\nEmail: financialaid@miles.edu\n\n**Main Campus:**\nPhone: (205) 929-1000\n\n**Address:**\nMiles College\n5500 Myron Massey Blvd\nFairfield, AL 35064\n\n**Website:** miles.edu\n**Application Portal:** myexperience.miles.edu`,
      buttons: [
        { text: "Call Admissions", action: "tel:2059291657" },
        { text: "Email Admissions", action: "mailto:admissions@miles.edu" },
      ],
    },
  }

  return responses[intent] || { message: "" }
}

async function checkDGXConnection(): Promise<boolean> {
  // Return cached result if recent
  if (lastHealthCheck && Date.now() - lastHealthCheck.timestamp < HEALTH_CHECK_CACHE_MS) {
    return lastHealthCheck.success
  }

  try {
    console.log("[v0] Checking DGX connection at:", DGX_API_URL)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch(`${DGX_API_URL}/models`, {
      method: "GET",
      headers: AI_API_KEY ? { Authorization: `Bearer ${AI_API_KEY}` } : {},
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    const success = response.ok
    lastHealthCheck = { success, timestamp: Date.now() }

    console.log("[v0] DGX connection status:", success ? "CONNECTED" : "FAILED")
    return success
  } catch (error) {
    console.log("[v0] DGX connection failed:", error instanceof Error ? error.message : "Unknown error")
    lastHealthCheck = { success: false, timestamp: Date.now() }
    return false
  }
}

export async function POST(req: Request) {
  try {
    const { message, persona, conversationHistory } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    console.log("[v0] Processing message:", message.substring(0, 50) + "...")

    const intent = detectIntent(message)

    if (intent) {
      const ruleResponse = getRuleBasedResponse(intent, persona)
      if (ruleResponse.message) {
        console.log("[v0] Returning rule-based response for intent:", intent)
        return NextResponse.json(ruleResponse)
      }
    }

    const isDGXAvailable = await checkDGXConnection()

    if (!isDGXAvailable) {
      console.log("[v0] DGX unavailable, returning fallback response")
      return NextResponse.json({
        message: `I'd be happy to help! Here's some quick information:\n\n**Apply to Miles College:**\nmyexperience.miles.edu (FREE - no application fee!)\n\n**FAFSA School Code:** 001028\n\n**Contact Admissions:**\nPhone: (205) 929-1657\nEmail: admissions@miles.edu\n\n**Quick Facts:**\n- 30+ degree programs\n- 17:1 student-faculty ratio\n- Tuition: $9,500/semester\n- The ONLY 4-year HBCU in Birmingham!\n\nWhat specific question can I help you with?`,
        isOffline: true,
      })
    }

    const systemPrompt = getSystemPrompt(persona)

    const messages = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []).slice(-10).map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ]

    console.log("[v0] Sending request to DGX at:", DGX_API_URL)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    const response = await fetch(`${DGX_API_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(AI_API_KEY ? { Authorization: `Bearer ${AI_API_KEY}` } : {}),
      },
      body: JSON.stringify({
        model: DGX_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false,
      }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error")
      console.error("[v0] DGX API error:", response.status, errorText)
      throw new Error(`DGX API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] Received response from DGX")

    const assistantMessage = data.choices?.[0]?.message?.content

    if (!assistantMessage) {
      throw new Error("No content in AI response")
    }

    return NextResponse.json({
      message: assistantMessage,
      model: DGX_MODEL,
      source: "dgx-ai",
    })
  } catch (error) {
    console.error("[v0] Chat API error:", error)

    let errorMessage = "I'm having trouble connecting right now, but I can still help!\n\n"

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        errorMessage = "The AI response took too long. Please try a simpler question or contact us at (205) 929-1657."
      } else if (error.message.includes("fetch")) {
        errorMessage = `The DGX Spark server appears to be offline. Please ensure it's running at ${DGX_API_URL} or contact admissions at (205) 929-1657.`
      }
    }

    return NextResponse.json(
      {
        error: "AI_CONNECTION_FAILED",
        message:
          errorMessage +
          "\n\n**Contact Info:**\n• Admissions: (205) 929-1657\n• Email: admissions@miles.edu\n• Apply: myexperience.miles.edu\n\n**FAFSA Code:** 001028\n\nWhat would you like to know? I have answers to common questions!",
        isDGXError: true,
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const isDGXAvailable = await checkDGXConnection()

    return NextResponse.json({
      status: "ok",
      dgxConnected: isDGXAvailable,
      dgxUrl: DGX_API_URL,
      model: DGX_MODEL,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        dgxConnected: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
