import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'sm' | 'md' | 'lg';

type SharedProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonElementProps = SharedProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof SharedProps | 'children'
  > & {
    href?: undefined;
  };

type AnchorElementProps = SharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof SharedProps | 'children' | 'href'
  > & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-md)] transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terre)] focus-visible:ring-offset-2';

const variantClasses: Record<Variant, string> = {
  // Bg terre-600 (#A8421E) sur Pierre → ratio AAA (5.76:1) avec texte Pierre.
  // Identité visuelle préservée, accessibilité WCAG AA garantie sur le texte du CTA.
  primary:
    'bg-[var(--color-terre-600)] text-[var(--color-creme)] hover:bg-[var(--color-terre-700)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
  secondary:
    'border-[1.5px] border-[var(--color-ardoise)] text-[var(--color-ardoise)] hover:bg-[var(--color-ardoise)] hover:text-[var(--color-creme)]',
  ghost:
    'text-[var(--color-ardoise)] hover:text-[var(--color-terre-600)] underline-offset-4 hover:underline',
  inverse:
    'border-[1.5px] border-[var(--color-pierre)] text-[var(--color-pierre)] hover:bg-[var(--color-pierre)] hover:text-[var(--color-ardoise)]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.9375rem]',
  md: 'h-12 px-6 text-[1rem]',
  lg: 'h-14 px-7 text-[1.0625rem]',
};

/**
 * Button — polymorphique (button / Next Link / a externe).
 *
 * On extrait STRICTEMENT les props custom avant de spreader vers le DOM, sinon
 * React émet des warnings (iconLeft sur <a>, etc.). Le cast par type ne suffit
 * pas, il faut une destructuration JS réelle.
 */
export function Button(allProps: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconLeft,
    iconRight,
    className,
    children,
    ...maybeAnchorOrButtonProps
  } = allProps;

  const classes = cn(
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  // Lien si href présent
  if ('href' in maybeAnchorOrButtonProps && maybeAnchorOrButtonProps.href) {
    const { href, external, ...anchorProps } =
      maybeAnchorOrButtonProps as AnchorElementProps;
    const isAbsolute =
      Boolean(external) ||
      href.startsWith('http') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('https://wa.me');

    if (isAbsolute) {
      return (
        <a
          {...anchorProps}
          href={href}
          className={classes}
          rel={external ? 'noopener noreferrer' : anchorProps.rel}
          target={external ? '_blank' : anchorProps.target}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  // Bouton natif
  return (
    <button
      {...(maybeAnchorOrButtonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {content}
    </button>
  );
}
