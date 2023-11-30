import { useState } from 'react'

import { TextField } from '@/app/ui/text-field'
import * as SliderRadixUI from '@radix-ui/react-slider'

import s from './slider.module.scss'
type SliderProps = {
  defaultValue: number[]
  max: number
  min: number
  step: number
}
export const Slider = ({ defaultValue, max, min, step }: SliderProps) => {
  const [values, setValues] = useState<number[]>(defaultValue)

  const handleSliderChange = (value: number[]) => {
    setValues(value)
  }

  return (
    <div className={s.container}>
      <TextField className={s.input} isModal value={values[0].toString()} />
      <SliderRadixUI.Root
        className={s.root}
        defaultValue={defaultValue}
        max={max}
        min={min}
        onValueChange={handleSliderChange}
        step={step}
      >
        <SliderRadixUI.Track className={s.track}>
          <SliderRadixUI.Range className={s.range} />
        </SliderRadixUI.Track>
        <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb} />
        <SliderRadixUI.Thumb aria-label={'Volume'} className={s.thumb} />
      </SliderRadixUI.Root>
      <TextField className={s.input} isModal max={max} value={values[1].toString()} />
    </div>
  )
}
