'use client';

import Base from "#/components/Base";
import { useState } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

const quickLinks = [
  { icon: Mail,    label: 'rahulgupta89343@gmail.com', href: 'mailto:rahulgupta89343@gmail.com' },
  { icon: Github,  label: 'GitHub',                    href: 'https://github.com/RAHUL1115' },
  { icon: Linkedin,label: 'LinkedIn',                  href: 'https://www.linkedin.com/in/rahul1115' },
];

export default function Contact() {
  const [status, setStatus]   = useState('');
  const [loading, setLoading] = useState(false);

  const submitForm = (event: any) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })
      .then(() => { setStatus("Message sent! I'll get back to you soon."); form.reset(); })
      .catch(() => { setStatus('Something went wrong. Try emailing me directly.'); })
      .finally(() => setLoading(false));
  };

  const fieldStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  };

  return (
    <Base>
      <div className="px-8 md:px-14 py-16 md:py-24 max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 font-medium"
            style={{ color: 'var(--accent)' }}
          >
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-6xl leading-none"
            style={{ fontFamily: 'Geomanist, sans-serif', color: 'var(--text)' }}
          >
            CONTACT
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind? Let&apos;s talk.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-2 mb-10">
          {quickLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-xs group transition-colors duration-200 hover:border-[var(--accent)]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            >
              <Icon size={12} />
              <span className="group-hover:text-[var(--text)] transition-colors">{label}</span>
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-10" style={{ background: 'var(--border)' }} />

        {/* Form */}
        <form
          onSubmit={submitForm}
          action="https://formsubmit.co/1f9ad08fbc789cbab9d83fc60e929089"
          method="POST"
        >
          <input type="hidden" name="_url" value="https://amrahul.in/contact" />
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                className="block text-xs uppercase tracking-widest mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200"
                style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e  => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-xs uppercase tracking-widest mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200"
                style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e  => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-xs uppercase tracking-widest mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-200 resize-none"
                style={fieldStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e  => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg text-sm font-medium transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>

        {status && (
          <p
            className="mt-4 text-sm text-center py-3 rounded-lg"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
          >
            {status}
          </p>
        )}
      </div>
    </Base>
  );
}
