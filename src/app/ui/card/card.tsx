import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

// TODO: think about making card polymorphic to represent an article, section, etc
export const Card = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div className={clsx(s.card, className)} ref={ref} {...props} />
  }
)
