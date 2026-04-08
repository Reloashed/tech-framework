<h2>Ecosystem</h2>

| Name | Age | Usage | Documentation | Issue & Bug Fixes | Migration |
|------|-----|-------|---------------|-------------------|-----------|
| Next.js | 10 Jahre | Sehr hoch | Sehr gute und ausführliche Dokus | Oft Updates und Fixes, managed von Vercel und Community | Nicht speziell gut, flexibel im React Ökosystem |
| Angular | 16 Jahre | medium | Sehr gute Dokus, detailliert aber kompliziert | Reguläre Releases | Schwierige Lernkurve |
| React | 13 Jahre | Sehr hoch, beliebtestes Framework | Extrem gut, sehr grosse Community | Oft Updates durch aktive Community | Sehr flexibel, viele Migrationspfäde |

<h2>Performance</h2>

| Name | Server-Side Rendering | Single Page App (no server or page generation) | Static Generation | Serverless Affinity |
|------|------------------------|-----------------------------------------------|-------------------|---------------------|
| Next.js | Sehr gut (built-in) | Gut (kann so genutzt werden) | Sehr gut | Sehr gut, optimiert für Serverless |
| Angular | Gut (Angular Universal) | Sehr gut (ist dafür gemacht) | limitiert | möglich aber nicht optimiert |
| React | limitiert | sehr gut (Hauptnutzen) | limitiert (brauch externe Tools) | Gut (je nach Setup) |

<h2>Next.js summary</h2>

Next.js ist ein leistungsstarkes, auf React basierendes Framework, das mehrere Rendering-Strategien 
(SSR, SSG, SPA) unterstützt und stark für serverlose Umgebungen optimiert ist.

**Stärken:**
- Sehr gute Performance durch Optimierungen
- Starkes Ökosystem und gute Dokumentation
- Ideal für Fullstack Applikationen
- Einfache Bereitstellung (vorallem mit Vercel)

**Schwächen:**
- Kann für einfache SPA-Projekte overkill sein
- Kosten können bei Skalierung steigen

**Geeignete Anwendungsfälle:**
- Fullstack-Anwendungen
- Skalierbare Produktive Apps
- Serverless-Deployments

| Name | Infrastructure Costs | License Costs | Biz: Avg (Average Starter Plan cost/mo) | Small App Costs | Large App Costs |
|------|---------------------|---------------|------------------------------------------|------------------|------------------|
| Next.js | Tief bis wenig (abhängig von Anbieter) | Open Source | CHF 0 auf Vercel für Hobby tier | Tief | Hoch (vergrössert sich mit Traffic) |

## Business Needs
- **Preissicherheit**: Next.js ist Open-Source => keine Lizenzgebühren, Kosten hängen vom Hosting ab: Vercel "Pay-as-you-go"-Modell (bequem, aber bei hohem Traffic teurer),eigener Server fixe monatliche Kosten bietet
- **Risikotoleranz**: Next.js ist der aktuelle Industriestandard für React-Frameworks und wird von Vercel unterstützt. Das Risiko, dass die Technologie plötzlich verschwindet, ist extrem gering.
- **Unabhängigkeit von Cloud-Diensten**: Next.js ist zwar für Vercel optimiert, kann aber mit Docker auf fast jedem Cloud-Anbieter oder On-Premise betrieben werden. Man ist also nicht "gefangen" (kein Vendor Lock-in).

## Scalability
|Name|Horizontal Scaling|Host Provider Headroom|Additional Notes
|--|--|--|--|
|Next.js (SSG/ISR)|Exzellent -> Hybrid-Rendering (SSG, SSR)|Sehr hoch -> skaliert bei Managed Provider automatisch und fast unbegrenzt|Performance bleibt auch bei wachsender Komplexität stabil|
