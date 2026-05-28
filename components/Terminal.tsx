"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import useTerminal, { TerminalProvider } from "@/hooks/useTerminal";
import BootSequence from "./BootSequence";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

function TerminalShell() {
    const { outputs, clearOutputs, runCommand } = useTerminal();
    const [bootDone, setBootDone] = useState(false);

    const handleBootComplete = useCallback(() => {
        setBootDone(true);
        setTimeout(() => runCommand("whoami"), 600);
    }, [runCommand]);

    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        try {
            el.focus();
        } catch {}
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const delay = 260;
        const id = window.setTimeout(() => {
            try {
                el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
            } catch (e) {
                el.scrollTop = el.scrollHeight;
            }
        }, delay);
        return () => clearTimeout(id);
    }, [outputs.length]);

    return (
        <div className="terminal-surface rounded-[8px] w-full h-[90vh] max-w-5xl mx-auto overflow-hidden flex flex-col">
            <div className="flex-none flex items-center gap-3 px-4 py-2 border-b border-[#1f1f1f]">
                <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center text-sm text-[#6b7280]">
                    ankit@portfolio ~
                </div>
                <div className="w-16" />
            </div>

            <div
                ref={scrollRef}
                className="flex-1 min-h-0 flex flex-col overflow-y-auto terminal-scroll"
                tabIndex={0}
            >
                <div>
                    {!bootDone && (
                        <BootSequence onComplete={handleBootComplete} />
                    )}
                    <TerminalOutput outputs={outputs} />
                </div>

                <div className="flex-none">
                    <TerminalInput onClear={clearOutputs} />
                </div>
            </div>
        </div>
    );
}

export default function Terminal() {
    return (
        <TerminalProvider>
            <TerminalShell />
        </TerminalProvider>
    );
}
