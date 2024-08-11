export function Experience({data}) {
    return (
      <div className="flex flex-col justify-between">
        {/* title */}
        <p className="text-lg font-bold">Experience</p>
        <hr className="w-full mb-2" />

        {/* data */}
        <div className="space-y-3 pl-2">
          {data.experiences.map((experience) => (
            <div key={experience.duration} className="space-y-3">
              {/* name, title, duration and location */}
              <div className="flex justify-between items-end">
                {/* name & title */}
                <div>
                  <p className="font-medium text-lg">
                    {experience.companyName}
                  </p>
                  <p className="text-sm">{experience.title}</p>
                </div>

                {/* title & location */}
                <div>
                  <p className="font-medium text-lg">{experience.duration}</p>
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