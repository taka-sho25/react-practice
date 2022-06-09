import React from 'react'

import './pause-button.css'

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const PauseButton: React.FC<Props> = React.memo(({ onClick }: Props) => {
  console.log('pause button')
  return <input type="button" className="pause" onClick={onClick} />
})
