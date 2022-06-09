import React from 'react'

import './time.css'

type Props = {
  currentTime: string
  totalTime: string
}

export const Time: React.FC<Props> = React.memo(({ currentTime, totalTime }: Props) => (
  <div className="time">
    <span className="current-time">{currentTime}</span>:
    <span className="total-time">{totalTime}</span>
  </div>
))
