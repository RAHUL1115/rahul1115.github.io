import Info from "#/components/resume/info";
import {About} from '#/components/minimal-resume/about'
import {Experience} from "#/components/minimal-resume/experience";

export default function Home() {
  const data = {
    jobTitle: "Full stack Developer",
    links: [
      { name: "github", url: "https://github.com/rahul1115" },
      { name: "linkedin", url: "https://www.linkedin.com/in/rahul1115/" },
      { name: "webiste", url: "https://amrahul.in/" },
    ],
    experiences: [
      {
        companyName: "Nexsales Solution Pvt Ltd",
        duration: "Oct 2024 - Present",
        title: "Senior Software Engineer 1",
        location: "Mumbai, India",
        description: ["test1", "test2"],
      },
      {
        companyName: "Nexsales Solution Pvt Ltd",
        duration: "Oct 2024 - Present",
        title: "Senior Software Engineer 1",
        location: "Mumbai, India",
        description: ["test1", "test2"],
      },
    ],
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
      <div className="Geomanist w-[21cm] h-[29.65cm] border bg-white p-4 flex space-y-5 flex-col overflow-hidden">
        {/* name */}
        <About data={data} />

        {/* experience */}
        <Experience data={data} />
      </div>
    </>
  );
}
