# Student Portfolio

A React portfolio application built with Vite, featuring reusable components, props-based data flow, and client-side routing with React Router.

**Author:** Priyanshi Dalwadi
**Course:** Advanced Web Development Frameworks (ITUE301)
**Institution:** CHARUSAT — DEPSTAR CSE

---

## Tech Stack

- React 18+
- Vite
- React Router v6

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/dpriyanshiii/student-portfolio.git
cd student-portfolio
npm install
```

### Run the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
student-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Footer.jsx
│   │   └── NavBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## Practical 1: Introduction to React and Component Architecture

- Set up a React project using Vite
- Built 4 reusable functional components: `Header`, `About`, `Skills`, `Footer`
- Composed all components into a single-page layout inside `App.jsx`
- Used **props** to pass a `name` into `Header` and a `skillList` array into `Skills`

## Practical 2: State Management and Routing in React

- Installed and configured **React Router v6** (`react-router-dom`)
- Wrapped the app with `BrowserRouter` in `main.jsx`
- Added a `NavBar` component using `<Link>` (no full page reloads), with active-route highlighting
- Created 3 routes:
  - `/` → `Home.jsx`
  - `/projects` → `Projects.jsx`
  - `/contact` → `Contact.jsx`
- Used **two `useState` hooks**:
  - One to toggle visibility of a tip on the Home page
  - One for a controlled input on the Contact page, updating live as the user types

---

## Verified

- App runs with `npm run dev` with no console errors
- All routes navigate correctly without page reloads
- Props and state update the UI correctly

---

## License

This project is for academic purposes as part of ITUE301 coursework.
