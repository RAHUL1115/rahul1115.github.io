import Sidebar from "./Sidebar";

Sidebar;

export default function Base({ children }) {
  return (
    <main>
      <div className="flex min-h-screen md:relative">
        <div className="md:w-[25%] md:bg-orange-300 md:p-4 md:max-h-screen md:sticky md:top-0 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:w-[75%] p-4">{children}</div>
      </div>
    </main>
  );
}
