import { Linkedin , Mail, Download  } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-indigo-700 dark:bg-gray-800 text-white flex flex-col items-center py-8 shadow-lg">
      {/* Foto */}
      <img
        src="images/fotocv.PNG"
        alt="Tu foto"
        className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-6"
      />

      {/* Nombre */}
      <h1 className="text-xl font-bold mb-2">Adrian Becerra</h1>
      <p className="text-sm text-indigo-200 mb-8">Fullstack Developer</p>

      {/* Menú */}
      <nav className="flex flex-col space-y-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Íconos sociales */}
      <div className="flex gap-6 mt-auto mb-4">
        <a
          href="https://www.linkedin.com/in/ing-adrian-becerra-55a66623"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="files/CV-Adrián Becerra.pdf"
          download
          //className="p-2 rounded-full hover:bg-green-500 hover:text-white transition"
          className="hover:text-indigo-300 transition-colors"
        >
          <Download size={28} />
        </a>
        <a
          href="mailto:adriansnm03@hotmail.com"
          className="hover:text-indigo-300 transition-colors"
        >
          <Mail size={28} />
        </a>
      </div>

      {/* Footer opcional */}
      <div className="mt-auto text-xs text-indigo-300">
        © {new Date().getFullYear()} Adrian Becerra
      </div>
    </aside>
  );
}