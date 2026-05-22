import React from "react";
import { Circle } from "lucide-react";

export default function ImageTableCard({ items = [] }) {
    return (
        <>
            {items.map((exp, idx) => {
                const description = exp?.description ?? []; // evita undefined

                return (
                    <div key={idx} className="flex items-center mt-10 md:mt-0 w-full py-8 px-0 md:p-8">
                        <div className="dark:bg-gray-600 rounded-2xl shadow-md overflow-hidden w-full">
                            {/* Card */}
                            <div className="flex items-center bg-gray-200 dark:bg-gray-600 p-4 w-full">
                                <img
                                    src={exp?.image}
                                    alt={exp?.name}
                                    className="w-30 h-30 rounded-full mr-4"
                                    onError={(e) => (e.target.src = "/images/education/placeholder.png")}
                                />
                                <h3 style={{ position: "relative", top: "-10px" }} className="text-md text-gray-700 dark:text-gray-300 leading-none">
                                    {exp?.name}
                                </h3>
                            </div>

                            <div className="bg-gray-300 dark:bg-gray-800 p-4 w-full">
                                <h2 className="text-lg font-semibold text-gray-600 dark:text-indigo-300">
                                    {exp?.description}
                                </h2>
                            </div>
                            <div className="bg-gray-200 dark:bg-gray-800 p-4 w-full">
                                <h2 className="text-lg font-semibold text-gray-400 dark:text-indigo-300">
                                    {exp?.rangeTime}
                                </h2>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}