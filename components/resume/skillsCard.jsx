const SkillsCard = ({ skills, ...restProps }) => {
  
  skills = skills || [
    { name: "NODE JS", rating: 5 },
    { name: "PYTHON", rating: 4 },
    { name: "REACT & VUE", rating: 4 },
    { name: "HTML, CSS & JS", rating: 4 },
    { name: "BASH", rating: 3 },
    { name: "SQL", rating: 3 },
    { name: "MONGO DB", rating: 3 },
    { name: "POWER BI", rating: 4 },
  ];

  return (
    <div className="p-2 pr-3 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">skills</h1>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-1.5">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between w-full">
            <span>{skill.name}</span>
            <span>
              {Array(skill.rating).fill(<i className="fa-solid fa-star"></i>)}
              {Array(5 - skill.rating).fill(
                <i className="fa-regular fa-star"></i>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
