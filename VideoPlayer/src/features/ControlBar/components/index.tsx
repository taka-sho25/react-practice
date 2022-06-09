import React from 'react'

import { PlayButton } from '@/components/PlayButton'
import { PauseButton } from '@/components/PauseButton'
import { Time } from '@/components/Time'
import { useControlBar } from '..'
import './control-bar.css'

type Props = {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>
}

export const ControlBar: React.FC<Props> = ({ videoRef }) => {
  console.log('control bar')
  const { isPlaying, currentTime, totalTime, onPause, onPlay } = useControlBar(videoRef)

  return (
    <div className="control-bar">
      <div className="contents">
        <div className="contents-left">
          <div className="button">
            {isPlaying ? <PauseButton onClick={onPause} /> : <PlayButton onClick={onPlay} />}
          </div>
          <div className="time">
            <Time currentTime={currentTime} totalTime={totalTime} />
          </div>
        </div>
        <div className="contents-right">right</div>
      </div>
      <div className="timer">timer</div>
    </div>
  )
}
