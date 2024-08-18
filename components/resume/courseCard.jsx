const CourseCard = ({courses, ...restProps}) => {
  courses = courses || [
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
  ];

  return (
    <div className="pl-2 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">
        courses & certification
      </h1>
      
      {courses.map((course) => (
        <div key={course.name + course.institution + course.start + course.end} className="border-l-4 border-indigo-400 pl-2 space-y-3">
          <div className="space-y-2">
            <div className="space-y-0.5">
              <h2 className="text-sm font-bold text-black">{course.name}</h2>
              <h3 className="text-sm font-bold text-green-600">
                {course.institution} - ({course.start} - {course.end})
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
