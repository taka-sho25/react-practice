import React from 'react'

import './play-button.css'

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const PlayButton: React.FC<Props> = React.memo(({ onClick }: Props) => {
  console.log('pause button')
  return <input type="button" className="play" onClick={onClick} />
})
