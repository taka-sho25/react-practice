import React from 'react'

import './video.css'

type Props = {
  videoRef: React.MutableRefObject<any>
}

// eslint-disable-next-line jsx-a11y/media-has-caption
export const Video: React.FC<Props> = ({ videoRef }) => <video id="video" ref={videoRef} controls />
