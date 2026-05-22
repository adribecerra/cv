import PageLayout from "../components/PageLayout";

const skills = [
  {
    name: "Java",
    image: "images/skills/java.png",
    description:
      "Building scalable APIs and micro services with Java",
  },
  {
    name: "Spring Framework",
    image: "images/skills/spring.png",
    description:
      "REST APIs Architectures, Spring Security, Spring Data JPA",
  },
  {
    name: "RabbitMQ",
    image: "images/skills/RabbitMQ.png",
    description:
      "Designing, building, and maintaining event-driven systems with asynchronous processing using message queues.",
  },
  {
    name: "Testing",
    image: "images/skills/testing.png",
    description:
      "Unit testing with JUnit and Mockito, integration testing with MockS3, and end-to-end testing strategies to ensure software quality and reliability."
  },
  {
    name: "AWS",
    image: "images/skills/aws.png",
    description:
      "Utilizing AWS services like S3, AWSGlue, Athena db and Lambda for building scalable and serverless applications.",
  },
  {
    name: "Docker",
    image: "images/skills/docker.png",
    description:
      "Containerization of applications for consistent deployments.",
  },
];

export default function Skills() {
  return (
    <PageLayout>
      {/* Título centrado en pantalla completa */}
      {/*<div className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
      </div>*/}

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
                className="w-full h-35 object-contain bg-white p-6"
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