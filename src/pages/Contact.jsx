export default function Contact() {
  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-400 min-h-screen transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-3">Contacto</h2>
      <p>
        📧 Email: <a href="mailto:tuemail@example.com" className="text-indigo-600">tuemail@example.com</a>
      </p>
      <p>
        💼 LinkedIn: <a href="https://linkedin.com/in/tuusuario" className="text-indigo-600">linkedin.com/in/tuusuario</a>
      </p>
      <p>
        💻 GitHub: <a href="https://github.com/tuusuario" className="text-indigo-600">github.com/tuusuario</a>
      </p>
    </section>
  );
}