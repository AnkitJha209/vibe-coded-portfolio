"use client";

import React, { useEffect } from "react";
import useTerminal from "@/hooks/useTerminal";

const lines = [
    "Initializing portfolio...",
    "Loading kernel modules...        [OK]",
    "Mounting file system...          [OK]",
    "Starting SSH daemon...           [OK]",
    "Connecting to ankit@portfolio... [OK]",
    "Welcome to Ankit's Terminal Portfolio v1.0.0",
    "Type help to see available commands.",
    "─────────────────────────────────────────────",
];

export default function BootSequence({
    onComplete,
}: {
    onComplete?: () => void;
}) {
    const { appendOutput } = useTerminal();

    useEffect(() => {
        const timers: number[] = [];

        lines.forEach((line, i) => {
            const t = window.setTimeout(() => {
                appendOutput({
                    content: <div className="text-sm">{line}</div>,
                });
            }, i * 300);
            timers.push(t);
        });

        const finish = window.setTimeout(
            () => onComplete?.(),
            lines.length * 300 + 100,
        );
        timers.push(finish);

        return () => timers.forEach((t) => clearTimeout(t));
    }, [appendOutput, onComplete]);

    return <div className="px-4 py-3 overflow-hidden" />;
}
