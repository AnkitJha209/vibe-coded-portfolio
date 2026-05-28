"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useTerminal from "@/hooks/useTerminal";
import commands from "@/commands";

export default function TerminalInput({ onClear }: { onClear: () => void }) {
    const { runCommand, history, pushHistory, appendOutput } = useTerminal();
    const [value, setValue] = useState("");
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    function handleSubmit(e?: React.FormEvent) {
        e?.preventDefault();
        if (!value.trim()) return;
        pushHistory(value.trim());
        setHistoryIndex(-1);
        runCommand(value.trim());
        setValue("");
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            handleSubmit();
        }

        if (e.key === "Tab") {
            e.preventDefault();
            const all = Object.keys(commands);
            const trimmed = value;
            const parts = trimmed.split(/\s+/).filter(Boolean);
            // only autocomplete the first token (command name)
            const token = parts[0] || "";
            const matches = all.filter((c) => c.startsWith(token));
            if (matches.length === 1) {
                // complete the command and add a trailing space
                const rest = parts.slice(1).join(" ");
                setValue(matches[0] + (rest ? " " + rest : " "));
            } else if (matches.length > 1) {
                // show matches in the terminal output area
                appendOutput({
                    content: (
                        <div className="text-sm whitespace-pre-wrap">
                            {matches.join("  ")}
                        </div>
                    ),
                });
            } else {
                // no matches
                appendOutput({
                    content: <div className="text-sm">No matches</div>,
                });
            }
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!history || history.length === 0) return;
            const nextIndex =
                historyIndex === -1
                    ? history.length - 1
                    : Math.max(0, historyIndex - 1);
            setHistoryIndex(nextIndex);
            setValue(history[nextIndex] || "");
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!history || history.length === 0) return;
            if (historyIndex === -1) return;
            const nextIndex = historyIndex + 1;
            if (nextIndex >= history.length) {
                setHistoryIndex(-1);
                setValue("");
            } else {
                setHistoryIndex(nextIndex);
                setValue(history[nextIndex] || "");
            }
            return;
        }
    }

    return (
        <div className="flex-none sticky bottom-0 bg-transparent border-t border-[#1f1f1f] px-4 py-3 z-10">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <div className="text-[#60a5fa] font-semibold">
                    ankit@portfolio:~$
                </div>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-[#e2e2e2]"
                    placeholder="Type a command — try 'help'"
                />
                <button type="submit" className="hidden">
                    run
                </button>
            </form>
        </div>
    );
}
