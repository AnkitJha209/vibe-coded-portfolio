import React from "react";

export default async function ping() {
    return (
        <div className="text-sm whitespace-pre-wrap">
            {`PING ankit.dev (127.0.0.1)
64 bytes from ankit: icmp_seq=0 ttl=64 time=1.2 ms
64 bytes from ankit: icmp_seq=1 ttl=64 time=0.8 ms
64 bytes from ankit: icmp_seq=2 ttl=64 time=0.9 ms
--- ankit.dev ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
Response: I'm here. Drop me an email 👋`}
        </div>
    );
}
