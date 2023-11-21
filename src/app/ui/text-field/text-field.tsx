import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { EyeIcon } from '@/icons/eye-icon'
import { EyeOffIcon } from '@/icons/eye-off-icon'
import { SearchIcon } from '@/icons/search-icon'
import clsx from 'clsx'

import s from './text-field.module.scss'

type InputProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  type?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  disabled,
  errorMessage,
  label,
  onChange,
  onValueChange,
  placeholder,
  type,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const isPasswordButtonShow = type === 'password'
  const isSearchButtonShow = type === 'search'

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange && onValueChange(e.target.value)
  }
  const classNames = {
    errorLabel: s.errorLabel,
    field: clsx(
      s.field,
      errorMessage && s.error,
      isSearchButtonShow ? s.fieldWithSearch : s.fieldWithOutSearch,
      disabled && s.disabledLabel
    ),
    fieldContainer: s.fieldContainer,
    label: clsx(s.label, disabled ? s.disabledLabel : s.label),
    root: s.root,
    showPassword: s.showPassword,
    showSearch: s.showSearch,
  }

  return (
    <div className={classNames.root}>
      <span className={classNames.label}>{label}</span>
      <div className={classNames.fieldContainer}>
        <input
          className={classNames.field}
          disabled={disabled}
          onChange={onChangeHandler}
          placeholder={errorMessage ? errorMessage : placeholder}
          type={showPassword ? 'text' : type}
        />
        {isPasswordButtonShow && (
          <button
            className={classNames.showPassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
        {isSearchButtonShow && (
          <div>
            <button className={classNames.showSearch}>
              <SearchIcon />
            </button>
          </div>
        )}
      </div>
      <div>
        <span className={classNames.errorLabel}>{errorMessage}</span>
      </div>
    </div>
  )
}
