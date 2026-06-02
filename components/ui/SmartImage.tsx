import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  resolveHeroImage,
  resolveRealisationImage,
  resolveServiceImage,
  type AspectRatio,
  type ResolvedImage,
} from '@/lib/images';

type CommonProps = {
  alt?: string;
  className?: string;
  /** Aspect ratio du container. Le placeholder SVG s'aligne automatiquement. */
  aspect?: AspectRatio;
  /** Charger en priorité (above the fold). */
  priority?: boolean;
  /** Indique la taille rendue pour next/image. */
  sizes?: string;
};

type ServiceImageProps = CommonProps & {
  variant: 'service';
  imageSlug: string;
  serviceName: string;
};

type HeroImageProps = CommonProps & {
  variant: 'hero';
  slug: string;
};

type RealisationImageProps = CommonProps & {
  variant: 'realisation';
  slug: string;
};

type SmartImageProps =
  | ServiceImageProps
  | HeroImageProps
  | RealisationImageProps;

const aspectMap: Record<NonNullable<CommonProps['aspect']>, string> = {
  square: 'aspect-square',
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
  '3/2': 'aspect-[3/2]',
  '5/4': 'aspect-[5/4]',
};

function resolve(
  props: SmartImageProps,
  aspect: AspectRatio,
): ResolvedImage {
  switch (props.variant) {
    case 'service':
      return resolveServiceImage(props.imageSlug, props.serviceName, aspect);
    case 'hero':
      return resolveHeroImage(props.slug, props.alt ?? props.slug, aspect);
    case 'realisation':
      return resolveRealisationImage(props.slug, props.alt ?? props.slug, aspect);
  }
}

/**
 * SmartImage — composant unique pour TOUTES les images du site.
 *
 * Résout la source au build :
 *   1. Photo réelle si présente dans /public/images/{categorie}/{slug}.webp
 *   2. Sinon, placeholder SVG brandé servi par /api/placeholder/...
 *
 * Avantages :
 *  - jamais d'image cassée
 *  - remplacer une photo = drop d'un fichier, aucune ligne de code
 *  - placeholder léger, brandé, scalable
 *  - alt text par défaut intelligent
 */
export function SmartImage(props: SmartImageProps) {
  const {
    alt,
    className,
    aspect = '4/3',
    priority = false,
    sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  } = props;

  const resolved = resolve(props, aspect);
  const finalAlt = alt ?? resolved.defaultAlt;
  const isSvgPlaceholder = !resolved.isReal;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-lg)]',
        aspectMap[aspect],
        'bg-[var(--color-gris-100)]',
        className,
      )}
    >
      <Image
        src={resolved.src}
        alt={finalAlt}
        fill
        sizes={sizes}
        priority={priority}
        // SVG : on désactive l'optim Next.js (déjà vectoriel et minimal)
        unoptimized={isSvgPlaceholder}
        className="object-cover"
      />
    </div>
  );
}
