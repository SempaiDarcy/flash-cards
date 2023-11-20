import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'

import { FC, useId } from 'react'

import { CheckedIcon } from '@/icons/checked-icon'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

type CheckboxClassNames = 'icon' | 'indicator' | 'label' | 'root' | 'wrapper'
type CheckboxClasses = Record<CheckboxClassNames, string>

type CheckboxProps = {
  checked?: boolean
  classes?: CheckboxClasses
  disabled?: boolean
  label?: string
} & Omit<RadixCheckboxProps, 'checked' | 'className' | 'forceMount'>

export const Checkbox: FC<CheckboxProps> = ({ classes = {}, label, ...props }) => {
  const id = useId()

  const cls = getClassNames(classes as CheckboxClasses)

  return (
    <div className={cls.wrapper}>
      <RadixCheckbox.Root className={cls.root} id={id} {...props}>
        <span className={s.indicatorWrapper}>
          <RadixCheckbox.Indicator className={cls.indicator}>
            <CheckedIcon />
          </RadixCheckbox.Indicator>
        </span>
      </RadixCheckbox.Root>
      {label && (
        <label className={cls.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}

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
