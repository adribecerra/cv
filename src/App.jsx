import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex">
      {/* Botón flotante Dark Mode */}
      <DarkModeToggle />

        {/* Sidebar fijo */}
        <Sidebar />

        {/* Contenido principal (cambia según la ruta) */}
        <main className="w-full md:ml-64 transition-all duration-300">
          <Routes>
            <Route path="/cv/" element={<Home />} />
            <Route path="/cv/about" element={<About />} />
            <Route path="/cv/experience" element={<Experience />} />
            <Route path="/cv/skills" element={<Skills />} />
            <Route path="/cv/projects" element={<Projects />} />
            <Route path="/cv/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}