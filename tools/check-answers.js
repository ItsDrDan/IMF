load(arguments[0] + '/logic.js');
let f = 0; const eq = (a, b, m) => { if (!(a === b || (a !== a && b !== b))) { f++; print('FAIL ' + m + ': got ' + a + ' want ' + b); } };
// parsing
[['7.84 atm', 7.84], ['7.84atm', 7.84], ['1.2×10³', 1200], ['1.2 x 10^3', 1200], ['1.2e3', 1200], ['1.2E-3', 0.0012], ['1.2×10⁻³', 0.0012], ['1.2x103', NaN], ['2x100', NaN], ['-3.72 °C', -3.72], ['−3.72', -3.72], ['12.5%', 12.5], ['0.500 mol/kg', 0.5], ['1,200', 1200], ['.5', 0.5], ['5.', 5], ['abc', NaN], ['7.84E0', 7.84], ['3.2 x 10^3 torr', 3200], ['1.5 M', 1.5], ['e3', NaN], ['12 x', NaN], ['7.84 e', NaN], ['', NaN], ['1.2e3 mol', 1200], ['25.0 °C', 25], ['5 kg', 5]].forEach(([s, v]) => eq(parseNum(s), v, 'parse ' + s));
[['7.84 atm', 3], ['100.', 3], ['100', 1], ['0.050', 2], ['1.20×10³', 3], ['1.20e1 mol', 3], ['12.50%', 4], ['-3.70 °C', 3]].forEach(([s, n]) => eq(countSF(s), n, 'sf ' + s));
// sig-fig message instead of a calc error
const F3 = { answer: 11.52, sf: 3 };
eq(checkNum(F3, '12').slip, 'sig-figs', '12 for 11.52'); eq(checkNum(F3, '11.5').ok, true, '11.5'); eq(checkNum(F3, '11').slip, 'calc', '11 (wrong rounding)'); eq(checkNum(F3, '13').slip, 'calc', '13');
// traps
const FX = { answer: 0.02, sf: 3, traps: [0.02 / 0.98] };
eq(checkNum(FX, '0.0200').ok, true, 'X right'); eq(checkNum(FX, '0.0204').ok, false, 'X = n/nW trap');
// phase diagram
eq(phaseAt(PD.water, 374, 300), 'scf', 'water at Tc'); eq(phaseAt(PD.water, 373, 300), 'liquid', 'below Tc'); eq(phaseAt(PD.co2, 31.1, 74), 'scf', 'co2 at Tc');
const want = { water: ['solid', 'liquid', 'liquid', 'gas', 'gas', 'gas', 'solid'], co2: ['liquid', 'solid', 'gas', 'gas', 'liquid'], hydrazine: ['liquid', 'gas', 'solid', 'liquid'] };
for (const k in PD_STATES) PD_STATES[k].forEach(([T, P], i) => { eq(phaseAt(PD[k], T, P), want[k][i], k + ' state ' + T + ',' + P);
  // distance in px to any boundary: scan a ring of radius 12 px for a phase change
  const S = PD[k], x = pdX(S, T), y = pdYp(S, P); let near = false; for (let a = 0; a < 16; a++) { const [t2, p2] = pdInv(S, x + 12 * Math.cos(a * Math.PI / 8), y + 12 * Math.sin(a * Math.PI / 8)); if (phaseAt(S, t2, p2) !== phaseAt(S, T, P)) near = true; } if (near) { f++; print('FAIL point within 12 px of a line: ' + k + ' ' + T + ',' + P); } });
for (const k in PD_ARROWS) PD_ARROWS[k].forEach(ar => { const x = pdCross(PD[k], ar[0], ar[1]); if (!x || !PD_CHANGE[x.from + '>' + x.to]) { f++; print('FAIL arrow ' + k + JSON.stringify(ar)); } });
const xw = pdCross(PD.water, [-40, 0.002], [60, 0.002]); print('water low-P arrow: ' + PD_CHANGE[xw.from + '>' + xw.to] + ' at ' + xw.T.toFixed(1));
// independent recomputation of the numeric generators from the numbers printed in the stem
OPTS.course = '1A'; let chk = 0;
const num = s => parseFloat(String(s).replace(/<[^>]+>/g, '').replace('−', '-'));
for (let k = 0; k < 4000; k++) { const q = genFpBp(), st = q.stem.replace(/<[^>]+>/g, ' '); const m = st.match(/([\d.]+) g of .*? dissolved in\s+(\d+) g of water.*?: ([\d.]+) g mol/); if (!m) { f++; print('no parse ' + st); break; }
  const gS = +m[1], gW = +m[2], mm = +m[3], n = gS / mm, mol = n / (gW / 1000), i = q.parts[2].fields[0].answer, bp = /boiling/.test(q.tag), dT = i * (bp ? 0.512 : 1.86) * mol, pt = bp ? 100 + dT : -dT;
  [[0, n], [1, mol], [3, dT], [4, pt]].forEach(([pi, v]) => { chk++; const fa = q.parts[pi].fields[0].answer; if (Math.abs(fa - v) > 2e-3 * Math.abs(v) + 1e-6) { f++; print('FAIL fpbp part ' + pi + ' ' + fa + ' vs ' + v + ' :: ' + st); } });
  if (gW % 10 === 0) { f++; print('FAIL gW multiple of 10'); } if (/Na2SO4|Na<sub>2<\/sub>SO/.test(q.stem)) { f++; print('FAIL Na2SO4 in fp'); } }
for (let k = 0; k < 4000; k++) { const q = genOsmoticP(), st = q.stem.replace(/<[^>]+>/g, ' '); const m = st.match(/([\d.]+) M .*? at ([\d.]+) °C/); const i = q.parts[0].fields[0].answer, pi = i * +m[1] * 0.08206 * (+m[2] + 273.15); chk++; if (Math.abs(q.parts[1].fields[0].answer - pi) > 2e-3 * pi) { f++; print('FAIL Π ' + st); } if (/urea/.test(st)) { f++; print('FAIL urea'); } }
let lo = 1, hi = 0, acceptP0 = 0, nR = 0; for (let k = 0; k < 6000; k++) { const q = genRaoult(); if (!/in water/.test(q.tag)) continue; nR++; const X = q.parts[2].fields[0], Pf = q.parts[3].fields[0]; lo = Math.min(lo, X.answer); hi = Math.max(hi, X.answer); const p0 = +q.stem.replace(/<[^>]+>/g, ' ').match(/:\s+([\d.]+)\s+torr/)[1]; if (checkNum(Pf, String(p0)).ok) acceptP0++; if (checkNum(X, '1').ok) acceptP0++; if (!checkNum(X, fmtSF(X.answer, 3)).ok || !checkNum(Pf, fmtSF(Pf.answer, 3)).ok) { f++; print('FAIL raoult own answer rejected'); } }
print('raoult solute-in-water: ' + nR + ' items, X_water ' + lo.toFixed(3) + '–' + hi.toFixed(3) + ', pure-water value accepted ' + acceptP0 + ' times');
let trapOK = 0, nX = 0; for (let k = 0; k < 6000; k++) { const q = genConc(); q.parts.forEach(p => p.fields.forEach(fl => { if (fl.key === 'X') { nX++; const t = fl.traps[0]; if (fmtSF(t, 3) !== fmtSF(fl.answer, 3) && checkNum(fl, fmtSF(t, 3)).ok) trapOK++; if (!checkNum(fl, fmtSF(fl.answer, 3)).ok) { f++; print('FAIL conc X own answer rejected'); } } })); }
print('conc mole fraction: ' + nX + ' items, n/n_water wrongly accepted ' + trapOK);
for (let k = 0; k < 3000; k++) { const q = genAntifreeze(), st = q.stem.replace(/<[^>]+>/g, ' '), dT = +st.match(/−([\d.]+) °C/)[1]; if (dT < 10 || (/NaCl/.test(q.tag.replace(/<[^>]+>/g, '')) && dT > 15.05)) { f++; print('FAIL antifreeze dT ' + dT + ' ' + q.tag); } }
print('recomputed ' + chk + ' numeric answers; h2 failures ' + f);
