import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const VideoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'

export const useHls = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = VideoSrc
      } else if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(VideoSrc)
        hls.attachMedia(videoRef.current)
      }
    }
  }, [])

  return {
    VideoSrc,
    videoRef,
  }
}
