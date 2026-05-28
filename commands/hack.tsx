import React from "react";

export default async function hack() {
    return (
        <div className="text-sm whitespace-pre-wrap">
            {`[✔] initializing exploit modules...
[✔] enumerating open ports...
[✔] scraping public githubs...
192.168.0.2 - /var/www/html/index.php - 12%
10.0.0.5 - /etc/passwd - 42%
203.0.113.7 - /home/ankit/secrets.txt - 87%

ACCESS GRANTED.
Just kidding. Welcome, fellow developer.`}
        </div>
    );
}
