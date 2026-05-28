import React from "react";

export default async function clearCmd({ clearOutputs }: any) {
    // clearOutputs is provided by the terminal context
    clearOutputs?.();
    return null;
}
