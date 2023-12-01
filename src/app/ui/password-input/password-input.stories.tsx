import * as InputStories from '@/app/ui/input/input.stories'
import { Meta, StoryObj } from '@storybook/react'

import { PasswordInput } from './password-input'

const meta = {
  args: {
    disabled: false,
    error: false,
  },
  component: PasswordInput,
  decorators: InputStories.default.decorators,
  tags: ['autodocs'],
  title: 'Components/Inputs/PasswordInput',
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { ...InputStories.Default.args },
}
