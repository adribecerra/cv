import PageLayout from "../components/PageLayout";

export default function Languagues() {
  const projects = [
    { name: "Spanish", level: "Native or bilingual proficency" },
    { name: "English", level: "Full professional proficiency" }
  ];

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-3">Languagues</h2>
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
    </PageLayout>
  );
}