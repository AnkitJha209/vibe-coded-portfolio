import React from "react";
import projects from "../data/projects";

export default async function cat({ args }: any) {
    const name = args[0];
    if (!name)
        return <div className="text-sm">Usage: cat &lt;project-key&gt;</div>;

    const project = projects.find(
        (p: any) => p.id === name || p.name === name || p.short === name,
    );
    if (!project)
        return (
            <div className="text-sm">cat: {name}: No such file or project</div>
        );

    return (
        <div className="text-sm">
            <div className="font-medium">{project.name}</div>
            <div className="text-xs text-gray-300">{project.short}</div>
            {project.live && (
                <div className="mt-2">
                    Live:{" "}
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300"
                    >
                        {project.live}
                    </a>
                </div>
            )}
            {project.repo && (
                <div className="mt-2">
                    Repo:{" "}
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300"
                    >
                        {project.repo}
                    </a>
                </div>
            )}
            <div className="font-medium">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>
            <div className="font-medium">PROJECT: {project.name}</div>
            <div className="font-medium">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>
            <div className="mt-2">{project.description}</div>
            {project.stack && (
                <div className="mt-2">
                    STACK:
                    {project.stack.join(" · ")}
                </div>
            )}
            <div className="mt-2">LINKS:</div>
            {project.live && <div>→ live {project.live}</div>}
            {project.repo && <div>→ github {project.repo}</div>}
            <div className="mt-2">
                Commands: open {project.id}-live | open {project.id}-repo
            </div>
            <div className="font-medium mt-2">
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            </div>
        </div>
    );
}
