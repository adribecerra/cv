export default function Skills() {
  const skills = ["Java", "Spring Boot", "React", "SQL", "AWS", "Docker"];

  return (
    <section className="my-10 p-8">
      <h2 className="text-2xl font-bold mb-3">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}