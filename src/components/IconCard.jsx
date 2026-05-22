import React from "react";
import { Circle } from "lucide-react";

export default function IconCard({ items = [] }) {
    return (
        <>
            {items.map((exp, idx) => {
                const description = exp?.description ?? []; // evita undefined

                return (
                    <div key={idx} className="flex items-center mt-10 md:mt-0 w-full py-2 px-0 md:py-10 md:px-40">
                        <div className="dark:bg-gray-600 rounded-2xl shadow-md overflow-hidden w-full divide-y divide-gray-200">
                            {/* Card */}
                            <div className="flex items-center bg-gray-300 dark:bg-gray-600 p-4">
                                <img
                                    src={exp?.image}
                                    alt={exp?.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                    onError={(e) => (e.target.src = "/images/education/placeholder.png")}
                                />
                                <h3 className="-mt-0 text-md text-gray-700 dark:text-gray-300 leading-none">
                                    {exp?.name}
                                </h3>
                            </div>

                            <div className="bg-gray-400 dark:bg-gray-800 p-1 w-full">
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-indigo-300 ml-2 mt-2">
                                    {exp?.description}
                                </h3>
                                {exp?.certification && 
                                <a href={exp.certification} target="_blank" rel="noopener noreferrer" className="underline text-lg font-semibold text-gray-500 dark:text-indigo-500 ml-2 mt-2">
                                    See Certificate
                                </a>}

                            </div>
                            {exp?.rangeTime && <div className="bg-gray-300 dark:bg-gray-600 p-1 w-full">
                                <h2 className="text-lg font-semibold text-gray-500 dark:text-indigo-300 ml-2 mt-2">
                                    {exp?.rangeTime}
                                </h2>
                            </div>}
                        </div>
                    </div>
                );
            })}
        </>
    );
}