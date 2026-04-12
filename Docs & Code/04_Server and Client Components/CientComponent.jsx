'use client'

import { useState } from "react";



export default function ClientCounter({ message }) {
    const [count, setCount] = useState(0);

    console.log("Client Component läuft im Browser");

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Client Component</h2>

            {/* Server → Client Kommunikation */}
            <p>Server sagt: {message}</p>

            {/* Client State */}
            <button onClick={() => setCount(count + 1)}>
                Klicks: {count}
            </button>
        </div>
    );
}