import React from "react";

export default async function experience() {
    return (
        <div className="text-sm whitespace-pre-wrap">
            <div className="font-medium">WORK EXPERIENCE</div>
            <div>─────────────────────────────────────────────────</div>
            <div className="mt-2 font-medium">
                ┌─ Elcom Digital ──────────────────────────────┐
            </div>
            <div className="text-xs text-gray-300">
                │ Software Development Associate Intern │
            </div>
            <div className="text-xs text-gray-300">
                │ Jun 2025 → Sep 2025 · New Delhi, India │
            </div>
            <div className="font-medium">
                └──────────────────────────────────────────────┘
            </div>
            <div className="mt-2">
                → Built automated CRM auditing system (Python, SQL, Pandas,
                Email Automation) eliminating 3+ hours of daily manual work;
                improved data consistency by ~30%
            </div>
            <div className="mt-2">
                → Developed gamified EOD reporting platform (React, Redux
                Toolkit, TypeScript, Node.js, MySQL) with leaderboard — daily
                submissions went from sporadic to near-consistent
            </div>
            <div className="mt-2">
                → Deployed full-stack on AWS EC2 with Nginx reverse proxy,
                supporting concurrent access for the entire organisation
            </div>
        </div>
    );
}
