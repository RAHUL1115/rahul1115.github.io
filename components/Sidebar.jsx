import Image from "next/image";
import Link from "next/link";
import RahulImage from "#/assets/img/rahul.jpg";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "https://blog.amrahul.in/", label: "Blog", external: true },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/RAHUL1115" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul1115" },
  { label: "Twitter", href: "https://twitter.com/Rahul_1115" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full px-6 py-10 overflow-hidden">
      {/* Profile */}
      <div className="mb-10">
        <div className="relative inline-block mb-4">
          <Image
            src={RahulImage}
            className="w-14 h-14 rounded-full object-cover"
            style={{ border: '1px solid var(--border)' }}
            alt="Rahul Gupta"
            width={56}
            height={56}
          />
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500"
            style={{ border: '2px solid var(--bg-subtle)' }}
          />
        </div>
        <p
          className="text-sm font-semibold"
          style={{ color: 'var(--text)', fontFamily: 'Geomanist, sans-serif', letterSpacing: '0.06em' }}
        >
          RAHUL GUPTA
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          Full Stack Developer
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px mb-8" style={{ background: 'var(--border)' }} />

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-0.5">
          {navLinks.map(({ href, label, external }) => (
            <li key={href}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm transition-all duration-200 hover:bg-[var(--bg-card)]"
                style={{ color: 'var(--text-muted)' }}
              >
                <span className="group-hover:text-[var(--text)] transition-colors duration-200">
                  {label}
                </span>
                {external && (
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8">
        <div className="h-px w-full mb-5" style={{ background: 'var(--border)' }} />
        <div className="flex gap-4 flex-wrap">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200 hover:text-[var(--text)]"
              style={{ color: 'var(--text-dim)' }}
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs mt-4" style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} amrahul.in
        </p>
      </div>
    </div>
  );
}
