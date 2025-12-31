import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Music from "./pages/Music";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <header
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #444",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/music">Music</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <main style={{ padding: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
