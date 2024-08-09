import Info from '#/components/resume/info';
import ProfileCard from '#/components/resume/profileCard';
import SkillsCard from '#/components/resume/skillsCard';
import OtherSkillsCard from '#/components/resume/otherSkillsCard';
import IntrestCard from '#/components/resume/intrestCard';
import SummeryCard from '#/components/resume/summeryCard';
import ExperienceCard from '#/components/resume/experienceCard';
import CourseCard from '#/components/resume/courseCard';
import EducationCard from '#/components/resume/education';

export default function Home() {

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
      "Passionate software developer and data enthusiast with a solid track record at Nexsales. Skilled in Full-Stack Development, REST API, Data Science, and cloud technologies. Proficient in Python, Docker, Vue.js, and Next.js. A problem-solver excited to explore AI and Data Science.",
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
