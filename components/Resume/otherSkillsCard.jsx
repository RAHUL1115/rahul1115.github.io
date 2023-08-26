const OtherSkillsCard = ({ otherSkills, ...restProps }) => {

  otherSkills = otherSkills || [
    {
      category: "Framework & Libraries",
      names: "React, Vue, Tailwind CSS, Pandas, Numpy, Matplotlib.",
    },
    {
      category: "Tools & Technology",
      names: "Git, Github, Linux, Machin Learning, Data Analytics.",
    },
  ];

  return (
    <div className="p-2 pr-3 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">other skills</h1>
      {otherSkills.map((otherSkill, index) => (
        <div
          key={index}
          className="border-l-4 border-indigo-400 pl-2 space-y-3"
        >
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-green-600">
              {otherSkill.category}:
            </h2>
            <p>{otherSkill.names}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherSkillsCard;
