import React from "react";

export default async function sudo({ args }: any) {
    const cmd = args.join(" ");
    if (cmd.trim() === "rm -rf /") {
        return <div className="text-sm">⚠ Permission denied. Nice try. 😈</div>;
    }

    return (
        <div className="text-sm">
            This incident will be reported. Just kidding. You have no sudo
            powers here.
        </div>
    );
}
