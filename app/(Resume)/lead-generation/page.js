import Info from '#/components/Resume/info';
import ProfileCard from '#/components/Resume/profileCard';
import SkillsCard from '#/components/Resume/skillsCard';
import OtherSkillsCard from '#/components/Resume/otherSkillsCard';
import IntrestCard from '#/components/Resume/intrestCard';
import SummeryCard from '#/components/Resume/summeryCard';
import ExperienceCard from '#/components/Resume/experienceCard';
import CourseCard from '#/components/Resume/courseCard';
import EducationCard from '#/components/Resume/education';

export default function LeadGeneration() {

  const developer = {
    jobTitle: "Full Stack-Developer and Data Analyst",
    skills: [
      { name: "NODE JS", rating: 5 },
      { name: "PYTHON", rating: 4 },
      { name: "REACT & VUE", rating: 4 },
      { name: "HTML, CSS & JS", rating: 4 },
      { name: "BASH", rating: 3 },
      { name: "SQL", rating: 3 },
      { name: "MONGO DB", rating: 3 },
      { name: "POWER BI", rating: 4 },
    ],
    otherSkills: [
      {
        category: "Framework & Libraries",
        names: "React, Vue, Tailwind CSS, Pandas, Numpy, Matplotlib.",
      },
      {
        category: "Tools & Technology",
        names: "Git, Github, Linux, Machin Learning, Data Analytics.",
      },
    ],
    intrest: ["Chess", "Trek", "Traveling"],
    summery:
      "Dynamic professional with lead gen insight, software dev, data analysis skills. Proficient in Full-Stack Dev, REST API, Data Science. Mastery: HubSpot, Apollo, Hunter.io. Adept in B2B strategies, CRM, online lead gen. Eager to apply tech proficiency, nurture biz relations. Open to collaborative ventures for lead gen excellence.",
    courses: [
      {
        name: "Power BI Desktop",
        institution: "Udemy",
        start: "2022/06",
        end: "2022/07",
      },
      {
        name: "Data Science Training",
        institution: "Udemy",
        start: "2022/06",
        end: "2022/07",
      },
      {
        name: "CareerReady Course",
        institution: "Antrang Foundation",
        start: "2022/06",
        end: "2022/08",
      },
      {
        name: "Power BI Desktop",
        institution: "NIIT",
        start: "2018/06",
        end: "2022/01",
      },
    ],
  };

  return (
    <>
      <Info />
      <div className="w-[21cm] h-[29.65cm] border bg-white p-2 flex overflow-hidden">
        <div className="w-[32%] space-y-8">
          {/* Profile */}
          <ProfileCard jobTitle={developer.jobTitle} />
          {/* skills & hobby section */}
          <div className="space-y-8">
            {/* skills */}
            <SkillsCard skills={developer.skills} />
            {/* other skills */}
            <OtherSkillsCard otherSkills={developer.otherSkills} />
            {/* intrest */}
            <IntrestCard intrest={developer.intrest} />
          </div>
        </div>
        <div className="w-[68%] border-l px-2 space-y-10">
          {/* summery */}
          <SummeryCard summery={developer.summery} />
          {/* experience */}
          <ExperienceCard />
          {/* courses & certification */}
          <CourseCard courses={developer.courses} />
          {/* education */}
          <EducationCard />
        </div>
      </div>
    </>
  )
}
