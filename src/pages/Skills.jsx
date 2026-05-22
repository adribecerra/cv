import { s } from "motion/react-client";
import PageLayout from "../components/PageLayout";
import SkillModalFilter from "../components/SkillModalFilter";
import { useState } from "react";


const skills = [
    {
        name: "Backend Development",
        image: "images/skills/backend2.png",
        items: ["Java", "Drools", "Hibernate", "JavaScript", "JPA", "Redis", "RabbitMQ"],
        description: "Building scalable and data-intensive systems using Java, Spring Boot, and Drools. Strong background in microservices, rule engines, distributed systems, and asynchronous processing.",
    },
    {
        name: "Frontend Development",
        image: "images/skills/frontend.png",
        items: ["React", "Tailwind", "CSS", "HTML", "MaterializeCSS", "JSP"],
        description:
            "Building responsive and user-friendly interfaces using React, Tailwind CSS, and other frontend technologies.",
    },
    {
        name: "Spring Framework",
        image: "images/skills/spring.png",
        items: ["Spring Security", "Spring Data JPA", "Spring Boot", "Spring Retry", "Spring MVC"],
        description:
            "REST APIs Architectures, Spring Security, Spring Data JPA",
    },
    {
        name: "AWS Cloud Services",
        image: "images/skills/aws.png",
        items: ["AWS S3", "AWS Glue", "AWS Athena", "AWS Lambda", "AWS EC2", "AWS RDS", "AWS CloudWatch"],
        description:
            "Utilizing AWS services like S3, AWSGlue, Athena db and Lambda for building scalable and serverless applications."
    },
    {
        name: "Testing",
        image: "images/skills/testing.png",
        items: ["JUnit", "Mockito", "MockS3"],
        description:
            "Unit testing with JUnit and Mockito, integration testing with MockS3, and end-to-end testing strategies to ensure software quality and reliability."
    },
    {
        name: "Docker",
        image: "images/skills/docker.png",
        items: ["Docker"],
        description:
            "Containerization of applications for consistent deployments.",
    },
    {
        name: "Tools",
        image: "images/skills/tools.png",
        items: ["VisualVM", "Git", "Maven", "Swagger", "Postman", "JMeter", "JProfiler", "Grafana"],
        description:
            "Various tools for monitoring, version control, and build automation.",
    },
    {
        name: "Methodologies",
        image: "images/skills/methodologies.png",
        items: ["Agile", "Scrum", "Kanban", "UML", "Azure DevOps", "Jira", "Confluence"],
        description:
            "Methodologies for project management and software development process.",
    },
];

export default function Skills() {
    // States to control modal visibility, active card data, and search query
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Handler when a card is clicked
    const handleCardClick = (skill) => {
        setSelectedSkill(skill);
        setSearchQuery(""); // Clear previous search
        setIsOpen(true);
    };

    // Filter logic for the skills list
    const filteredSkills = selectedSkill
        ? selectedSkill.items.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <PageLayout>
            {/* Título centrado en pantalla completa */}
            {/*<div className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
      </div>*/}

            {/* Cards abajo, con padding */}
            <div className="mt-10">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <article
                            key={skill.name}
                            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-90 bg-gray-300/80 dark:bg-gray-700/60 border border-gray-200/60 dark:border-gray-600 rounded-2xl shadow-lg overflow-hidden"
                            onClick={() => handleCardClick(skill)}
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="h-45 w-full object-contain bg-white p-6"
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
                {/* 2. Modal Overlay & Window */}
                {isOpen && selectedSkill && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

                        {/* Modal Container */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative max-h-[90vh] flex flex-col">

                            {/* Header & Close Button */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold dark:text-white">Filter: {selectedSkill.name}</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-bold text-xl"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Filter Input */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Type to filter skills..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* 3-Column List of skills */}
                            <div className="overflow-y-auto flex-1">
                                {filteredSkills.length > 0 ? (
                                    <ul className="grid grid-cols-3 gap-3">
                                        {filteredSkills.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium text-center truncate"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400 text-center py-4">No skills match your filter.</p>
                                )}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
}