# Felípe Blog-Website

# Wireframes

Dieses Dokument zeigt die strukturelle Planung und das Layout der "Felípe Blog"-Webseite für die drei primären Bildschirmgrössen: Mobile, Tablet und Desktop. Die Wireframes konzentrieren sich auf die Anordnung der funktionellen Elemente und die Benutzerführung, nicht auf das visuelle Design.

---

## Mobile Ansicht (Mobile-First-Ansatz)

Das Design wurde primär für mobile Endgeräte konzipiert, um eine optimale Benutzererfahrung auf kleineren Bildschirmen sicherzustellen.

### Startseite (Mobile)
![Wireframe der Startseite für Mobile](/doku/Screenshot%202025-07-08%20000555.png)

### Themenübersicht (Mobile)
![Wireframe der Themenübersicht für Mobile](/doku/Screenshot%202025-07-08%20000613.png)

### Artikel-Detailseite (Mobile)
![Wireframe der Artikel-Detailseite für Mobile](/doku/Screenshot%202025-07-08%20000629.png)
![Wireframe der Artikel-Detailseite für Mobile](/doku/Screenshot%202025-07-08%20000636.png)


---

## Tablet Ansicht

Auf Tablets wird mehr horizontaler Platz genutzt, um Inhalte nebeneinander darzustellen, insbesondere im Grid-Layout. Die Navigation bleibt identisch zur mobilen Ansicht.

### Startseite (Tablet)
![Wireframe der Startseite für Tablet](/doku/Screenshot%202025-07-08%20000922.png)

### Themenübersicht (Tablet)
![Wireframe der Themenübersicht für Tablet](/doku/Screenshot%202025-07-08%20000943.png)

---

## Desktop Ansicht

Die Desktop-Ansicht nutzt den verfügbaren Platz maximal aus, um eine klare Übersicht zu gewährleisten. Das Grid wird auf drei Spalten erweitert.

### Startseite (Desktop)
![Wireframe der Startseite für Desktop](/doku/Screenshot%202025-07-08%20001056.png)

### Themenübersicht (Desktop)
![Wireframe der Themenübersicht für Desktop](/doku/Screenshot%202025-07-08%20001108.png)

# Styleguide: Felípe Blog

Dieser Styleguide definiert die visuellen Grundlagen und Komponenten für den "Felípe Blog", um ein konsistentes und wiedererkennbares Erscheinungsbild zu gewährleisten.

---

## 1. Farbpalette

Die Farbpalette ist minimalistisch gehalten, um eine klare visuelle Hierarchie zu schaffen und die Lesbarkeit zu maximieren.

| Rolle              | Hex-Code  | Vorschau                                               |
| ------------------ | :-------: | :----------------------------------------------------- |
| **Primärakzent**   | `#3ecf4a` | ![#3ecf4a](https://placehold.co/15x15/3ecf4a/3ecf4a.png) |
| **Hintergrund**    | `#23272f` | ![#23272f](https://placehold.co/15x15/23272f/23272f.png) |
| **Elemente (Cards)** | `#2d323c` | ![#2d323c](https://placehold.co/15x15/2d323c/2d323c.png) |
| **Text (Haupt)**   | `#e0e0e0` | ![#e0e0e0](https://placehold.co/15x15/e0e0e0/e0e0e0.png) |
| **Text (Subtil)**  | `#b0b3b8` | ![#b0b3b8](https://placehold.co/15x15/b0b3b8/b0b3b8.png) |
| **Borders/Lines**  | `#4a4f58` | ![#4a4f58](https://placehold.co/15x15/4a4f58/4a4f58.png) |

---

## 2. Typografie

### Schriftart

Die primäre Schriftart ist **Inter**. Falls diese nicht verfügbar ist, wird auf gängige System-Schriftarten zurückgegriffen, um eine konsistente Darstellung auf allen Geräten zu gewährleisten.

-   **Font-Stack:** `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

### Schriftschnitte und -grössen

Die typografische Hierarchie ist wie folgt definiert:

| Element             | Schriftschnitt (Weight) | Schriftgrösse (Mobile) | Schriftgrösse (Desktop) |
| ------------------- | :---------------------: | :--------------------: | :---------------------: |
| **Überschrift H1**  |           700           |        `2.2rem`        |         `3rem`          |
| **Überschrift H2**  |           700           |        `1.8rem`        |         `2.5rem`        |
| **Überschrift H3**  |           700           |        `1.4rem`        |         `1.5rem`        |
| **Fliesstext (`<p>`)** |           400           |         `1rem`         |        `1.125rem`       |

---

## 3. Komponenten

### Button

Der primäre Button wird für alle Call-to-Action-Elemente verwendet.

-   **Hintergrund:** `#3ecf4a`
-   **Textfarbe:** `#23272f` (dunkel)
-   **Border Radius:** `8px`
-   **Hover-Effekt:** Hellerer Hintergrund (`#6be585`)

### Card

Karten werden zur Darstellung von Artikeln und Themenübersichten verwendet.

-   **Hintergrund:** `#2d323c`
-   **Border Radius:** `12px`
-   **Schatten:** `0 2px 12px rgba(0,0,0,0.1)`
-   **Hover-Effekt:** Leichter "Anheben"-Effekt (`transform: translateY(-5px)`)

# Dokumentation des KI-Einsatzes

## Projekt: Felípe Blog

Dieses Dokument beschreibt den Einsatz verschiedener KI-Sprachmodelle (Large Language Models, LLMs) als unterstützende Werkzeuge während der Entwicklung des Projekts "Felípe Blog". Die KI diente als Effizienz- und Qualitätssteigerungsinstrument, während die konzeptionelle Planung, die finale Implementierung und die Qualitätskontrolle vollständig in meiner Verantwortung lagen.

---

### 1. Code-Generierung und Refactoring

Die KI wurde in folgenden Bereichen zur Unterstützung bei der Code-Erstellung eingesetzt:

-   **Boilerplate-Code:** Generierung von grundlegenden HTML5-Strukturen und sich wiederholenden Komponenten wie der Header- und Footer-Struktur.
-   **CSS-Refactoring:** Unterstützung bei der Zentralisierung von CSS. Die KI half dabei, Inline-Styles aus dem HTML zu extrahieren, sie in die zentrale `style.css`-Datei zu überführen und dabei redundante Regeln zu entfernen.
-   **JavaScript-Funktionen:** Hilfe bei der Erstellung von Standard-Funktionen, z.B. für die Validierung von E-Mail-Formularen oder die grundlegende Logik der `localStorage`-basierten Kommentarfunktion.

### 2. Fehlerbehebung (Debugging)

Bei auftretenden Fehlern wurde die KI als "Sparringspartner" genutzt, um Lösungsansätze zu finden.

-   **Fehleranalyse:** Konkrete Fehlermeldungen (z.B. `405 Method Not Allowed`) wurden der KI zur Analyse vorgelegt, um die Ursache des Problems zu verstehen.
-   **Logik-Überprüfung:** Code-Abschnitte, die sich nicht wie erwartet verhielten, wurden zur Überprüfung vorgelegt, um potenzielle Fehler in der Logik zu identifizieren.

### 3. Inhalts-Erstellung und -Verbesserung

Die KI half dabei, die inhaltliche Tiefe des Blogs zu verbessern.

-   **Texterweiterung:** Für die Artikel-Detailseiten wurde die KI gebeten, bestehende kurze Texte um zusätzliche, thematisch passende Absätze zu erweitern, um den Lesern mehr Wert zu bieten.
-   **Formulierungshilfe:** Umformulierungen von Titeln und Beschreibungen, um sie prägnanter und ansprechender zu gestalten.

---

### Analyse der eingesetzten KI-Werkzeuge

Während des Projekts wurden verschiedene KI-Tools getestet und eingesetzt. Jedes Werkzeug zeigte spezifische Stärken und Schwächen.

#### Google AI Studio (Gemini)
-   **Stärken:** Hohe Präzision bei den Antworten und ein sehr grosses Kontextfenster (bis zu 1 Million Token), was die Analyse umfangreicher Codebasen ermöglicht.
-   **Beobachtungen:** Tendiert bei komplexen Anfragen zu längeren Antwortzeiten, was auf eine gründliche Verarbeitung hindeutet. Bei der Generierung von grossen Code-Blöcken liefert das Modell den Code oft in Teilen und fragt nach, bevor es fortfährt.

#### Grok
-   **Stärken:** Gute Eignung für lange, kontextbezogene Konversationen.
-   **Beobachtungen:** Die Präzision der Ergebnisse variierte je nach Anfrage. Bei intensiver oder sehr schneller Nutzung in kurzer Zeit konnte die Antwortqualität oder -geschwindigkeit nachlassen.

#### Claude
-   **Stärken:** Sehr hohe Präzision und ein ausgezeichnetes Verständnis für komplexe Zusammenhänge, was besonders bei grossen Projekten hilfreich war. Ermöglichte die Eingabe von sehr langen und detaillierten Prompts.
-   **Beobachtungen:** Die begrenzte Token-Verfügbarkeit in der kostenlosen Version schränkte den Einsatz ein. Aufgrund des relativ hohen Token-Verbrauchs pro Anfrage war es weniger effizient für schnelle, kleine Korrekturen (Hotfixes).

#### GitHub Copilot / Agent
-   **Stärken:** Nahtlose Integration in den VS Code Editor. Sehr hohe kontextbezogene Präzision, da es direkt auf die geöffnete Codebasis zugreifen kann. Hervorragend geeignet für schnelle Korrekturen und das Schreiben von Boilerplate-Code.
-   **Beobachtungen:** Die Anzahl der Vorschläge kann durch Nutzungs-Limits begrenzt sein, was bei intensiver Nutzung zu temporären Pausen führen kann.

---

### Abgrenzung und Eigenleistung

Trotz der vielfältigen Unterstützung durch die KI lag die Kernleistung vollständig bei mir. Dazu gehören:

-   Die **gesamte Projektidee und -konzeption**.
-   Die **Erstellung der initialen HTML-Struktur und des CSS-Layouts**.
-   Die **Anpassung und Implementierung** aller von der KI vorgeschlagenen Code-Schnipsel.
-   Das **vollständige Testen** der Funktionalität auf allen Geräten.
-   Die **finale Entscheidungsfindung** über Design, Layout und Funktionalität.

### Fazit

Die KI war ein mächtiges Werkzeug zur Steigerung der Produktivität und zur Qualitätsverbesserung, nicht jedoch der alleinige Ersteller des Projekts. Die Fähigkeit, die Vorschläge der KI kritisch zu bewerten und korrekt zu implementieren, war entscheidend für den Projekterfolg.
