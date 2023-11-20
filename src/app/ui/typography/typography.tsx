import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = forwardRef(
  <T extends ElementType = 'p'>(
    { as, children, className, variant = 'body1', ...props }: TypographyProps<T>,
    ref: ForwardedRef<ElementRef<T>>
  ) => {
    const Component = as || elementsMap[variant]

    return (
      <Component className={clsx(className, s[variant])} ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

export const elementsMap: Record<TypographyVariant, string> = {
  body1: 'p',
  body2: 'p',
  caption: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'p',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'h5',
  subtitle2: 'h6',
}

export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
