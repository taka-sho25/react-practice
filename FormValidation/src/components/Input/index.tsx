import React, { Ref } from 'react'

import './input.css'

type Props = {
  value?: string
  name: string
  type: 'text' | 'number' | 'password'
  label: string
  placeholder: string
  inputRef?: Ref<HTMLInputElement>
  className?: string
  error: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({
  name,
  value = '',
  type,
  placeholder,
  label,
  inputRef,
  className = '',
  error,
  onChange,
}) => (
  <div className="wrap">
    {label && (
      <label htmlFor={name} className="label">
        {label}
      </label>
    )}
    <input
      id={name}
      ref={inputRef}
      value={value}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
    {error && <span className="error">{error}</span>}
  </div>
)
