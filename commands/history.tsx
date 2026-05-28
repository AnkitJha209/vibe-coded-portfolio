import React from "react";

export default async function historyCmd({ history }: any) {
    return (
        <div className="text-sm whitespace-pre-wrap">
            {history.map((h: string, i: number) => `${i + 1}. ${h}`).join("\n")}
        </div>
    );
}
