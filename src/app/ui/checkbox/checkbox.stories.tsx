import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {
    defaultChecked: { table: { disable: true } },
    onCheckedChange: { action: 'onCheckedChange' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultChecked: true, disabled: false },
}

export const WithLabel = {
  args: {
    ...Default.args,
    label: 'Lorem ipsum dolor.',
  },
}
