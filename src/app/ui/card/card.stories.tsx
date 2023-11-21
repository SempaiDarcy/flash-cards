import { Card } from '@/app/ui/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    className: {
      description: 'String merged with the default root element class name',
      table: { type: { summary: 'string' } },
    },
    ref: {
      description: 'A ref, forwarded to the root slot of the card component',
      table: { type: { summary: 'Ref<HTMLDivElement' } },
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { style: { height: '500px', width: '400px' } },
}
