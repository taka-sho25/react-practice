import React from 'react'

import { Video } from '@/components/Video'
import { ControlBar } from '@/features/ControlBar/components'

import { useHls } from '..'
import './container.css'

export const Hls: React.FC = () => {
  console.log('HLS container')
  const { videoRef } = useHls()

  return (
    <div className="video-container">
      <Video videoRef={videoRef} />
      <div className="video-control-bar">
        <ControlBar videoRef={videoRef} />
      </div>
    </div>
  )
}
