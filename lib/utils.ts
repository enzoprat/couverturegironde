import { clsx, type ClassValue } from 'clsx';

/**
 * cn — concaténation conditionnelle de classes (wrapper clsx).
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
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
