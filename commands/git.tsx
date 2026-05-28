import React from "react";

export default async function git({ args }: any) {
    const sub = args[0];
    if (sub === "log") {
        return (
            <div className="text-sm whitespace-pre-wrap">
                {`commit a3f9d21  "finally fixed that bug"
commit b12c8e0  "fix"
commit d9e7a11  "fix2"
commit f3b2c44  "ok this is actually fixed"
commit 9a1d77b  "why is this not working"
commit 4c8f203  "it works, don't touch it"
commit 1a2b3c4  "initial commit"`}
            </div>
        );
    }

    if (sub === "status") {
        return (
            <div className="text-sm whitespace-pre-wrap">
                {`On branch main
Your branch is ahead of 'origin/main' by 47 commits.
Changes to be committed:
modified:   life-decisions.ts
new file:   another-side-project.md
deleted:    sleep-schedule.js`}
            </div>
        );
    }

    return <div className="text-sm">git: missing or unknown subcommand</div>;
}
