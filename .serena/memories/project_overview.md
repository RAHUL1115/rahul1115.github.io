# Project: rahul1115.github.io

## Purpose
Personal portfolio website for Rahul Gupta - Full Stack Developer & Data Analyst.

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3.4, Lucide React icons
- Deployed as static site (GitHub Pages)

## Structure
```
app/
  layout.tsx          # Root layout for main portfolio
  page.tsx            # Home/About page
  globals.css         # Global styles
  contact/page.tsx    # Contact form
  projects/page.tsx   # Projects list
  (minimal-resume)/   # ISOLATED route group - resume pages
    layout.js         # Own HTML/body - completely separate from main layout
    software-developer/page.jsx
    software-developer/data.js
  (resume)/           # Another resume route group
components/
  Base.jsx            # Main layout wrapper (Sidebar + content)
  Sidebar.jsx         # Left sidebar nav (blue bg on desktop)
  minimal-resume/     # Components for minimal-resume pages
  resume/             # Components for resume pages
```

## Key Insight
The `(minimal-resume)` and `(resume)` route groups have their own `layout.js` with `<html><body>`, making them completely isolated from the main portfolio layout.

## Commands
- `npm run dev` - start dev server
- `npm run build` - build
- `npm run lint` - lint
