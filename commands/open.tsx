import React from "react";
import links from "../data/links";

export default async function openCmd({ args }: any) {
    const target = args[0];
    if (!target)
        return <div className="text-sm">Usage: open &lt;shortname|url&gt;</div>;

    // if it's a full url
    if (target.startsWith("http://") || target.startsWith("https://")) {
        return (
            <div className="text-sm">
                Opening:{" "}
                <a
                    href={target}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    {target}
                </a>
            </div>
        );
    }

    const mapped = links[target];
    if (mapped) {
        return (
            <div className="text-sm">
                Opening:{" "}
                <a
                    href={mapped}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300"
                >
                    {mapped}
                </a>
            </div>
        );
    }

    return <div className="text-sm">open: {target}: not found</div>;
}
