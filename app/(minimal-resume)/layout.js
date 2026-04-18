import "#/app/globals.css";
import "#/assets/font-awsome/css/all.css";

export const metadata = {
  title: "Rahul Gupta — Resume",
  description: "Rahul Gupta Software Developer Resume",
};

export default function ResumeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          /* ── Resume page resets — override terminal globals ── */
          html, body {
            background: #f5f5f5 !important;
            color: #111 !important;
            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
            font-size: 16px !important;
            line-height: 1.5 !important;
          }

          /* ── Print styles ── */
          @media print {
            html, body {
              background: white !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            @page {
              size: A4;
              margin: 0;
            }
            /* hide the print-instructions bar */
            .print\\:hidden { display: none !important; }
            /* ensure the resume card fills the page */
            body > * { margin: 0 !important; }
          }
        `}</style>
      </head>
      <body
        style={{
          background: '#f5f5f5',
          color: '#111',
          fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
