import React from 'react'
import './button.css'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({
  type = 'button',
  disabled = false,
  onClick,
  children = '',
}) => (
  <button type={type} disabled={disabled} onClick={onClick} className="button">
    {children}
  </button>
)
