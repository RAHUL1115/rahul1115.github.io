export default function Experience({ experiences }) {
  return (
    <div className="flex flex-col justify-between">
      {/* title */}
      <p className="tracking-wide text-lg font-bold">Experience</p>
      <hr className="w-full mb-3" />

      {/* data */}
      <div className="space-y-3 pl-2">
        {experiences.map((experience) => (
          <div key={experience.duration} className="space-y-1.5">
            {/* name, title, duration and location */}
            <div className="flex justify-between items-end">
              {/* name & title */}
              <div>
                <p className="font-semibold">{experience.companyName}</p>
                <p className="text-sm">{experience.title}</p>
              </div>

              {/* title & location */}
              <div>
                <p className="font-semibold">{experience.duration}</p>
                <p className="text-sm">{experience.location}</p>
              </div>
            </div>

            {/* experience */}
            <ul className="list-disc list-inside pl-3">
              {experience.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
