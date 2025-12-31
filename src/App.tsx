import { HashRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="nav">
            <span className="nav-brand">JASON DING</span>

            <nav className="nav-links">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                Home
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                Projects
              </NavLink>
              <NavLink to="/music" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                Music
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                Contact
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
