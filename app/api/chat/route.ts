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

1. Visit **myexperience.miles.edu** to complete your online application
2. There is **NO application fee** - completely FREE!
3. Applications accepted on a **rolling basis** (apply anytime!)
4. Decision typically takes **2-3 weeks** after all documents received

**After You Apply:**
- Check your email for confirmation
- Log in to portal to track status
- Submit required documents
- Complete FAFSA (Code: 001028)

**Made a mistake?** Contact admissions to update your application.
**Missing documents?** You can still start - submit what you have!`,

    freshman: `**Freshman Application Checklist:**

**Step 1:** Apply FREE at myexperience.miles.edu
**Step 2:** Send high school transcript (counselor sends electronically or mail)
**Step 3:** Complete FAFSA at studentaid.gov (Code: **001028**)
**Step 4:** Take placement test if no ACT/SAT scores
**Step 5:** Receive acceptance & student credentials
**Step 6:** Pay $150 orientation fee + $300 housing deposit (if living on campus)
**Step 7:** Attend orientation & register for classes

**Timeline:** Rolling admissions - apply anytime!
**Decision:** Usually 2-3 weeks after complete application`,

    transfer: `**Transfer Student Checklist:**

**Step 1:** Apply FREE at myexperience.miles.edu
**Step 2:** Request official transcripts from ALL previous colleges
**Step 3:** Submit high school transcript (if less than 24 college credits)
**Step 4:** Complete FAFSA at studentaid.gov (Code: **001028**)
**Step 5:** Receive acceptance & credit evaluation
**Step 6:** Pay fees & register for classes

**Credit Transfer:**
- Credits from accredited institutions evaluated after admission
- Generally C or better courses may transfer
- We accept community college credits!

**Questions?** Call (205) 929-1657`,

    late: `**Late Applications:**
Yes! Miles College has **rolling admissions** - we accept applications year-round. Contact Admissions at (205) 929-1657 to discuss your timeline and ensure you don't miss important deadlines for housing and financial aid.`,

    noSSN: `**Applying Without a Social Security Number:**
Yes, you can apply without an SSN. Contact the Admissions Office at (205) 929-1657 for guidance on completing your application and financial aid options.`,

    nextSteps: `**I'm Accepted - What's Next?**

Congratulations! Here's your next steps:

1. **Pay Orientation Fee** ($150) - required for all new students
2. **Complete FAFSA** at studentaid.gov (Code: 001028)
3. **Apply for Housing** if living on campus ($300 deposit)
4. **Submit Shot Records** & medical forms
5. **Attend Orientation** - mandatory for all new students
6. **Register for Classes** - happens during orientation
7. **Set Up Student Email** & portal access

**Questions?** Call (205) 929-1657 or email admissions@miles.edu`,
  },

  // ADMISSION REQUIREMENTS
  requirements: {
    gpa: `**GPA Requirements:**
Miles College takes a holistic approach to admissions. While we value strong academics, we also consider:
- Leadership experience
- Community involvement
- Personal growth potential
- Extracurricular activities

**Don't have a perfect GPA?** Apply anyway! We believe in student potential.
Contact admissions to discuss your specific situation: (205) 929-1657`,

    testScores: `**ACT/SAT - NOT Required!**

Good news: ACT and SAT scores are **optional** for admission!

**If you have scores:** Submit them - they may help with scholarships
**No scores?** Take our **FREE placement test** instead

**To schedule placement test:**
Contact Mrs. Underwood at (205) 929-1000

**Test covers:**
- Math skills
- Reading comprehension  
- Writing assessment
- Takes about 2-3 hours`,

    documents: `**Required Documents:**

**All Students:**
- Completed application (myexperience.miles.edu)
- Official high school transcript OR GED certificate
- ACT/SAT scores (optional - placement test available)

**Transfer Students Also Need:**
- Official transcripts from ALL colleges attended

**We Accept:**
- GED students
- Homeschool students
- International students
- Dual-enrollment students

**Recommendation letters:** Not required, but can strengthen your application`,

    ged: `**GED Students Welcome!**

Yes, Miles College accepts GED students!

**What you need:**
- Completed application
- Official GED certificate/transcript
- Complete FAFSA for financial aid

**May need:** Placement test for course placement

Apply today at myexperience.miles.edu!`,

    homeschool: `**Homeschool Students Welcome!**

Miles College accepts homeschool students.

**Requirements:**
- Transcript showing completed coursework
- Documentation of homeschool program
- ACT/SAT scores OR take our placement test

Contact admissions for specific requirements: (205) 929-1657`,

    international: `**International Students:**

Miles College welcomes international students!

**Additional Requirements:**
- English proficiency (TOEFL/IELTS)
- Credential evaluation of foreign transcripts
- Financial documentation for visa (I-20)
- Copy of passport

Contact International Student Services for guidance.
Admissions: (205) 929-1657`,

    dualEnrollment: `**Dual Enrollment Students:**

Yes! We accept dual enrollment students and credits.

Your college credits earned during high school can transfer to Miles. Contact admissions to discuss how your credits will apply.

Phone: (205) 929-1657`,
  },

  // TRANSCRIPTS & DOCUMENTS
  transcript: {
    highschool: `**Sending High School Transcripts:**

**Electronic (Fastest):**
- Parchment - YES, we accept it!
- Your school's electronic system
- Have counselor send directly

**By Mail:**
Miles College, Office of Admissions
5500 Myron Massey Blvd
Fairfield, AL 35064

**Important:**
- Must be OFFICIAL (sealed/stamped)
- Allow 7-10 business days to process
- Check portal after 2 weeks if not showing

**Can my counselor upload it?** Yes! Ask them to send electronically.`,

    college: `**Sending College Transcripts:**

Request official transcripts from **ALL** colleges attended - even if you didn't finish.

**Send to:**
Miles College, Office of Admissions
5500 Myron Massey Blvd
Fairfield, AL 35064

**Electronic transcripts:** Preferred - process faster
**Parchment:** Yes, accepted!
**Processing:** 7-10 business days

**Not showing after 2 weeks?** Call (205) 929-1657`,

    processing: `**Transcript Processing:**

**Timeline:** 7-10 business days after receipt

**Not showing in portal?**
1. Confirm transcript was sent
2. Wait full 10 business days
3. Contact admissions: (205) 929-1657

**Unofficial transcripts:** Accepted initially, but official required for enrollment`,
  },

  // FINANCIAL AID & FAFSA
  fafsa: `**FAFSA - Your Key to Financial Aid!**

**Website:** studentaid.gov
**Miles College Code:** **001028** (You need this!)

**When to File:**
- Opens October 1st each year
- **Priority Deadline:** March 1st
- File ASAP for best aid package!

**What You Need:**
- FSA ID (create at studentaid.gov)
- Social Security Number
- Federal tax returns (or estimates)
- Records of untaxed income

**Parent Information:**
- Most students under 24 need parent info
- Parents won't help? Contact Financial Aid for options
- Independent? You may qualify if 24+, married, veteran, or have dependents

**Processing Time:** 3-5 days electronically

**Questions?** Financial Aid: (205) 929-1665`,

  financialAid: `**Financial Aid at Miles College:**

**Federal Aid (Complete FAFSA):**
- Pell Grants (FREE money - no repayment!)
- Federal Supplemental Grants
- Federal Work-Study
- Federal Student Loans

**State Aid:**
- Alabama Student Grant Program
- State scholarships

**Miles College Aid:**
- Academic Merit Scholarships
- Athletic Scholarships
- Music/Band Scholarships
- Leadership Awards
- Departmental Scholarships

**Payment Plans:** Yes! Contact Business Office: (205) 929-1000

**FAFSA Code:** 001028
**Financial Aid Office:** (205) 929-1665`,

  fafsaParents: `**FAFSA & Parent Information:**

**Do parents need to complete FAFSA?**
Most students under 24 are considered "dependent" and need parent financial information.

**What if parents won't provide info?**
Contact our Financial Aid Office - there may be options:
- Dependency override request
- Alternative documentation
- Special circumstances consideration

**Independent Student Status:**
You may qualify if you're:
- 24 years or older
- Married
- A veteran
- Have legal dependents
- Were in foster care

Financial Aid: (205) 929-1665`,

  // SCHOLARSHIPS
  scholarships: `**Scholarships at Miles College:**

**Types Available:**
- Academic Merit (GPA-based)
- Athletic Scholarships
- Music/Band Scholarships
- Leadership Awards
- Departmental Scholarships
- External/Community Scholarships

**How to Apply:**
- Many are AUTOMATIC with your admission application
- Some require separate applications
- Athletic/Band - contact coaches directly

**Eligibility:**
- GPA requirements vary by scholarship
- Test scores can help but not always required
- Must maintain GPA to renew

**Good to Know:**
- Transfer students ARE eligible!
- Adult students CAN qualify!
- Some scholarships combine with other aid

**Timeline:** Decisions usually come with or shortly after admission

Contact Financial Aid: (205) 929-1665`,

  // HOUSING & CAMPUS LIFE
  housing: `**Campus Housing:**

**How to Apply:**
1. Log in to student portal
2. Complete housing application
3. Pay $300 housing deposit
4. Submit medical forms & shot records
5. Receive room assignment

**Housing Options:**
- Traditional residence halls
- Suite-style rooms
- Meal plan required for residents

**Costs:** $4,000-$5,500 per semester (varies by room type)

**Freshman Requirement:** Encouraged but not mandatory

**What's Included:** Bed, desk, dresser, closet
**You Bring:** Bedding, personal items, decorations

**Deadlines:** Apply early - rooms fill fast!

**Co-ed?** Separate male and female halls

Housing Office: (205) 929-1000`,

  mealPlans: `**Meal Plans:**

All on-campus residents must have a meal plan.

**Options:** Multiple tiers available
**Dining:** Main cafeteria + campus eateries
**Flexibility:** Various meal swipes per week

Contact Business Office for current plans and pricing: (205) 929-1000`,

  offCampus: `**Living Off Campus:**

**First-year students:** Encouraged to live on campus but not required

**Upperclassmen:** May live off campus with approval

**Benefits of On-Campus:**
- Walking distance to classes
- Campus community experience
- Meal plan convenience
- Support services nearby

Questions? Housing: (205) 929-1000`,

  // ACADEMICS & MAJORS
  programs: `**Academic Programs at Miles College:**

**30+ Degree Programs in 5 Divisions:**

**Business & Accounting:**
Business Administration, Accounting, Marketing

**Education:**
Elementary, Secondary, Special Education

**Humanities:**
English, Communications/Mass Media, Music, Philosophy & Religion

**Natural Sciences & Mathematics:**
Biology (Pre-Med track), Chemistry, Mathematics, Computer Science, Environmental Science

**Social & Behavioral Sciences:**
Criminal Justice, History, Political Science, Psychology, Social Work, Sociology

**Special Programs:**
- Honors Program
- Pre-Law Track
- Pre-Med Track
- Study Abroad
- Internships

**Class Size:** 17:1 student-faculty ratio
**Online:** Some courses available

Want details about a specific major? Ask me!`,

  changeMajor: `**Changing Your Major:**

Yes! You can change your major at Miles College.

**How:**
1. Meet with your academic advisor
2. Discuss your interests and goals
3. Complete major change form
4. Create new academic plan

**Important:**
- No penalty for changing
- May affect graduation timeline
- Some majors have prerequisites

Many students change majors - it's normal!`,

  tutoring: `**Academic Support Services:**

**FREE Tutoring Available:**
- One-on-one tutoring
- Group study sessions
- Writing Center help
- Math Lab support

**Academic Success Center:**
- Study skills workshops
- Time management help
- Test preparation

**How to Access:**
Contact your advisor or visit the Academic Success Center

All services are FREE for Miles students!`,

  classSize: `**Class Sizes:**

**Student-Faculty Ratio:** 17:1

This means:
- Professors know your name
- Personal attention & mentorship
- Engaging class discussions
- Easy access to faculty
- No huge lecture halls

Our small classes help you succeed!`,

  // TRANSFER & CREDITS
  transfer: `**Transfer Students:**

**We Welcome Transfers!**

**Credit Evaluation:**
- Credits from accredited institutions
- Evaluated after admission
- Generally C or better transfers
- Course-by-course review

**Requirements:**
- Good standing at previous institution
- Official transcripts from ALL colleges
- FAFSA completion

**Transfer Students Get:**
- Financial aid eligibility
- Scholarship opportunities
- Campus housing access
- Full support services

**Community College:** Yes, we accept those credits!

**Mid-semester transfer?** Contact admissions to discuss.

Apply at myexperience.miles.edu
Questions: (205) 929-1657`,

  creditEvaluation: `**How Credits Transfer:**

Your transcript is evaluated after admission:

1. Official transcripts reviewed
2. Courses matched to Miles equivalents
3. Credits with C or better typically transfer
4. Evaluation sent to you

**Factors:**
- Accreditation of previous school
- Course content match
- Grade earned
- Degree requirements

**Timeline:** Usually 2-4 weeks after admission

Questions about specific credits? Contact Registrar after admission.`,

  // PARENT & FAMILY QUESTIONS
  parents: `**Information for Parents:**

**FERPA Privacy:**
Due to federal law, we need student consent to share information. Students can authorize parent access through the Registrar.

**Paying Tuition:**
- Online through student portal
- Payment plans available (Business Office)
- Third-party billing options

**Campus Safety:**
- 24/7 campus security
- Emergency notification system
- Well-lit campus
- Safe, supportive environment

**Support for Your Student:**
- Academic advising
- Career counseling
- Mental health services
- Disability support
- First-generation programs

**Key Contacts:**
Admissions: (205) 929-1657
Financial Aid: (205) 929-1665
Business Office: (205) 929-1000
Campus Security: 24/7 available`,

  safety: `**Campus Safety:**

Miles College prioritizes student safety!

**Security Features:**
- 24/7 Campus Security patrol
- Emergency notification system
- Well-lit grounds & walkways
- Security escorts available
- Safe, supportive community

**Emergency?**
Campus Security available 24/7

We're committed to a safe learning environment.`,

  // PORTALS, EMAIL & TECH
  portal: `**Student Portal & Technology:**

**OneLogin Portal - Your Hub for Everything:**
- Class registration
- Financial aid status
- Housing application
- Academic records
- Grades & schedules

**Getting Access:**
1. Receive acceptance
2. Pay enrollment fees
3. Portal activated within 24-48 hours
4. Login info sent to personal email

**Student Email Format:**
firstnamelastname@students.miles.edu

**Can't Log In?**
1. Try password reset first
2. Check spam for login info
3. Contact IT Help Desk
4. Or call (205) 929-1657

**Never received credentials?**
Contact Admissions: (205) 929-1657`,

  passwordReset: `**Password Reset:**

**To reset your password:**
1. Go to the login page
2. Click "Forgot Password"
3. Follow email instructions

**Still can't access?**
Contact IT Help Desk or Admissions: (205) 929-1657`,

  // ORIENTATION, REGISTRATION & NEXT STEPS
  orientation: `**Orientation - REQUIRED for All New Students!**

**What Happens:**
- Meet faculty & staff
- Take placement tests (if needed)
- Register for classes
- Learn campus resources
- Get student ID
- Tour campus
- Meet other new students
- Have fun!

**Dates:** Sent after admission (usually summer for fall semester)

**Cost:** $150 orientation fee (one-time)

**Virtual Option:** May be available - ask admissions

**Missed Orientation?**
Contact admissions IMMEDIATELY: (205) 929-1657

**Registration:**
- Happens during orientation
- Advisor helps select courses
- Also available through portal after`,

  registration: `**Class Registration:**

**When:** During or after orientation

**How:**
1. Meet with academic advisor
2. Discuss course schedule
3. Register through student portal
4. Pay any required fees

**Before You Can Register:**
- Complete orientation (new students)
- Clear any holds on account
- Meet with advisor

**Need Help?**
Contact your advisor or Registrar's Office`,

  classStart: `**Academic Calendar:**

**Fall Semester:** Late August start
**Spring Semester:** Mid-January start
**Summer Sessions:** May/June

Check miles.edu for specific dates each year.`,

  // SUPPORT SERVICES
  support: `**Student Support Services:**

**Academic Support:**
- Academic Advising
- FREE Tutoring
- Writing Center
- Math Lab

**Personal Support:**
- Counseling Services (mental health)
- Career Services
- Disability Support (ADA)
- First-Generation Programs

**Campus Life:**
- 50+ Student Organizations
- Greek Life
- Student Government
- Campus Ministries
- Intramural Sports

**Career Development:**
- Career Counseling
- Resume Help
- Internship Placement
- Job Fairs

All services are here to help you succeed!`,

  mentalHealth: `**Mental Health & Counseling:**

FREE counseling services available to all students!

**Services:**
- Individual counseling
- Crisis support
- Stress management
- Wellness resources

**Confidential & supportive environment**

Contact Student Affairs for appointments.`,

  disability: `**Disability Support Services:**

Miles College provides ADA accommodations for students with disabilities.

**Services may include:**
- Extended test time
- Note-taking assistance
- Accessible materials
- Other reasonable accommodations

**How to Request:**
1. Contact Disability Services
2. Provide documentation
3. Meet with coordinator
4. Receive accommodation plan

Contact Student Affairs to get started.`,

  // CAMPUS VISITS
  visits: `**Visit Miles College!**

**Schedule a Tour:**
Call: (205) 929-1657
Email: admissions@miles.edu

**Tour Options:**
- Individual campus tours
- Group visits (schools, churches, organizations)
- Virtual tours online

**What to Expect:**
- Campus walking tour
- Meet with admissions counselor
- Information session
- Q&A time

**Bring Your Family!** Parents and guests welcome.

**Preview Days/Open House:**
Special events throughout the year - check miles.edu

**Can't Visit In Person?**
Ask about virtual tour options!`,

  // SPECIAL SITUATIONS
  nervous: `**Feeling Nervous About College?**

That's completely normal! Here's what helps:

**Before You Arrive:**
- Visit campus - familiarity reduces anxiety
- Connect with other incoming students online
- Ask questions - no question is silly!

**When You Get Here:**
- Attend ALL orientation activities
- Introduce yourself to roommates & neighbors
- Join a student organization
- Use support services - they're free!

**Remember:**
- Everyone is new once
- Staff WANT to help you
- Miles has a family atmosphere
- You belong here!

We believe in you!`,

  outOfSchool: `**Returning After Time Away?**

Welcome back to education! You CAN do this!

**You're Not Alone:**
Many Miles students are adult learners returning after time away.

**What You Need:**
- Complete application at myexperience.miles.edu
- Submit transcripts (HS and any college)
- Complete FAFSA for financial aid
- Take placement test if needed

**Support for You:**
- Flexible scheduling options
- Understanding advisors
- Academic support services
- Financial aid available

**Age is just a number** - pursue your degree!

Call: (205) 929-1657`,

  workFullTime: `**Working While Attending?**

Many Miles students work - you can too!

**Options:**
- Evening courses (some available)
- Online/hybrid classes (ask about availability)
- Part-time enrollment possible
- Weekend options for some programs

**Financial Aid:**
Part-time students can receive aid too!

**Tips:**
- Talk to advisor about manageable schedule
- Be realistic about course load
- Use time management resources

Contact an advisor: (205) 929-1657`,

  haveKids: `**Students with Children:**

Yes, you can pursue your degree as a parent!

**Support Available:**
- Flexible scheduling options
- Understanding faculty
- Financial aid may help with childcare costs
- Other student-parents in our community

**FAFSA:**
May include childcare in cost of attendance

**Resources:**
Contact Student Affairs about local childcare options

You can do this - many have before you!`,

  oweOtherSchool: `**Owe Another School Money?**

You can still apply to Miles!

**Important to Know:**
- Apply and get admitted to Miles
- Resolve balance at previous school for transcripts
- Work with previous school on payment plan
- Talk to our Financial Aid about options

**Your balance affects:**
- Transfer credit evaluation (needs official transcript)
- Financial aid processing

**Don't let this stop you** - contact admissions to discuss: (205) 929-1657`,

  denied: `**Previously Denied?**

You may be able to reapply!

**What Helps:**
- Improved academic record
- Additional coursework completed
- New test scores
- Changed circumstances
- Time passed

**How to Reapply:**
Contact admissions to discuss your situation and options.

Phone: (205) 929-1657
Email: admissions@miles.edu

Don't give up on your goals!`,

  waitlisted: `**Waitlisted - What Now?**

Being waitlisted means you meet requirements but space is limited.

**What to Do:**
1. Keep your application active
2. Submit any missing documents
3. Consider alternative start terms
4. Stay in contact with admissions
5. Respond promptly to any requests

**You'll be notified** as soon as a decision is made.

Questions? Call (205) 929-1657`,

  missingDocuments: `**Missing Documents?**

Don't let missing documents stop you!

**You Can:**
- Start your application now
- Submit documents as you get them
- Work with admissions on alternatives

**Common Solutions:**
- Request transcripts ASAP
- Ask counselors to expedite
- Communicate with admissions about delays

Start your application at myexperience.miles.edu
Call with questions: (205) 929-1657`,

  // CONTACT INFORMATION
  contact: `**Contact Miles College:**

**Admissions Office:**
Phone: (205) 929-1657
Email: admissions@miles.edu

**Financial Aid:**
Phone: (205) 929-1665
Email: financialaid@miles.edu

**Business Office:**
Phone: (205) 929-1000

**Housing:**
Phone: (205) 929-1000

**Main Campus:**
Phone: (205) 929-1000

**Address:**
Miles College
5500 Myron Massey Blvd
Fairfield, AL 35064

**Online:**
Website: miles.edu
Apply: myexperience.miles.edu
FAFSA Code: 001028`,

  // ATHLETICS
  athletics: `**Golden Bears Athletics:**

Miles College is NCAA Division II and a member of the SIAC!

**Sports Programs:**
- Football
- Men's & Women's Basketball
- Baseball
- Softball
- Track & Field
- Cross Country
- Volleyball
- Golf
- Tennis
- Esports

**Athletic Scholarships:**
Contact coaches directly for recruitment info

**Cheer & Dance:**
Purple Marching Machine Band
Golden Bear Cheerleaders
Dance Team

Go Golden Bears!`,

  // ABOUT MILES
  about: `**About Miles College:**

**Established:** 1898
**Location:** Fairfield, Alabama (Birmingham metro)
**Distinction:** The ONLY 4-year HBCU in Birmingham!

**Quick Facts:**
- 30+ degree programs
- 17:1 student-faculty ratio
- NCAA Division II athletics
- Rich HBCU heritage
- Strong alumni network

**Campus:**
- Beautiful historic campus
- Modern facilities
- Safe, supportive environment
- Family atmosphere

**Mission:**
Developing students intellectually, ethically, and spiritually to serve others.

Visit us to experience the Miles difference!`,
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
      "applying",
    ],
    applicationFee: ["application fee", "cost to apply", "pay to apply", "fee to apply", "free to apply"],
    applicationDeadline: ["deadline", "when apply", "last day to apply", "application deadline", "too late"],
    applicationStatus: [
      "application status",
      "am i accepted",
      "did i get in",
      "acceptance",
      "check status",
      "hear back",
      "decision",
    ],
    nextSteps: ["accepted", "what now", "what's next", "next steps", "got in", "i'm in", "admitted"],
    lateApplication: ["late application", "apply late", "missed deadline", "still apply"],
    updateApplication: [
      "update application",
      "change application",
      "mistake on application",
      "fix application",
      "error on application",
    ],
    noSSN: ["no ssn", "without social security", "social security", "no social"],

    // Requirements
    gpaRequirement: ["gpa", "what gpa", "gpa need", "grades need", "grade requirement", "minimum gpa"],
    testScores: [
      "act",
      "sat",
      "test scores",
      "test required",
      "no act",
      "no sat",
      "without act",
      "without sat",
      "standardized test",
    ],
    placementTest: ["placement test", "placement exam", "testing", "schedule test", "take test"],
    requirements: [
      "requirements",
      "what do i need",
      "documents required",
      "admission requirements",
      "need to apply",
      "what documents",
    ],
    ged: ["ged", "no diploma", "no high school", "equivalency"],
    homeschool: ["homeschool", "home school", "homeschooled", "home-school"],
    international: ["international", "from another country", "foreign student", "visa", "i-20", "overseas"],
    dualEnrollment: ["dual enrollment", "dual credit", "college credit high school"],
    recommendation: ["recommendation", "letters of rec", "letter of recommendation"],

    // Transcripts
    transcript: ["transcript", "send grades", "official transcript", "send transcript", "grades sent"],
    transcriptHighSchool: ["high school transcript", "hs transcript", "secondary transcript"],
    transcriptCollege: ["college transcript", "previous college", "transfer transcript", "university transcript"],
    parchment: ["parchment"],
    transcriptProcessing: ["transcript processing", "how long transcript", "transcript received", "transcript showing"],

    // Financial Aid & FAFSA
    fafsa: ["fafsa", "financial aid application", "apply for aid", "file fafsa", "complete fafsa"],
    fafsaParents: [
      "parent fafsa",
      "parents won't",
      "parent information",
      "parent tax",
      "dependent",
      "independent student",
    ],
    financialAid: [
      "financial aid",
      "money for college",
      "afford college",
      "pay for college",
      "aid available",
      "grants",
      "loans",
    ],
    schoolCode: ["school code", "fafsa code", "college code", "001028", "miles code"],
    scholarships: [
      "scholarship",
      "scholarships",
      "free money",
      "merit aid",
      "academic scholarship",
      "athletic scholarship",
    ],
    paymentPlan: ["payment plan", "pay over time", "installments", "monthly payment"],

    // Costs
    costs: ["cost", "tuition", "how much", "price", "afford", "expensive", "fees", "total cost"],

    // Housing
    housing: ["housing", "dorm", "residence hall", "live on campus", "room", "roommate", "on-campus housing"],
    mealPlan: ["meal plan", "food", "cafeteria", "dining", "eat on campus"],
    offCampus: ["off campus", "off-campus", "live at home", "commuter", "apartment"],

    // Academics
    programs: [
      "major",
      "majors",
      "program",
      "programs",
      "degree",
      "what can i study",
      "courses",
      "fields of study",
      "departments",
    ],
    changeMajor: ["change major", "switch major", "different major"],
    online: ["online", "virtual", "remote", "distance", "online classes", "hybrid"],
    classSize: ["class size", "how many students", "student faculty ratio", "small classes"],
    tutoring: ["tutoring", "tutor", "help with classes", "academic help", "study help", "writing center", "math lab"],
    internship: ["internship", "work experience", "job training", "hands-on"],

    // Transfer
    transfer: [
      "transfer",
      "from another college",
      "community college",
      "transfer credits",
      "credits transfer",
      "transfer student",
    ],
    creditEvaluation: ["credits evaluate", "how many credits", "credits count", "credits accepted"],

    // Parents
    parents: ["parent", "family", "mom", "dad", "guardian", "pay tuition", "parent information"],
    safety: ["safe", "safety", "security", "campus security", "crime", "secure"],

    // Portal & Tech
    portal: [
      "portal",
      "login",
      "sign in",
      "onelogin",
      "student email",
      "email",
      "password",
      "can't log in",
      "access account",
    ],
    studentId: ["student id", "id number", "student number", "miles id"],
    passwordReset: ["reset password", "forgot password", "password help", "can't login"],

    // Orientation & Registration
    orientation: ["orientation", "new student orientation", "mandatory orientation"],
    registration: [
      "register for classes",
      "registration",
      "enroll in classes",
      "sign up for classes",
      "class schedule",
    ],
    classStart: ["when do classes", "classes start", "semester start", "when does school", "first day"],

    // Support Services
    support: ["support", "help", "services available", "resources", "student services"],
    mentalHealth: ["counseling", "mental health", "therapy", "stress", "anxiety", "depression"],
    disability: ["disability", "ada", "accommodation", "special needs", "learning disability"],
    organizations: [
      "clubs",
      "organizations",
      "activities",
      "greek",
      "fraternity",
      "sorority",
      "student life",
      "extracurricular",
    ],

    // Campus Visits
    visits: ["visit", "tour", "campus tour", "see campus", "open house", "preview day", "come to campus"],

    // Special Situations
    nervous: ["nervous", "scared", "anxious", "worried about college", "afraid", "not ready"],
    outOfSchool: [
      "been years",
      "out of school",
      "returning",
      "adult student",
      "going back",
      "older student",
      "non-traditional",
    ],
    workFullTime: ["work full time", "working", "have a job", "full time job", "employed", "work while"],
    haveKids: [
      "have kids",
      "children",
      "single parent",
      "parent student",
      "mom going to college",
      "dad going to college",
      "childcare",
    ],
    oweOtherSchool: ["owe another school", "balance at", "hold at", "owe money", "debt at previous"],
    denied: ["denied", "rejected", "not accepted", "reapply", "turned down"],
    waitlisted: ["waitlist", "wait list", "waitlisted"],
    missingDocuments: ["missing documents", "don't have documents", "can't get transcript", "document issues"],

    // Contact
    contact: [
      "contact",
      "phone number",
      "email",
      "talk to someone",
      "reach",
      "call",
      "who do i contact",
      "get in touch",
    ],

    // Athletics
    athletics: [
      "sports",
      "athletics",
      "football",
      "basketball",
      "baseball",
      "softball",
      "track",
      "athlete",
      "play sports",
      "golden bears",
    ],

    // About Miles
    about: ["about miles", "tell me about", "what is miles", "miles college", "hbcu", "history of miles", "why miles"],
  }

  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return intent
    }
  }

  return null
}

const getSystemPrompt = (persona: string | null) => {
  const basePrompt = `You are Miles Assistant, the official AI enrollment coach for Miles College, a prestigious HBCU in Birmingham, Alabama established in 1898.

**CRITICAL FACTS - Always accurate:**
- Miles College is the ONLY 4-year HBCU in Birmingham
- 30+ degree programs across 5 divisions
- 17:1 student-faculty ratio
- NCAA Division II athletics (Golden Bears, SIAC Conference)
- Tuition: $9,500/semester
- Application portal: myexperience.miles.edu
- FAFSA School Code: 001028
- NO APPLICATION FEE - completely free to apply!
- Admissions: (205) 929-1657 / admissions@miles.edu
- Financial Aid: (205) 929-1665 / financialaid@miles.edu
- Business Office: (205) 929-1000

**Your personality:**
- Warm, encouraging, and professional
- Proud of Miles College heritage
- Patient with questions
- Action-oriented - guide users to next steps
- Never condescending

**Important guidelines:**
- If unsure, direct to admissions: (205) 929-1657
- Always encourage applying
- Emphasize support services
- Be accurate - don't make up information`

  const personaContext: Record<string, string> = {
    freshman:
      "\n\n**User Context:** Prospective freshman. Focus on freshman application process, campus life experience, making the transition from high school.",
    transfer:
      "\n\n**User Context:** Transfer student. Focus on credit transfer process, transcript requirements, how their previous credits may apply.",
    parent:
      "\n\n**User Context:** Parent/guardian. Focus on safety, cost breakdown, support systems, how to help their student succeed, payment options.",
    counselor:
      "\n\n**User Context:** High school counselor. Focus on group visits, transcript submission process, recruitment events, how to refer students.",
    current:
      "\n\n**User Context:** Current Miles student. Focus on campus resources, registration, academic support, student services.",
  }

  return basePrompt + (persona && personaContext[persona] ? personaContext[persona] : "")
}

function getRuleBasedResponse(
  intent: string,
  persona: string | null,
): {
  message: string
  buttons?: Array<{ text: string; action: string; type?: string }>
} {
  const responses: Record<string, any> = {
    // Application responses
    apply: {
      message: KNOWLEDGE_BASE.apply[persona === "transfer" ? "transfer" : "freshman"],
      buttons: [
        { text: "Start My Application", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "What documents do I need?", action: "requirements" },
        { text: "Talk to Admissions", action: "contact" },
      ],
    },
    applicationFee: {
      message: `**Great News - NO Application Fee!**

Miles College does NOT charge an application fee.
Apply for FREE at myexperience.miles.edu

Ready to get started?`,
      buttons: [{ text: "Apply Now (Free!)", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    applicationDeadline: {
      message: `**Application Deadlines:**

Miles College has **rolling admissions** - apply anytime!

**For Best Results:**
- Apply early for housing priority
- Complete FAFSA by March 1st for best aid
- Submit documents promptly

**Decision Time:** 2-3 weeks after complete application`,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    applicationStatus: {
      message: `**Check Your Application Status:**

1. Log in at myexperience.miles.edu
2. View your application dashboard
3. Check for missing documents

**Questions?**
Call: (205) 929-1657
Email: admissions@miles.edu

Decisions typically take 2-3 weeks after all documents received.`,
      buttons: [
        { text: "Check Status", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    nextSteps: {
      message: KNOWLEDGE_BASE.apply.nextSteps,
      buttons: [
        { text: "Access Portal", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Complete FAFSA", action: "https://studentaid.gov" },
        { text: "Questions?", action: "contact" },
      ],
    },
    lateApplication: {
      message: KNOWLEDGE_BASE.apply.late,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Call Admissions", action: "tel:2059291657" },
      ],
    },
    updateApplication: {
      message: `**Need to Update Your Application?**

Made a mistake or need to add information? No problem!

**Contact Admissions:**
Phone: (205) 929-1657
Email: admissions@miles.edu

They can help you make corrections or updates.`,
      buttons: [
        { text: "Email Admissions", action: "mailto:admissions@miles.edu", type: "primary" },
        { text: "Call Now", action: "tel:2059291657" },
      ],
    },
    noSSN: {
      message: KNOWLEDGE_BASE.apply.noSSN,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },

    // Requirements
    gpaRequirement: {
      message: KNOWLEDGE_BASE.requirements.gpa,
      buttons: [
        { text: "Apply Anyway!", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Talk to Admissions", action: "contact" },
      ],
    },
    testScores: {
      message: KNOWLEDGE_BASE.requirements.testScores,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Schedule Placement Test", action: "tel:2059291000" },
      ],
    },
    placementTest: {
      message: `**Placement Test Information:**

If you don't have ACT/SAT scores, take our FREE placement test!

**To Schedule:**
Call Mrs. Underwood at (205) 929-1000

**What's Covered:**
- Math skills
- Reading comprehension
- Writing assessment

**Duration:** About 2-3 hours

**Tip:** Review basic algebra and grammar beforehand!`,
      buttons: [{ text: "Call to Schedule", action: "tel:2059291000", type: "primary" }],
    },
    requirements: {
      message: KNOWLEDGE_BASE.requirements.documents,
      buttons: [
        { text: "Start Application", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "How to Send Transcripts", action: "transcript" },
      ],
    },
    ged: {
      message: KNOWLEDGE_BASE.requirements.ged,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    homeschool: {
      message: KNOWLEDGE_BASE.requirements.homeschool,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    international: {
      message: KNOWLEDGE_BASE.requirements.international,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },
    dualEnrollment: {
      message: KNOWLEDGE_BASE.requirements.dualEnrollment,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Questions?", action: "contact" },
      ],
    },
    recommendation: {
      message: `**Recommendation Letters:**

Recommendation letters are **NOT required** for admission to Miles College.

However, strong letters can enhance your application if you want to submit them.

**If submitting:**
Have recommenders send to:
admissions@miles.edu`,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },

    // Transcripts
    transcript: {
      message: persona === "transfer" ? KNOWLEDGE_BASE.transcript.college : KNOWLEDGE_BASE.transcript.highschool,
      buttons: [{ text: "What's Next?", action: "apply" }],
    },
    transcriptHighSchool: {
      message: KNOWLEDGE_BASE.transcript.highschool,
      buttons: [{ text: "Got it! Now what?", action: "apply" }],
    },
    transcriptCollege: {
      message: KNOWLEDGE_BASE.transcript.college,
      buttons: [{ text: "How Credits Transfer", action: "transfer" }],
    },
    parchment: {
      message: `**Yes, We Accept Parchment!**

Have your school send transcripts through Parchment to Miles College Admissions.

**Processing:** 7-10 business days

**Not showing after 2 weeks?**
Call: (205) 929-1657`,
      buttons: [{ text: "Check Application Status", action: "https://myexperience.miles.edu" }],
    },
    transcriptProcessing: {
      message: KNOWLEDGE_BASE.transcript.processing,
      buttons: [{ text: "Contact Admissions", action: "contact" }],
    },

    // Financial Aid
    fafsa: {
      message: KNOWLEDGE_BASE.fafsa,
      buttons: [
        { text: "Go to FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "What Aid is Available?", action: "financialAid" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },
    fafsaParents: {
      message: KNOWLEDGE_BASE.fafsaParents,
      buttons: [
        { text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },
    financialAid: {
      message: KNOWLEDGE_BASE.financialAid,
      buttons: [
        { text: "Start FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "View Scholarships", action: "scholarships" },
      ],
    },
    schoolCode: {
      message: `**Miles College FAFSA Code:**

# 001028

Enter this code when completing your FAFSA at studentaid.gov

**Need help with FAFSA?**
Financial Aid: (205) 929-1665`,
      buttons: [{ text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" }],
    },
    scholarships: {
      message: KNOWLEDGE_BASE.scholarships,
      buttons: [
        { text: "Apply to Miles", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },
    paymentPlan: {
      message: `**Payment Plans Available!**

Yes, Miles College offers payment plans!

**Contact Business Office:**
Phone: (205) 929-1000

They can explain available plans and help you set one up.`,
      buttons: [{ text: "Call Business Office", action: "tel:2059291000", type: "primary" }],
    },

    // Costs
    costs: {
      message: `**Miles College Costs:**

**Tuition:** $9,500/semester ($19,000/year full-time)
**Room & Board:** $4,000-$5,500/semester
**Orientation Fee:** $150 (one-time)
**Housing Deposit:** $300 (if on-campus)

**Great News:**
- NO application fee!
- Payment plans available
- Most students receive financial aid

Complete FAFSA (Code: 001028) to see your aid!`,
      buttons: [
        { text: "Apply for Aid", action: "https://studentaid.gov", type: "primary" },
        { text: "View Scholarships", action: "scholarships" },
      ],
    },

    // Housing
    housing: {
      message: KNOWLEDGE_BASE.housing,
      buttons: [
        { text: "Apply for Housing", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Meal Plans", action: "mealPlan" },
      ],
    },
    mealPlan: {
      message: KNOWLEDGE_BASE.mealPlans,
      buttons: [{ text: "Contact Business Office", action: "tel:2059291000" }],
    },
    offCampus: {
      message: KNOWLEDGE_BASE.offCampus,
      buttons: [{ text: "Housing Questions", action: "tel:2059291000" }],
    },

    // Academics
    programs: {
      message: KNOWLEDGE_BASE.programs,
      buttons: [
        { text: "View Full List", action: "https://www.miles.edu/academics" },
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
      ],
    },
    changeMajor: {
      message: KNOWLEDGE_BASE.changeMajor,
    },
    online: {
      message: `**Online & Flexible Options:**

Some courses available in online and hybrid formats.

**For Availability:**
Contact your academic advisor or Registrar's Office.

**Evening/Weekend:** Some programs offer flexible scheduling.`,
      buttons: [{ text: "Contact Us", action: "contact" }],
    },
    classSize: {
      message: KNOWLEDGE_BASE.classSize,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    tutoring: {
      message: KNOWLEDGE_BASE.tutoring,
    },
    internship: {
      message: `**Internships at Miles:**

We help students gain real-world experience!

**Services:**
- Career Services guidance
- Industry connections
- Resume & interview prep
- Academic credit for internships

Contact Career Services for opportunities in your field.`,
    },

    // Transfer
    transfer: {
      message: KNOWLEDGE_BASE.transfer,
      buttons: [
        { text: "Apply as Transfer", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    creditEvaluation: {
      message: KNOWLEDGE_BASE.creditEvaluation,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
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
      message: KNOWLEDGE_BASE.safety,
      buttons: [{ text: "Visit Campus", action: "visits" }],
    },

    // Portal & Tech
    portal: {
      message: KNOWLEDGE_BASE.portal,
      buttons: [
        { text: "Go to Portal", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Need Help?", action: "contact" },
      ],
    },
    studentId: {
      message: `**Getting Your Student ID:**

Your ID number is assigned after application processing.

**How to Get It:**
1. Check your acceptance email
2. Log in to myexperience.miles.edu
3. Or call: (205) 929-1657

**Physical ID Card:** Issued during orientation or at campus ID office.`,
      buttons: [{ text: "Access Portal", action: "https://myexperience.miles.edu" }],
    },
    passwordReset: {
      message: KNOWLEDGE_BASE.passwordReset,
      buttons: [{ text: "Contact Help", action: "contact" }],
    },

    // Orientation
    orientation: {
      message: KNOWLEDGE_BASE.orientation,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    registration: {
      message: KNOWLEDGE_BASE.registration,
      buttons: [{ text: "Access Portal", action: "https://myexperience.miles.edu" }],
    },
    classStart: {
      message: KNOWLEDGE_BASE.classStart,
      buttons: [{ text: "View Academic Calendar", action: "https://www.miles.edu" }],
    },

    // Support
    support: {
      message: KNOWLEDGE_BASE.support,
    },
    mentalHealth: {
      message: KNOWLEDGE_BASE.mentalHealth,
    },
    disability: {
      message: KNOWLEDGE_BASE.disability,
    },
    organizations: {
      message: `**Student Organizations:**

Miles College has **50+ organizations!**

**Options Include:**
- Academic honor societies
- Greek fraternities & sororities
- Student Government
- Campus ministries
- Cultural organizations
- Service groups
- Club sports
- Music & arts

**Get Involved** during orientation or at semester start!`,
    },

    // Visits
    visits: {
      message: KNOWLEDGE_BASE.visits,
      buttons: [
        { text: "Schedule Tour", action: "tel:2059291657", type: "primary" },
        { text: "Virtual Tour", action: "https://www.miles.edu/visit" },
      ],
    },

    // Special Situations
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
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Talk to Admissions", action: "contact" },
      ],
    },
    workFullTime: {
      message: KNOWLEDGE_BASE.workFullTime,
      buttons: [{ text: "Contact an Advisor", action: "contact" }],
    },
    haveKids: {
      message: KNOWLEDGE_BASE.haveKids,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
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
    missingDocuments: {
      message: KNOWLEDGE_BASE.missingDocuments,
      buttons: [
        { text: "Start Application", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },

    // Contact
    contact: {
      message: KNOWLEDGE_BASE.contact,
      buttons: [
        { text: "Call Admissions", action: "tel:2059291657", type: "primary" },
        { text: "Email Admissions", action: "mailto:admissions@miles.edu" },
        { text: "Apply Online", action: "https://myexperience.miles.edu" },
      ],
    },

    // Athletics
    athletics: {
      message: KNOWLEDGE_BASE.athletics,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },

    // About
    about: {
      message: KNOWLEDGE_BASE.about,
      buttons: [
        { text: "Schedule a Visit", action: "visits" },
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
      ],
    },
  }

  return responses[intent] || { message: "" }
}

async function checkDGXConnection(): Promise<boolean> {
  if (lastHealthCheck && Date.now() - lastHealthCheck.timestamp < HEALTH_CHECK_CACHE_MS) {
    return lastHealthCheck.success
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(`${DGX_API_URL}/models`, {
      method: "GET",
      headers: AI_API_KEY ? { Authorization: `Bearer ${AI_API_KEY}` } : {},
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    const success = response.ok
    lastHealthCheck = { success, timestamp: Date.now() }
    return success
  } catch (error) {
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

    // Check for rule-based response first
    const intent = detectIntent(message)

    if (intent) {
      const ruleResponse = getRuleBasedResponse(intent, persona)
      if (ruleResponse.message) {
        return NextResponse.json({
          ...ruleResponse,
          source: "rule-based",
        })
      }
    }

    // Try DGX AI
    const isDGXAvailable = await checkDGXConnection()

    if (!isDGXAvailable) {
      return NextResponse.json({
        message: `I'd be happy to help! Here's some quick information:

**Apply to Miles College:**
myexperience.miles.edu (FREE - no application fee!)

**FAFSA School Code:** 001028

**Contact Admissions:**
Phone: (205) 929-1657
Email: admissions@miles.edu

**Quick Facts:**
- 30+ degree programs
- 17:1 student-faculty ratio
- Tuition: $9,500/semester
- The ONLY 4-year HBCU in Birmingham!

What specific question can I help you with?`,
        isOffline: true,
        buttons: [
          { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
          { text: "Contact Us", action: "tel:2059291657" },
        ],
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

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

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
      throw new Error(`DGX API error: ${response.status}`)
    }

    const data = await response.json()
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
    let errorMessage = "I'm having trouble connecting right now, but I can still help!\n\n"

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        errorMessage = "The AI response took too long. Please try a simpler question or contact us directly."
      }
    }

    return NextResponse.json(
      {
        error: "AI_CONNECTION_FAILED",
        message:
          errorMessage +
          `**Contact Info:**
- Admissions: (205) 929-1657
- Email: admissions@miles.edu
- Apply: myexperience.miles.edu

**FAFSA Code:** 001028

What would you like to know? I have answers to common questions!`,
        isDGXError: true,
        buttons: [
          { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
          { text: "Call Admissions", action: "tel:2059291657" },
        ],
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
