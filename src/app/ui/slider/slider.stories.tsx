import { Slider } from '@/app/ui/slider/slider'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderStory: Story = {
  args: {
    defaultValue: [2, 10],
    max: 15,
    min: 0,
    step: 1,
  },
}
