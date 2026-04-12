
import ClientCounter from "./CientComponent";

export default function Page() {
    const serverMessage = "Hallo vom Server 👋";

    console.log("Server Component läuft nur im Terminal");

    return (
        <div>
            <h1>Server → Client Interaktion</h1>

            <p>{serverMessage}</p>

            {/* Übergabe von Server-Daten an Client */}
            <ClientCounter message={serverMessage} />
        </div>
    );
}