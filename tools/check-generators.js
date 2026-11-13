load(arguments[0] + "/logic.js");
let fails = 0, n = 0; const seen = {};
const bad = (t, m, q) => { fails++; const k = t + '|' + m; seen[k] = (seen[k] || 0) + 1; if (seen[k] <= 2) print('FAIL ' + t + ': ' + m + (q ? '\n   ' + String(q).slice(0, 260) : '')); };
const strip = h => String(h).replace(/<[^>]+>/g, '').trim();
const junk = s => /undefined|NaN(?!O)|\[object|null/.test(strip(s));
const stats = {};
for (const c of ['3A', '1A', '3B']) {
  OPTS.course = c;
  for (const T of tilesFor(c)) for (const t of topicsFor(T, c)) {
    const stems = new Set(); const N = 300;
    for (let k = 0; k < N; k++) {
      let q; try { q = generate(t); } catch (e) { bad(c + ' ' + t, 'throws ' + e.message); continue; }
      n++;
      const sig = (q.stem || '') + '||' + q.parts.map(p => p.kind === 'choice' ? p.choices.map(x => x.html).sort().join('~') : p.kind === 'rank' ? p.items.map(x => x.html).sort().join('~') : '').join('|') + '||' + q.parts.map(p => strip(p.ask)).join('|'); stems.add(sig);
      if (junk(q.stem || '')) bad(c + ' ' + t, 'junk in stem', q.stem);
      if (q.tip && junk(q.tip)) bad(c + ' ' + t, 'junk in tip', q.tip);
      if (!q.parts.length) bad(c + ' ' + t, 'no parts');
      q.parts.forEach((p, pi) => {
        if (!p.hint) bad(c + ' ' + t, 'missing hint', p.ask);
        if (junk(p.ask) || junk(p.hint) || junk(p.answer) || junk(p.solution || '')) bad(c + ' ' + t, 'junk in part', p.ask + ' // ' + p.answer + ' // ' + p.solution);
        if (!strip(p.answer)) bad(c + ' ' + t, 'empty answer', p.ask);
        if (p.kind === 'choice') {
          const oks = p.choices.filter(x => x.ok);
          if (oks.length !== 1) bad(c + ' ' + t, oks.length + ' correct options', p.ask + ' :: ' + p.choices.map(x => strip(x.html) + (x.ok ? '*' : '')).join(' / '));
          const hs = p.choices.map(x => strip(x.html)); if (new Set(hs).size !== hs.length) bad(c + ' ' + t, 'duplicate options', p.ask + ' :: ' + hs.join(' / '));
          if (p.choices.length < 2) bad(c + ' ' + t, 'fewer than 2 options', p.ask);
          p.choices.forEach(x => { if (!strip(x.why)) bad(c + ' ' + t, 'option without feedback', p.ask + ' :: ' + strip(x.html)); if (junk(x.html) || junk(x.why)) bad(c + ' ' + t, 'junk in option', x.html + ' // ' + x.why); });
        } else if (p.kind === 'nums') {
          p.fields.forEach(f => {
            if (!Number.isFinite(f.answer)) bad(c + ' ' + t, 'non-finite answer', p.ask);
            const r = checkNum(f, String(f.show).split(' ')[0].replace(/%$/, '')); if (!r.ok) bad(c + ' ' + t, 'shown answer rejected: ' + f.show + ' vs ' + f.answer, p.ask);
            const r2 = checkNum(f, String(f.answer)); if (!r2.ok) bad(c + ' ' + t, 'exact answer rejected', p.ask + ' ' + f.answer);
            if (!f.exact) { const r3 = checkNum(f, String(f.answer * 1.05)); if (r3.ok) bad(c + ' ' + t, '5% off accepted', p.ask); if (r.ok && r.sf) bad(c + ' ' + t, 'shown answer flagged for sig figs: ' + f.show, p.ask); }
          });
        } else if (p.kind === 'rank') {
          if (!p.want || p.want.length !== p.items.length || new Set(p.want).size !== p.want.length) bad(c + ' ' + t, 'bad rank key', p.ask);
          const r = checkRank(p, p.want); if (!r || !r.ok) bad(c + ' ' + t, 'rank key rejected', p.ask);
        } else bad(c + ' ' + t, 'unknown kind ' + p.kind);
      });
    }
    stats[c + ' ' + t] = stems.size;
  }
}
print('generated ' + n + ' questions; failures ' + fails);
print('distinct question texts per topic (of 300 draws):'); print(Object.keys(stats).map(k => k + '=' + stats[k]).join(', '));
