import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      {/* Título centrado en pantalla completa */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Foto solo visible en móviles */}
          <div className="block md:hidden mb-6">
            <img
              src="images/fotocv.PNG"
              alt="Tu foto"
              className="w-40 h-40 rounded-full shadow-md mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hola! Soy Adrian,</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Con más de 15 años de experiencia en el desarrollo de software. Soy una persona orientada a la resolución de problemas, con experiencia trabajando en distintos proyectos y variedad de técnologías.
          </p>
        </div>
      </div>

      {/* Cards abajo, con padding */}
      <div className="p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1: Enfoque y experiencia */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Mi enfoque</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Me gusta involucrarme en los desafíos, entender el problema de fondo y encontrar soluciones prácticas.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Estoy orientado a resultados y cuento con experiencia participando en proyectos tecnológicos de alto impacto, donde me enfoco en comprender las necesidades del negocio y transformarlas en soluciones concretas, priorizando la eficiencia, la calidad y la mejora continua.
            </p>
          </article>

          {/* Card 2: Valores y colaboración */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Mis valores</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Adaptación a entornos dinámicos</li>
              <li>Trabajo en equipo y comunicación clara</li>
              <li>Colaboración con equipos multidisciplinarios</li>
              <li>Contribución a la evolución de procesos</li>
            </ul>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}