import Sidebar from "../components/sidebar";

Sidebar

export default function Base({ children }) {
  return (
    <main>
      <div class="flex min-h-screen md:relative">
        <div class="md:w-[25%] md:bg-orange-300 md:p-4 md:max-h-screen md:sticky md:top-0 hidden md:block">
          <Sidebar />
        </div>
        <div class="md:w-[75%] p-4">{children}</div>
      </div>
    </main>
  );
}