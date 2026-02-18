import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Base({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Mobile top nav */}
      <nav
        className="md:hidden flex items-center justify-between px-5 py-3"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <span
          style={{
            fontFamily: 'Geomanist, sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            color: 'var(--text)',
          }}
        >
          RG
        </span>
        <div className="flex gap-5">
          {[
            { href: '/', label: 'About' },
            { href: '/projects', label: 'Projects' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200 hover:text-[var(--text)]"
              style={{ color: 'var(--text-muted)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside
          className="hidden md:flex md:flex-col w-[260px] sticky top-0 max-h-screen"
          style={{ borderRight: '1px solid var(--border)', background: 'var(--bg-subtle)' }}
        >
          <Sidebar />
        </aside>

        {/* Page content */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
