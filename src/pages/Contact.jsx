import PageLayout from "../components/PageLayout";

export default function Contact() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-3">Contacto</h2>
      <p>
        📧 Email: <a href="mailto:adriansnm03@gmail.com" className="text-indigo-600">adriansnm03@gmail.com</a>
      </p>
      <p>
        💼 LinkedIn: <a href="https://linkedin.com/in/ing-adrian-becerra-55a66623" className="text-indigo-600">linkedin.com/in/ing-adrian-becerra-55a66623</a>
      </p>
      <p>
        💻 GitHub: <a href="https://github.com/adribecerra" className="text-indigo-600">github.com/adribecerra</a>
      </p>
    </PageLayout>
  );
}