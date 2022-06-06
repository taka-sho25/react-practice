import React from 'react'

import { Video } from '@/components/Video'

import { useShaka } from '..'
import './container.css'

export const Shaka: React.FC = () => {
  const { videoRef } = useShaka()

  return (
    <div className="video-container">
      <Video videoRef={videoRef} />
    </div>
  )
}
