import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('.seo/targets.sqlite');
db.exec(`CREATE TABLE IF NOT EXISTS targets (
  id INTEGER PRIMARY KEY AUTOINCREMENT, lot TEXT, date_depart TEXT,
  requete TEXT, page TEXT, position REAL, impressions INTEGER, clics INTEGER,
  action TEXT, hypothese TEXT, critere_reussite TEXT, critere_rollback TEXT, date_controle TEXT
);`);
function rd(f) { const t = fs.readFileSync('gsc-audit/data/' + f, 'utf8').trim(); const L = []; let c = '', r = [], Q = false;
  for (let i = 0; i < t.length; i++) { const ch = t[i];
    if (Q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else Q = false; } else c += ch; }
    else if (ch === '"') Q = true; else if (ch === ',') { r.push(c); c = ''; }
    else if (ch === '\n') { r.push(c); L.push(r); r = []; c = ''; } else if (ch !== '\r') c += ch; }
  r.push(c); L.push(r); const co = L[0];
  return L.slice(1).filter(x => x.length === co.length).map(x => { const o = {}; co.forEach((k, i) => o[k] = ['clicks','impressions','ctr','position'].includes(k) ? Number(x[i]) : x[i]); return o; }); }
const Q = Object.fromEntries(rd('query_28.csv').map(r => [r.query, r]));
const LOT = '2026-09-05-restauration-home', D0 = '2026-09-05', D28 = '2026-10-03';
const T = [
  ['couvreur gironde', '/', 'H1+title home : Bordeaux/Gironde restaurés', 'Le H1 et le title de la home portent la pertinence du site sur ce terme', 'position < 15', 'aucun'],
  ['couvreur bordeaux', '/', 'H1+title home : Bordeaux/Gironde restaurés', 'idem', 'position < 25', 'aucun'],
  ['couvreur mérignac', '/', 'H1+title home', 'idem', 'position < 18', 'aucun'],
  ['couverture gironde', '/', 'témoin de non-régression marque', 'La marque tient même sans être en tête de title', 'position ≤ 4 ET clics ≥ 4', 'position > 4 OU clics < 4 → rollback du lot'],
  ['velux bordeaux', '/installation-velux-bordeaux', '2 liens en prose ajoutés (3 → 5, médiane site 44)', 'Le déficit de liens de corps freine la page', 'position < 10', 'aucun'],
  ['installateur velux bordeaux', '/installation-velux-bordeaux', 'idem', 'idem', 'position < 12', 'aucun'],
  ['démoussage toiture bordeaux', '/nettoyage-toiture-bordeaux', 'fusion 301 + H1/title absorbent « démoussage »', 'La consolidation des deux pages concentre le signal', 'position < 10', 'aucun'],
  ['nettoyage de toiture bordeaux', '/nettoyage-toiture-bordeaux', 'idem', 'idem', 'position < 12', 'aucun'],
  ['devis toiture bordeaux', '/demande-devis', 'dé-optimisation service de /demande-devis', 'Retirer les services rend la page moins concurrente des pages service', 'les pages service remontent, /demande-devis peut baisser', 'aucun'],
];
const ins = db.prepare('INSERT INTO targets (lot,date_depart,requete,page,position,impressions,clics,action,hypothese,critere_reussite,critere_rollback,date_controle) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)');
db.prepare('DELETE FROM targets WHERE lot = ?').run(LOT);
const out = [];
for (const [q, page, action, hyp, ok, ko] of T) {
  const r = Q[q] ?? { position: null, impressions: 0, clicks: 0 };
  ins.run(LOT, D0, q, page, r.position, r.impressions, r.clicks, action, hyp, ok, ko, D28);
  out.push({ requete: q, page, pos_depart: r.position ? +r.position.toFixed(1) : '—', imp: r.impressions, clics: r.clicks, reussite: ok });
}
console.log(`Baseline enregistrée : ${out.length} cibles, contrôle le ${D28}`);
console.table(out);
const esc = v => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s; };
fs.writeFileSync('out/cibles.csv', ['requete,page,pos_depart,impressions_28j,clics_28j,action,critere_reussite,date_controle',
  ...T.map(([q,p,a,h,ok]) => { const r = Q[q] ?? {position:null,impressions:0,clicks:0};
    return [q,p,r.position?r.position.toFixed(1):'',r.impressions,r.clicks,a,ok,D28].map(esc).join(','); })].join('\n'));
