import React, { useCallback, useEffect, useState } from 'react'

import { defaultImplementation } from '..'

export const useControlBar = (videoRef: React.MutableRefObject<HTMLVideoElement | null>) => {
  const [isPlaying, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState('0:00')
  const [totalTime, setTotalTime] = useState('0:00')

  useEffect(() => {
    videoRef.current?.addEventListener('loadeddata', () => {
      console.log('video', videoRef.current?.duration)
      setTotalTime(defaultImplementation(videoRef.current?.duration ?? 0))
    })

    videoRef.current?.addEventListener('timeupdate', () => {
      setCurrentTime(defaultImplementation(videoRef.current?.currentTime ?? 0))
    })
  }, [videoRef])

  const onPlay = useCallback(() => {
    videoRef.current?.play()
    setPlaying(true)
  }, [videoRef])

  const onPause = useCallback(() => {
    videoRef.current?.pause()
    setPlaying(false)
  }, [videoRef])

  return {
    isPlaying,
    currentTime,
    totalTime,
    onPlay,
    onPause,
  }
}
