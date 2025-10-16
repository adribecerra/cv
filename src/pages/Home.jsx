import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout bg-gray-50 dark:bg-gray-900 transition-colors duration-300>
        <h1 className="text-3xl font-bold mb-4">Hola! Soy Adrian,</h1>
        <p className="text-lg">
          Durante más de 15 años he trabajando como desarrollador backend, si bien he desarrollado aplicaciones en front-end (como este cv de presentación 😁) mi fuerte siempre ha sido el backend-
          Apasionado de la tecnología y crear soluciones escalables y a medida. Siempre buscando estar al día en tecnologías de vanguardia.
        </p>
    </PageLayout>
  );
/*
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-3">Hola! Soy Adrian</h2>
     
        <p className="mb-4">
          Durante más de 15 años he trabajando como desarrollador backend, si bien he desarrollado aplicaciones en front-end (como este cv de presentación 😁) mi fuerte siempre ha sido el backend-
          Apasionado de la tecnología y crear soluciones escalables y a medida. Siempre buscando estar al día en tecnologías de vanguardia.
        </p>
      
    </section>
  );*/
}