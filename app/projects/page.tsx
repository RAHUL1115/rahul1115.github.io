import { ArrowUpRight } from 'lucide-react';
import TerminalCLI from '#/components/TerminalCLI';

const projects = [
  {
    num: '01',
    slug: 'auto-trading-pipeline/',
    status: '● live · high-availability',
    period: '2025 — present · QuantDirection',
    name: 'Auto-trading pipeline at QuantDirection.',
    year: '2025 · quant · backend + infra',
    lede: 'Webhook-driven pipelines wiring third-party signals into live trading flows. Built CI/CD from scratch and centralised logging for HA operations.',
    stack: ['Node.js', 'Python', 'Webhooks', 'GCP'],
    metrics: [['CI/CD', '0 → 100%'], ['stack', 'Node · Python'], ['availability', 'HA']],
    href: null,
  },
  {
    num: '02',
    slug: 'neural-net-classifier/',
    status: '● shipped',
    period: '2023 — 2024 · Nexsales',
    name: 'Artificial Neural Network — 89% accuracy on data-gap filling.',
    year: '2023 · ML · Python → JS',
    lede: 'Trained an ANN in TensorFlow to fill missing data gaps in lead-gen records using patterns from past seen datasets. Exported to JavaScript for runtime performance. Internal tool.',
    stack: ['TensorFlow', 'Python', 'JavaScript', 'Node.js'],
    metrics: [['accuracy', '89%'], ['runtime', 'py → js'], ['task', 'data-gap fill']],
    href: null,
  },
  {
    num: '03',
    slug: 'single-oauth-auth0/',
    status: '● shipped',
    period: '2023 · Nexsales',
    name: 'Single OAuth across 6+ products via Auth0.',
    year: '2023 · platform · auth',
    lede: 'Replaced scattered auth with SSO across every Nexsales product. Cut sign-up drop-offs 20% and security issues 30%.',
    stack: ['Auth0', 'Node.js', 'Next.js', 'Vue'],
    metrics: [['drop-off', '−20%'], ['sec issues', '−30%'], ['products', '6+']],
    href: null,
  },
  {
    num: '04',
    slug: 'static-site-generator/',
    status: '● shipped',
    period: '2021 — 2022 · Saryu',
    name: 'Static-site generator — productising web delivery.',
    year: '2021 · productisation · PHP + MySQL',
    lede: 'Templating engine + generator that productised static website delivery. Cut dev cost + time 40% across 6+ client projects.',
    stack: ['PHP', 'MySQL', 'Templates', 'Shell'],
    metrics: [['cost ↓', '40%'], ['engagement ↑', '25%'], ['apps', '6+']],
    href: null,
  },
  {
    num: '05',
    slug: 'auto-research-engine/',
    status: '● live · private',
    period: '2025 — present · personal',
    name: 'Autonomous research agent with self-healing loops.',
    year: '2025 · AI · Python + Claude + EC2',
    lede: 'Prompt + code architecture running multi-iteration autonomous research via the Claude API. Self-healing mechanisms detect and recover from stalls. Deployed on AWS EC2 with a dashboard for launching and monitoring research runs.',
    stack: ['Claude API', 'Python', 'AWS EC2', 'Dashboard'],
    metrics: [['model', 'Claude API'], ['infra', 'AWS EC2'], ['resilience', 'self-healing']],
    href: null,
  },
  {
    num: '06',
    slug: 'quicksplit/',
    status: '● live',
    period: '2025 · personal',
    name: 'QuickSplit — split bills with friends instantly.',
    year: '2025 · full-stack · Next.js + Supabase',
    lede: 'Bill splitting web app. Split expenses with friends and groups quickly and fairly. Uses vision models for receipt scanning.',
    stack: ['Next.js', 'Supabase', 'React', 'TypeScript'],
    metrics: [['type', 'full-stack'], ['infra', 'Supabase'], ['ui', 'Next.js']],
    href: 'https://quicksplit.amrahul.in/',
  },
];

export default function Projects() {
  return (
    <>
      <div className="terminal">
        <header className="tbar">
          <div className="dots"><i /><i /><i /></div>
          <div className="title">— rahul@amrahul: ~/projects — zsh —</div>
          <nav>
            <a href="/">← home</a>
            <a href="/#experience"><span className="k">03</span> experience</a>
            <a href="/#projects"><span className="k">04</span> projects</a>
            <a href="/#contact"><span className="k">07</span> contact</a>
          </nav>
        </header>

        <div className="body-wrap">
          <div className="prompt">
            <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~/projects</span><span className="sig">$</span>{' '}
            <span className="cmd">ls</span> <span className="flag">-lah</span>
          </div>
          <h2 style={{ marginTop: 14 }}>// selected work</h2>

          {projects.map(p => (
            <article className="proj" key={p.num}>
              <div className="proj-head">
                <div className="left">
                  <span className="num">{p.num}</span>
                  <span>{p.slug}</span>
                  <span className="status">{p.status}</span>
                </div>
                <div>{p.period}</div>
              </div>
              <div className="proj-body">
                <div className="proj-text" style={{ borderRight: '1px solid var(--line)', gridColumn: '1 / -1' }}>
                  <div className="year">{p.year}</div>
                  <h3>{p.name}</h3>
                  <p className="lede">{p.lede}</p>
                  <div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="link" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      view project <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span className="link" style={{ color: 'var(--muted)', borderColor: 'transparent' }}>confidential — details on request</span>
                  )}
                </div>
              </div>
              <div className="proj-metrics">
                {p.metrics.map(([k, v]) => (
                  <div key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
                ))}
              </div>
            </article>
          ))}

          <footer>
            <div>© 2026 Rahul Gupta · <a href="/" style={{ borderBottom: '1px solid var(--faint)' }}>← back to portfolio</a></div>
            <div className="hint">press <kbd>`</kbd> for terminal</div>
          </footer>
        </div>
      </div>
      <TerminalCLI />
    </>
  );
}
