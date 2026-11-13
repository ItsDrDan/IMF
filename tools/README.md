# Checks for the game's chemistry and answer checking

These run the game's own question code outside the browser, using the JavaScript engine that ships with macOS.

```bash
tools/extract.sh sticky-molecules-v16.html
```

```bash
/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc tools/check-generators.js -- tools
```

```bash
/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc tools/check-answers.js -- tools
```

- `extract.sh` copies the two script blocks out of the html into `tools/logic.js` and `tools/ui.js`.
- `check-generators.js` draws 300 questions per topic per course (20,700 in all) and checks each one: exactly one correct choice, no duplicate choices, feedback on every choice, a hint on every step, no stray "undefined" or "NaN", the shown answer is accepted, and an answer 5% off is rejected.
- `check-answers.js` checks number entry (units, superscripts, sig figs), the phase-diagram points and arrows, and recomputes 20,000 colligative and osmotic-pressure answers from the numbers printed in the question.
