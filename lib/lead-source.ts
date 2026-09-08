/**
 * Provenance d'un lead — attribution côté client, sans cookie ni analytics.
 *
 * Le site n'a aucun outil d'analytics et les formulaires ne transmettaient
 * jusqu'ici ni la page ni la source. Résultat : impossible de savoir si une
 * demande vient du référencement naturel, de la fiche Google Business Profile,
 * d'un lien externe ou d'une saisie directe de l'URL. Cette distinction est
 * décisive : elle dit où investir.
 *
 * On lit `document.referrer`, qui est disponible sans consentement (aucune
 * donnée personnelle, aucun stockage). La classification est volontairement
 * grossière — c'est un canal, pas un parcours.
 */

export type LeadSource = {
  /** Canal déduit, en clair dans le mail reçu. */
  canal: string;
  /** Referrer brut, pour lever un doute à la main. */
  referrer: string;
  /** Page depuis laquelle le formulaire a été envoyé. */
  page: string;
};

export function getLeadSource(): LeadSource {
  if (typeof window === 'undefined') {
    return { canal: 'inconnu', referrer: '', page: '' };
  }

  const ref = document.referrer ?? '';
  const page = window.location.pathname + window.location.search;
  let host = '';
  let refPath = '';
  if (ref) {
    try {
      const u = new URL(ref);
      host = u.hostname.replace(/^www\./, '');
      refPath = u.pathname;
    } catch {
      host = '';
    }
  }

  const canal = (() => {
    if (!ref) return 'Direct ou fiche Google (aucun référent)';
    if (host === window.location.hostname.replace(/^www\./, '')) {
      return 'Navigation interne';
    }
    // La fiche Google Business Profile envoie vers le site via ces domaines.
    if (/^(maps\.google\.|google\.[a-z.]+\/maps|g\.page|share\.google)/.test(host + refPath)) {
      return 'Fiche Google Business Profile';
    }
    if (/^google\./.test(host)) return 'Recherche Google (SEO ou Ads)';
    if (/^(bing|duckduckgo|ecosia|qwant|yahoo)\./.test(host)) return `Recherche ${host}`;
    if (/(facebook|instagram|linkedin|twitter|x)\.com$/.test(host)) return `Réseau social — ${host}`;
    if (/(chatgpt|openai|perplexity|claude|gemini)\./.test(host)) return `Moteur IA — ${host}`;
    return host ? `Site référent — ${host}` : 'Référent illisible';
  })();

  return { canal, referrer: ref, page };
}

/** Ajoute les champs de provenance à un payload Web3Forms. */
export function appendLeadSource(fd: FormData): void {
  const s = getLeadSource();
  fd.append('Provenance', s.canal);
  fd.append('Page du formulaire', s.page);
  if (s.referrer) fd.append('Référent', s.referrer);
}
