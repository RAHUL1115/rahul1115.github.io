import Base from "#/components/Base";
import Image from "next/image";
import Link from "next/link";

const skills = [
  'Node.js', 'Python', 'Go', 'React', 'Next.js',
  'Docker', 'GCP', 'PostgreSQL', 'Machine Learning', 'DevOps',
];

const socials = [
  { label: 'GitHub',   href: 'https://github.com/RAHUL1115' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahul1115' },
  { label: 'Twitter',  href: 'https://twitter.com/Rahul_1115' },
  { label: 'Blog',     href: 'https://blog.amrahul.in/' },
];

export default function Home() {
  return (
    <Base>
      <div className="px-8 md:px-14 py-16 md:py-24 max-w-2xl">
        {/* Mobile profile image */}
        <Image
          src="/img/rahul.jpg"
          width={56}
          height={56}
          alt="Rahul Gupta"
          className="w-14 h-14 rounded-full object-cover mb-8 md:hidden"
          style={{ border: '1px solid var(--border)' }}
        />

        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-6 font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Full Stack Developer
        </p>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl leading-none mb-8 tracking-tight"
          style={{ fontFamily: 'Geomanist, sans-serif', color: 'var(--text)' }}
        >
          RAHUL
          <br />
          GUPTA
          <span
            className="inline-block w-[3px] h-10 md:h-14 ml-2 align-middle"
            style={{ background: 'var(--accent)', animation: 'blink 1.2s step-end infinite' }}
          />
        </h1>

        {/* Bio */}
        <p
          className="text-sm leading-7 mb-10"
          style={{ color: 'var(--text-muted)', maxWidth: '480px' }}
        >
          Not just a Software Engineer but a problem solver with 4+ years in
          full-stack development and API development. Skilled in Docker, DevOps,
          Node.js, Python, Next.js, and PostgreSQL. Recently implemented AI neural
          networks at Nexsales to tackle complex challenges.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-14">
          <Link
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-80"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:text-[var(--text)]"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
          >
            Contact Me
          </Link>
          <Link
            href="/software-developer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:text-[var(--text)]"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
          >
            Resume
          </Link>
        </div>

        {/* Skills */}
        <div className="mb-14">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--text-dim)' }}
          >
            Core Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div
          className="flex flex-wrap gap-6 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm group transition-colors duration-200 hover:text-[var(--text)]"
              style={{ color: 'var(--text-muted)' }}
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: 'var(--accent)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </Base>
  );
}
