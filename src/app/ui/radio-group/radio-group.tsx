import type { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group'

import getClassNames, { ClassesObj } from '@/app/helpers/get-class-names'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { RadioGroupItem, RadioItem, RadioItemSlot } from './slots/radio-group-item'

type RadioGroupSlot = 'root' | RadioItemSlot
export type RadioGroupClasses = ClassesObj<RadioGroupSlot>

type RadioGroupProps = {
  classes?: RadioGroupClasses
  options: RadioItem[]
} & Omit<RadixRadioGroupProps, 'asChild' | 'className'>

export const RadioGroup = ({
  classes,
  disabled,
  options = [],
  orientation = 'vertical',
  ...props
}: RadioGroupProps) => {
  const cls = getClassNames<RadioGroupSlot>(['root', 'item', 'indicator', 'label', 'itemWrapper'])(
    s,
    classes
  )

  return (
    <RadixRadioGroup.Root
      className={cls.root}
      disabled={disabled}
      orientation={orientation}
      {...props}
    >
      {options.map(o => (
        <RadioGroupItem classes={cls} disabled={disabled} key={o.value} {...o} />
      ))}
    </RadixRadioGroup.Root>
  )
}
