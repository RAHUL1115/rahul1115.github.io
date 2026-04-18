'use client';

import { useState } from 'react';
import TerminalCLI from '#/components/TerminalCLI';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target as HTMLFormElement;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(() => { setStatus("Message sent! I'll get back to you soon."); form.reset(); })
      .catch(() => { setStatus('Something went wrong. Email me directly at hi@amrahul.in'); })
      .finally(() => setLoading(false));
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    background: 'var(--bg-elev)',
    border: '1px solid var(--line)',
    color: 'var(--fg)',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    outline: 'none',
    transition: 'border-color .15s',
  };

  return (
    <>
      <div className="terminal">
        <header className="tbar">
          <div className="dots"><i /><i /><i /></div>
          <div className="title">— rahul@amrahul: ~/contact — zsh —</div>
          <nav>
            <a href="/">← home</a>
            <a href="/#about"><span className="k">01</span> about</a>
            <a href="/#projects"><span className="k">04</span> projects</a>
          </nav>
        </header>

        <div className="body-wrap" style={{ maxWidth: 720 }}>
          <div className="prompt">
            <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
            <span className="cmd">./contact</span> <span className="flag">--open</span>
          </div>

          <div className="out contact-wrap" style={{ marginBottom: 32 }}>
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

          <div className="prompt" style={{ marginBottom: 20 }}>
            <span className="usr">rahul</span>@<span className="host">amrahul.in</span>:<span className="path">~</span><span className="sig">$</span>{' '}
            <span className="cmd">./send-message</span>
          </div>

          <form
            onSubmit={submitForm}
            action="https://formsubmit.co/1f9ad08fbc789cbab9d83fc60e929089"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <input type="hidden" name="_url" value="https://amrahul.in/contact" />

            {[
              { label: 'name', name: 'name', type: 'text' },
              { label: 'email', name: 'email', type: 'email' },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--line)')}
                />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: 10, color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--line)')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '10px 20px',
                background: 'transparent',
                border: '1px solid var(--accent-dim)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? .5 : 1,
                transition: 'all .15s',
                alignSelf: 'flex-start',
              }}
              onMouseOver={e => { if (!loading) { (e.target as HTMLButtonElement).style.background = 'var(--accent)'; (e.target as HTMLButtonElement).style.color = 'var(--bg)'; } }}
              onMouseOut={e => { (e.target as HTMLButtonElement).style.background = 'transparent'; (e.target as HTMLButtonElement).style.color = 'var(--accent)'; }}
            >
              {loading ? '$ sending...' : '$ send message →'}
            </button>
          </form>

          {status && (
            <div style={{ marginTop: 16, padding: '12px 16px', border: '1px solid var(--line)', color: 'var(--accent)', fontSize: 13 }}>
              ✓ {status}
            </div>
          )}

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
