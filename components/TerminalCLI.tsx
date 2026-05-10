'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const DEFAULTS = { theme: 'classic', scanlines: true, blinkingCursor: true };
const STORAGE_KEY = 'terminal-prefs';

function loadPrefs() {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

export function TerminalClock() {
  const [time, setTime] = useState('');
  const [uptime, setUptime] = useState('0m 0s');
  const start = useRef(Date.now());

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} IST`);
      const up = Math.floor((Date.now() - start.current) / 1000);
      setUptime(`${Math.floor(up / 60)}m ${up % 60}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <span className="v" id="clock">{time}</span>
      {/* uptime is used elsewhere via id */}
      <span id="uptime-val" style={{ display: 'none' }}>{uptime}</span>
    </>
  );
}

export function UptimeDisplay() {
  const [uptime, setUptime] = useState('0m 0s');
  const start = useRef(Date.now());
  useEffect(() => {
    const tick = () => {
      const up = Math.floor((Date.now() - start.current) / 1000);
      setUptime(`${Math.floor(up / 60)}m ${up % 60}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="v">{uptime}</span>;
}

export default function TerminalCLI() {
  const [open, setOpen] = useState(false);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [lines, setLines] = useState<Array<{ html: string; cls: string }>>([]);
  const [inputVal, setInputVal] = useState('');
  const [state, setState] = useState(loadPrefs);
  const history = useRef<string[]>([]);
  const histIdx = useRef(-1);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const applyTheme = useCallback((t: string) => {
    if (t === 'classic') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }, []);

  const applyScanlines = useCallback((v: boolean) => {
    document.body.classList.toggle('no-scanlines', !v);
  }, []);

  const applyBlink = useCallback((v: boolean) => {
    document.body.classList.toggle('no-blink', !v);
  }, []);

  useEffect(() => {
    applyTheme(state.theme);
    applyScanlines(state.scanlines);
    applyBlink(state.blinkingCursor);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state, applyTheme, applyScanlines, applyBlink]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [lines]);

  const print = useCallback((html: string, cls = 's') => {
    setLines(prev => [...prev, { html, cls }]);
  }, []);

  const commands: Record<string, (...args: string[]) => void> = {
    help() {
      print('Available commands:', 'ok');
      print('  <span style="color:var(--fg)">about</span>      — who is rahul');
      print('  <span style="color:var(--fg)">whoami</span>     — short bio');
      print('  <span style="color:var(--fg)">projects</span>   — list projects (5)');
      print('  <span style="color:var(--fg)">skills</span>     — tech stack');
      print('  <span style="color:var(--fg)">experience</span> — career timeline');
      print('  <span style="color:var(--fg)">contact</span>    — get in touch');
      print('  <span style="color:var(--fg)">social</span>     — linkedin / github');
      print('  <span style="color:var(--fg)">ls</span>         — list sections');
      print('  <span style="color:var(--fg)">cat &lt;file&gt;</span>  — jump to section');
      print('  <span style="color:var(--fg)">theme &lt;n&gt;</span>  — classic | paper | phosphor');
      print('  <span style="color:var(--fg)">resume</span>     — view CV');
      print('  <span style="color:var(--fg)">clear</span>      — clear terminal');
      print('  <span style="color:var(--fg)">exit</span>       — close terminal');
    },
    about() {
      print('Rahul Gupta — Senior Software Engineer', 'ok');
      print('5+ years across full-stack, DevOps, and quantitative trading systems.');
      print('Currently at QuantDirection (via Cloudstaff LLP) · Mumbai, India.');
    },
    whoami() { print('rahul — senior software engineer. full-stack + devops + quant. ships fast.', 'ok'); },
    ls() {
      print('README.md  about.md  now.md  projects/  skills.json', 'ok');
      print('experience.log  writing/  contact.vcf', 'ok');
    },
    projects() {
      print('01  QuantDirection auto-trading pipeline (Node · Python · Webhooks)', 'ok');
      print('02  Nexsales ANN — 89% accuracy · data-gap fill on lead-gen data (TensorFlow → JS)', 'ok');
      print('03  Single OAuth via Auth0 across 6+ products', 'ok');
      print('04  Static-site generator at Saryu — −40% cost/time', 'ok');
      print('05  Auto-research engine (Claude API · Python · EC2) — confidential', 'ok');
    },
    skills() {
      print('Languages : Node.js, Python, Go, PHP, Shell', 'ok');
      print('Frontend  : React.js, Next.js, Vue, TypeScript', 'ok');
      print('DevOps    : Docker, GCP, AWS, CI/CD', 'ok');
      print('Data/AI   : PostgreSQL, MongoDB, TensorFlow, ML, Auth0', 'ok');
    },
    experience() {
      print('Jan 2025–now  Senior Software Engineer @ QuantDirection (Cloudstaff LLP)', 'ok');
      print('Oct 2022–Jan 2025  SWE → Sr SWE @ Nexsales Solutions Pvt Ltd', 'ok');
      print('Jan 2021–Oct 2022  Full Stack Web Developer @ Saryu Business Solutions', 'ok');
    },
    contact() {
      print('email    : <a href="mailto:hi@amrahul.in">hi@amrahul.in</a>', 'ok');
      print('phone    : <a href="tel:+917021091055">+91 70210 91055</a>', 'ok');
      print('linkedin : <a href="https://www.linkedin.com/in/rahul1115/" target="_blank">/in/rahul1115</a>', 'ok');
      print('github   : <a href="https://github.com/rahul1115" target="_blank">@rahul1115</a>', 'ok');
    },
    social() { commands.contact(); },
    resume() { print('→ opening résumé...', 'ok'); window.open('/software-developer', '_blank'); },
    clear() { setLines([]); },
    exit() { inputRef.current?.blur(); setOpen(false); },
    sudo() { print('permission denied.', 'e'); },
    theme(arg: string) {
      if (!['classic', 'paper', 'phosphor'].includes(arg)) { print('usage: theme <classic|paper|phosphor>', 'e'); return; }
      setState(s => ({ ...s, theme: arg }));
      print('theme → ' + arg, 'ok');
    },
    cat(arg: string) {
      const map: Record<string, string> = {
        'about.md': 'about', 'about': 'about',
        'now.md': 'now', 'now': 'now',
        'projects': 'projects', 'skills.json': 'skills', 'skills': 'skills',
        'writing': 'writing', 'contact.vcf': 'contact', 'contact': 'contact',
        'experience.log': 'experience', 'experience': 'experience',
      };
      const id = map[arg];
      if (!id) { print('cat: no such file: ' + (arg || ''), 'e'); return; }
      setOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  };

  const run = useCallback((raw: string) => {
    const line = raw.trim();
    if (!line) return;
    history.current.unshift(line);
    histIdx.current = -1;
    print(`<span style="color:var(--muted)">rahul@amrahul</span> <span style="color:var(--warn)">~</span> <span style="color:var(--accent)">$</span> ${line}`, 'u');
    const [cmd, ...args] = line.split(/\s+/);
    const fn = commands[cmd];
    if (fn) fn(...args);
    else print(`command not found: ${cmd}. type 'help'.`, 'e');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [print]);

  const openCLI = useCallback(() => {
    setOpen(true);
    if (lines.length === 0) {
      setLines([
        { html: 'amrahul.sh v1.0 — interactive portfolio terminal', cls: 'ok' },
        { html: 'type <span style="color:var(--accent)">help</span> to see commands, <span style="color:var(--accent)">exit</span> or Esc to close.', cls: 'dim' },
        { html: '', cls: 'dim' },
      ]);
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [lines.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.key === '`' || (e.key === '/' && !open)) { e.preventDefault(); openCLI(); }
      else if (e.key === 'Escape' && open) { inputRef.current?.blur(); setOpen(false); }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, openCLI]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') { inputRef.current?.blur(); setOpen(false); return; }
    if (e.key === 'Enter') { run(inputVal); setInputVal(''); }
    else if (e.key === 'ArrowUp') {
      histIdx.current = Math.min(histIdx.current + 1, history.current.length - 1);
      if (history.current[histIdx.current]) setInputVal(history.current[histIdx.current]);
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      histIdx.current = Math.max(histIdx.current - 1, -1);
      setInputVal(histIdx.current < 0 ? '' : history.current[histIdx.current]);
      e.preventDefault();
    }
  };

  return (
    <>
      {/* Scanlines */}
      <div className="scanlines" />

      {/* Open CLI button (exposed via id for use in page) */}
      <button
        id="open-cli-trigger"
        style={{ display: 'none' }}
        onClick={openCLI}
        aria-hidden
      />

      {/* CLI overlay */}
      <div className={`cli-overlay${open ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) { inputRef.current?.blur(); setOpen(false); } }}>
        <div className="cli-modal">
          <div className="top">
            <span>— rahul@amrahul: interactive shell —</span>
            <span className="close" onClick={() => { inputRef.current?.blur(); setOpen(false); }}>[ esc ]</span>
          </div>
          <div className="cli-log" ref={logRef}>
            {lines.map((l, i) => (
              <div key={i} className={`line ${l.cls}`} dangerouslySetInnerHTML={{ __html: l.html }} />
            ))}
          </div>
          <div className="cli-input-row">
            <span className="p">rahul@amrahul ~ $</span>
            <input
              ref={inputRef}
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKey}
              autoComplete="off"
              spellCheck={false}
              placeholder="type 'help'"
            />
          </div>
        </div>
      </div>

      {/* Tweaks panel */}
      <div className={`tweaks${tweaksOpen ? ' open' : ''}`}>
        <div className="th">
          TWEAKS
          <button className="x" onClick={() => setTweaksOpen(false)}>[ x ]</button>
        </div>
        <div className="tb">
          <div className="row">
            <div className="lb">Theme</div>
            <div className="seg">
              {(['classic', 'paper', 'phosphor'] as const).map(t => (
                <button
                  key={t}
                  className={state.theme === t ? 'on' : ''}
                  onClick={() => setState(s => ({ ...s, theme: t }))}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="row tog">
            <span className="lb">Scanlines</span>
            <input
              type="checkbox"
              checked={state.scanlines}
              onChange={e => setState(s => ({ ...s, scanlines: e.target.checked }))}
            />
          </div>
          <div className="row tog">
            <span className="lb">Blinking cursor</span>
            <input
              type="checkbox"
              checked={state.blinkingCursor}
              onChange={e => setState(s => ({ ...s, blinkingCursor: e.target.checked }))}
            />
          </div>
          <div className="row">
            <div className="lb" style={{ color: 'var(--fg-dim)' }}>
              Press <kbd style={{ border: '1px solid var(--faint)', padding: '1px 4px' }}>`</kbd> to open terminal
            </div>
          </div>
        </div>
      </div>

      {/* Tweaks toggle button (fixed bottom-left) */}
      <button
        onClick={() => setTweaksOpen(t => !t)}
        style={{
          position: 'fixed',
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
          left: 20,
          background: 'var(--bg-elev)',
          border: '1px solid var(--line)',
          color: 'var(--muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          padding: '6px 10px',
          cursor: 'pointer',
          zIndex: 8999,
        }}
      >
        tweaks
      </button>

      {/* Open CLI button exposed */}
      <OpenCLIBridge onOpen={openCLI} />
    </>
  );
}

function OpenCLIBridge({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    const btn = document.getElementById('open-cli');
    if (btn) btn.addEventListener('click', onOpen);
    return () => { if (btn) btn.removeEventListener('click', onOpen); };
  }, [onOpen]);
  return null;
}
