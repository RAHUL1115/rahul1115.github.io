export default function Skills({ skills }) {
  const skillNames = skills.map((skill) => skill);

  return (
    <div className="flex flex-col justify-between">
      {/* title */}
      <p className="tracking-wide text-lg font-bold">Skills</p>
      <hr className="w-full mb-2" />

      {/* data */}
      <div className="space-y-3 pl-2">
        <p className="font-medium tracking-wide">{skillNames.join(", ")}</p>
      </div>
    </div>
  );
}
