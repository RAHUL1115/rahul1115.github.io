export default function Experience({ experiences }) {
  return (
    <div className="flex flex-col justify-between">
      {/* title */}
      <p className="tracking-wide text-lg font-black">EXPERIENCE</p>
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
              <div className="text-right">
                <p className="font-semibold">{experience.duration}</p>
                <p className="text-sm">{experience.location}</p>
              </div>
            </div>

            {/* experience */}
            <ul className="list-[circle] list-outside pl-5 text-sm">
              {experience.description.map((point) => (
                <li key={point} dangerouslySetInnerHTML={{ __html: point }}></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
