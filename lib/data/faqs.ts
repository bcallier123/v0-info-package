import type { FAQ } from "@/lib/types"

export const faqs: FAQ[] = [
  // Admissions
  { id: "a1", question: "What are the admission requirements?", answer: "Miles College requires a completed application, official high school transcript (or GED), ACT or SAT scores, and a $25 application fee. Transfer students must also submit official college transcripts from all previously attended institutions.", category: "admissions" },
  { id: "a2", question: "Is there an application fee?", answer: "Yes, the application fee is $25. However, fee waivers are available for students who demonstrate financial need. Contact the Admissions Office for more information.", category: "admissions" },
  { id: "a3", question: "What is the application deadline?", answer: "Miles College operates on a rolling admissions basis, but we recommend applying by May 1 for fall enrollment and November 1 for spring enrollment to ensure priority consideration for housing and scholarships.", category: "admissions" },
  { id: "a4", question: "Can I apply online?", answer: "Yes! You can apply online through our MyExperience portal at myexperience.miles.edu. The online application is free and takes approximately 15-20 minutes to complete.", category: "admissions" },
  { id: "a5", question: "What GPA do I need to be admitted?", answer: "Miles College considers a holistic review of each application. Generally, a minimum 2.0 high school GPA is required, but we consider the full picture including test scores, extracurriculars, and personal essays.", category: "admissions" },
  // Financial Aid
  { id: "f1", question: "How do I apply for financial aid?", answer: "Complete the Free Application for Federal Student Aid (FAFSA) at studentaid.gov using Miles College's school code: 001028. We recommend filing as early as October 1 for the upcoming academic year.", category: "financial-aid" },
  { id: "f2", question: "What is the FAFSA school code for Miles College?", answer: "The Miles College FAFSA school code is 001028. Make sure to include this code when completing your FAFSA to ensure your information is sent to our Financial Aid Office.", category: "financial-aid" },
  { id: "f3", question: "Does 97% of students really receive scholarships?", answer: "Yes! 97% of Miles College students receive some form of financial aid, including scholarships, grants, work-study, and loans. Our Financial Aid Office works with each student to create an affordable package.", category: "financial-aid" },
  { id: "f4", question: "Are there payment plans available?", answer: "Yes, Miles College offers monthly payment plans to help families manage educational costs. Contact the Business Office at (205) 929-1000 for details on available payment options.", category: "financial-aid" },
  // Housing
  { id: "h1", question: "Is on-campus housing required for freshmen?", answer: "Yes, all first-year students under 21 who do not live with a parent or guardian within 50 miles of campus are required to live on campus. This helps build community and supports academic success.", category: "housing" },
  { id: "h2", question: "What residence halls are available?", answer: "Miles College offers several residence halls including Pitts Hall (male), Oliver Hall (female), and New Women's Residence Hall. Each hall features furnished rooms, Wi-Fi, laundry facilities, and common areas.", category: "housing" },
  { id: "h3", question: "Are meal plans required?", answer: "Yes, all residential students are required to have a meal plan. We offer several options ranging from 10 to 19 meals per week, plus dining dollars for flexible eating.", category: "housing" },
  // Academics
  { id: "ac1", question: "How many degree programs does Miles College offer?", answer: "Miles College offers over 30 undergraduate degree programs across five academic divisions: Business & Accounting, Education, Humanities, Natural Sciences & Mathematics, and Social & Behavioral Sciences.", category: "academics" },
  { id: "ac2", question: "Is Miles College accredited?", answer: "Yes, Miles College is accredited by the Southern Association of Colleges and Schools Commission on Colleges (SACSCOC) to award baccalaureate degrees. Several programs hold additional specialized accreditations.", category: "academics" },
  { id: "ac3", question: "What is the student-to-faculty ratio?", answer: "Miles College maintains a 17:1 student-to-faculty ratio, ensuring personalized attention and mentorship. Most classes have fewer than 25 students, creating an intimate learning environment.", category: "academics" },
  // Campus Life
  { id: "c1", question: "What sports teams does Miles College have?", answer: "Miles College competes in the NCAA Division II as a member of the Southern Intercollegiate Athletic Conference (SIAC). We offer football, basketball (men's and women's), baseball, softball, volleyball, cross country, tennis, and track & field.", category: "campus-life" },
  { id: "c2", question: "What student organizations are available?", answer: "Miles College has over 40 student organizations including Greek-letter organizations, honor societies, academic clubs, service organizations, and special interest groups. There is truly something for everyone!", category: "campus-life" },
  { id: "c3", question: "What is the Purple Marching Machine?", answer: "The Purple Marching Machine is Miles College's award-winning marching band, known for electrifying performances at football games, parades, and special events. It's one of the most celebrated HBCU bands in the nation.", category: "campus-life" },
  // General
  { id: "g1", question: "Where is Miles College located?", answer: "Miles College is located in Fairfield, Alabama, just 6 minutes from downtown Birmingham. Our 75-acre campus is easily accessible from I-20/59 and offers a safe, suburban setting with big-city proximity.", category: "general" },
  { id: "g2", question: "When was Miles College founded?", answer: "Miles College was founded in 1898 by the Christian Methodist Episcopal (CME) Church. For over 126 years, we have been dedicated to developing the whole student for success in an ever-evolving world.", category: "general" },
]

export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((f) => f.category === category)
}
