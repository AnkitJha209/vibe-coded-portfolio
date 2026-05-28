import React from "react";
import projects from "../data/projects";

export default async function ls({ args }: any) {
    const flag = args.join(" ");
    if (flag === "-la") {
        const out =
            `drwxr-xr-x   ankit  staff   256B  too-many-side-projects/\n` +
            `drwxr-xr-x   ankit  staff   512B  coffee-dependency/\n` +
            `-rw-r--r--   ankit  staff   1.2K  deploy-at-3am.log\n` +
            `-rw-r--r--   ankit  staff    42B  TODO-actually-finish-it.md\n` +
            `drwxr-xr-x   ankit  staff   128B  node_modules/  [DO NOT OPEN]`;
        return <pre className="text-sm whitespace-pre">{out}</pre>;
    }

    if (args[0] === "projects") {
        const out = projects
            .map(
                (p: any, i: number) =>
                    `[${i + 1}] ${p.name.padEnd(18)} → ${p.short}`,
            )
            .join("\n");
        return (
            <pre className="text-sm whitespace-pre">{`PROJECTS  [${projects.length} found]\n─────────────────────────────────────────────────────\n${out}`}</pre>
        );
    }

    return <div className="text-sm">bin/ dev/ home/ proc/ projects/ usr/</div>;
}
