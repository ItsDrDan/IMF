# Sticky Molecules: Intermolecular Forces (CHEM 3A · 1A · 3B)

ItsDrDan study game on **intermolecular forces, phase changes and colligative properties** for CHEM 3A, 1A and 3B at Fresno City College.

Live at https://itsdrdan.github.io/IMF/

Current version: v21

- `index.html`: the whole game (standalone; no build step). It loads the brand kit (`games/brand/itsdrdan.css`, `icons.js`, `embed.js`) and `games/track.js` for anonymous stats, and reads its art from `assets/`.
- `?course=3A` (default), `?course=1A` or `?course=3B`. Topics and labs outside a course are hidden.
- 7 tiles: Spot the Forces, Boiling Point Battles, Liquids & Mixing, Phase Changes, Cells & Osmosis, Colligative Properties (1A), Biomolecules (3B). Modes: Learn, Practice, Challenge (10 mixed, no hints) and Daily 5.
- 9 predict-first labs: H-Bond Lab, Energy Well, Electron Coin-Flip, Mixing Beaker, Heating Curve Lab, Phase Diagram Explorer, Solutions Lab, Cell Lab, Protein Fold Lab. Their predictions also come up as practice questions, and the lab opens under the question.
- Direct links: `?mode=daily`, `?mode=challenge`, `?mode=lab`, `?mode=well`, `?mode=coin`, `?mode=mix`, `?mode=curve`, `?mode=diagram`, `?mode=solutions`, `?mode=cell`, `?mode=fold`.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The game |
| `INSTRUCTORS.md` | Instructor notes: topics by course, labs, sources, values still to review, differences from the spec, slip catalog, how it was tested |
| `CONCEPT-MAP.md` | The design spec the game was built from |
| `AUDIT-2026-11-13.md` | The v16 audit: corrections, tests, scores and open questions |
| `tools/` | Scripts that check every question generator and the answer checking (see `tools/README.md`) |
| `meta.json` | Study hub card text: topic label "Intermolecular Forces", fun name "Sticky Molecules" |
| `LICENSE` | All rights reserved |
| `docs/img/` | Concept map and water vapor-pressure chart images |
| `docs/ART-BRIEF.md`, `docs/ART-FIXES-ROUND-2.md` | Prompts used for the art (for future redos) |
| `assets/logo.png`, `assets/logo-full.png`, `assets/imf.webp` | Logo (512, 1024) and study hub icon |
| `assets/mascot/` | Ollie: idle, thinking, correct, oops, victory, heated, chilly |
| `assets/badges/png/`, `assets/badges/webp-256/` | 15 achievement badges |
| `assets/source-svg/` | Editable vector sources for every image |

Art notes are in [assets/ART-NOTES.md](assets/ART-NOTES.md).

## Still to do

- Dr. Dan reviews the values listed under "Values that still need Dr. Dan's review" in `INSTRUCTORS.md`.
- Confirm the nightly question-bank build keeps working with `tools/samplers/IMF.js` in `ItsDrDan/questionbank`.

## Rules

- Working builds are named `sticky-molecules-vN.html` and stay local. A build becomes `index.html` only when Dr. Dan says to push.
- Chemistry must be correct. Check values against OpenStax Chemistry 2e and the course yellow sheet.

Game design and chemistry by ItsDrDan. Code written with AI assistance (Claude) and checked by the author. © ItsDrDan, all rights reserved; free to play, reuse by permission only (see LICENSE).
