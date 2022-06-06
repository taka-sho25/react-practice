import React from 'react'

import { Video } from '@/components/Video'

import { useHls } from '..'
import './container.css'

export const Hls: React.FC = () => {
  const { videoRef } = useHls()

  return (
    <div className="video-container">
      <Video videoRef={videoRef} />
    </div>
  )
}
