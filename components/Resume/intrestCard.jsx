const IntrestCard = ({ intrests, ...restProps}) => {

  intrests = intrests || ["Chess", "Trek", "Traveling"];

  return (
    <div className="p-2 pr-3 space-y-4">
      <h1 className="uppercase font-bold text-indigo-600">Intrest</h1>
      <div className="border-l-4 border-indigo-400 pl-2 space-y-1">
        {intrests.map((intrest, index) => (
          <div key={`${intrest}${index}`}>{intrest}</div>
        ))}
      </div>
    </div>
  );
}
 
export default IntrestCard;