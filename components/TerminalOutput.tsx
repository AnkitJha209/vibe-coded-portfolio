"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalOutput({ outputs }: { outputs: any[] }) {
    return (
        <div className="px-4 py-3">
            <AnimatePresence initial={false}>
                {outputs.map((o, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.08 }}
                        className="mb-2"
                    >
                        {o.content}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
