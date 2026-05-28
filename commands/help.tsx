import React from "react";

export default async function help({ args, appendOutput }: any) {
    return (
        <div className="text-sm">
            <pre className="whitespace-pre-wrap">{`┌─────────────────────────────────────────────────────┐
│  AVAILABLE COMMANDS                                  │
├──────────────────┬──────────────────────────────────┤
│  whoami          │  About Ankit                     │
│  skills          │  Tech stack & expertise          │
│  projects        │  All projects                    │
│  ls projects     │  List project names              │
│  cat <project>   │  Project deep-dive               │
│  experience      │  Work & internship               │
│  education       │  Academic background             │
│  contact         │  Get in touch                    │
│  social          │  All social links                │
│  open <link>     │  Open a URL                      │
│  clear           │  Clear terminal                  │
│  pwd             │  Current directory               │
│  echo <text>     │  Echo text back                  │
│  history         │  Command history                 │
│  repo <project>  │  Open GitHub repo                │
│  live <project>  │  Open live demo                  │
│  resume          │  Download/view resume            │
│  hire            │  Why you should hire Ankit       │
│  banner          │  Show ASCII banner               │
└──────────────────┴──────────────────────────────────┘
Tip: Press ↑ / ↓ to navigate command history
Tip: Press Tab to autocomplete commands`}</pre>
        </div>
    );
}
