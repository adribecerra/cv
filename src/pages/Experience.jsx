import { Circle } from "lucide-react";
import { useState } from "react";
import PageLayout from "../components/PageLayout";

export default function Experience() {
    const [expanded, setExpanded] = useState({});

    const experiences = [
        {
            company: "Silicon Development (Texas, USA)",
            role: "Senior Software Engineer",
            years: "10/2020 - Present",
            image: "images/experience/hc.png",  // Agrega imagen (usa placeholder si no tienes)
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
            image: "images/experience/digicel.png",
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
            image: "images/experience/navis.png",
            description: [
                "Working with AWS Technologies (S3, SQS,SNS,Lambda).",
                "Propose a serverless architecture.",
                "ETL implementation using AWS Glue."
            ],
        },
        {
            company: "Digicel Group (Jamaica)",
            role: "Senior Software Engineer",
            years: "01/2018 - 05/2018",
            image: "images/experience/digicel.png",
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
            image: "images/experience/recovery.png",
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
            image: "images/experience/tangoe.png",
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
            image: "images/experience/sitrack.png",
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
        <PageLayout>
            {/* Título centrado en pantalla completa */}
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-4xl font-bold text-center">Professional Experience</h2>
            </div>

            {/* Contenido */}
            <div className="p-1">
                {/* Móvil: cards */}
                <div className="md:hidden">
                    {experiences.map((exp, idx) => {
                        const isExpanded = expanded[idx] || false;
                        return (
                            <div key={idx} className="overflow-hidden rounded-2xl shadow-md mb-6 w-full">
                                {/* Icono y compañía */}
                                <div className="flex bg-white dark:bg-gray-600 items-center p-4">
                                    <img src={exp.image} alt={exp.company} className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-500" onError={(e) => e.target.src = "/images/placeholder.png"} />
                                    <h3 className="-mt-0 text-md text-gray-700 dark:text-gray-300 leading-none">{exp.company}</h3>
                                </div>

                                <div className="items-center bg-gray-200 dark:bg-gray-800 p-6">
                                    <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">{exp.role}</h2>
                                    <p className="text-sm text-gray-500 mb-4">{exp.years}</p>

                                    {/* Botón Ver más */}
                                    {exp.description.length > 0 && (
                                        <button
                                            onClick={() => setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                            className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm mb-4"
                                        >
                                            {isExpanded ? "Ver menos" : "Ver más"}
                                        </button>
                                    )}

                                    {/* Descripción colapsable */}
                                    {isExpanded && (
                                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                            {exp.description.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <Circle size={8} className="mt-2 text-indigo-500 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Desktop: timeline */}
                <div className="hidden md:block relative max-w-4xl mx-auto">
                    {/* Línea vertical */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-500"></div>

                    {experiences.map((exp, idx) => {
                        const isExpanded = expanded[idx] || false;
                        return (
                            <div key={idx} className="relative flex items-start mb-8">
                                {/* Punto */}
                                <div className="w-16 h-16 bg-indigo-500 rounded-full absolute left-0 z-10 flex items-center justify-center text-white text-xs font-bold whitespace-pre-line">
                                    <span>{exp.years.replace(' - ', '\n')}</span>
                                </div>

                                <div className="ml-20 dark:bg-gray-600 rounded-2xl shadow-md overflow-hidden w-full">
                                    {/* Card */}
                                    <div className="bg-white dark:bg-gray-600 p-6">
                                        {/* Icono y compañía */}
                                        <div className="flex items-center" >
                                            <img src={exp.image} alt={exp.company} className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-500" onError={(e) => e.target.src = "/images/placeholder.png"} />
                                            <h3 style={{ position: 'relative', top: '-10px' }} className="text-md text-gray-700 dark:text-gray-300 leading-none">{exp.company}</h3>
                                        </div>
                                    </div>
                                    <div className="bg-gray-300 dark:bg-gray-800 p-6 w-full">
                                        <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">{exp.role}</h2>
                                        <p className="text-sm text-gray-500 mb-4">{exp.years}</p>

                                        {/* Botón Ver más */}
                                        {exp.description.length > 0 && (
                                            <button
                                                onClick={() => setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                                className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm mb-4"
                                            >
                                                {isExpanded ? "Ver menos" : "Ver más"}
                                            </button>
                                        )}

                                        {/* Descripción colapsable */}
                                        {isExpanded && (
                                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                                {exp.description.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2">
                                                        <Circle size={8} className="mt-2 text-indigo-500 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PageLayout>
    );
}