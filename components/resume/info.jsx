export default function Info() {
  return (
    <div className="print:hidden text-sm flex items-center justify-between gap-4 mb-1">
      <p className="flex gap-2 text-red-500">
        <span>steps to print this:</span>
        <span>(1) press ctrl+p</span>
        <span>(2) select color print & page size to A4</span>
        <span>(3) Set Margine to none & and scale to actual-size</span>
      </p>
      {/* <a
        href="/Rahul-Gupta.pdf"
        download
        className="text-red-500 underline shrink-0"
      >
        download stale pdf
      </a> */}
    </div>
  );
}
