import React from "react";
import { Circle } from "lucide-react";

export default function Card({ items = [] }) {
    return (
        <>
            {items.map((exp, idx) => {
                const description = exp?.description ?? []; // evita undefined

                return (
                    <div key={idx} className="mt-10 md:mt-0 py-8 px-0 md:p-8 w-full">
                        <div className="dark:bg-gray-600 rounded-2xl shadow-md overflow-hidden w-full">
                            {/* Card */}
                            <div className="flex items-center bg-white dark:bg-gray-600 p-6">
                                {/* Icono y compañía */}
                                <img
                                    src={exp?.image}
                                    alt={exp?.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                    onError={(e) => (e.target.src = "/images/placeholder.png")}
                                />
                                <h3 className="-mt-0 text-md text-gray-700 dark:text-gray-300 leading-none">
                                    {exp?.name}
                                </h3>

                            </div>

                            <div className="bg-gray-300 dark:bg-gray-800 p-6 w-full">
                                <h2 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
                                    {exp?.description}
                                </h2>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}