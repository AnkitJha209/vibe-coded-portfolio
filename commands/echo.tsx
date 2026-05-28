import React from "react";

export default async function echo({ args }: any) {
    const text = args.join(" ");
    return <div className="text-sm">{text}</div>;
}
