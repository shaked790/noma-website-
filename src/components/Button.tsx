import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

/*
 * `link` is typographic rather than a control, so it opts out of padding and
 * touch-target sizing and carries the editorial underline explicitly — anchors
 * no longer inherit one from the base layer.
 *
 * Note that `display` cannot be overridden through `className`: these bases set
 * inline-flex/inline, and competing utilities in the same layer are resolved by
 * stylesheet order rather than class order. Wrap the button to hide it per
 * breakpoint instead of passing `hidden lg:inline-flex`.
 */
const controlBase =
  'group inline-flex items-center justify-center gap-2 rounded-sm text-center align-middle min-h-(--tap-target-min) transition-[color,background-color,border-color] duration-(--duration-fast) ease-out disabled:pointer-events-none disabled:opacity-50'

const linkBase =
  'group inline text-start link-underline transition-colors duration-(--duration-fast) ease-out disabled:pointer-events-none disabled:opacity-50'

const variantClass: Record<ButtonVariant, string> = {
  solid:
    'hairline bg-ink border-ink text-ink-inverse hover:bg-accent-strong hover:border-accent-strong',
  /*
   * border-ink-muted, not border-border-strong: the outline button's edge is its
   * only affordance, and stone-400 sits at 1.78:1 against the ivory surface,
   * under the 3:1 WCAG asks of a control boundary. ink-muted reaches 5.08:1.
   */
  outline: 'hairline border-ink-muted text-ink hover:border-ink hover:text-accent',
  ghost: 'text-ink hover:text-accent',
  link: 'text-ink hover:text-accent',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body-sm',
  lg: 'px-8 py-4 text-body',
}

const inverseVariantClass: Partial<Record<ButtonVariant, string>> = {
  outline:
    'hairline border-ink-inverse text-ink-inverse hover:bg-ink-inverse hover:text-ink hover:border-ink-inverse',
  ghost: 'text-ink-inverse hover:text-ink-inverse',
  link: 'text-ink-inverse hover:text-ink-inverse',
}

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  /*
   * For use on a dark photograph. Solid is already dark-on-ivory and stays put;
   * outline, ghost and link swap to ivory so they remain visible over media.
   */
  inverse?: boolean
  className?: string
  children?: ReactNode
}

type ElementProps =
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>)
  | ({ href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>)

export type ButtonProps = SharedProps & ElementProps

export function Button({
  variant = 'solid',
  size = 'md',
  inverse = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    variant === 'link' ? linkBase : cn(controlBase, sizeClass[size]),
    inverse && inverseVariantClass[variant]
      ? inverseVariantClass[variant]
      : variantClass[variant],
    className,
  )

  if (rest.href !== undefined) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button {...buttonProps} type={buttonProps.type ?? 'button'} className={classes}>
      {children}
    </button>
  )
}
