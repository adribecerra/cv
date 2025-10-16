export default function About() {
  return (
    <section className="my-10 p-8">
      <h2 className="text-2xl font-bold mb-3">Sobre mí</h2>
      <div>
        <p className="mb-4">
          Soy un desarrollador con experiencia en backend y frontend, apasionado
          por crear soluciones escalables e intuitivas.
        </p>
        <p className="mb-4">
          Apply my skills and knowledge obtained during my university career and throughout my work experience,
          where new ideas are accepted and help to make good decisions.
          In this way I will not only be able to collaborate in the fulfillment of the objectives and mission of the company
          but also achieve my own professional success and expand my knowledge.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="chip"> Apasionado por la tecnología</span>
        <span className="chip"> Trabajo en equipo</span>
        <span className="chip"> Resolución de problemas</span>
      </div>
    </section>
  );
}