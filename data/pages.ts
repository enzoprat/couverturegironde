import type { PageEntry, ServiceCategory } from './types';
import { SERVICES } from './services';
import { LOCATIONS } from './locations';

/**
 * REGISTRE DES PAGES : source unique de vérité.
 *
 * Ajouter une nouvelle page = ajouter une entrée ici. Automatiquement :
 *  - apparaît dans `sitemap.xml` (si indexable)
 *  - peut apparaître dans la nav / footer (si visibleIn... true)
 *  - rentre dans le maillage interne (via type/parentSlug/service/ville)
 *  - génère son breadcrumb (via parentSlug)
 */

const STATIC_PAGES: PageEntry[] = [
  // ============ HOMEPAGE ============
  {
    slug: '',
    path: '/',
    type: 'home',
    title: 'Accueil',
    seoTitle:
      'Couvreur Bordeaux ★ 5/5 sur 54 avis ★ Devis 24h, urgence 7j/7',
    seoDescription:
      "Couvreur-zingueur à Bordeaux depuis 2005 ✓ Démoussage, nettoyage, réparation toiture ✓ Urgence fuite 7j/7 sous 1h ✓ Note 5/5 sur 54 avis Google ✓ Devis gratuit 24h, garantie décennale.",
    visibleInNav: true,
    navOrder: 10,
    indexable: true,
    sitemapPriority: 1.0,
    sitemapChangeFrequency: 'weekly',
  },

  // ============ HUB COUVREUR (silo généraliste) ============
  {
    slug: 'couvreur-bordeaux',
    path: '/couvreur-bordeaux',
    type: 'service',
    service: 'couverture',
    title: 'Couvreur Bordeaux',
    seoTitle:
      'Couvreur Bordeaux ★ 5/5 sur 54 avis ★ Devis 24h, urgence 7j/7',
    seoDescription:
      "★ Couvreur Bordeaux depuis 2005 ★ Note 5/5 sur 54 avis Google ✓ Démoussage, nettoyage, réparation, zinguerie ✓ Urgence 7j/7 ✓ Devis gratuit sous 24h ✓ Garantie décennale.",
    indexable: true,
    visibleInFooter: true,
    footerSection: 'services',
  },
  {
    slug: 'couvreur-gironde',
    path: '/couvreur-gironde',
    type: 'service',
    service: 'couverture',
    title: 'Couvreur Gironde',
    seoTitle:
      'Couvreur Gironde (33) : 5/5 sur 54 avis | Devis 24h, urgence 7j/7',
    seoDescription:
      "Couvreur-zingueur en Gironde (33) depuis 2005 : Bordeaux Métropole, Médoc, Bassin, Libournais, Sud-Gironde. Démoussage, urgence 7j/7. Note 5/5 (54 avis). Devis 24h.",
    indexable: true,
    visibleInFooter: true,
    footerSection: 'services',
    sitemapPriority: 0.9,
  },

  // ============ SILO PRIORITAIRE (démoussage / nettoyage / hydrofuge) ============
  {
    slug: 'demoussage-toiture-bordeaux',
    path: '/demoussage-toiture-bordeaux',
    type: 'service',
    service: 'demoussage',
    title: 'Démoussage toiture Bordeaux',
    navLabel: 'Démoussage toiture',
    seoTitle:
      'Démoussage toiture Bordeaux 12-18 €/m² · Traitement anti-mousse',
    seoDescription:
      "★ Démoussage toiture Bordeaux 12-18 €/m² ★ Traitement anti-mousse rémanent + brossage manuel + rinçage ✓ Couvreur depuis 2005 ✓ Note 5/5 (54 avis) ✓ Devis 24h.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 20,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'nettoyage-toiture-bordeaux',
    path: '/nettoyage-toiture-bordeaux',
    type: 'service',
    service: 'nettoyage',
    title: 'Nettoyage toiture Bordeaux',
    navLabel: 'Nettoyage toiture',
    seoTitle:
      'Nettoyage toiture Bordeaux : 15-22 €/m² | Démoussage + hydrofuge',
    seoDescription:
      "★ Nettoyage toiture Bordeaux 15-22 €/m² ★ Démoussage + rinçage haute pression + hydrofuge longue durée ✓ Couvreur depuis 2005 ✓ Note 5/5 (54 avis) ✓ Devis gratuit 24h.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 21,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'traitement-hydrofuge-toiture-bordeaux',
    path: '/traitement-hydrofuge-toiture-bordeaux',
    type: 'service',
    service: 'hydrofuge',
    title: 'Traitement hydrofuge Bordeaux',
    navLabel: 'Traitement hydrofuge',
    seoTitle:
      'Hydrofuge toiture Bordeaux garantie 10 ans · 6-12 €/m²',
    seoDescription:
      "★ Hydrofuge toiture Bordeaux garantie 10 ans ★ Protection humidité, mousses, cycles gel-dégel ✓ Tarif 6-12 €/m² ✓ Couvreur depuis 2005 ✓ Note 5/5 (54 avis) ✓ Devis 24h.",
    visibleInNav: true,
    navCategory: 'entretien',
    navOrder: 22,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },

  // ============ SERVICES SECONDAIRES ============
  {
    slug: 'reparation-toiture-bordeaux',
    path: '/reparation-toiture-bordeaux',
    type: 'service',
    service: 'reparation',
    title: 'Réparation toiture Bordeaux',
    navLabel: 'Réparation toiture',
    seoTitle:
      'Réparation toiture Bordeaux : intervention 24h, diagnostic gratuit',
    seoDescription:
      "★ Réparation toiture Bordeaux ★ Tuiles cassées, fuite, faîtage, étanchéité ✓ Intervention sous 24h ✓ Diagnostic gratuit ✓ Note 5/5 (54 avis) ✓ Garantie décennale.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 30,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'urgence-fuite-toiture-bordeaux',
    path: '/urgence-fuite-toiture-bordeaux',
    type: 'service',
    service: 'urgence',
    title: 'Urgence fuite toiture',
    navLabel: 'Urgence fuite 7j/7',
    seoTitle:
      'Urgence toiture Bordeaux 7j/7 ☎ 07 68 69 78 48 — couvreur en 1h',
    seoDescription:
      "★ Urgence toiture Bordeaux 7j/7 ★ Couvreur sur place en 1h ✓ Mise hors d'eau immédiate ✓ Appel direct 07 68 69 78 48 ✓ Note 5/5 (54 avis). Couverture Gironde.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 40,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'zinguerie-bordeaux',
    path: '/zinguerie-bordeaux',
    type: 'service',
    service: 'zinguerie',
    title: 'Zinguerie Bordeaux',
    navLabel: 'Zinguerie & gouttières',
    seoTitle:
      'Zinguerie & gouttières Bordeaux : zinc, soudure étain | 50-85 €/ml',
    seoDescription:
      "★ Zinguerie Bordeaux et Gironde ★ Gouttières zinc + noues + chéneaux + habillages ✓ Soudure étain sur place ✓ Étanchéité garantie 30 ans ✓ Note 5/5 ✓ Devis 24h.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 31,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'installation-velux-bordeaux',
    path: '/installation-velux-bordeaux',
    type: 'service',
    service: 'velux',
    title: 'Installation Velux Bordeaux',
    navLabel: 'Pose Velux',
    seoTitle:
      'Pose Velux Bordeaux : installation et remplacement | 850-1600 €',
    seoDescription:
      "★ Pose Velux Bordeaux et Gironde 850-1600 € ★ Installation + remplacement par couvreur certifié ✓ Étanchéité garantie ✓ Conseil modèle ✓ Note 5/5 (54 avis) ✓ Devis 24h.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 41,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'toiture-neuve-bordeaux',
    path: '/toiture-neuve-bordeaux',
    type: 'service',
    service: 'neuve',
    title: 'Toiture neuve Bordeaux',
    navLabel: 'Toiture neuve',
    seoTitle: 'Toiture neuve Bordeaux et Gironde : construction clé en main',
    seoDescription:
      "★ Toiture neuve à Bordeaux et en Gironde ★ Construction clé en main : charpente + couverture + zinguerie + isolation ✓ Maîtrise d'œuvre globale ✓ Note 5/5 (54 avis) ✓ Devis 24h.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 32,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'faitage-toiture-bordeaux',
    path: '/faitage-toiture-bordeaux',
    type: 'service',
    service: 'faitage',
    title: 'Faîtage toiture Bordeaux',
    navLabel: 'Faîtage toiture',
    seoTitle: 'Faîtage toiture Bordeaux : rénovation et étanchéité garantie',
    seoDescription:
      "Rénovation de faîtage à Bordeaux : faîtage scellé ou à sec, étanchéité garantie. Couvreur depuis 2005. Note 5/5 (54 avis). Devis gratuit 24h, garantie décennale.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 33,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },
  {
    slug: 'ornements-toiture-bordeaux',
    path: '/ornements-toiture-bordeaux',
    type: 'service',
    service: 'ornements',
    title: 'Ornements de toiture Bordeaux',
    navLabel: 'Ornements traditionnels',
    seoTitle:
      'Ornements toiture Bordeaux : épis, lambrequins, girouettes',
    seoDescription:
      "Ornements de toiture à Bordeaux : épis, lambrequins, girouettes, rives décoratives. Travail traditionnel et soigné, respect du bâti girondin. Note 5/5 (54 avis). Devis gratuit 24h.",
    visibleInNav: true,
    navCategory: 'travaux',
    navOrder: 34,
    indexable: true,
  },
  {
    slug: 'charpente-bordeaux',
    path: '/charpente-bordeaux',
    type: 'service',
    service: 'charpente',
    title: 'Charpente Bordeaux',
    navLabel: 'Charpente',
    seoTitle:
      'Charpente Bordeaux : rénovation, traitement, renforcement | Devis 24h',
    seoDescription:
      "Travaux de charpente à Bordeaux et en Gironde : diagnostic, traitement bois, renforcement. Couvreur-charpentier depuis 2005. Note 5/5 (54 avis). Devis gratuit 24h.",
    visibleInNav: true,
    navCategory: 'urgence',
    navOrder: 42,
    visibleInFooter: true,
    footerSection: 'services',
    indexable: true,
  },

  // ============ GUIDES COMMERCIAUX (money-keyword) ============
  {
    slug: 'guides/prix-demoussage-toiture-bordeaux',
    path: '/guides/prix-demoussage-toiture-bordeaux',
    type: 'guide',
    title: 'Prix démoussage toiture Bordeaux',
    seoTitle:
      'Prix démoussage toiture Bordeaux 2026 : Tarifs et facteurs de prix',
    seoDescription:
      "Combien coûte un démoussage de toiture à Bordeaux en 2026 ? Tarifs au m², facteurs de prix, exemples chiffrés, conseils pour comparer les devis.",
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'guides/aides-renovation-toiture-2026',
    path: '/guides/aides-renovation-toiture-2026',
    type: 'guide',
    title: 'Aides rénovation toiture 2026',
    seoTitle:
      'Aides pour refaire sa toiture 2026 : MaPrimeRénov, éco-PTZ, CEE',
    seoDescription:
      "★ Aides pour refaire sa toiture en 2026 ★ MaPrimeRénov' + éco-PTZ + TVA 5,5 % + CEE. Conditions, montants, démarches détaillés par un couvreur Gironde depuis 2005.",
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'guides/quand-demousser-toiture-gironde',
    path: '/guides/quand-demousser-toiture-gironde',
    type: 'guide',
    title: 'Quand démousser sa toiture en Gironde',
    seoTitle:
      'Nettoyer toiture verte de mousse en Gironde : quand, comment, prix',
    seoDescription:
      "★ Comment nettoyer une toiture verte de mousse en Gironde ? Quand démousser, quelle fréquence, quels signes d'alerte ? Conseils couvreur Gironde depuis 2005.",
    indexable: true,
    sitemapPriority: 0.7,
  },

  // ============ HUBS VILLES ============
  {
    slug: 'couvreur-merignac',
    path: '/couvreur-merignac',
    type: 'ville',
    ville: 'merignac',
    title: 'Couvreur Mérignac',
    seoTitle:
      'Couvreur Mérignac : atelier rue de Malbos | 5/5 sur 54 avis',
    seoDescription:
      "Couvreur à Mérignac depuis 2005, atelier rue de Malbos. Démoussage, nettoyage, réparation, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-pessac',
    path: '/couvreur-pessac',
    type: 'ville',
    ville: 'pessac',
    title: 'Couvreur Pessac',
    seoTitle: 'Couvreur Pessac : démoussage, réparation | 5/5 sur 54 avis',
    seoDescription:
      "Couvreur à Pessac depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis gratuit 24h, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-talence',
    path: '/couvreur-talence',
    type: 'ville',
    ville: 'talence',
    title: 'Couvreur Talence',
    seoTitle: 'Couvreur Talence : démoussage, réparation | 5/5 sur 54 avis',
    seoDescription:
      "Couvreur à Talence depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis gratuit 24h, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-begles',
    path: '/couvreur-begles',
    type: 'ville',
    ville: 'begles',
    title: 'Couvreur Bègles',
    seoTitle: 'Couvreur Bègles : démoussage, réparation | 5/5 sur 54 avis',
    seoDescription:
      "Couvreur à Bègles depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis gratuit 24h, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-villenave-dornon',
    path: '/couvreur-villenave-dornon',
    type: 'ville',
    ville: 'villenave-dornon',
    title: "Couvreur Villenave-d'Ornon",
    seoTitle:
      "Couvreur Villenave-d'Ornon : démoussage, réparation | 5/5 avis",
    seoDescription:
      "Couvreur à Villenave-d'Ornon depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis gratuit 24h, garantie décennale.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  // === Sprint 2 : 5 communes Tier 2 (Sprint juin 2026, basé sur audit Autocomplete) ===
  {
    slug: 'couvreur-bouscat',
    path: '/couvreur-bouscat',
    type: 'ville',
    ville: 'bouscat',
    title: 'Couvreur Le Bouscat',
    seoTitle: 'Couvreur Le Bouscat : démoussage, réparation | 5/5 (54 avis)',
    seoDescription:
      "Couvreur au Bouscat depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Atelier voisin à Mérignac. Note 5/5 (54 avis). Devis 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-gradignan',
    path: '/couvreur-gradignan',
    type: 'ville',
    ville: 'gradignan',
    title: 'Couvreur Gradignan',
    seoTitle: 'Couvreur Gradignan : démoussage, réparation | 5/5 (54 avis)',
    seoDescription:
      "Couvreur à Gradignan depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Spécialiste pavillons sous couvert arboré. Note 5/5 (54 avis). Devis 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-eysines',
    path: '/couvreur-eysines',
    type: 'ville',
    ville: 'eysines',
    title: 'Couvreur Eysines',
    seoTitle: 'Couvreur Eysines : démoussage, réparation | 5/5 (54 avis)',
    seoDescription:
      "Couvreur à Eysines depuis 2005 : démoussage, nettoyage, réparation toiture, zinguerie, urgence 7j/7. Atelier voisin à 4 km à Mérignac. Note 5/5 (54 avis). Devis 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-arcachon',
    path: '/couvreur-arcachon',
    type: 'ville',
    ville: 'arcachon',
    title: 'Couvreur Arcachon',
    seoTitle: 'Couvreur Arcachon Bassin : zinguerie marine | 5/5 (54 avis)',
    seoDescription:
      "Couvreur à Arcachon et sur le Bassin : démoussage, réparation, zinguerie résistante à l'air salin. Couvreur Gironde depuis 2005. Note 5/5 (54 avis). Devis 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  {
    slug: 'couvreur-libourne',
    path: '/couvreur-libourne',
    type: 'ville',
    ville: 'libourne',
    title: 'Couvreur Libourne',
    seoTitle: 'Couvreur Libourne Libournais : tuile romane | 5/5 (54 avis)',
    seoDescription:
      "Couvreur à Libourne et dans le Libournais depuis 2005 : démoussage, réparation, zinguerie, tuile romane et canal. Note 5/5 (54 avis). Devis gratuit 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  // === Sprint 4 : 1 nouvelle page ville / jour (juillet 2026, post-indexation) ===
  {
    slug: 'couvreur-cenon',
    path: '/couvreur-cenon',
    type: 'ville',
    ville: 'cenon',
    title: 'Couvreur Cenon',
    seoTitle:
      'Couvreur Cenon (33150) rive droite ★ 5/5 sur 54 avis ★ Devis 24h',
    seoDescription:
      "★ Couvreur Cenon rive droite depuis 2005 ★ Coteaux Haut Cenon, plateau Palmer, Beauval-Loret ✓ Démoussage, réparation, zinguerie ✓ Urgence 7j/7 ✓ 5/5 (54 avis) ✓ Devis gratuit 24h.",
    visibleInFooter: true,
    footerSection: 'villes',
    indexable: true,
  },
  // === Sprint 3.2 : sub-quartiers Bordeaux (juin 2026, audit Autocomplete) ===
  {
    slug: 'couvreur-bordeaux-centre',
    path: '/couvreur-bordeaux-centre',
    type: 'ville',
    ville: 'bordeaux',
    title: 'Couvreur Bordeaux Centre',
    seoTitle: 'Couvreur Bordeaux Centre : échoppes, ABF | 5/5 (54 avis)',
    seoDescription:
      "Couvreur à Bordeaux Centre depuis 2005 : échoppes, hôtels particuliers, ABF, tuile canal. Démoussage, réparation, urgence 7j/7. Note 5/5 (54 avis). Devis 24h.",
    indexable: true,
  },
  {
    slug: 'couvreur-bordeaux-chartrons',
    path: '/couvreur-bordeaux-chartrons',
    type: 'ville',
    ville: 'bordeaux',
    title: 'Couvreur Bordeaux Chartrons',
    seoTitle: 'Couvreur Bordeaux Chartrons : ardoise, ABF | 5/5 (54 avis)',
    seoDescription:
      "Couvreur Bordeaux Chartrons depuis 2005 : ardoise, hôtels particuliers, quai des Chartrons, secteur ABF. Démoussage, réparation. Note 5/5 (54 avis). Devis 24h.",
    indexable: true,
  },
  {
    slug: 'couvreur-bordeaux-rive-droite',
    path: '/couvreur-bordeaux-rive-droite',
    type: 'ville',
    ville: 'bordeaux',
    title: 'Couvreur Bordeaux Rive Droite',
    seoTitle: 'Couvreur Bordeaux Rive Droite Bastide | 5/5 (54 avis)',
    seoDescription:
      "Couvreur Bordeaux Rive Droite depuis 2005 : Bastide, Brazza, Niel, Benauge. Démoussage, réparation toiture, zinguerie, urgence 7j/7. Note 5/5 (54 avis). Devis 24h.",
    indexable: true,
  },
  {
    slug: 'couvreur-bordeaux-lac',
    path: '/couvreur-bordeaux-lac',
    type: 'ville',
    ville: 'bordeaux',
    title: 'Couvreur Bordeaux Lac',
    seoTitle: 'Couvreur Bordeaux Lac : toitures terrasses | 5/5 (54 avis)',
    seoDescription:
      "Couvreur Bordeaux Lac depuis 2005 : Quartier des Bassins à flot, Ginko, toits-terrasses copropriétés, étanchéité. Note 5/5 (54 avis). Devis 24h.",
    indexable: true,
  },
  {
    slug: 'nettoyage-toiture-pessac',
    path: '/nettoyage-toiture-pessac',
    type: 'service-ville',
    service: 'nettoyage',
    ville: 'pessac',
    parentSlug: 'nettoyage-toiture-bordeaux',
    title: 'Nettoyage toiture Pessac',
    seoTitle:
      'Nettoyage toiture Pessac : démoussage + hydrofuge | 5/5 avis',
    seoDescription:
      "Nettoyage toiture à Pessac par couvreur depuis 2005. Démoussage, haute pression maîtrisée, hydrofuge longue durée. Note 5/5 (54 avis). Devis gratuit 24h.",
    indexable: true,
  },

  // ============ PAGES INSTITUTIONNELLES ============
  {
    slug: 'realisations',
    path: '/realisations',
    type: 'institutional',
    title: 'Réalisations',
    seoTitle: 'Nos réalisations de toiture à Bordeaux et en Gironde',
    seoDescription:
      "Découvrez nos chantiers récents : démoussage, nettoyage, réparation et zinguerie à Bordeaux et en Gironde. Photos avant/après et détails par projet.",
    visibleInNav: true,
    navOrder: 60,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.7,
  },
  {
    slug: 'contact',
    path: '/contact',
    type: 'conversion',
    title: 'Contact',
    seoTitle: 'Contact Couverture Gironde : 07 68 69 78 48 | Bordeaux',
    seoDescription:
      "Contactez Couverture Gironde au 07 68 69 78 48. Couvreur Bordeaux Métropole depuis 2005, atelier à Mérignac. Note 5/5 (54 avis). Réponse sous 24h, devis gratuit.",
    visibleInNav: true,
    navOrder: 80,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'a-propos',
    path: '/a-propos',
    type: 'institutional',
    title: 'À propos',
    seoTitle: 'À propos : Liroy Delsuc, couvreur Bordeaux depuis 2005',
    seoDescription:
      "Couverture Gironde, fondée par Liroy Delsuc en 2005 à Mérignac. 20 ans d'expérience en Gironde, atelier rue de Malbos. Note 5/5 (54 avis). Garantie décennale.",
    visibleInNav: true,
    navOrder: 70,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
  },
  {
    slug: 'tarifs',
    path: '/tarifs',
    type: 'institutional',
    title: 'Tarifs',
    seoTitle:
      'Tarifs couvreur Bordeaux 2026 : démoussage dès 12 €/m² | Devis gratuit',
    seoDescription:
      "Tarifs 2026 d'un couvreur à Bordeaux : démoussage 12-18 €/m², nettoyage 15-22 €/m², hydrofuge dès 6 €/m². Prix transparents ligne par ligne. Note 5/5 (54 avis). Devis gratuit 24h.",
    visibleInNav: true,
    navOrder: 50,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'urgence',
    path: '/urgence',
    type: 'institutional',
    title: 'Urgence toiture',
    seoTitle:
      'Couvreur urgence Bordeaux Gironde 7j/7 ☎ 07 68 69 78 48',
    seoDescription:
      "★ Couvreur urgence Bordeaux et Gironde 7j/7 ★ Fuite, tempête, sinistre ✓ Sur place en 1h ✓ Mise hors d'eau immédiate ✓ Devis assurance pris en charge. ☎ 07 68 69 78 48",
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.85,
  },
  {
    slug: 'demande-devis',
    path: '/demande-devis',
    type: 'conversion',
    title: 'Demande de devis',
    seoTitle: 'Devis toiture Bordeaux gratuit en 24h ☎ 07 68 69 78 48',
    seoDescription:
      "★ Devis toiture Bordeaux gratuit sous 24h ★ Démoussage, nettoyage, réparation, réfection, zinguerie ✓ Sans engagement ✓ Couvreur depuis 2005 ✓ Note 5/5 (54 avis) ☎ 07 68 69 78 48.",
    visibleInNav: true,
    navOrder: 60,
    visibleInFooter: true,
    footerSection: 'entreprise',
    indexable: true,
    sitemapPriority: 0.8,
  },
  {
    slug: 'merci',
    path: '/merci',
    type: 'conversion',
    title: 'Merci',
    seoTitle: 'Merci pour votre demande : Couverture Gironde',
    seoDescription: '',
    indexable: false,
  },

  // ============ LÉGALES ============
  {
    slug: 'mentions-legales',
    path: '/mentions-legales',
    type: 'legal',
    title: 'Mentions légales',
    seoTitle: 'Mentions légales : Couverture Gironde',
    seoDescription:
      'Mentions légales du site couverturegironde.fr : informations éditeur, hébergeur et responsabilité.',
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
  {
    slug: 'politique-confidentialite',
    path: '/politique-confidentialite',
    type: 'legal',
    title: 'Politique de confidentialité',
    seoTitle:
      'Politique de confidentialité : Couverture Gironde',
    seoDescription:
      'Politique de confidentialité du site couverturegironde.fr : traitement des données personnelles, droits RGPD.',
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
  {
    slug: 'cookies',
    path: '/cookies',
    type: 'legal',
    title: 'Cookies',
    seoTitle: 'Politique cookies : Couverture Gironde',
    seoDescription:
      "Politique de gestion des cookies sur couverturegironde.fr : finalités, durée de conservation, gestion de votre consentement et contact pour vos droits RGPD.",
    visibleInFooter: true,
    footerSection: 'legal',
    indexable: true,
    sitemapPriority: 0.3,
  },
];

/**
 * Construit le registre complet, avec validation runtime des invariants critiques.
 * En cas d'incohérence (slug en double, parent inexistant), erreur dès l'import.
 */
function buildRegistry(): PageEntry[] {
  const pages = [...STATIC_PAGES];

  // Validation : slugs uniques
  const seen = new Map<string, PageEntry>();
  for (const p of pages) {
    if (seen.has(p.slug)) {
      throw new Error(`[pages registry] Slug dupliqué : "${p.slug}"`);
    }
    seen.set(p.slug, p);
  }

  // Validation : références cohérentes
  for (const p of pages) {
    if (p.parentSlug && !seen.has(p.parentSlug)) {
      throw new Error(
        `[pages registry] Parent introuvable pour "${p.slug}" : "${p.parentSlug}"`,
      );
    }
    if (p.service && !SERVICES[p.service]) {
      throw new Error(`[pages registry] Service inconnu pour "${p.slug}" : "${p.service}"`);
    }
    if (p.ville && !LOCATIONS[p.ville]) {
      throw new Error(`[pages registry] Ville inconnue pour "${p.slug}" : "${p.ville}"`);
    }
  }

  return pages;
}

export const PAGES: PageEntry[] = buildRegistry();
export const PAGES_BY_SLUG: ReadonlyMap<string, PageEntry> = new Map(
  PAGES.map((p) => [p.slug, p]),
);

/** Slugs réservés aux pages "service-ville" générées dynamiquement.
 *  Pour ajouter une combinaison non listée dans STATIC_PAGES, l'ajouter ici. */
export const GENERATED_SERVICE_VILLE: Array<{
  service: ServiceCategory;
  ville: string;
}> = [
  // Phase 3 : à ajouter au fur et à mesure (1 page/jour)
  // { service: 'demoussage', ville: 'merignac' },
  // { service: 'demoussage', ville: 'pessac' },
  // ...
];
