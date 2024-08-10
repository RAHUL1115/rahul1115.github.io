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

  const data = {
    jobTitle: "Full stack Developer",
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
    links: [
      { name: "github", url: "https://github.com/rahul1115" },
      { name: "linkedin", url: "https://www.linkedin.com/in/rahul1115/" },
      { name: "webiste", url: "https://amrahul.in/" }
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
      <div className="Googlesans w-[21cm] h-[29.65cm] border bg-white p-4 flex flex-col overflow-hidden">
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl'>Rahul Gupta</h1>
            <p className='text-sm mt-1'>{data.jobTitle}</p>
            <dev className="flex gap-x-2 text-sm">
              {data.links.map(link => (<a className='underline text-blue-500' href={link.url}>{link.name}</a>))}
            </dev>
          </div>
          <div class="text-sm align-right">
            <p>email: rahulgupta89343@gmail.com</p>
            <p>mobile: +91 7021091055</p>
            <p>Mumbai, India</p>
          </div>
        </div>
      </div>
    </>
  )
}
