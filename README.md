# Sticky Molecules (IMF)

ItsDrDan study game on **intermolecular forces, phase changes and colligative properties** for CHEM 3A, 1A and 3B at Fresno City College.

**Status:** design spec and art only. No game code yet.

## For the builder (Fable): read in this order

1. **[CONCEPT-MAP.md](CONCEPT-MAP.md)**: the full spec. It covers course modes, the concept map, question types, misconception slips, simulations and their model rules, reference data, known source errors, Week 17 alignment and the build checklist.
2. Dr. Dan's starter kit in `Desktop › Study Games`: START-HERE.md, STYLE-GUIDE.md and game-template.html. Where it disagrees with CONCEPT-MAP.md, CONCEPT-MAP.md wins (for example, the default course here is 3A).
3. **[assets/](assets/)**: the finished art: logo, the "Ollie" mascot (7 moods) and 15 badges, as PNG, WebP and editable SVG. Notes are in [assets/ART-NOTES.md](assets/ART-NOTES.md).

## Layout

| Path | What it is |
| --- | --- |
| `CONCEPT-MAP.md` | Build spec (start here) |
| `docs/img/` | Concept map and water vapor-pressure chart images |
| `docs/ART-BRIEF.md`, `docs/ART-FIXES-ROUND-2.md` | Prompts used for the ChatGPT art (for future redos) |
| `assets/logo.png`, `assets/logo-full.png`, `assets/imf.webp` | Logo (512, 1024) and study hub icon |
| `assets/mascot/` | Ollie: idle, thinking, correct, oops, victory, heated, chilly |
| `assets/badges/png/`, `assets/badges/webp-256/` | 15 achievement badges |
| `assets/source-svg/` | Editable vector sources for every image |

## Rules

- Deliver the game as `sticky-molecules-vN.html`. It becomes `index.html` here only when Dr. Dan says to push.
- Chemistry must be correct. Check values against OpenStax Chemistry 2e and the course yellow sheet.
- © ItsDrDan. All rights reserved.
