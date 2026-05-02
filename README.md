# React Components

A collection of reusable UI components built with React 19 and Vite, deployed to GitHub Pages.

**Live demo:** [oussamadrf.github.io/React-Components](https://oussamadrf.github.io/React-Components/)

---

## Components

| Component | Description |
|---|---|
| **Accordion** | Collapsible Q&A sections with animated chevron |
| **Password Strength Checker** | Real-time validation against 5 constraints with a progress bar |
| **Search** | Country search with 300ms debounce and filtered results |
| **Select Menu** | Accessible dropdown with keyboard navigation (↑ ↓ Enter Esc) and ARIA roles |

---

## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev) (rolldown-vite)
- Plain CSS with native nesting
- [Bootstrap Icons](https://icons.getbootstrap.com)
- [Poppins](https://fonts.google.com/specimen/Poppins) via @fontsource

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

---

## Docker

Build and run the app in a container (serves the production build via Nginx on port 80):

```bash
docker build -t react-components .
docker run -p 8080:80 react-components
```

Then open [http://localhost:8080/React-Components/](http://localhost:8080/React-Components/)

---

## Project Structure

```
src/
├── components/
│   ├── accordion/
│   ├── passwordStrengthChecker/
│   ├── search/
│   └── selectMenu/
├── App.jsx
├── main.jsx
└── index.css
```
