import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup, RadioGroupClasses } from './radio-group'
import { RadioItem } from './slots/radio-group-item'

const radioItemTypeExample = {
  'disabled?': 'string',
  'label?': 'string',
  value: 'string',
}

const radioGroupClasses: RadioGroupClasses = {
  indicator: 'string',
  item: 'string',
  itemWrapper: 'string',
  label: 'string',
  root: 'string',
}

const meta = {
  argTypes: {
    classes: {
      description: `An object containing the names of the classes corresponding to the
      component slots. Provided classnames wil be merged with default slots classnames.`,
      table: {
        defaultValue: { summary: 'undefined' },
        type: {
          detail: JSON.stringify(radioGroupClasses, null, 2),
          summary: 'RadioGroupClasses',
        },
      },
    },

    defaultValue: {
      control: false,
      description: `The value of the radio item that should be checked when initially rendered.
        Use when you do not need to control the state of the radio items.`,
      table: { type: { summary: 'string' } },
    },

    disabled: { table: { type: { summary: 'boolean' } } },

    name: {
      description: `The name of the group.
        Submitted with its owning form as part of a name/value pair.`,
      table: { type: { summary: 'string' } },
    },

    onValueChange: {
      description: `Event handler called when the value changes.`,
      table: { type: { summary: '(value: string) => void' } },
    },

    options: {
      description: `Array of RadioItem objects to map over`,
      table: {
        type: { detail: JSON.stringify(radioItemTypeExample, null, 2), summary: 'RadioItem' },
      },
    },

    orientation: {
      control: { type: 'inline-radio' },
      description: 'Orientation of the radio items',
      options: ['vertical', 'horizontal'],
      table: {
        defaultValue: { summary: 'vertical' },
        type: { summary: 'vertical | horizontal' },
      },
    },

    value: {
      description: `The controlled value of the radio item to check.
        Should be used in conjunction with "onValueChange".`,
      table: { type: { summary: 'string' } },
    },
  },

  args: { disabled: false, orientation: 'vertical' },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

const options: RadioItem[] = [
  { label: 'first item', value: '1' },
  { label: 'second item', value: '2' },
  { disabled: true, label: 'third item', value: '3' },
  { label: 'fourth item', value: '4' },
]

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '1',
    options,
  },
}
