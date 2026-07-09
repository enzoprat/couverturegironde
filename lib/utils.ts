import { clsx, type ClassValue } from 'clsx';

/**
 * cn — concaténation conditionnelle de classes (wrapper clsx).
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * toLocatif — tournure « à + ville » grammaticalement correcte.
 *
 * Le nom propre reste inchangé partout où il est autonome (badge, fil
 * d'ariane, sujet de phrase) ; c'est uniquement la préposition qui se contracte
 * avec l'article défini initial :
 *   - « Le Bouscat »   → « au Bouscat »
 *   - « Les Sables »   → « aux Sables »
 *   - « La Teste »     → « à La Teste »   (pas de contraction sur les noms propres)
 *   - « Bordeaux »     → « à Bordeaux »
 *
 * On ne contracte que l'article DÉFINI en tête de nom (« Le »/« Les » suivis
 * d'une espace). « Andernos-les-Bains » n'est donc jamais touché (le « les » y
 * est un composant interne, minuscule et non détaché).
 */
export function toLocatif(villeName: string): string {
  if (/^Le\s+/.test(villeName)) {
    return villeName.replace(/^Le\s+/, 'au ');
  }
  if (/^Les\s+/.test(villeName)) {
    return villeName.replace(/^Les\s+/, 'aux ');
  }
  return `à ${villeName}`;
}

/**
 * deVille — tournure « de + ville » grammaticalement correcte.
 *
 * Même logique de contraction que {@link toLocatif}, appliquée à la préposition
 * « de » :
 *   - « Le Bouscat »   → « du Bouscat »
 *   - « Les Sables »   → « des Sables »
 *   - « La Teste »     → « de La Teste »
 *   - « Bordeaux »     → « de Bordeaux »
 *
 * Seul l'article DÉFINI en tête de nom est contracté ; « Andernos-les-Bains »
 * reste « de Andernos-les-Bains ».
 */
export function deVille(villeName: string): string {
  if (/^Le\s+/.test(villeName)) {
    return villeName.replace(/^Le\s+/, 'du ');
  }
  if (/^Les\s+/.test(villeName)) {
    return villeName.replace(/^Les\s+/, 'des ');
  }
  return `de ${villeName}`;
}

/**
 * slugify minimal — minuscules, sans accents, tirets.
 * Suffisant pour les villes et services.
 */
export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
