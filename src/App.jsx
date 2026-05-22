//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Languages from "./pages/Languages";
import Education from "./pages/Education";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
    return (
        <HashRouter>
            <div className="flex">
                {/* Botón flotante Dark Mode */}
                <DarkModeToggle />

                {/* Sidebar fijo */}
                <Sidebar />

                {/* Contenido principal (cambia según la ruta) */}

                <main className="w-full md:ml-64 transition-all duration-300">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/languages" element={<Languages />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/courses" element={<Courses />} />
                        {/*<Route path="/contact" element={<Contact />} />*/}
                    </Routes>
                </main>

            </div>
        </HashRouter>
    );
}