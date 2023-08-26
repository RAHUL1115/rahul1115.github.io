const ExperienceCard = () => {
  return (
    <div className="pl-2 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">Experience</h1>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-3">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <h2 className="uppercase text-sm font-bold text-black">
              Full-stack developer
            </h2>
            <h3 className="text-sm font-bold text-green-600">
              Saryu Business Solution - (2021/1 - 2022/10)
            </h3>
          </div>
          <p>
            Saryu Business Solution is an organization that provides a one-stop
            solution for businesses for all their needs. While working at Saryu,
            I have developed 2+ full-stack projects on PHP and MySQL and have
            created more than 6+ websites. I have also developed a static site
            generator to reduce the per-project timeline by 40%.
          </p>
        </div>
      </div>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-3">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <h2 className="uppercase text-sm font-bold text-black">
              Data Science intern
            </h2>
            <h3 className="text-sm font-bold text-green-600">
              Hamoye Ltd. - (2022/1 - 2022/4)
            </h3>
          </div>
          <p>
            As a trainee at Hamoye Ltd, I gained experience in managing
            real-wrold datasets, optimizing, cleaning and transforming them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
