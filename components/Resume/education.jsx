const EducationCard = () => {
  return (
    <div className="pl-2 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">education</h1>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-3">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-black">
              Master's in Computer Science
            </h2>
            <h3 className="text-sm font-bold text-green-600">
              K.C College - (2020/06 - 2022/08)
            </h3>
          </div>
        </div>
      </div>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-3">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-black">
              Bachlor's in Information Technology
            </h2>
            <h3 className="text-sm font-bold text-green-600">
              Hinduja College - (2017/06 - 2020/06)
            </h3>
          </div>
        </div>
      </div>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-3">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold text-black">
              Higher Secondary Education in Science
            </h2>
            <h3 className="text-sm font-bold text-green-600">
              Wilson College - (2015/06 - 2017/06)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
