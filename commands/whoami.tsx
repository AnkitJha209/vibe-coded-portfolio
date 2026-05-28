import React from "react";

export default async function whoami({ args, appendOutput }: any) {
    return (
        <div className="whitespace-pre-wrap text-sm">
            {`█████╗ ███╗   ██╗██╗  ██╗██╗████████╗\n██╔══██╗████╗  ██║██║ ██╔╝██║╚══██╔══╝\n███████║██╔██╗ ██║█████╔╝ ██║   ██║\n██╔══██║██║╚██╗██║██╔═██╗ ██║   ██║\n██║  ██║██║ ╚████║██║  ██╗██║   ██║\n╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝   ╚═╝\nAnkit Jha — Backend Engineer\n─────────────────────────────────────\nI build scalable backend systems integrated with AI.\n📍  New Delhi, India\n🎓  B.Tech CSE @ ITS Engineering College (2022–2026)\n💼  Ex-Intern @ Elcom Digital\n🔭  Currently building: Vouch (Video Testimonial SaaS)\nType projects to see what I've built.\nType contact to reach out.\n`}
        </div>
    );
}
