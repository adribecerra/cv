import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ imageSrc, title, description, route })   {
    const stringSizeLimit = 200; // characters limit for title and description
    const shortDesc = `${description.substring(0, stringSizeLimit)}`; // truncated description

    return (
        <div className="group">
            <img src={imageSrc} alt={title} className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-90 w-full"
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