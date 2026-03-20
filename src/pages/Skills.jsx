import PageLayout from "../components/PageLayout";

const skills = [
  {
    name: "Java",
    image: "images/skills/java.png",
    description:
      "Construcción de APIs y microservicios escalables con Spring Boot.",
  },
  {
    name: "Spring Boot",
    image: "images/skills/spring.png",
    description:
      "Arquitectura REST, seguridad, y despliegue en entornos productivos.",
  },
  {
    name: "RabbitMQ",
    image: "images/skills/RabbitMQ.png",
    description:
      "Sistemas event-driven y procesamiento asíncrono con colas de mensajes.",
  },
  {
    name: "Testing",
    image: "images/skills/testing.png",
    description:
      "Desarrollo de pruebas unitarias y de integración para garantizar la calidad del software.",
  },
  {
    name: "AWS",
    image: "images/skills/aws.png",
    description:
      "Servicios en la nube (EC2, RDS, S3, Lambda) para soluciones resilientes.",
  },
  {
    name: "Docker",
    image: "images/skills/docker.png",
    description:
      "Contenerización de aplicaciones para despliegues consistentes.",
  },
];

export default function Skills() {
  return (
    <PageLayout>
      {/* Título centrado en pantalla completa */}
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
      </div>

      {/* Cards abajo, con padding */}
      <div className="p-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="bg-white/80 dark:bg-gray-700/60 border border-gray-200/60 dark:border-gray-600 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-40 object-contain bg-white p-6"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {skill.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}