export default function Summery({
  summery,
}) {
  return (
    <div>
      <p className="tracking-wide text-lg font-black">SUMMARY</p>
      <hr className="w-full mb-2" />
      <p className="px-2 text-sm">{summery}</p>
    </div>
  );
}
