import { useState } from "react";

export default function SkillModalFilter() {
    // Sample Data
    const skills = [
        { name: "Frontend", description: "Click to filter web words", words: ["React", "Tailwind", "CSS", "HTML", "JavaScript", "TypeScript", "Vue", "Next.js", "Vite", "Redux", "Sass", "GraphQL"] },
        { name: "Backend", description: "Click to filter server words", words: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "Redis", "GraphQL", "AWS", "Firebase", "Go"] }
    ];

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

    // Filter logic for the words list
    const filteredWords = selectedSkill
        ? selectedSkill.words.filter((word) =>
            word.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <div className="p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
            {/* 1. Grid of Cards */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                    <article
                        key={skill.name}
                        onClick={() => handleCardClick(skill)}
                        className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-5"
                    >
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
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
                                placeholder="Type to filter words..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* 3-Column List of Words */}
                        <div className="overflow-y-auto flex-1">
                            {filteredWords.length > 0 ? (
                                <ul className="grid grid-cols-3 gap-3">
                                    {filteredWords.map((word, index) => (
                                        <li
                                            key={index}
                                            className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium text-center truncate"
                                        >
                                            {word}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No words match your filter.</p>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}