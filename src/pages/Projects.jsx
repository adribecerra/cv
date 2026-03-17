export default function Projects() {
  const projects = [
    { name: "Portfolio Web", link: "https://github.com/tuusuario/portfolio" },
    { name: "API Rest con Spring", link: "https://github.com/tuusuario/api-rest" }
  ];

  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-400 min-h-screen transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-3">Proyectos</h2>
      <ul className="list-disc pl-6">
        {projects.map((p, i) => (
          <li key={i}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}