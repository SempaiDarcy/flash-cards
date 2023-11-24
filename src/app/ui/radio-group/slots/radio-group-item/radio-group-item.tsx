import { forwardRef, useId } from 'react'

import getClassNames, { ClassesObj } from '@/app/helpers/get-class-names'
import { Typography } from '@/app/ui/typography'
import { RadioCheckedIcon } from '@/icons/radio-checked-icon'
import { RadioUncheckedIcon } from '@/icons/radio-unchecked-icon'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group-item.module.scss'

export type RadioItemSlot = 'indicator' | 'item' | 'itemWrapper' | 'label'
export type RadioItemClasses = ClassesObj<RadioItemSlot>

export type RadioItem = { disabled?: boolean; label?: string; value: string }
type RadioItemProps = {
  classes?: RadioItemClasses
} & RadioItem

// TODO: check all polymorphic components to correct handle refs
// TODO: maybe refactor checkbox. Replace outline with icon putted before indicator slot like in radio item
// TODO: read about ref types for radio item and checkbox. It can replaced with input inside forms!
export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioItemProps>(
  ({ classes, label, ...props }, ref) => {
    const id = useId()
    const cls = getClassNames<RadioItemSlot>(['itemWrapper', 'item', 'indicator', 'label'])(
      s,
      classes
    )

    return (
      <div className={cls.itemWrapper}>
        <RadixRadioGroup.Item className={cls.item} id={id} ref={ref} {...props}>
          <RadioUncheckedIcon className={s.uncheckedIcon} />
          <RadixRadioGroup.Indicator className={cls.indicator}>
            <RadioCheckedIcon />
          </RadixRadioGroup.Indicator>
        </RadixRadioGroup.Item>
        {label && (
          <Typography as={'label'} className={cls.label} htmlFor={id} variant={'body2'}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)
