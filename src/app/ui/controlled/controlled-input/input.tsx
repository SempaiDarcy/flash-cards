import { Control, FieldValues, useController, Path } from 'react-hook-form'
import { ComponentPropsWithoutRef } from 'react'
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
    name,
    control,
  })

  return <TextField {...inputProps} ref={ref} errorMessage={error?.message} {...props} />
}
