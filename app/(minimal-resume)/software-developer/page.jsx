import softwareDeveloperData from "./data";
import EscapeToHome from "#/components/minimal-resume/escape-to-home";

const d = softwareDeveloperData;

export default function ResumePage() {
  return (
    <>
      <EscapeToHome />
      {/* Print instructions — hidden when printing */}
      <div
        className="print:hidden"
        style={{
          width: '21cm',
          padding: '10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          color: '#555',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ color: '#e53e3e' }}>
          To print: Ctrl+P → set paper to A4 → margins: None → scale: 100%
        </span>
        <a
          href="/"
          style={{ color: '#555', textDecoration: 'none', borderBottom: '1px solid #ccc' }}
        >
          ← portfolio
        </a>
      </div>

      {/* A4 Resume card */}
      <div
        className="Calibri"
        style={{
          width: '21cm',
          height: '29.7cm',
          overflow: 'hidden',
          background: 'white',
          padding: '0.7cm 0.8cm',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          color: '#111',
          fontSize: '12pt',
          lineHeight: 1.4,
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '25pt', fontWeight: 900, letterSpacing: '0.04em', margin: 0, color: '#111' }}>
              {d.name}
            </h1>
            <p style={{ fontSize: '12pt', margin: '1px 0 3px', color: '#333' }}>{d.jobTitle}</p>
            <div style={{ display: 'flex', gap: 10, fontSize: '11pt' }}>
              {d.links.map(link => (
                <a key={link.url} href={link.url} style={{ color: '#1a56db', textDecoration: 'none' }}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '11pt', color: '#333', lineHeight: 1.6 }}>
            <div>
              <a href={`mailto:${d.email}`} style={{ color: '#1a56db', textDecoration: 'none' }}>{d.email}</a>
            </div>
            <div>+91 {d.contact}</div>
            <div>{d.location}</div>
          </div>
        </div>

        {/* Skills */}
        <Section title="SKILLS">
          <p style={{ fontSize: '11pt', color: '#222', margin: 0 }}>{d.skills.join(' · ')}</p>
        </Section>

        {/* Summary */}
        <Section title="SUMMARY">
          <p style={{ fontSize: '11pt', color: '#222', margin: 0 }}>{d.about}</p>
        </Section>

        {/* Experience */}
        <Section title="EXPERIENCE">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {d.experiences.map(exp => (
              <div key={exp.duration}>
                <div style={{ marginBottom: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 700, fontSize: '12pt', color: '#111' }}>{exp.companyName}</span>
                    <span style={{ fontSize: '10.5pt', color: '#555', flexShrink: 0 }}>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '11pt', color: '#444', fontStyle: 'italic' }}>{exp.title}</span>
                    <span style={{ fontSize: '10.5pt', color: '#777', flexShrink: 0 }}>{exp.location}</span>
                  </div>
                </div>
                <ul style={{ margin: '6px 0 0 16px', padding: 0, fontSize: '11pt', color: '#222', listStyleType: 'disc' }}>
                  {exp.description.map((point, i) => (
                    <li key={i} style={{ marginBottom: 1 }} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="EDUCATION">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {d.education.map(edu => (
              <div key={edu.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11pt' }}>
                <span>
                  <strong>{edu.name}</strong>
                  <span style={{ color: '#555', marginLeft: 6 }}>({edu.institution})</span>
                </span>
                <span style={{ color: '#555' }}>{edu.start} – {edu.end}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ pageBreakInside: 'avoid' }}>
      <p style={{ fontWeight: 900, letterSpacing: '0.06em', fontSize: '12pt', margin: '0 0 2px', color: '#111' }}>
        {title}
      </p>
      <hr style={{ border: 'none', borderTop: '1.5px solid #222', margin: '0 0 4px' }} />
      {children}
    </div>
  );
}
