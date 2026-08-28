# Wajhat — React Portfolio

A responsive personal portfolio built with **React 19 + Vite + Tailwind CSS v4**, created as the final task of a web development internship.

**Live demo:** _add your deployed link here_
**Repo:** _add your GitHub link here_

## Features

- Hero, About, Skills, Projects, Education/Experience, and Contact sections
- Reusable React components (ProjectCard, SectionHeading, Reveal)
- React state: filterable project grid, validated contact form, active-tab nav tracking
- Custom hooks: useTheme (dark/light with persistence), useReveal (scroll animations)
- Fully responsive: mobile nav, fluid grids, tested at mobile/tablet/desktop widths
- Accessible: visible focus states, semantic headings, prefers-reduced-motion support

## Project structure

```
src/
├── components/
│   ├── icons/BrandIcons.jsx   # GitHub / LinkedIn SVG icons
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeading.jsx
│   └── Reveal.jsx
├── data/
│   └── data.js                # ALL editable content lives here
├── hooks/
│   ├── useReveal.js
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── index.css                  # design tokens (colors, fonts) + global styles
```

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Customize your content

Everything you need to personalize is in `src/data/data.js`:

- `profile` — your name, title, tagline, email, phone, social links, avatar initials
- `about` — bio paragraphs and stat highlights
- `skills` — technology name, proficiency %, and category
- `projects` — name, description, tech stack, GitHub link, live demo link
- `education` — internships, degrees, certifications, achievements

You don't need to touch any component file to update your content — just edit the arrays/objects in data.js.

To swap the initials avatar for a real photo, drop an image in src/assets/, import it in Hero.jsx, and replace the initials <span> with an <img>.

## Design tokens

Colors, fonts, and spacing live in src/index.css under the @theme block (Tailwind v4 syntax) — change --color-indigo, --color-amber, etc. to re-theme the whole site in one place.

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deploy

### Option A — Vercel
1. Push this project to a GitHub repository.
2. Go to vercel.com -> Add New Project -> import your repo.
3. Vercel auto-detects Vite. Framework preset: Vite, Build command: npm run build, Output directory: dist.
4. Click Deploy. You'll get a live .vercel.app URL.

### Option B — Netlify
1. Push this project to a GitHub repository.
2. Go to netlify.com -> Add new site -> Import an existing project.
3. Build command: npm run build, Publish directory: dist.
4. Click Deploy site.

### Pushing to GitHub (if you haven't yet)
```bash
git init
git add .
git commit -m "Final internship task: React portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Tech stack

React 19 - Vite - Tailwind CSS v4 - lucide-react (icons)
