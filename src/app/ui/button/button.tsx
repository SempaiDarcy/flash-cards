import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { Typography } from '@/app/ui/typography'
import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonVariant = 'link' | 'primary' | 'secondary' | 'tertiary'

type OwnProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariant
}

export type ButtonProps<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>

const ButtonRender = <T extends ElementType = 'button'>(
  { as, children, className, fullWidth, variant = 'primary', ...rest }: ButtonProps<T>,
  ref: Ref<ElementRef<T>>
) => {
  const Component = as ?? ('button' as string)
  const buttonClasses = clsx(s[variant], fullWidth && s.fullWidth, className)

  return (
    <Component className={buttonClasses} ref={ref} {...rest}>
      <Typography as={'span'} variant={variant === 'link' ? 'subtitle1' : 'subtitle2'}>
        {children}
      </Typography>
    </Component>
  )
}

export const Button = forwardRef(ButtonRender) as typeof ButtonRender
