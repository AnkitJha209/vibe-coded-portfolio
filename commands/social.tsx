import React from "react";
import links from "../data/links";

export default async function social() {
    return (
        <div className="text-sm">
            <div>
                GitHub:{" "}
                <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    {links.github}
                </a>
            </div>
            <div>
                LinkedIn:{" "}
                <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    {links.linkedin}
                </a>
            </div>
            <div>
                Email:{" "}
                <a href={links.email} className="text-blue-300">
                    ankitjha.connect@gmail.com
                </a>
            </div>
            <div>
                Portfolio:{" "}
                <a
                    href={links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    {links.portfolio}
                </a>
            </div>
        </div>
    );
}
