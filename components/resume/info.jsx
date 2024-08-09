export default function Info() {
  return (
    <div className="print:hidden text-red-500 text-sm">
      <p className="flex gap-2">
        <span>steps to print this:</span>
        <span>(1) press ctrl+p</span>
        <span>(2) select color print & page size to A4</span>
        <span>(3) Set Margine to none & and scale to actual-size</span>
      </p>
    </div>
  );
}
