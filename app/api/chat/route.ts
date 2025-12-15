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
4. Decision typically takes **1-3 weeks** after all documents received

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
**Decision:** Usually 1-3 weeks after complete application`,

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

    adult: `**Adult & Non-Traditional Students:**

Miles College welcomes adult learners and non-traditional students!

**You Are Welcome If You:**
- Have been out of school for years
- Are returning after starting elsewhere
- Work full-time
- Have family responsibilities

**What You Need:**
- Completed application at myexperience.miles.edu
- High school transcript or GED
- College transcripts (if applicable)
- FAFSA completion

**Support Available:**
- Flexible scheduling
- Evening/weekend options
- Understanding advisors
- Financial aid eligibility

Your age is just a number - pursue your goals!`,

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

    update: `**Update Your Application:**

Made a mistake or need to change something?

**Contact Admissions:**
- Phone: (205) 929-1657
- Email: admissions@miles.edu

They will help you make corrections or updates to your application.`,

    online: `**Application Format:**

The application is primarily **online** at myexperience.miles.edu

**Benefits:**
- Quick and easy
- Mobile-friendly
- Secure
- Track status online

**Need a paper application?**
Contact Admissions: (205) 929-1657`,
  },

  // ADMISSION REQUIREMENTS
  requirements: {
    general: `**Required Documents for Admission:**

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

**Recommendation letters:** Not required`,

    gpa: `**GPA Requirements:**
Miles College uses a **holistic review** approach. While we value strong academics, we also consider:
- Leadership experience
- Community involvement
- Personal growth potential
- Extracurricular activities

**Don't have a perfect GPA?** Apply anyway! We believe in student potential.
Contact admissions to discuss your specific situation: (205) 929-1657`,

    testScores: `**ACT/SAT - NOT Required!**

Great news: Miles College is **test-optional**!

**If you have scores:** Submit them - they may help with scholarships
**No scores?** Take our **FREE placement test** instead

**To schedule placement test:**
Contact Admissions or Academic Affairs at (205) 929-1000

The placement test helps us place you in the right courses.`,

    placementTest: `**Placement Test Information:**

Some students may be required to take a placement test for course placement.

**Test Covers:**
- Math skills
- Reading comprehension
- Writing assessment
- Takes about 2-3 hours

**How to Schedule:**
The Admissions or Academic Affairs Office will provide instructions if testing is required.

Contact: (205) 929-1000`,

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

    recommendation: `**Recommendation Letters:**

Recommendation letters are **NOT required** for admission to Miles College.

However, if you'd like to include them, they can strengthen your application. Letters from teachers, counselors, or community leaders who know you well are most valuable.`,
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
- Must be OFFICIAL (sealed/stamped) for final enrollment
- Unofficial accepted initially
- Allow 5-10 business days to process
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
**Processing:** 5-10 business days

**Not showing after 2 weeks?** Call (205) 929-1657`,

    processing: `**Transcript Processing:**

**Timeline:** 5-10 business days after receipt

**Not showing in portal?**
1. Confirm transcript was sent
2. Wait full 10 business days
3. Contact admissions: (205) 929-1657

**Unofficial transcripts:** Accepted initially, but official required for final enrollment`,

    email: `**Can I Email My Transcript?**

Official transcripts should come directly from the institution when possible.

**Best Methods:**
- Electronic delivery (Parchment, school system)
- Mailed directly from school (sealed)

Contact Admissions if you have questions: (205) 929-1657`,

    parchment: `**Parchment Transcripts:**

Yes! Miles College accepts Parchment.

Have your high school or college send your transcript through Parchment to the Miles College Admissions Office.`,

    unofficial: `**Unofficial Transcripts:**

Unofficial transcripts may be used **temporarily** for admission review.

However, **official transcripts are required** for:
- Final enrollment
- Credit evaluation (transfers)
- Scholarship processing

Submit official copies as soon as possible.`,
  },

  // FINANCIAL AID & FAFSA
  fafsa: `**FAFSA - Your Key to Financial Aid!**

**Website:** studentaid.gov
**Miles College Code:** **001028** (You need this!)

**When to File:**
- Opens October 1st each year
- File ASAP for best aid package!
- Priority consideration for early filers

**What You Need:**
- FSA ID (create at studentaid.gov)
- Social Security Number
- Federal tax returns (or estimates)
- Records of untaxed income

**Parent Information:**
- Most students under 24 need parent info
- Parents won't help? Contact Financial Aid for options
- Independent? You may qualify if 24+, married, veteran, or have dependents

**Processing Time:** 3-10 days electronically

**Questions?** Financial Aid: (205) 929-1665`,

  fafsaCode: `**Miles College FAFSA Code:**

**001028**

Enter this code when completing your FAFSA at studentaid.gov to ensure Miles College receives your information.`,

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

  fafsaMissed: `**Missed the FAFSA Deadline?**

You can still apply! However, aid availability may be limited.

**Do This:**
1. Complete FAFSA ASAP at studentaid.gov
2. Use Miles College code: 001028
3. Contact Financial Aid: (205) 929-1665

We'll work with you to explore all available options.`,

  fafsaReceived: `**How to Know if FAFSA Was Received:**

1. Check your FAFSA confirmation at studentaid.gov
2. Log in to your Miles College student portal
3. Contact Financial Aid: (205) 929-1665

Allow 3-10 days for processing after submission.`,

  paymentPlan: `**Payment Plans:**

Yes! Miles College offers payment plans.

**Contact Business Office:**
Phone: (205) 929-1000

They can explain options for spreading payments over the semester.`,

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
- Many are reviewed AUTOMATICALLY after admission and FAFSA completion
- Some require separate applications
- Athletic/Band - contact coaches directly

**Eligibility:**
- GPA requirements vary by scholarship
- Test scores can help but not always required
- Must maintain GPA to renew

**Good to Know:**
- Transfer students ARE eligible!
- Adult students CAN qualify!
- Some scholarships can be combined

**Timeline:** Decisions usually come with or shortly after admission

Contact Financial Aid: (205) 929-1665`,

  scholarshipGPA: `**Scholarship GPA Requirements:**

Some scholarships have GPA requirements, which vary by scholarship type.

**Good to know:**
- Academic scholarships typically require higher GPAs
- Many scholarships require maintaining GPA to renew
- GPA requirements are clearly stated for each scholarship

Contact Financial Aid for specific requirements: (205) 929-1665`,

  scholarshipRenewable: `**Are Scholarships Renewable?**

Most Miles College scholarships are **renewable** with academic requirements.

**Typical Requirements:**
- Maintain required GPA
- Full-time enrollment
- Good academic standing

Check specific scholarship terms for exact renewal criteria.`,

  // HOUSING & CAMPUS LIFE - Updated with 2024-2025 rates
  housing: `**Campus Housing (2024-2025):**

**How to Apply:**
1. Log in to student portal
2. Complete housing application
3. Pay $300 housing deposit
4. Submit medical forms & shot records
5. Receive room assignment

**Room Rates (per semester):**
- Standard Room: $3,250
- Suite (Washington/Alumni Hall): $3,750
- Apartment Style (Alumni Hall): $4,250

**What's Included:** Bed, desk, dresser, closet
**You Bring:** Bedding, personal items, decorations

**Deadlines:** Apply early - rooms fill fast!
**Co-ed?** Separate male and female buildings/floors

Housing Office: (205) 929-1000`,

  housingGuaranteed: `**Is Housing Guaranteed?**

Housing is based on **availability** and is not guaranteed.

**Tips to Secure Housing:**
- Apply early
- Pay deposit promptly ($300)
- Submit all required documents
- Respond quickly to housing communications

Contact Housing: (205) 929-1000`,

  housingDeadline: `**Housing Deadlines:**

Deadlines vary by semester. Apply early for best selection!

**To Apply:**
1. Log in to student portal
2. Complete housing application
3. Pay $300 deposit

Contact Housing Office: (205) 929-1000`,

  mealPlans: `**Meal Plans (2024-2025):**

All on-campus residents must have a meal plan.

**Options:**
- 19 Meal Plan: $2,800
- 14 Meal Plan: $2,600
- 7 Meal Plan: $1,900

**Dining:** Main cafeteria + campus eateries

Contact Business Office: (205) 929-1000`,

  offCampus: `**Living Off Campus:**

**Freshmen:** Encouraged to live on campus but NOT required

**You May Live Off Campus If:**
- You commute from home
- Have family responsibilities
- Prefer off-campus housing

**Benefits of On-Campus:**
- Walking distance to classes
- Campus community experience
- Meal plan convenience
- Support services nearby

Questions? Housing: (205) 929-1000`,

  dormInfo: `**What's in the Dorm Rooms:**

**Provided:**
- Bed frame and mattress
- Desk and chair
- Dresser/storage
- Closet space
- Basic furniture

**You Bring:**
- Bedding (twin XL sheets)
- Pillows and blankets
- Personal items
- Decorations
- School supplies

**Room Types:**
- Standard rooms
- Suite-style
- Apartment-style (select halls)`,

  // ACADEMICS & MAJORS - Updated with current info
  programs: `**Academic Programs at Miles College:**

**28 Majors in 5 Divisions:**

**Business & Accounting:**
Business Administration, Accounting, Marketing, Management Information Systems

**Education:**
Early Childhood, Elementary, Secondary, Special Education

**Humanities:**
English, Communications/Mass Media, Music, Philosophy & Religion, Visual & Performing Arts

**Natural Sciences & Mathematics:**
Biology (Pre-Med track), Chemistry, Mathematics, Computer Science, Environmental Science

**Social & Behavioral Sciences:**
Criminal Justice, History, Political Science, Psychology, Social Work, Sociology

**Special Programs:**
- Honors Program
- Pre-Law Track
- Pre-Med Track
- Study Abroad
- Internships through Career Services

**Class Size:** 17:1 student-faculty ratio
**Online:** Some courses available`,

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

  online: `**Online Programs:**

Miles College offers **some courses and programs online**.

**Also Available:**
- Evening classes (select programs)
- Weekend options (select programs)
- Hybrid courses

Contact Academic Affairs for current online offerings: (205) 929-1000`,

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

  internships: `**Internships:**

Yes! Miles College offers internships through Career Services.

**Benefits:**
- Real-world experience
- Professional connections
- Resume building
- Potential job opportunities

Contact Career Services to explore options.`,

  undeclared: `**Undeclared Major:**

Not sure what to study? That's okay!

You can:
- Enter undeclared and explore
- Take general education courses
- Meet with advisors to discover interests
- Declare a major when ready

Our advisors help you find your path!`,

  // TRANSFER & CREDITS
  transfer: `**Transfer Students:**

**We Welcome Transfers!**

**Credit Evaluation:**
- Credits from accredited institutions
- Evaluated after admission
- Generally C or better transfers
- Course-by-course review

**Requirements:**
- Typically 2.0+ GPA (holistic review applies)
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

  ferpa: `**FERPA & Parent Access:**

Due to federal privacy law (FERPA), student information is protected.

**Parents can access information if:**
- Student provides written consent
- Student authorizes access through Registrar

Contact the Registrar's Office to set up authorized access.`,

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

  firstGeneration: `**First-Generation Students:**

Miles College provides special support for first-generation college students!

**Resources:**
- Dedicated advisors
- Mentoring programs
- Academic support
- Financial aid guidance
- Campus community

You're not alone - we're here to help you succeed!`,

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

  studentId: `**Getting Your Student ID:**

Your student ID number is provided after admission via OneLogin.

**How to Get It:**
1. Complete admission process
2. Pay required fees
3. Check your email for login credentials
4. Access student portal

**Problems?** Contact Admissions: (205) 929-1657`,

  studentEmail: `**Student Email:**

Your student email is provided after admission.

**Format:** firstnamelastname@students.miles.edu

**Access:** Through OneLogin portal

**Not received?** Contact IT Help Desk or Admissions: (205) 929-1657`,

  onelogin: `**What is OneLogin?**

OneLogin is the secure system for accessing all student tools:
- Student portal
- Email
- Class registration
- Financial aid
- Academic records

Login credentials provided after admission and fee payment.`,

  passwordReset: `**Password Reset:**

**To reset your password:**
1. Go to the login page
2. Click "Forgot Password"
3. Follow email instructions

**Still can't access?**
Contact IT Help Desk or Admissions: (205) 929-1657`,

  portalActivation: `**When Will My Portal Be Activated?**

Portal activation typically happens within 24-48 hours after:
- Admission acceptance
- Required fees paid

**Didn't receive login info?**
- Check spam/junk folder
- Contact Admissions: (205) 929-1657`,

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

**Dates:** Sent after admission (usually summer for fall semester)

**Cost:** $150 orientation fee (one-time)

**Virtual Option:** May be available - ask admissions

**Missed Orientation?**
Contact admissions IMMEDIATELY: (205) 929-1657

**Registration:**
- Happens during orientation
- Advisor helps select courses
- Also available through portal after`,

  orientationMissed: `**Missed Orientation?**

Contact Admissions IMMEDIATELY: (205) 929-1657

They will help you:
- Complete required steps
- Register for classes
- Get set up for the semester

Don't delay - reach out right away!`,

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

**Virtual Registration:** May be available - ask admissions

**Need Help?**
Contact your advisor or Registrar's Office`,

  classStart: `**Academic Calendar:**

**Fall Semester:** Late August start
**Spring Semester:** Mid-January start
**Summer Sessions:** May/June

Check miles.edu for specific dates each year.`,

  fees: `**Fees Before Registration:**

Before registering, you may need to pay:
- Orientation fee ($150 for new students)
- Housing deposit ($300 if living on campus)
- Enrollment/registration fees

Contact Business Office for specific requirements: (205) 929-1000`,

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

  advising: `**Academic Advising:**

Yes! Academic advising is available to all students.

**Your advisor helps with:**
- Course selection
- Degree planning
- Major decisions
- Academic goals

Meet with your advisor each semester before registration.`,

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

  career: `**Career Services:**

Yes! Career Services is available to all students.

**Services:**
- Career counseling
- Resume and cover letter help
- Interview preparation
- Internship placement
- Job fairs and networking events

Start exploring careers early!`,

  childcare: `**Childcare:**

Miles College does not have on-campus childcare facilities.

**However:**
- Contact Student Affairs for local childcare resources
- FAFSA may include childcare in cost of attendance
- Flexible scheduling may help

Many student-parents succeed at Miles!`,

  organizations: `**Student Organizations:**

Miles College has 50+ student organizations!

**Categories:**
- Academic/Professional clubs
- Greek Life (fraternities & sororities)
- Student Government
- Campus Ministries
- Service organizations
- Special interest groups
- Intramural sports

Get involved and make connections!`,

  mentoring: `**Mentoring Programs:**

Yes! Miles College offers mentoring programs.

**Benefits:**
- Guidance from upperclassmen
- Faculty mentorship
- Professional connections
- Support network

Ask Student Affairs about current programs.`,

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

  virtualTour: `**Virtual Tours:**

Yes! Virtual tour options are available.

Contact Admissions to schedule:
Phone: (205) 929-1657
Email: admissions@miles.edu`,

  groupVisit: `**Group Visits:**

Yes! We welcome group visits from:
- High schools
- Churches
- Community organizations

Contact Admissions to schedule:
Phone: (205) 929-1657
Email: admissions@miles.edu`,

  highSchoolVisit: `**High School Visits:**

Yes! Miles College visits high schools for recruitment.

Contact your school counselor or:
Admissions: (205) 929-1657
Email: admissions@miles.edu`,

  events: `**Upcoming Events:**

Miles College hosts Preview Days, Open Houses, and special admissions events throughout the year.

**Stay Informed:**
- Check miles.edu for event calendar
- Follow Miles College on social media
- Contact Admissions: (205) 929-1657`,

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

  readmission: `**Readmission (Returning Students):**

If you previously attended Miles College and want to return:

1. Contact Admissions about readmission process
2. Clear any holds on your account
3. Submit updated documents if needed
4. Complete FAFSA

Phone: (205) 929-1657
Email: admissions@miles.edu`,

  // COSTS - Updated 2024-2025
  costs: `**2024-2025 Costs:**

**Comprehensive Fee (per semester):** $12,940
Includes: Tuition, general, technology, student activity, insurance, library, and athletic fees

**Housing (per semester):**
- Standard Room: $3,250
- Suite: $3,750
- Apartment Style: $4,250

**Meal Plans (per semester):**
- 19 Meal Plan: $2,800
- 14 Meal Plan: $2,600
- 7 Meal Plan: $1,900

**Most Students Pay Less After Aid!**
Complete FAFSA (Code: 001028) to see your actual cost.

Financial Aid: (205) 929-1665
Business Office: (205) 929-1000`,

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
- 28 majors offered
- 17:1 student-faculty ratio
- NCAA Division II athletics (SIAC)
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
      "admissions process",
    ],
    applicationFee: ["application fee", "cost to apply", "pay to apply", "fee to apply", "free to apply"],
    applicationDeadline: ["deadline", "when apply", "last day to apply", "application deadline", "too late to apply"],
    applicationStatus: [
      "application status",
      "am i accepted",
      "did i get in",
      "acceptance",
      "check status",
      "hear back",
      "decision",
      "how long",
      "admission decision",
    ],
    nextSteps: ["accepted", "what now", "what's next", "next steps", "got in", "i'm in", "admitted", "i applied"],
    lateApplication: ["late application", "apply late", "missed deadline", "still apply", "rolling"],
    updateApplication: [
      "update application",
      "change application",
      "mistake on application",
      "fix application",
      "error on application",
      "made a mistake",
    ],
    noSSN: ["no ssn", "without social security", "social security number", "no social"],
    adultStudent: ["adult student", "non-traditional", "older student", "returning to school", "going back to school"],
    alreadyGraduated: ["already graduated", "graduated high school", "after graduation"],

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
      "test optional",
    ],
    placementTest: ["placement test", "placement exam", "schedule test", "take test", "testing required"],
    requirements: [
      "requirements",
      "what do i need",
      "documents required",
      "admission requirements",
      "need to apply",
      "what documents",
    ],
    ged: ["ged", "no diploma", "no high school", "equivalency", "general education diploma"],
    homeschool: ["homeschool", "home school", "homeschooled", "home-school"],
    international: ["international", "from another country", "foreign student", "visa", "i-20", "overseas"],
    dualEnrollment: ["dual enrollment", "dual credit", "college credit high school"],
    recommendation: ["recommendation", "letters of rec", "letter of recommendation"],

    // Transcripts
    transcript: ["transcript", "send grades", "official transcript", "send transcript", "grades sent"],
    transcriptHighSchool: ["high school transcript", "hs transcript", "secondary transcript"],
    transcriptCollege: ["college transcript", "previous college", "transfer transcript", "university transcript"],
    parchment: ["parchment"],
    transcriptProcessing: [
      "transcript processing",
      "how long transcript",
      "transcript received",
      "transcript showing",
      "transcript not showing",
    ],
    transcriptEmail: ["email transcript", "send transcript email"],
    transcriptUnofficial: ["unofficial transcript"],

    // Financial Aid & FAFSA
    fafsa: ["fafsa", "financial aid application", "apply for aid", "file fafsa", "complete fafsa"],
    fafsaCode: ["school code", "fafsa code", "college code", "001028", "miles code"],
    fafsaParents: [
      "parent fafsa",
      "parents won't",
      "parent information",
      "parent tax",
      "dependent",
      "independent student",
    ],
    fafsaMissed: ["missed fafsa", "fafsa deadline", "late fafsa"],
    fafsaReceived: ["fafsa received", "fafsa processed", "know if fafsa"],
    financialAid: [
      "financial aid",
      "money for college",
      "afford college",
      "pay for college",
      "aid available",
      "grants",
      "loans",
      "what aid",
    ],
    scholarships: [
      "scholarship",
      "scholarships",
      "free money",
      "merit aid",
      "academic scholarship",
      "athletic scholarship",
      "scholarship available",
    ],
    scholarshipGPA: ["scholarship gpa", "gpa for scholarship"],
    scholarshipRenewable: ["scholarship renewable", "renew scholarship", "keep scholarship"],
    paymentPlan: ["payment plan", "pay over time", "installments", "monthly payment"],

    // Costs
    costs: ["cost", "tuition", "how much", "price", "afford", "expensive", "fees", "total cost", "semester cost"],

    // Housing
    housing: [
      "housing",
      "dorm",
      "residence hall",
      "live on campus",
      "room",
      "roommate",
      "on-campus housing",
      "campus housing",
    ],
    housingGuaranteed: ["housing guaranteed", "guaranteed housing"],
    housingDeadline: ["housing deadline", "housing application deadline"],
    mealPlan: ["meal plan", "food", "cafeteria", "dining", "eat on campus", "meals"],
    offCampus: ["off campus", "off-campus", "live at home", "commuter", "apartment", "live off"],
    dormInfo: ["dorm room", "what's in dorm", "dorm furniture", "residence hall room", "co-ed"],

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
      "what majors",
    ],
    changeMajor: ["change major", "switch major", "different major"],
    online: ["online", "virtual", "remote", "distance", "online classes", "hybrid", "evening", "weekend"],
    classSize: ["class size", "how many students", "student faculty ratio", "small classes"],
    tutoring: [
      "tutoring",
      "tutor",
      "help with classes",
      "academic help",
      "study help",
      "writing center",
      "math lab",
      "academic support",
    ],
    internships: ["internship", "work experience", "job training", "hands-on"],
    undeclared: ["undeclared", "don't know major", "not sure what to study"],
    advising: ["advising", "advisor", "academic advisor"],

    // Transfer
    transfer: [
      "transfer",
      "from another college",
      "community college",
      "transfer credits",
      "credits transfer",
      "transfer student",
      "how many credits",
    ],
    creditEvaluation: ["credits evaluate", "how many credits", "credits count", "credits accepted"],

    // Parents
    parents: ["parent", "family", "mom", "dad", "guardian", "pay tuition", "parent information", "for parents"],
    ferpa: ["ferpa", "parent access", "access student information"],
    safety: ["safe", "safety", "security", "campus security", "crime", "secure"],
    firstGeneration: ["first generation", "first gen", "first in family"],

    // Portal & Tech
    portal: ["portal", "login", "sign in", "onelogin", "student portal", "access account", "log in"],
    studentId: ["student id", "id number", "student number", "miles id"],
    studentEmail: ["student email", "email address", "my email"],
    onelogin: ["onelogin", "one login"],
    passwordReset: ["reset password", "forgot password", "password help", "can't login", "can't log in"],
    portalActivation: ["portal activated", "when portal", "portal access"],

    // Orientation & Registration
    orientation: ["orientation", "new student orientation", "mandatory orientation", "is orientation required"],
    orientationMissed: ["missed orientation", "miss orientation"],
    registration: [
      "register for classes",
      "registration",
      "enroll in classes",
      "sign up for classes",
      "class schedule",
      "how to register",
    ],
    classStart: ["when do classes", "classes start", "semester start", "when does school", "first day"],
    fees: ["fees before", "registration fees", "what fees"],

    // Support Services
    support: ["support", "help", "services available", "resources", "student services"],
    advising2: ["academic advising", "advisor help"],
    mentalHealth: ["counseling", "mental health", "therapy", "stress", "anxiety", "depression"],
    disability: ["disability", "ada", "accommodation", "special needs", "learning disability"],
    career: ["career services", "job help", "resume", "career counseling"],
    childcare: ["childcare", "child care", "daycare"],
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
    mentoring: ["mentoring", "mentor"],

    // Campus Visits
    visits: ["visit", "tour", "campus tour", "see campus", "come to campus"],
    virtualTour: ["virtual tour", "online tour"],
    groupVisit: ["group visit", "school visit", "church visit"],
    highSchoolVisit: ["high school visit", "visit high school"],
    events: ["events", "open house", "preview day"],

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
      "time away",
    ],
    workFullTime: ["work full time", "working", "have a job", "full time job", "employed", "work while"],
    haveKids: [
      "have kids",
      "children",
      "single parent",
      "parent student",
      "mom going to college",
      "dad going to college",
    ],
    oweOtherSchool: ["owe another school", "balance at", "hold at", "owe money", "debt at previous"],
    denied: ["denied", "rejected", "not accepted", "reapply", "turned down"],
    waitlisted: ["waitlist", "wait list", "waitlisted"],
    missingDocuments: ["missing documents", "don't have documents", "can't get transcript", "document issues"],
    readmission: ["readmission", "re-admission", "returning student", "come back"],

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
      "emergency",
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
      "athletic scholarship",
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
- 28 majors across 5 divisions
- 17:1 student-faculty ratio
- NCAA Division II athletics (Golden Bears, SIAC Conference)
- Comprehensive Fee: $12,940/semester (2024-2025)
- Housing: $3,250-$4,250/semester
- Meal Plans: $1,900-$2,800/semester
- Application portal: myexperience.miles.edu
- FAFSA School Code: 001028
- NO APPLICATION FEE - completely free to apply!
- Rolling admissions - apply anytime!
- Test-optional (no ACT/SAT required)
- Admissions: (205) 929-1657 / admissions@miles.edu
- Financial Aid: (205) 929-1665 / financialaid@miles.edu
- Business Office: (205) 929-1000
- Address: 5500 Myron Massey Blvd, Fairfield, AL 35064

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
      message:
        KNOWLEDGE_BASE.apply[persona === "transfer" ? "transfer" : persona === "parent" ? "general" : "freshman"],
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
- Complete FAFSA early for best aid
- Submit documents promptly

**Decision Time:** 1-3 weeks after complete application`,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    applicationStatus: {
      message: `**Check Your Application Status:**

1. Log in at myexperience.miles.edu
2. View your application dashboard
3. Check for missing documents
4. Monitor your email for updates

**Decision Timeline:** 1-3 weeks after all documents received

**Questions?** Call Admissions: (205) 929-1657`,
      buttons: [
        { text: "Check My Status", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Contact Admissions", action: "contact" },
      ],
    },
    nextSteps: {
      message: KNOWLEDGE_BASE.apply.nextSteps,
      buttons: [
        { text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "Apply for Housing", action: "housing" },
      ],
    },
    lateApplication: {
      message: KNOWLEDGE_BASE.apply.late,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    updateApplication: {
      message: KNOWLEDGE_BASE.apply.update,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657", type: "primary" }],
    },
    noSSN: {
      message: KNOWLEDGE_BASE.apply.noSSN,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657", type: "primary" }],
    },
    adultStudent: {
      message: KNOWLEDGE_BASE.apply.adult,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    alreadyGraduated: {
      message: `**Already Graduated High School?**

Yes, you can still apply! You're eligible to apply as:
- First-time freshman (if never attended college)
- Transfer student (if attended another college)

Apply at myexperience.miles.edu`,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },

    // Requirements responses
    gpaRequirement: {
      message: KNOWLEDGE_BASE.requirements.gpa,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    testScores: {
      message: KNOWLEDGE_BASE.requirements.testScores,
      buttons: [{ text: "Apply (Test Optional)", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    placementTest: {
      message: KNOWLEDGE_BASE.requirements.placementTest,
      buttons: [{ text: "Contact for Scheduling", action: "tel:2059291000" }],
    },
    requirements: {
      message: KNOWLEDGE_BASE.requirements.general,
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
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },
    international: {
      message: KNOWLEDGE_BASE.requirements.international,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },
    dualEnrollment: {
      message: KNOWLEDGE_BASE.requirements.dualEnrollment,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    recommendation: {
      message: KNOWLEDGE_BASE.requirements.recommendation,
    },

    // Transcript responses
    transcript: {
      message: KNOWLEDGE_BASE.transcript.highschool,
      buttons: [{ text: "Check Application Status", action: "https://myexperience.miles.edu" }],
    },
    transcriptHighSchool: {
      message: KNOWLEDGE_BASE.transcript.highschool,
    },
    transcriptCollege: {
      message: KNOWLEDGE_BASE.transcript.college,
    },
    parchment: {
      message: KNOWLEDGE_BASE.transcript.parchment,
    },
    transcriptProcessing: {
      message: KNOWLEDGE_BASE.transcript.processing,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },
    transcriptEmail: {
      message: KNOWLEDGE_BASE.transcript.email,
    },
    transcriptUnofficial: {
      message: KNOWLEDGE_BASE.transcript.unofficial,
    },

    // FAFSA & Financial Aid responses
    fafsa: {
      message: KNOWLEDGE_BASE.fafsa,
      buttons: [
        { text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },
    fafsaCode: {
      message: KNOWLEDGE_BASE.fafsaCode,
      buttons: [{ text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" }],
    },
    fafsaParents: {
      message: KNOWLEDGE_BASE.fafsaParents,
      buttons: [{ text: "Contact Financial Aid", action: "tel:2059291665" }],
    },
    fafsaMissed: {
      message: KNOWLEDGE_BASE.fafsaMissed,
      buttons: [{ text: "Complete FAFSA Now", action: "https://studentaid.gov", type: "primary" }],
    },
    fafsaReceived: {
      message: KNOWLEDGE_BASE.fafsaReceived,
    },
    financialAid: {
      message: KNOWLEDGE_BASE.financialAid,
      buttons: [
        { text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },
    scholarships: {
      message: KNOWLEDGE_BASE.scholarships,
      buttons: [{ text: "Contact Financial Aid", action: "tel:2059291665" }],
    },
    scholarshipGPA: {
      message: KNOWLEDGE_BASE.scholarshipGPA,
    },
    scholarshipRenewable: {
      message: KNOWLEDGE_BASE.scholarshipRenewable,
    },
    paymentPlan: {
      message: KNOWLEDGE_BASE.paymentPlan,
      buttons: [{ text: "Contact Business Office", action: "tel:2059291000" }],
    },

    // Costs
    costs: {
      message: KNOWLEDGE_BASE.costs,
      buttons: [
        { text: "Complete FAFSA", action: "https://studentaid.gov", type: "primary" },
        { text: "Contact Financial Aid", action: "tel:2059291665" },
      ],
    },

    // Housing responses
    housing: {
      message: KNOWLEDGE_BASE.housing,
      buttons: [{ text: "Contact Housing", action: "tel:2059291000" }],
    },
    housingGuaranteed: {
      message: KNOWLEDGE_BASE.housingGuaranteed,
    },
    housingDeadline: {
      message: KNOWLEDGE_BASE.housingDeadline,
    },
    mealPlan: {
      message: KNOWLEDGE_BASE.mealPlans,
      buttons: [{ text: "Contact Business Office", action: "tel:2059291000" }],
    },
    offCampus: {
      message: KNOWLEDGE_BASE.offCampus,
    },
    dormInfo: {
      message: KNOWLEDGE_BASE.dormInfo,
    },

    // Academic responses
    programs: {
      message: KNOWLEDGE_BASE.programs,
      buttons: [{ text: "Explore Programs", action: "https://miles.edu/programs" }],
    },
    changeMajor: {
      message: KNOWLEDGE_BASE.changeMajor,
    },
    online: {
      message: KNOWLEDGE_BASE.online,
    },
    classSize: {
      message: KNOWLEDGE_BASE.classSize,
    },
    tutoring: {
      message: KNOWLEDGE_BASE.tutoring,
    },
    internships: {
      message: KNOWLEDGE_BASE.internships,
    },
    undeclared: {
      message: KNOWLEDGE_BASE.undeclared,
    },
    advising: {
      message: KNOWLEDGE_BASE.advising,
    },
    advising2: {
      message: KNOWLEDGE_BASE.advising,
    },

    // Transfer responses
    transfer: {
      message: KNOWLEDGE_BASE.transfer,
      buttons: [{ text: "Apply as Transfer", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    creditEvaluation: {
      message: KNOWLEDGE_BASE.creditEvaluation,
    },

    // Parent responses
    parents: {
      message: KNOWLEDGE_BASE.parents,
    },
    ferpa: {
      message: KNOWLEDGE_BASE.ferpa,
    },
    safety: {
      message: KNOWLEDGE_BASE.safety,
    },
    firstGeneration: {
      message: KNOWLEDGE_BASE.firstGeneration,
    },

    // Portal responses
    portal: {
      message: KNOWLEDGE_BASE.portal,
      buttons: [{ text: "Access Portal", action: "https://myexperience.miles.edu" }],
    },
    studentId: {
      message: KNOWLEDGE_BASE.studentId,
    },
    studentEmail: {
      message: KNOWLEDGE_BASE.studentEmail,
    },
    onelogin: {
      message: KNOWLEDGE_BASE.onelogin,
    },
    passwordReset: {
      message: KNOWLEDGE_BASE.passwordReset,
      buttons: [{ text: "Contact Help", action: "tel:2059291657" }],
    },
    portalActivation: {
      message: KNOWLEDGE_BASE.portalActivation,
    },

    // Orientation responses
    orientation: {
      message: KNOWLEDGE_BASE.orientation,
    },
    orientationMissed: {
      message: KNOWLEDGE_BASE.orientationMissed,
      buttons: [{ text: "Call Admissions Now", action: "tel:2059291657", type: "primary" }],
    },
    registration: {
      message: KNOWLEDGE_BASE.registration,
    },
    classStart: {
      message: KNOWLEDGE_BASE.classStart,
    },
    fees: {
      message: KNOWLEDGE_BASE.fees,
    },

    // Support responses
    support: {
      message: KNOWLEDGE_BASE.support,
    },
    mentalHealth: {
      message: KNOWLEDGE_BASE.mentalHealth,
    },
    disability: {
      message: KNOWLEDGE_BASE.disability,
    },
    career: {
      message: KNOWLEDGE_BASE.career,
    },
    childcare: {
      message: KNOWLEDGE_BASE.childcare,
    },
    organizations: {
      message: KNOWLEDGE_BASE.organizations,
    },
    mentoring: {
      message: KNOWLEDGE_BASE.mentoring,
    },

    // Visit responses
    visits: {
      message: KNOWLEDGE_BASE.visits,
      buttons: [
        { text: "Schedule a Tour", action: "tel:2059291657", type: "primary" },
        { text: "Email Admissions", action: "mailto:admissions@miles.edu" },
      ],
    },
    virtualTour: {
      message: KNOWLEDGE_BASE.virtualTour,
    },
    groupVisit: {
      message: KNOWLEDGE_BASE.groupVisit,
    },
    highSchoolVisit: {
      message: KNOWLEDGE_BASE.highSchoolVisit,
    },
    events: {
      message: KNOWLEDGE_BASE.events,
    },

    // Special situation responses
    nervous: {
      message: KNOWLEDGE_BASE.nervous,
    },
    outOfSchool: {
      message: KNOWLEDGE_BASE.outOfSchool,
      buttons: [{ text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    workFullTime: {
      message: KNOWLEDGE_BASE.workFullTime,
    },
    haveKids: {
      message: KNOWLEDGE_BASE.haveKids,
    },
    oweOtherSchool: {
      message: KNOWLEDGE_BASE.oweOtherSchool,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },
    denied: {
      message: KNOWLEDGE_BASE.denied,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },
    waitlisted: {
      message: KNOWLEDGE_BASE.waitlisted,
    },
    missingDocuments: {
      message: KNOWLEDGE_BASE.missingDocuments,
      buttons: [{ text: "Start Application", action: "https://myexperience.miles.edu", type: "primary" }],
    },
    readmission: {
      message: KNOWLEDGE_BASE.readmission,
      buttons: [{ text: "Contact Admissions", action: "tel:2059291657" }],
    },

    // Contact
    contact: {
      message: KNOWLEDGE_BASE.contact,
      buttons: [
        { text: "Call Admissions", action: "tel:2059291657", type: "primary" },
        { text: "Email Admissions", action: "mailto:admissions@miles.edu" },
      ],
    },

    // Athletics
    athletics: {
      message: KNOWLEDGE_BASE.athletics,
    },

    // About
    about: {
      message: KNOWLEDGE_BASE.about,
      buttons: [
        { text: "Apply Now", action: "https://myexperience.miles.edu", type: "primary" },
        { text: "Schedule a Visit", action: "tel:2059291657" },
      ],
    },
  }

  return responses[intent] || null
}

async function checkDGXHealth(): Promise<boolean> {
  if (lastHealthCheck && Date.now() - lastHealthCheck.timestamp < HEALTH_CHECK_CACHE_MS) {
    return lastHealthCheck.success
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(`${DGX_API_URL}/models`, {
      method: "GET",
      signal: controller.signal,
      headers: AI_API_KEY ? { Authorization: `Bearer ${AI_API_KEY}` } : {},
    })

    clearTimeout(timeoutId)
    const success = response.ok

    lastHealthCheck = { success, timestamp: Date.now() }
    return success
  } catch {
    lastHealthCheck = { success: false, timestamp: Date.now() }
    return false
  }
}

export async function POST(req: Request) {
  try {
    const { message, persona } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Try rule-based response first
    const intent = detectIntent(message)
    if (intent) {
      const ruleResponse = getRuleBasedResponse(intent, persona)
      if (ruleResponse) {
        return NextResponse.json({
          message: ruleResponse.message,
          buttons: ruleResponse.buttons,
          source: "knowledge_base",
        })
      }
    }

    // Check DGX health before attempting AI response
    const dgxHealthy = await checkDGXHealth()

    if (!dgxHealthy) {
      // Fallback response when DGX is unavailable
      return NextResponse.json({
        message: `I'd be happy to help you with that! While I process your specific question, here are some quick resources:

**Key Contacts:**
- Admissions: (205) 929-1657
- Financial Aid: (205) 929-1665
- Apply: myexperience.miles.edu
- FAFSA Code: 001028

What specific topic can I help you with? Try asking about:
- How to apply
- Financial aid & scholarships
- Housing options
- Academic programs
- Campus visits`,
        buttons: [
          { text: "How to Apply", action: "apply" },
          { text: "Financial Aid", action: "financialAid" },
          { text: "Contact Admissions", action: "tel:2059291657", type: "primary" },
        ],
        source: "fallback",
      })
    }

    // Call DGX Spark AI
    try {
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
          messages: [
            { role: "system", content: getSystemPrompt(persona) },
            { role: "user", content: message },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`DGX API error: ${response.status}`)
      }

      const data = await response.json()
      const aiMessage = data.choices?.[0]?.message?.content || "I apologize, but I couldn't generate a response."

      return NextResponse.json({
        message: aiMessage,
        source: "dgx_ai",
      })
    } catch (aiError) {
      console.error("DGX AI Error:", aiError)

      return NextResponse.json({
        message: `Thank you for your question! For the most accurate information, please contact our team directly:

**Admissions Office**
Phone: (205) 929-1657
Email: admissions@miles.edu

**Financial Aid**
Phone: (205) 929-1665

**Apply Online:** myexperience.miles.edu
**FAFSA Code:** 001028

We're here to help you become a Golden Bear!`,
        buttons: [
          { text: "Call Admissions", action: "tel:2059291657", type: "primary" },
          { text: "Apply Now", action: "https://myexperience.miles.edu" },
        ],
        source: "fallback",
      })
    }
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

export async function GET() {
  const dgxHealthy = await checkDGXHealth()

  return NextResponse.json({
    status: dgxHealthy ? "connected" : "disconnected",
    dgxUrl: DGX_API_URL,
    model: DGX_MODEL,
    timestamp: new Date().toISOString(),
  })
}
