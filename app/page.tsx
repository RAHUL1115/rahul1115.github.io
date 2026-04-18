import TerminalCLI, { TerminalClock, UptimeDisplay } from '#/components/TerminalCLI';

export default function Home() {
  return (
    <>
      <div className="terminal">
        {/* ── Terminal chrome ── */}
        <header className="tbar">
          <div className="dots"><i /><i /><i /></div>
          <div className="title">— rahul@amrahul: ~/portfolio — zsh —</div>
          <nav>
            {[
              ['01', 'about', '#about'],
              ['02', 'now', '#now'],
              ['03', 'experience', '#experience'],
              ['04', 'projects', '#projects'],
              ['05', 'skills', '#skills'],
              ['06', 'writing', '#writing'],
              ['07', 'contact', '#contact'],
            ].map(([num, label, href]) => (
              <a key={href} href={href}>
                <span className="k">{num}</span> {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="body-wrap">

          {/* ── HERO ── */}
          <section className="hero" id="top">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>
              {' '}<span className="cmd">whoami</span>
            </div>
            <div className="hero-grid">
              <div>
                <h2 style={{ marginTop: 18 }}>// identity</h2>
                <h1>Rahul Gupta<span className="gray">.</span><span className="cursor" /></h1>
                <p className="tag">
                  <b>Senior Software Engineer</b> with <b>5+ years</b> across full-stack, DevOps, and
                  quantitative trading systems. Currently at <b>QuantDirection</b> building high-availability
                  auto-trading pipelines. Bridging quantitative logic and production-ready systems with
                  Node.js, Python, Go, Docker, and cloud.
                </p>
              </div>
              <div className="meta">
                <div><span>loc</span> → <span className="v">Mumbai, IN</span></div>
                <div><span>tz</span>&nbsp; → <span className="v">GMT+5:30</span></div>
                <div><span>now</span> → <TerminalClock /></div>
                <div><span>up</span>&nbsp; → <UptimeDisplay /></div>
              </div>
            </div>

            <div className="status-grid">
              <div><div className="k">Status</div><div className="v"><span className="pulse" />Available for work</div></div>
              <div><div className="k">Role</div><div className="v">Full-stack / AI</div></div>
              <div><div className="k">Stack</div><div className="v">Next · Node · LLM</div></div>
              <div><div className="k">Based in</div><div className="v">Mumbai, India</div></div>
            </div>

            <div className="hero-actions">
              <button className="btn primary" id="open-cli">
                <span>$</span> Open terminal <span className="k">` or /</span>
              </button>
              <a className="btn" href="/software-developer">./cat resume.pdf</a>
              <a className="btn" href="#projects">./view projects</a>
              <a className="btn" href="#contact">./contact</a>
              <a className="btn" href="https://www.linkedin.com/in/rahul1115/" target="_blank" rel="noopener noreferrer">↗ linkedin</a>
            </div>
          </section>

          {/* ── ABOUT ── */}
          <section id="about">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">cat</span> <span className="arg">about.md</span>
            </div>
            <div className="out about-body">
              <h2 style={{ marginBottom: 10 }}>// about.md</h2>
              <p>
                I&apos;m a <b>senior software engineer</b> who lives in the uncomfortable middle: <b>product UX</b> on
                one side, <b>pipelines, infra, and quantitative logic</b> on the other. I enjoy owning that gap
                end-to-end — from the Docker image to the button the user clicks.
              </p>
              <p>
                Today I build high-availability auto-trading systems at <b>QuantDirection</b> — CI/CD from scratch,
                webhook-driven pipelines, centralised logging. Before that, four years at <b>Nexsales</b> shipping an{' '}
                <b>Artificial Neural Network</b> with 95%+ accuracy, rolling out single-OAuth across 6+ products,
                and running GCP + AWS deploys.
              </p>
              <p>
                Tools I reach for without thinking: <b>Node.js, Python, Go, Docker, GCP/AWS, Next.js, PostgreSQL</b>.
                Also TensorFlow when the problem asks for it. I care about small surface area, short feedback loops,
                and code that a stranger can read on a Monday morning.
              </p>
            </div>
          </section>

          {/* ── NOW ── */}
          <section id="now">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">tail -f</span> <span className="arg">now.log</span>
            </div>
            <div className="out">
              <div className="now-card">
                <div className="ts">last updated · 2026-04-18 · Mumbai</div>
                <h3>Building auto-trading pipelines at QuantDirection.</h3>
                <p>
                  Writing <b>high-availability</b> backend systems that wire webhooks and third-party APIs into live
                  trading flows. Stabilised legacy infra, built CI/CD from scratch, and set up centralised logging —
                  now the fun part begins.
                </p>
                <div className="now-grid">
                  <div className="now-item"><div className="k">Building</div><div className="v">Webhook-driven auto-trading pipeline</div></div>
                  <div className="now-item"><div className="k">Learning</div><div className="v">Go at scale, trading-system observability</div></div>
                  <div className="now-item"><div className="k">Open to</div><div className="v">Interesting full-stack + AI problems</div></div>
                </div>
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ── */}
          <section id="experience">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">git log</span> <span className="flag">--oneline</span> <span className="arg">career/</span>
            </div>
            <h2 style={{ marginTop: 14 }}>// experience — most recent first</h2>
            <div className="out">

              <div className="xp">
                <div className="when">Jan 2025 — present</div>
                <div className="what">
                  <h3>Senior Software Engineer</h3>
                  <div className="where">QuantDirection (via Cloudstaff LLP) — California, US · remote</div>
                  <ul>
                    <li>Onboarded by reading the codebase end-to-end and producing a documentation knowledge base for the team.</li>
                    <li>Refactored a legacy codebase and resolved long-standing bugs, improving maintainability as a foundation for scale.</li>
                    <li>Built <b>CI/CD pipelines from scratch</b>, enabling reliable, rapid deployments where none previously existed.</li>
                    <li>Designed <b>auto-trading pipelines</b> using webhooks + third-party integrations once infra was stabilised.</li>
                    <li>Set up <b>centralised logging and monitoring</b> for full visibility into high-availability trading operations.</li>
                  </ul>
                </div>
                <div className="tags" style={{ justifyContent: 'flex-end' }}>
                  {['Node.js', 'Python', 'Docker', 'CI/CD', 'Webhooks', 'GCP'].map(t => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="xp">
                <div className="when">Oct 2022 — Jan 2025</div>
                <div className="what">
                  <h3>Software Engineer → Senior Software Engineer</h3>
                  <div className="where">Nexsales Solutions Pvt Ltd — Mumbai, India</div>
                  <ul>
                    <li>Developed an <b>Artificial Neural Network</b> in TensorFlow with <b>95%+ accuracy</b>; exported from Python to JavaScript for runtime performance.</li>
                    <li>Implemented <b>single OAuth via Auth0</b> across all products — cut sign-up drop-offs by 20% and security issues by 30%.</li>
                    <li>Revitalised a JavaScript scraping tool (<b>+40% speed</b>); automated keyword scraping via shell scripts.</li>
                    <li>Collaborated with architects to build scalable infra for a lead-gen platform serving thousands of users.</li>
                    <li>Managed CI/CD on <b>GCP</b>, used <b>AWS</b> for scalable cloud; contributed to <b>6+ products</b> across varied stacks.</li>
                  </ul>
                </div>
                <div className="tags" style={{ justifyContent: 'flex-end' }}>
                  {['Node.js', 'TensorFlow', 'Next.js', 'Vue', 'Auth0', 'GCP', 'AWS'].map(t => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>

              <div className="xp">
                <div className="when">Jan 2021 — Oct 2022</div>
                <div className="what">
                  <h3>Full Stack Web Developer</h3>
                  <div className="where">Saryu Business Solutions — Mumbai, India</div>
                  <ul>
                    <li>Led development of <b>6+ full-stack web apps</b> in PHP + MySQL, boosting user engagement by up to 25%.</li>
                    <li>Built a <b>static-site generator</b> with custom templates to productise delivery — cut cost + time by 40% across projects.</li>
                  </ul>
                </div>
                <div className="tags" style={{ justifyContent: 'flex-end' }}>
                  {['PHP', 'MySQL', 'Node.js', 'Python'].map(t => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ── PROJECTS ── */}
          <section id="projects">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">ls</span> <span className="flag">-lah</span> <span className="arg">projects/</span>
            </div>
            <h2 style={{ marginTop: 14 }}>// selected work — 4 of many</h2>

            {/* Project 01 */}
            <article className="proj">
              <div className="proj-head">
                <div className="left">
                  <span className="num">01</span>
                  <span>auto-trading-pipeline/</span>
                  <span className="status">● live · high-availability</span>
                </div>
                <div>2025 — present · QuantDirection</div>
              </div>
              <div className="proj-body">
                <div className="proj-text">
                  <div className="year">2025 · quant · backend + infra</div>
                  <h3>Auto-trading pipeline at QuantDirection.</h3>
                  <p className="lede">
                    Webhook-driven pipelines that wire third-party signals into live trading flows. Stabilised a
                    legacy codebase, built <b>CI/CD from scratch</b>, upgraded core dependencies, and set up{' '}
                    <b>centralised logging</b> for full visibility into high-availability operations.
                  </p>
                  <div className="stack">
                    {['Node.js', 'Python', 'Docker', 'Webhooks', 'Cloud Infra'].map(s => <span key={s}>{s}</span>)}
                  </div>
                  <span className="link" style={{ color: 'var(--muted)', borderColor: 'transparent' }}>confidential — details on request</span>
                </div>
                <div className="proj-visual">
                  <span className="badge">pipeline · ops view</span>
                  <div className="mock">
                    <div className="mh"><span>trading-engine · prod</span><span>uptime 99.98%</span></div>
                    <div className="row"><span>webhooks ingested</span><b>12.4k / d</b></div>
                    <div className="bar"><i style={{ width: '88%' }} /></div>
                    <div className="row"><span>deploy frequency</span><b>4.2 / wk</b></div>
                    <div className="bar"><i style={{ width: '72%' }} /></div>
                    <div className="row"><span>p95 latency</span><b>140ms</b></div>
                    <div className="bar"><i style={{ width: '60%' }} /></div>
                    <div className="row"><span>logs centralised</span><b>✓</b></div>
                  </div>
                </div>
              </div>
              <div className="proj-metrics">
                <div><div className="k">CI/CD</div><div className="v">0 → 100%</div></div>
                <div><div className="k">stack</div><div className="v">Node · Py · Docker</div></div>
                <div><div className="k">availability</div><div className="v">HA</div></div>
              </div>
            </article>

            {/* Project 02 */}
            <article className="proj">
              <div className="proj-head">
                <div className="left">
                  <span className="num">02</span>
                  <span>neural-net-classifier/</span>
                  <span className="status">● shipped</span>
                </div>
                <div>2023 — 2024 · Nexsales</div>
              </div>
              <div className="proj-body">
                <div className="proj-text">
                  <div className="year">2023 · ML · Python → JS</div>
                  <h3>Artificial Neural Network with 95%+ accuracy.</h3>
                  <p className="lede">
                    Trained an ANN in <b>TensorFlow</b> (Python) for a lead-classification task, then exported the
                    model to <b>JavaScript</b> to run inference at the edge for a big runtime performance win.
                    Shipped into a lead-gen platform used by thousands.
                  </p>
                  <div className="stack">
                    {['TensorFlow', 'Python', 'JavaScript', 'Node.js'].map(s => <span key={s}>{s}</span>)}
                  </div>
                  <span className="link" style={{ color: 'var(--muted)', borderColor: 'transparent' }}>internal — Nexsales</span>
                </div>
                <div className="proj-visual">
                  <pre className="ascii-art">{`   ┌────────────────────────────┐
   │  model · ann_v3.h5         │
   │  ───────────────────────── │
   │  input        ▓▓▓▓▓▓▓▓     │
   │  hidden · 1   ▓▓▓▓▓▓       │
   │  hidden · 2   ▓▓▓▓         │
   │  output       ▓▓           │
   │                            │
   │  accuracy   ████████░ 95%+ │
   │  exported  → tfjs · prod   │
   └────────────────────────────┘`}</pre>
                </div>
              </div>
              <div className="proj-metrics">
                <div><div className="k">accuracy</div><div className="v">95%+</div></div>
                <div><div className="k">runtime</div><div className="v">py → js</div></div>
                <div><div className="k">scale</div><div className="v">lead-gen · 1000s</div></div>
              </div>
            </article>

            {/* Project 03 */}
            <article className="proj">
              <div className="proj-head">
                <div className="left">
                  <span className="num">03</span>
                  <span>single-oauth-auth0/</span>
                  <span className="status">● shipped</span>
                </div>
                <div>2023 · Nexsales</div>
              </div>
              <div className="proj-body">
                <div className="proj-text">
                  <div className="year">2023 · platform · auth</div>
                  <h3>Single OAuth across 6+ products via Auth0.</h3>
                  <p className="lede">
                    Replaced a scattered auth surface with <b>single sign-on</b> across every Nexsales product.
                    Cut sign-up drop-offs by <b>20%</b> and security issues by <b>30%</b>. Also revitalised a JS
                    scraping tool — <b>+40%</b> speed — and automated keyword scraping via shell scripts.
                  </p>
                  <div className="stack">
                    {['Auth0', 'Node.js', 'Next.js', 'Vue'].map(s => <span key={s}>{s}</span>)}
                  </div>
                  <span className="link" style={{ color: 'var(--muted)', borderColor: 'transparent' }}>internal — platform-wide</span>
                </div>
                <div className="proj-visual">
                  <pre className="ascii-art">{`   products/
   ├── lead-gen        ┐
   ├── prospector      │
   ├── enrichment      │──►  auth0
   ├── analytics       │       │
   ├── admin-console   │       ▼
   └── scraper-tool    ┘    single
                            sign-on

   drop-off  ↓ 20%
   security  ↑ 30%`}</pre>
                </div>
              </div>
              <div className="proj-metrics">
                <div><div className="k">drop-off</div><div className="v">−20%</div></div>
                <div><div className="k">sec issues</div><div className="v">−30%</div></div>
                <div><div className="k">products</div><div className="v">6+</div></div>
              </div>
            </article>

            {/* Project 04 */}
            <article className="proj">
              <div className="proj-head">
                <div className="left">
                  <span className="num">04</span>
                  <span>static-site-generator/</span>
                  <span className="status">● shipped</span>
                </div>
                <div>2021 — 2022 · Saryu</div>
              </div>
              <div className="proj-body">
                <div className="proj-text">
                  <div className="year">2021 · productisation · PHP + MySQL</div>
                  <h3>Static-site generator — productising web delivery.</h3>
                  <p className="lede">
                    Built a <b>templating engine</b> + generator at Saryu Business Solutions that productised static
                    website delivery. Cut dev cost + time by <b>40%</b> across <b>6+ client projects</b>, with
                    user engagement wins up to <b>25%</b>.
                  </p>
                  <div className="stack">
                    {['PHP', 'MySQL', 'Templates', 'Shell'].map(s => <span key={s}>{s}</span>)}
                  </div>
                  <span className="link" style={{ color: 'var(--muted)', borderColor: 'transparent' }}>client work — Saryu</span>
                </div>
                <div className="proj-visual">
                  <pre className="ascii-art">{`   $ ./ssg build --theme=agency
   █████████████████████ 100%

   ✔ templates resolved
   ✔ pages rendered       42
   ✔ assets optimised    118
   ✔ sitemap · robots
   ✔ ci · ftp deploy

   cost    ↓ 40%
   time    ↓ 40%
   clients   6+`}</pre>
                </div>
              </div>
              <div className="proj-metrics">
                <div><div className="k">cost ↓</div><div className="v">40%</div></div>
                <div><div className="k">engagement ↑</div><div className="v">25%</div></div>
                <div><div className="k">apps</div><div className="v">6+</div></div>
              </div>
            </article>

          </section>

          {/* ── SKILLS ── */}
          <section id="skills">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">cat</span> <span className="arg">skills.json</span> <span className="flag">| jq</span>
            </div>
            <h2 style={{ marginTop: 14 }}>// stack — tools I reach for without thinking</h2>
            <div className="skills-grid">
              <div className="skills-col">
                <h4>backend/</h4>
                <ul>
                  {[['Node.js', '●●●●●'], ['Python', '●●●●○'], ['Go', '●●●○○'], ['PHP', '●●●●○'], ['Shell / Bash', '●●●●○']].map(([s, l]) => (
                    <li key={s}>{s} <span className="lvl">{l}</span></li>
                  ))}
                </ul>
              </div>
              <div className="skills-col">
                <h4>frontend/</h4>
                <ul>
                  {[['React.js', '●●●●●'], ['Next.js', '●●●●●'], ['Vue', '●●●●○'], ['TypeScript', '●●●●○'], ['API design', '●●●●●']].map(([s, l]) => (
                    <li key={s}>{s} <span className="lvl">{l}</span></li>
                  ))}
                </ul>
              </div>
              <div className="skills-col">
                <h4>devops-cloud/</h4>
                <ul>
                  {[['Docker', '●●●●○'], ['GCP', '●●●●○'], ['AWS', '●●●●○'], ['CI/CD', '●●●●●'], ['Monitoring', '●●●●○']].map(([s, l]) => (
                    <li key={s}>{s} <span className="lvl">{l}</span></li>
                  ))}
                </ul>
              </div>
              <div className="skills-col">
                <h4>data-ai/</h4>
                <ul>
                  {[['PostgreSQL', '●●●●○'], ['MongoDB', '●●●●○'], ['TensorFlow', '●●●●○'], ['ML / ANN', '●●●●○'], ['Auth0', '●●●●●']].map(([s, l]) => (
                    <li key={s}>{s} <span className="lvl">{l}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── WRITING ── */}
          <section id="writing">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">ls</span> <span className="arg">writing/</span>
            </div>
            <h2 style={{ marginTop: 14 }}>// notes from shipping AI in production</h2>
            <div className="posts">
              {[
                ['2026-03-22', 'Eval harnesses are a product — not a test.'],
                ['2026-02-04', 'Building QuickSplit: why vision models beat OCR for receipts.'],
                ['2025-12-10', 'RAG is plumbing. Stop treating it like magic.'],
                ['2025-10-18', 'Streaming UI patterns that actually survive contact with users.'],
                ['2025-08-02', 'The honest cost of an LLM feature — a one-pager for PMs.'],
              ].map(([date, title]) => (
                <a key={title} className="post" href="https://blog.amrahul.in/" target="_blank" rel="noopener noreferrer">
                  <span className="date">{date}</span>
                  <span className="ttl">{title}</span>
                  <span className="arr">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* ── CONTACT ── */}
          <section id="contact">
            <div className="prompt">
              <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
              <span className="cmd">./contact</span> <span className="flag">--open</span>
            </div>
            <div className="out contact-wrap">
              <div className="big">
                Got a project where <em>AI should feel like a feature</em>, not a gimmick? Let&apos;s talk.
              </div>
              <div className="contact-links">
                <a href="mailto:hi@amrahul.in">
                  <span><span className="k">email</span> &nbsp; hi@amrahul.in</span><span className="arr">↗</span>
                </a>
                <a href="tel:+917021091055">
                  <span><span className="k">phone</span> &nbsp; +91 70210 91055</span><span className="arr">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/rahul1115/" target="_blank" rel="noopener noreferrer">
                  <span><span className="k">linkedin</span> &nbsp; /in/rahul1115</span><span className="arr">↗</span>
                </a>
                <a href="https://github.com/rahul1115" target="_blank" rel="noopener noreferrer">
                  <span><span className="k">github</span> &nbsp; @rahul1115</span><span className="arr">↗</span>
                </a>
              </div>
            </div>
          </section>

          <footer>
            <div>© 2026 Rahul Gupta · built with Next.js · no trackers</div>
            <div className="hint">
              press <kbd>`</kbd> or <kbd>/</kbd> for terminal · <kbd>Esc</kbd> to close
            </div>
          </footer>

        </div>
      </div>

      {/* Interactive: CLI, tweaks, scanlines, clock */}
      <TerminalCLI />
    </>
  );
}
