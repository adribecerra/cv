import { Circle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Silicon Development (Texas, USA)",
      role: "Senior Software Engineer",
      years: "10/2020 - Presente",
      description: [
        "Working on a rule engine service implemented with Drools and Java as the core.",
        "Use of AWS S3 to consume input data and store system output results.",
        "Monitoring and analyzing memory usage; improving code performance to avoid OOM.",
        "Working with Databricks and PySpark.",
        "Developing RESTful APIs using Spring Boot.",
        "Implementing unit tests with JUnit and integration tests with MockS3.",
        "Containerization with Docker and message queue integration with RabbitMQ.",
        "System monitoring and dashboards with Grafana.",
        "CI/CD pipeline improvements using Semaphore."
      ]
    },
    {
      company: "Digicel Group (Jamaica)",
      role: "Senior Software Engineer",
      years: "04/2020 - 10/2020",
      description: [
        "Working on Payments processor service.",
        "Programming languages: Java 8 EE",
        "JUnits and DBUnits",
        "API Rest with Springboot",
        "Databases: Oracle and SQLServer",
        "Azure Devops",
      
      ],
    },
    {
      company: "Navis CRM(Orlando, Florida, USA)",
      role: "Senior Software Engineer",
      years: "05/2018 - 10/2020",
      description: [
        "Working with AWS Technologies (S3, SQS,SNS,Lambda).",
        "Propose a serverless architecture.",
        "Creating an ETL using AWS Glue."
      ],
    },
    {
      company: "Digicel Group (Jamaica)",
      role: "Senior Software Engineer",
      years: "01/2018 - 05/2018",
      description: [
        "Programming languages: J2EE, MaterialzeCSS",
        "Database: Oracle",
        " Version Control: GIT",
        "IDE: Spring Tool Suite",
        "Application server: Apache TomcatOther",
        "Tools: Bitbuket, Jira."
      ],
    },
    {
      company: "Recovery Planner (Connecticut, USA)",
      role: "Senior Software Engineer",
      years: "02/2014 - 01/2018",
      description: [
        "Analysis and development of new requirements.",
        "Backend and Front-end improvements, adaptations and corrections.",
        "Reports creation and improvements with RTF, PDF, XML, DOC, DOCX, XLS Y XLSX using APACHE FOP, POI y Plutext DOCX4J.",
        "Unit test with JUNIT y automation test using SELENIUM.",
        "Jira installation for add-ons integration and tests (Service Desk and Agile) using API JAVA y API REST from ATLASSIAN sdk.",
        "Plugins creation to adapt JIRA tool depending on specific requirements"
      ],
    },
    {
      company: "Tangoe (Orange, California, USA)",
      role: "Software Engineer",
      years: "02/2014 - 01/2018",
      description: [
        "Programming languages: J2EE, Drools",
        "Database: MySql",
        "MVC Architecture",
        "Database: Oracle 10g and 11g",
        "IDEs: PL/SQL Developer and Eclipse",
        "Application Server: Weblogic 11gR1",
      ],
    },
    {
      company: "Sitrack (Argentina)",
      role: "Software Engineer",
      years: "02/2014 - 01/2018",
      description: [
        "PHP development implementing PEAR, Java, Javascript.",
        "Versioning control: SVN.",
        "New applications start up.",
        "Improving current applications performance.",
        "Cisco routers configuration.",
        "Monitoring devices protocols integrations and implementation.",
        "Informix to Postgres database migration"
      ],
    },
  ];

  return (
    <section className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="my-10 md:ml-4 ml-14 text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-8">
        Professional Experience
      </h1>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6"
        >
          <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
            {exp.role}
          </h2>
          <h3 className="text-md text-gray-700 dark:text-gray-300">
            {exp.company}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{exp.years}</p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {exp.description.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Circle size={8} className="mt-2 text-indigo-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}