import React from 'react'
import { Control, FieldPath, useController } from 'react-hook-form'
import { Input } from './index'

type Props<FormType> = {
  // FieldPathを使うことでControlに渡したジェネリクスの型を読み取ってタイプセーフになる
  name: FieldPath<FormType>
  control: Control<FormType>
  type?: 'text' | 'number' | 'password'
  label?: string
  placeholder?: string
  error?: string
}

function InputControl<FormType>({
  name,
  control,
  type = 'text',
  label = '',
  placeholder = '',
  error = '',
}: Props<FormType>): JSX.Element {
  const { field } = useController<FormType>({
    name,
    control,
  })

  return (
    <Input
      name={name}
      type={type}
      inputRef={field.ref}
      onChange={field.onChange}
      value={field.value as string}
      label={label}
      placeholder={placeholder}
      error={error}
      className="input"
    />
  )
}

export default InputControl
