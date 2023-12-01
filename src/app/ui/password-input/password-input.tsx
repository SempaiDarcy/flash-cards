import { ElementRef, forwardRef, useState } from 'react'

import getClassNames, { ClassesObj } from '@/app/helpers/get-class-names'
import { Input, InputAdornment, InputProps, InputSlot, InputSlotModifier } from '@/app/ui/input'
import { EyeIcon } from '@/icons/eye-icon'
import { EyeOffIcon } from '@/icons/eye-off-icon'

import s from './password-input.module.scss'

type PasswordInputSlot = 'button' | 'eyeIcon' | InputSlot
export type PasswordInputClasses = ClassesObj<PasswordInputSlot, InputSlotModifier>

type OwnProps = {
  classes?: PasswordInputClasses
}

type PasswordInputProps = OwnProps & Omit<InputProps, 'type' | keyof OwnProps>

export const PasswordInput = forwardRef<ElementRef<'input'>, PasswordInputProps>(
  ({ classes, disabled, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const cls = getClassNames(['root', 'input', 'button', 'eyeIcon'] as PasswordInputSlot[], {
      disabled,
      error,
    })(s, classes)
    const Icon = showPassword ? EyeOffIcon : EyeIcon

    return (
      <Input
        classes={cls}
        disabled={disabled}
        endAdornment={
          <InputAdornment position={'end'}>
            <button className={cls.button} onClick={() => setShowPassword(prev => !prev)}>
              {<Icon className={cls.eyeIcon} />}
            </button>
          </InputAdornment>
        }
        error={error}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
    )
  }
)
