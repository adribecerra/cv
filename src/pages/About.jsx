import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      {/* Título centrado en pantalla completa */}
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center">About me</h2>
      </div>

      {/* Cards abajo, con padding */}
      <div className="p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1: Resumen */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <p className="mb-4 text-gray-700 dark:text-gray-300"> 
              Soy un desarrollador con experiencia en backend y frontend, apasionado
              por crear soluciones escalables e intuitivas.
            </p>
            <p className="text-gray-700 dark:text-gray-300"> 
              Aplico mis habilidades y conocimientos obtenidos durante mi carrera
              universitaria y la experiencia laboral, trabajando con nuevas ideas
              para contribuir a los objetivos de la empresa y seguir creciendo
              profesionalmente.
            </p>
          </article>

          {/* Card 2: Destacados / habilidades */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"> 
            <h4 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Lo que aporto</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Desarrollo backend escalable</li>
              <li>Interfaces limpias y usables</li>
              <li>Trabajo colaborativo y comunicación</li>
              <li>Resolución de problemas complejos</li>
            </ul>
          </article>

          {/* Card 3: Valores / “chips” */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"> 
            <h4 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Mis valores</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100 text-sm">
                Apasionado por la tecnología
              </span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100 text-sm">
                Trabajo en equipo
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-100 text-sm">
                Resolución de problemas
              </span>
            </div>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}