import React from "react";
import links from "../data/links";

export default async function resume() {
    return (
        <div className="text-sm">
            Resume:{" "}
            <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300"
            >
                Download PDF
            </a>
        </div>
    );
}
