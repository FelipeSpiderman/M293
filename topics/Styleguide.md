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