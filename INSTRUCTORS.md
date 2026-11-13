# Sticky Molecules (Intermolecular Forces): instructor notes

Fun name **Sticky Molecules**. Repo and hub label: **Intermolecular Forces**. Repo `ItsDrDan/IMF`.

- **Courses:** CHEM 3A (default), CHEM 1A and CHEM 3B. Link with `?course=3A`, `?course=1A` or `?course=3B`. Topics and labs outside a course are hidden for that course. Progress is saved separately per course on the student's device.
- **Spec:** `CONCEPT-MAP.md` in this repo. The game follows it; where it departs, the difference is listed under "Differences from the spec" below.
- **Current file:** `index.html`, published from the working build `sticky-molecules-v12.html` (version in the file name only; working builds stay local).
- **Status:** live at https://itsdrdan.github.io/IMF/ since 2026-11-12. The values listed under "Values that still need Dr. Dan's review" had not been reviewed when it went live.

## New in v12 (2026-11-13)

- **Simulations are shown, not hidden.** A simulation question now has its simulation right under it from the start, greyed out with "Make your prediction first". It unlocks when the student answers. Before, the simulation only appeared after the answer, so these looked like ordinary multiple-choice questions.
- **Simulation questions come up more often.** In Practice the first question is a simulation and so is at least every third one after that. A Challenge has at least 3 simulation questions out of 10 and the Daily 5 has at least 1. A student who turns the lab topics off under "Focus on specific topics" gets none.
- **Labs keep their shape on a large screen.** The H-Bond, Heating Curve and Cell labs were drawn for a box at most about 520 px wide and then stretched sideways to fill a wider one. They now scale evenly, redraw sharper at larger sizes, and stop growing at 680 px wide.
- **H-Bond Lab caption.** For the first six seconds after the model starts it says the molecules are still finding each other. Before, it said they "move too fast for hydrogen bonds to last" even when cold, because no bonds had formed yet.
- **iPhone check:** v11 and v12 were tried in iOS Safari in Apple's iPhone 17 simulator (tiles, the pinned button, hints, wrong and right answers, a lab unlocking under its question, the temperature slider). Not yet tried on a physical phone or in the Canvas Student app.

## New in v10 (2026-11-13)

- **"Go to your question" button.** After a tile is picked, the question appears below the tiles, the topic picker and the practice modes. On a phone that is more than a screen away, and inside Canvas the embedded game is about 4,000 px tall, so nothing visible changed. A button now appears right under the tiles and jumps to the question (or to the lesson in Learn). On narrow screens it stays pinned to the bottom of the screen while the tiles are in view (v11), because the tiles alone fill more than one phone screen.
- **In Canvas (Fall 2026):** the game has its own page in CHEM 1A (listed under Study Game in Chapters 10 and 11) and in both CHEM 3A sections (Chapter 6, Chapters 7 and 10: Properties of Liquids, and Chapter 7: Solids, Liquids, and Phase Changes).
- **Phone check:** done in a browser's phone emulation with real taps (tiles, hints, answers, a lab opening under its question, dragging the phase diagram point). Not yet tried on a physical phone.

## New in v9 (2026-11-12)

Four changes Dr. Dan asked for after v8 went live.

- **Molar mass beside electron count.** Wherever size decides a comparison, the game now shows and argues both: cards read "160 g/mol · 70 electrons", and the size reason reads "has a higher molar mass (more electrons), so its dispersion forces are stronger". Hints say "Similar molar mass? Compare the type of force. Same type of force? The higher molar mass wins." The Sticky Sheet's dispersion tables gained a molar mass column. One pair was removed (CH₃F vs ethane: 34 vs 30 g/mol is not "similar molar mass").
- **Lab questions in practice.** Each lab's predictions are also practice topics, marked "lab" in the topic picker. They come up in Practice, Challenge and Daily 5. After the student answers, the lab opens under the question, already unlocked on that scenario, with a "Now test it" line.
- **Fewer buttons, clearer directions.** Daily 5 moved into the mode row (Learn, Practice, Challenge, Daily 5). All nine labs and the Thermochemistry link sit in one collapsed "Labs and more" box. A collapsed "How to use this game" box has five short directions, and the mode row has a step 2 heading.
- **Hints and feedback everywhere.** Every step of every question has a hint (the test script fails if one is missing). A wrong typed answer with no recognized slip shows the step's hint. The final "correct" message repeats the explanation.

## What students see

1. Pick one or more tiles, or narrow to specific topics. A "Go to your question" button appears under the tiles.
2. Choose Learn (Professor Tips and a worked example), Practice (hints and feedback on every wrong choice), or Challenge (10 mixed questions, no hints, then a study plan).
3. Daily 5 (in the same row) gives 2 easy, 2 medium and 1 hard question and shares the ItsDrDan day streak.
4. Lab questions come up in practice: the student predicts, then the lab opens under the question.
5. Every lab can also be opened on its own from the collapsed "Labs and more" box. There it starts with a prediction, and the controls unlock after the student answers.

## Tiles and topics

| Tile | Topic | 3A | 1A | 3B |
| --- | --- | --- | --- | --- |
| Spot the Forces | Forces vs bonds | ✓ | ✓ | ✓ |
| | Polar or nonpolar? | ✓ | ✓ | |
| | Who can hydrogen bond? | ✓ | ✓ | ✓ |
| | Strongest force | ✓ | ✓ | |
| | Lewis structure → all the forces (3 steps) | ✓ | ✓ | |
| | Ion–dipole | | ✓ | |
| | Forces in organic families | | | ✓ |
| Boiling Point Battles | Which boils higher? (pick, then say why) | ✓ | ✓ | |
| | Rank three | ✓ | ✓ | |
| | Dispersion, size and shape | | ✓ | |
| | Organic boiling points | | | ✓ |
| | Fatty acids: melting points | | | ✓ |
| Liquids & Mixing | Like dissolves like | ✓ | ✓ | ✓ |
| | Surface tension & viscosity | ✓ (recognize) | ✓ (with data) | |
| | Vapor pressure | | ✓ | |
| Phase Changes | Name the phase change | ✓ | ✓ | |
| | Heat in or heat out? | ✓ | ✓ | |
| | Read a heating curve | ✓ | ✓ | |
| | Read a phase diagram | ✓ (simple) | ✓ (full) | |
| Cells & Osmosis | Osmosis basics | ✓ | ✓ | ✓ |
| | Hypotonic, isotonic, hypertonic (3 steps) | ✓ | ✓ | ✓ |
| | Osmotic pressure, Π = iMRT | | ✓ | |
| Colligative Properties | Count the particles | | ✓ | |
| | van't Hoff factor, i | | ✓ | |
| | Concentration units | | ✓ | |
| | Freezing and boiling points (5 steps, or work backward) | | ✓ | |
| | Raoult's law | | ✓ | |
| Biomolecules | Amino acid side chains | | | ✓ |
| | Protein folding | | | ✓ |
| | DNA base pairs | | | ✓ |
| | Sugars, starch and cellulose | | | ✓ |
| | Membranes, soaps and colloids | | | ✓ |

Each tile also has lab topics (v9): hydrogen bonds and the energy well in Spot the Forces, the electron coin-flip in Boiling Point Battles, the mixing beaker in Liquids & Mixing, the heating curve and phase diagram in Phase Changes, cells in a bath in Cells & Osmosis, solutions in Colligative Properties, and protein folding in Biomolecules. They follow each lab's courses.

41 topics in all, 9 of them lab topics: 20 in 3A, 32 in 1A, 17 in 3B.

## Labs

Each is labeled on screen as a teaching model, with its simplifications stated. None is molecular dynamics. Molecules never break apart in any of them.

| Lab | Courses | Spec | What it shows | Link |
| --- | --- | --- | --- | --- |
| H-Bond Lab | all | §6.1 | 8–12 molecules of H₂O, NH₃, HF, CH₃OH or CH₄ with a temperature slider. Dashed hydrogen bonds form H → lone pair, flicker and break. Counter of hydrogen bonds per molecule. | `?mode=lab` |
| Energy Well | 3A, 1A | §6.3 | Potential energy curve for a pair. Raise the kinetic energy above the top of the well and the pair separates. Ion–dipole well in 1A only. Relative depths, no numbers. | `?mode=well` |
| Electron Coin-Flip | 1A | §6.5 | Flip the electrons of He, Ne, Ar, Kr or Xe left or right. Even-split chance beside each boiling point. | `?mode=coin` |
| Mixing Beaker | 1A, 3B | §6.6 | Drop a substance into water or hexane. A prediction is required before every drop. | `?mode=mix` |
| Heating Curve Lab | 3A, 1A | §6.2 | Curve beside a box of 18 water molecules. Add or remove heat; the thermometer holds on each plateau while attractions break or form. | `?mode=curve` |
| Phase Diagram Explorer | 3A, 1A | §6.4 | Drag a state point on water or CO₂ (hydrazine added in 1A). Reports each change and where it happened. Sealed-tube picture in 1A. | `?mode=diagram` |
| Solutions Lab | 1A | §6.7, §6.8 | Three beakers at equal molality (ethylene glycol, NaCl, K₃PO₄) that freeze as you cool them; and a Raoult's-law mixer for two volatile liquids. | `?mode=solutions` |
| Cell Lab | all | §6.9 | Red blood cell or plant cell in six baths, with water-in and water-out counts. Π = iMRT line and the osmosis chamber picture in 1A only. | `?mode=cell` |
| Protein Fold Lab | 3B | §2 (3B examples) | A made-up chain of 12 amino acids. Heating breaks the attractions; the peptide and disulfide bonds stay. | `?mode=fold` |

## Conventions to know

- **Feedback:** every wrong choice has its own explanation and a named slip. Every correct answer shows its explanation too.
- **Hints:** every step has one.
- **Multi-step questions:** a question counts as correct only when every step is right on the first try. In Challenge a missed step shows the student's answer, the reason and the correct answer.
- **Typed numbers:** accepted within 1% of the unrounded answer, so rounding in earlier steps is not punished. E notation (`7.84E0`) and `×10^` are accepted. A decimal comma gets a "use a period" message.
- **Sig figs:** a numerically correct answer with the wrong number of sig figs is marked correct with a yellow "Close, but fix your sig figs" notice. Trailing zeros with no decimal point do not count (100 has 1 sig fig; `100.` has 3), so the game displays such answers as `100.`.
- **XP:** 10 for a question with no misses, plus 2 per streak step (up to +10). 2 for a question finished after a miss or a reveal. Lab predictions score the same way.
- **Computed answers:** forces, electron counts, "which is higher", phase at a point, the change where an arrow crosses a line, and all numeric keys are computed from the data tables, not typed in.
- **Stats:** one anonymous row per question to the Game Stats sheet (game id `imf`), with the name of the first slip. No names, IDs or typed answers.

## Sources and values

- **OpenStax Chemistry 2e, checked on openstax.org 2026-11-12:**
  - §10.1: halogen boiling points (Table 10.1), pentane isomers 36, 27 and 9.5 °C, HCl 188 K vs F₂ 85 K, Example 10.3 (propane −42.1, dimethyl ether −24.8, ethanol 78.5 °C), ethane −89 °C and methylamine −6 °C.
  - §10.2: viscosities and surface tensions at 25 °C (Tables 10.2 and 10.3).
  - §10.4: water triple point 0.01 °C and 0.6 kPa, critical point 374 °C and 218 atm; CO₂ critical point 31.1 °C and 7400 kPa. The phase-diagram model gives the stated phase for all 13 state points in the text and Examples 10.11 and 10.12.
- **From the spec's tables (Lecture 28, Worksheet 12, MyOpenMath):** noble gas and hydrocarbon boiling points, water ΔH<sub>fus</sub> 6.02 and ΔH<sub>vap</sub> 40.70 kJ/mol, specific heats 2.06, 4.184 and 2.02 J/(g·°C), K<sub>f</sub> 1.86 and K<sub>b</sub> 0.512, hydrazine phase points, alcohol vapor pressures, water vapor pressure table, and the corrected 13.2% even-split value for 36 electrons.
- **Heating curve:** the Lecture 28 example, 15.0 g of ice at −20.0 °C to steam at 145.0 °C. The five steps come to 0.62, 5.01, 6.28, 33.9 and 1.36 kJ, total 47.2 kJ.
- **Amino acid classes:** copied from Peptide Party (`ItsDrDan/aminoacids`). Cysteine is polar neutral.

### Values that still need Dr. Dan's review

These are standard values recalled from memory, not copied from a course source.

- **Boiling points not printed in OpenStax §10.1**, rounded to whole °C. Examples: octane 126, propylamine 48, acetone 56, propanal 48, 1-propanol 97, acetic acid 118, acetamide 221, CCl₄ 77, CBr₄ 190, HF 20, NH₃ −33.
- **Fatty acid melting points:** lauric 44, myristic 54, palmitic 63, stearic 69, palmitoleic 0, oleic 14, linoleic −5, linolenic −11, arachidonic −50 °C. Four of these match the lipids chapter of the 3B textbook.
- **CO₂:** triple point −56.6 °C and 5.11 atm, sublimation at −78.5 °C. OpenStax §10.4 does not print these.
- **Solid–liquid slopes:** water −0.0075 °C per atm, CO₂ +0.018 °C per atm. Hydrazine's is unknown and drawn nearly vertical, with an on-screen note.
- **Vapor pressures for Raoult's law:** benzene 95.1 and toluene 28.4 torr at 25 °C; heptane 92.0 and octane 31.0 torr at 40 °C. Pentane 425 and hexane 151 torr at 25 °C follow from the 258 torr study check.
- **Seawater:** about 1.1 mol of dissolved particles per liter (about 28 atm at 37 °C), shown as "about".
- **Mercury's surface tension** is explained by metallic bonding.

## Differences from the spec

- **Heating curve is drawn not to scale**, and says so. True to scale, warming the ice is about 1% of the width. A "Where the 47.2 kJ goes" table carries the real proportions.
- **Ice is one flat slice of the lattice.** Each molecule shows 3 hydrogen bonds; the fourth is drawn as an H pointing toward the viewer, with a note.
- **Phase diagrams use a log pressure axis** so the triple and critical points fit on one diagram. Water's leftward lean is real-scale and too slight to see; the "squeeze ice at −3 °C" prediction demonstrates it (it melts at about 401 atm).
- **Mixing Beaker, hexane column:** pentane and water replace CH₃F and hexane, because fluoromethane's solubility in hexane could not be verified. The water column has the spec's five.
- **Two extra IV fluids:** 5% glucose (isotonic) and 0.45% NaCl (hypotonic) were added to the spec's four baths.
- **Osmosis chamber** is a static picture in 1A, not an interactive piston.
- **Polar side chains:** the spec lists dipole–dipole as its own rule. The game uses Peptide Party's four interactions, and every polar pair asked about has O–H or N–H, so the answer is hydrogen bond.
- **Standalone labs have no Hint button** on their prediction step. The same predictions asked in practice do.
- **Reduce-motion checkbox** exists in the H-Bond Lab and Cell Lab. The Heating Curve Lab and Phase Diagram Explorer follow the device's reduced-motion setting only. The other labs have no continuous animation.
- **Heating-curve calculations** are not rebuilt here. The game links to the Thermochemistry game, as the spec asks.
- **The spec's two optional art touch-ups** (Critical Thinker meniscus, Surface Skater legs) are not done.

## Slips logged to Game Stats (game id `imf`)

Names from the spec's §5 table that the game uses:
`boil-breaks-bonds`, `hbond-is-covalent`, `any-h-hbonds`, `polar-bonds-polar-molecule`, `type-always-wins`, `size-ignores-type`, `vp-backwards`, `plateau-heats-up`, `endo-exo-swap`, `more-pressure-always-liquefies`, `triple-critical-swap`, `molarity-for-molality`, `forgot-i`, `i-for-molecular`, `fp-sign`, `raoult-solute-fraction`, `celsius-in-gas-law`, `tonicity-swap`.

`kj-vs-j` from the spec is not used, because heating-curve calculations live in the Thermochemistry game.

Added by the game:

- **Forces:** `missed-dipole`, `missed-hbond`, `forgot-dispersion`, `no-ions`, `polarity`, `dispersion-size`, `hbond-needs-lone-pair`, `hbond-h-to-h`, `heat-makes-bonds`, `well-depth`, `coin-flip`.
- **Properties and mixing:** `like-dissolves-like`, `weak-vs-strong`, `kinks-pack-poorly`, `chain-length`, `rank-order`, `rank-reversed`.
- **Phase changes:** `phase-name`, `phase-reverse`, `curve-reading`, `fus-vs-vap`, `pd-region`, `pd-crossing`, `ice-density`.
- **Osmosis:** `tonicity-class`, `osmosis-solute-moves`, `osmosis-static`, `plant-bursts`.
- **Colligative:** `ion-count`, `ion-pairing`, `identity-not-count`, `bp-sign`, `delta-not-point`, `wrong-constant`, `g-vs-kg`, `percent-solvent`, `mole-ratio`, `raoult-setup`, `raoult-swapped`, `vapor-composition`.
- **Biomolecules:** `disulfide-is-covalent`, `secondary-vs-tertiary`, `side-chain-hb`, `side-chain-salt`, `side-chain-hyd`, `dna-hb-count`, `colloid-vs-solution`.
- **General:** `concept`, and `gave-up` when a student uses Show answer.

## Achievements

21 in all, shown by course. The 15 game badges use the art in `assets/badges/`; six general ones use brand-kit badges.

| Badge | Earned by | Courses |
| --- | --- | --- |
| First Stick | First correct answer | all |
| Dispersion Detective | 8 right in Rank three, Dispersion or Fatty acids | all |
| Dipole Duo | 6 polarity questions right | 3A, 1A |
| H-Bond Hero | 6 "Who can hydrogen bond?" right | all |
| Ion Hugger | 5 right in Like dissolves like or Ion–dipole | all |
| Boiling Point Boss | 10 boiling point battles won | all |
| Vapor Escape | 5 vapor pressure questions right | 1A |
| Surface Skater | 5 surface tension and viscosity questions right | 3A, 1A |
| Phase Shifter | 8 Phase Changes questions right | 3A, 1A |
| Critical Thinker | 6 phase diagram questions right | 3A, 1A |
| Cell Saver | 8 Cells & Osmosis questions right | all |
| Salt the Roads | 5 freezing and boiling point problems right | 1A |
| Particle Counter | 8 right in Count the particles or van't Hoff factor | 1A |
| Fat Packer | 6 fatty acid questions right | 3B |
| Protein Folder | 8 right in Amino acid side chains or Protein folding | 3B |
| Lab Partner | 5 correct lab predictions | all |
| Challenge Champion, Daily Habit, On a Roll, Unbreakable, Explorer | Challenge score, Daily 5 streak, answer streaks, trying every mode | all |

## How it was tested

- **Answer keys:** a script generates 400 questions for every topic in every course (27,600 in all) and checks one correct choice per step, a hint on every step, a reason and slip on every wrong choice, and that every displayed numeric answer passes its own check and sig-fig rule.
- **Data checks:** every boiling-point pair is in the stated order with the stated reason, and every size comparison has molar mass and electron count agreeing; every Lewis drawing has the right electron count and matches its formula; every molar mass matches the atomic masses; the spec's hand-worked numbers (KBr, glucose, ethylene glycol, pentane and hexane) are reproduced.
- **Models:** the H-bond model ranks water > methanol > HF > NH₃ > CH₄ = 0 from −33 °C up; the heating-curve box returns all 18 molecules to the lattice after a full heat-and-cool cycle; all twelve cell-and-bath combinations end in the right state.
- **Browser:** every topic, Learn, Challenge, Daily 5 and every lab clicked through at desktop and phone width in all three courses, with no console errors, no sideways scrolling and no undersized buttons.

## Known limits

- **Animations were not watched in real time.** The test browser throttled animation, so the models were stepped by script. Playback speed and smoothness on real devices are unverified.
- **Small text on phones** in the phase diagram and the Protein Fold Lab picture.
- **H-Bond Lab below about −33 °C:** water and methanol both read about 2 hydrogen bonds per molecule, because a flat box cannot build water's full four-bond network.
- **No matched videos for the 3B biomolecule topics;** they fall back to the general intermolecular forces video.
- **The CHEM 3B Exam #3 Reference Sheet was not available** when the 3B questions were written. Examples follow the spec's description of it.

## Not done yet

- Confirm the nightly question-bank build keeps working with `tools/samplers/IMF.js` (added 2026-11-12 in `ItsDrDan/questionbank`), which lets the hub's Daily 5 draw from this game.
