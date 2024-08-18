const SummeryCard = ({ summery, ...restProps }) => {
  summery =
    summery ||
    "Web developer with experience in REST api, Backend, Databases, Forntend, Data Analysis and Data science. Looking to progress my career in Data Science field.";

  return (
    <div className="pl-2 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">summery</h1>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-1">{summery}</div>
    </div>
  );
};

export default SummeryCard;
