export default function Experience() {
  const jobs = [
    {
      company: "Empresa X",
      role: "Backend Developer",
      years: "2021 - Presente",
      description: "Desarrollo de microservicios en Java y Spring Boot."
    },
    {
      company: "Empresa Y",
      role: "Frontend Developer",
      years: "2019 - 2021",
      description: "Construcción de interfaces en React y Material UI."
    }
  ];

  return (
    <section className="my-10 p-8">
      <h2 className="text-2xl font-bold mb-3">Experiencia</h2>
      <ul className="space-y-4">
        {jobs.map((job, i) => (
          <li key={i} className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">{job.role} - {job.company}</h3>
            <p className="text-sm text-gray-600">{job.years}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}