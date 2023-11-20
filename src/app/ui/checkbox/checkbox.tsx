import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'

import { FC, forwardRef, useId } from 'react'

import { Typography } from '@/app/ui/typography'
import { CheckedIcon } from '@/icons/checked-icon'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

type CheckboxClassNames = 'icon' | 'indicator' | 'label' | 'root' | 'wrapper'
export type CheckboxClasses = Record<CheckboxClassNames, string>

type CheckboxProps = {
  checked?: boolean
  classes?: CheckboxClasses
  label?: string
} & Omit<RadixCheckboxProps, 'asChild' | 'checked' | 'className'>

// TODO: enable default outline color when checkbox is focus-visible state
export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ classes = {}, label, ...props }, ref) => {
    const id = useId()

    const cls = getClassNames(classes as CheckboxClasses)

    return (
      <div className={cls.wrapper}>
        <RadixCheckbox.Root className={cls.root} id={id} ref={ref} {...props}>
          <span className={s.indicatorWrapper}>
            <RadixCheckbox.Indicator className={cls.indicator}>
              <CheckedIcon />
            </RadixCheckbox.Indicator>
          </span>
        </RadixCheckbox.Root>
        {label && (
          <Typography as={'label'} className={cls.label} htmlFor={id} variant={'body2'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

const getClassNames = (classes: CheckboxClasses, checked?: boolean, disabled?: boolean) => {
  const keys: CheckboxClassNames[] = ['root', 'wrapper', 'icon', 'indicator', 'label']

  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: clsx(
        s[key],
        checked && s[`${key}Checked`],
        disabled && s[`${key}Disabled`],
        classes[key]
      ),
    }),
    {} as CheckboxClasses
  )
}
