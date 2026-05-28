import React from "react";

export default async function contact() {
    return (
        <div className="text-sm">
            📧 Email:{" "}
            <a
                href="mailto:ankitjha.connect@gmail.com"
                className="text-blue-300"
            >
                ankitjha.connect@gmail.com
            </a>
            <div>📍 Location: New Delhi, India</div>
            <div className="mt-2">
                Commands: open linkedin | open github | open email
            </div>
        </div>
    );
}
