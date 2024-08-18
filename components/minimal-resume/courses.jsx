export default function Courses({
  title = "Courses",
  courses = [],
  education = [],
}) {
  const coursesAndEducation = [...courses, ...education];

  return (
    <div className="flex flex-col justify-between">
      {/* title */}
      <p className="tracking-wide text-lg font-bold">{title}</p>
      <hr className="w-full mb-2" />

      {/* data */}
      <div className="space-y-3 pl-2">
        {coursesAndEducation.map((course) => (
          <div key={course.name} className="flex justify-between">
            <p>
              <span className="font-semibold text-gray-700">{course.name}</span>{" "}
              ({course.institution})
            </p>
            <p className="font-semibold">
              {course.start} - {course.end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
