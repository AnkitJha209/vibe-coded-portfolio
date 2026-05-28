import React from "react";
import links from "../data/links";
import projects from "../data/projects";

export default async function live({ args }: any) {
    const key = args[0] || "";
    const url =
        links[`${key}_live`] ||
        links[key] ||
        projects.find((p: any) => p.id === key)?.live ||
        links.live;
    return (
        <div className="text-sm">
            Live:{" "}
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300"
            >
                {url}
            </a>
        </div>
    );
}
