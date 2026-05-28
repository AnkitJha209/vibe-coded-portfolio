import React from "react";
import projects from "../data/projects";

export default async function projectsCmd() {
    const list = projects
        .map(
            (p: any, i: number) =>
                `[${i + 1}] ${p.name.padEnd(18)} → ${p.short}`,
        )
        .join("\n");

    return (
        <div className="text-sm whitespace-pre-wrap">
            {`PROJECTS  [${projects.length} found]
─────────────────────────────────────────────────────
${list}
Usage: cat prepedge | cat vedaai | cat financial
cat querynest | cat vouch`}
        </div>
    );
}
