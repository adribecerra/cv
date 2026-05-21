import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ imageSrc, title, description, route })   {
    const stringSizeLimit = 100; // characters limit for title and description
    const shortDesc = `${description.substring(0, stringSizeLimit)}...`; // truncated description

    return (
        <div>
            <img src={imageSrc} alt={title} className="w-full"
                loading="lazy" />
            <div className="p-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                {/* description */}
                <p className="text-gray-600">{shortDesc}</p>
                {/* Read more */}
                {route ? (
                    <Link to={route} className="text-blue-500 hover:underline">
                        Read more
                    </Link>
                ) : null}
            </div>
        </div>
    )
}