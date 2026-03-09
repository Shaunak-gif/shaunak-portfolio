# Shaunak Dandavate — Portfolio

Personal portfolio website built with **React + Vite**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
shaunak-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── shared.css        # Global shared styles & utilities
│   │   ├── FadeIn.jsx        # Scroll-triggered fade animation
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Marquee.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Achievements.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── data.js               # All site content (skills, projects, links…)
│   ├── App.jsx               # Root component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global CSS + animations
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customising Content

All content lives in **`src/data.js`** — edit there to update:
- Social / contact links
- Skills & tech stack
- Projects (title, description, GitHub link)
- Achievements

---

## 🌐 Deployment

Works with any static host. Recommended options:

| Platform | Command |
|----------|---------|
| **Vercel** | `vercel` (auto-detects Vite) |
| **Netlify** | Drag & drop `dist/` folder |
| **GitHub Pages** | Push `dist/` to `gh-pages` branch |

---

## 🛠 Tech Stack

- React 18
- Vite 5
- Pure CSS (no UI library)
- Google Fonts (Cormorant Garamond + DM Mono)
