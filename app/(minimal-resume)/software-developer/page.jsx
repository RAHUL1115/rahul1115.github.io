import softwareDeveloperData from "./data";
import Info from "#/components/resume/info";
import About from "#/components/minimal-resume/about";
import Skills from "#/components/minimal-resume/skills";
import Experience from "#/components/minimal-resume/experience";
import Courses from "#/components/minimal-resume/courses";

export default function Home() {
  return (
    <>
      <Info />
      <div className="Calibri w-[21cm] h-[29.65cm] border bg-white p-4 flex space-y-4 flex-col overflow-hidden">
        {/* name */}
        <About
          name={softwareDeveloperData.name}
          about={softwareDeveloperData.about}
          jobTitle={softwareDeveloperData.jobTitle}
          links={softwareDeveloperData.links}
          contact={softwareDeveloperData.contact}
          email={softwareDeveloperData.email}
          location={softwareDeveloperData.location}
        />

        {/* Skills */}
        <Skills skills={softwareDeveloperData.skills} />

        {/* experience */}
        <Experience experiences={softwareDeveloperData.experiences} />

        {/* courses */}
        <Courses title={"Courses"} courses={softwareDeveloperData.courses} />

        {/* courses */}
        <Courses
          title={"Education"}
          education={softwareDeveloperData.education}
        />
      </div>
    </>
  );
}
