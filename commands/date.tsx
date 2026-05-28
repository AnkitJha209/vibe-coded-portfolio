import React from "react";

export default async function dateCmd() {
    const now = new Date();
    return <div className="text-sm">{now.toString()}</div>;
}
