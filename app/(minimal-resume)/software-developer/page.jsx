import softwareDeveloperData from "./data";
import Info from "#/components/resume/info";
import About from "#/components/minimal-resume/about";
import Summery from "#/components/minimal-resume/summery";
import Skills from "#/components/minimal-resume/skills";
import Experience from "#/components/minimal-resume/experience";
import Courses from "#/components/minimal-resume/courses";

export default function Home() {
  return (
    <>
      <Info />
      <div className="Calibri w-[21cm] h-[29.65cm] border bg-white px-5 py-5 flex space-y-4 flex-col overflow-hidden">

        {/* About */}
        <About
          name={softwareDeveloperData.name}
          jobTitle={softwareDeveloperData.jobTitle}
          links={softwareDeveloperData.links}
          contact={softwareDeveloperData.contact}
          email={softwareDeveloperData.email}
          location={softwareDeveloperData.location}
        />

        {/* Skills */}
        <Skills skills={softwareDeveloperData.skills} />

        {/* Summery */}
        <Summery summery={softwareDeveloperData.about} />

        {/* experience */}
        <Experience experiences={softwareDeveloperData.experiences} />

        {/* courses */}
        <Courses
          title={"EDUCATION"}
          education={softwareDeveloperData.education}
        />

        {/* courses */}
        {/* <Courses title={"COURSES"} courses={softwareDeveloperData.courses} /> */}
      </div>
    </>
  );
}
