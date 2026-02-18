import Base from "#/components/Base";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "QuickSplit",
    description: "Bill splitting web app — split expenses with friends and groups quickly and fairly.",
    href: "https://quicksplit.amrahul.in/",
    image: "/img/projects/quicksplit.png",
    date: "2025",
    tags: ["Next.js", "Supabase", "Full Stack"],
  },
  {
    name: "Neuroevolution",
    description: "Neural network-based evolution simulation exploring genetic algorithms and emergent AI behavior.",
    href: "https://github.com/RAHUL1115/neuroevolution",
    image: "/img/projects/neuroevolution.png",
    date: "2020",
    tags: ["JavaScript", "Neural Networks", "AI"],
  },
];

export default function Projects() {
  return (
    <Base>
      <div className="px-8 md:px-14 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
            style={{ color: 'var(--accent)' }}
          >
            Work
          </p>
          <h1
            className="text-5xl md:text-6xl leading-none"
            style={{ fontFamily: 'Geomanist, sans-serif', color: 'var(--text)' }}
          >
            PROJECTS
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            Things I&apos;ve built and shipped.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-10" style={{ background: 'var(--border)' }} />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: 'var(--bg-subtle)' }}
                  >
                    <span
                      className="text-2xl font-bold tracking-widest"
                      style={{ fontFamily: 'Geomanist, sans-serif', color: 'var(--border)' }}
                    >
                      {project.name.toUpperCase()}
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(59,130,246,0.12)' }}
                >
                  <ArrowUpRight size={22} style={{ color: 'var(--accent)' }} />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: 'var(--text)', fontFamily: 'Geomanist, sans-serif' }}
                  >
                    {project.name}
                  </h3>
                  <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
                    {project.date}
                  </span>
                </div>
                <p className="text-xs leading-5 mb-3" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: 'var(--bg-subtle)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-dim)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Base>
  );
}
