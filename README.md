# Ishita Ghayade — Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons.

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build (outputs to /dist)
npm run preview  # preview the production build
```

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── resume.pdf        ← add your resume here (used by the "Download Resume" button)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js     ← all editable text content (projects, skills, links, etc.)
    ├── hooks/
    │   └── useDarkMode.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        ├── GithubSection.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Customizing

- **Content & links**: edit `src/data/content.js` — social links, project list, skills, timeline, certifications, achievement counts.
- **Resume**: drop your `resume.pdf` into the `public/` folder so the "Download Resume" button works.
- **Colors**: defined in `tailwind.config.js` (`primary` = #FF69B4, `secondary` = #FFC0CB).
- **GitHub widgets**: the GitHub section uses the public `github-readme-stats` and `github-readme-streak-stats` image APIs for the username `Ishita-456` — no setup required, but you can swap themes via the URL query params in `GithubSection.jsx`.
- **Dark mode**: toggled via the navbar button; preference is stored in `localStorage` and respects the user's system preference on first load.

## Notes

- Contact form includes client-side validation (name, email format, subject, message required). It currently shows a success message on valid submit — wire it up to an email service (e.g. Formspree, EmailJS) or your own backend to actually send messages.
- Fully responsive (mobile, tablet, desktop), keyboard-accessible focus states, and respects `prefers-reduced-motion`.
