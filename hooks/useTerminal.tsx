"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import commands from "@/commands";

type TerminalContextValue = {
    outputs: any[];
    appendOutput: (o: any) => void;
    clearOutputs: () => void;
    history: string[];
    pushHistory: (cmd: string) => void;
    runCommand: (cmdStr: string) => Promise<void>;
};

const TerminalContext = createContext<TerminalContextValue | null>(null);

export function TerminalProvider({ children }: { children: React.ReactNode }) {
    const [outputs, setOutputs] = useState<any[]>([]);
    const [history, setHistory] = useState<string[]>([]);

    const appendOutput = useCallback((o: any) => {
        setOutputs((s) => [...s, o]);
    }, []);

    const clearOutputs = useCallback(() => setOutputs([]), []);

    const pushHistory = useCallback((cmd: string) => {
        setHistory((h) => [...h, cmd]);
    }, []);

    const runCommand = useCallback(
        async (cmdStr: string) => {
            const parts = cmdStr.split(" ").filter(Boolean);
            const cmd = parts[0];
            const args = parts.slice(1);

            const handler = (commands as any)[cmd];
            if (!handler) {
                appendOutput({
                    content: (
                        <div className="text-[#f87171]">
                            bash: {cmd}: command not found
                        </div>
                    ),
                });
                return;
            }

            try {
                const result = await handler({
                    args,
                    appendOutput,
                    clearOutputs,
                    history,
                    pushHistory,
                    runCommand,
                });
                if (result) appendOutput({ content: result });
            } catch (err: any) {
                appendOutput({
                    content: (
                        <div className="text-[#f87171]">
                            Error: {String(err.message || err)}
                        </div>
                    ),
                });
            }
        },
        [appendOutput],
    );

    const value: TerminalContextValue = {
        outputs,
        appendOutput,
        clearOutputs,
        history,
        pushHistory,
        runCommand,
    };

    return (
        <TerminalContext.Provider value={value}>
            {children}
        </TerminalContext.Provider>
    );
}

export default function useTerminal() {
    const ctx = useContext(TerminalContext);
    if (!ctx)
        throw new Error("useTerminal must be used within TerminalProvider");
    return ctx;
}
