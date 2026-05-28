import React from "react";

function bar(level: number) {
    const full = Math.round((level / 100) * 12);
    const filled = "█".repeat(full);
    const empty = "░".repeat(12 - full);
    return `${filled}${empty}`;
}

export default async function skills() {
    return (
        <div className="text-sm whitespace-pre-wrap">
            {`LANGUAGES
TypeScript    ${bar(95)}  Expert
JavaScript    ${bar(95)}  Expert
SQL           ${bar(85)}  Advanced

BACKEND
Node.js       ${bar(95)}  Expert
Express.js    ${bar(95)}  Expert
REST APIs     ${bar(95)}  Expert
WebSockets    ${bar(80)}  Advanced
JWT Auth      ${bar(85)}  Advanced
BullMQ/Redis  ${bar(70)}  Proficient

DATABASES
PostgreSQL    ${bar(95)}  Expert
Prisma ORM    ${bar(95)}  Expert
MongoDB       ${bar(85)}  Advanced
Mongoose      ${bar(70)}  Proficient

FRONTEND
React.js      ${bar(70)}  Proficient
Next.js       ${bar(70)}  Proficient
Tailwind CSS  ${bar(80)}  Advanced

CLOUD & DEVOPS
AWS (EC2, S3) ${bar(70)}  Proficient
Docker        ${bar(55)}  Familiar
Nginx         ${bar(55)}  Familiar
CI/CD         ${bar(55)}  Familiar`}
        </div>
    );
}
