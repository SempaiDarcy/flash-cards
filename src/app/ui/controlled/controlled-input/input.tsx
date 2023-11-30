import { ComponentPropsWithoutRef } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { TextField } from '@/app/ui/text-field'

type UseControllerProps = ReturnType<typeof useController>['field']

type InputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
} & Omit<ComponentPropsWithoutRef<typeof TextField>, keyof UseControllerProps>

export const Input = <T extends FieldValues>({ control, name, ...props }: InputProps<T>) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField {...inputProps} errorMessage={error?.message} ref={ref} {...props} />
}
