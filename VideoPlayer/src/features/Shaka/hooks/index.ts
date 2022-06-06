import { useEffect, useRef } from 'react'
import ShakaPlayer from 'shaka-player'

const VideoSrc = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'

export const useShaka = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const onError = (error: any) => {
    // Log the error.
    console.error('Error code', error.code, 'object', error)
  }

  const onErrorEvent = (event: any) => {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail)
  }

  const initPlayer = async () => {
    const video = videoRef.current
    const player = new ShakaPlayer.Player(video)
    // Listen for error events.
    player.addEventListener('error', onErrorEvent)

    // Try to load a manifest.
    // This is an asynchronous process.
    try {
      await player.load(VideoSrc)
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!')
    } catch (e) {
      // onError is executed if the asynchronous load fails.
      onError(e)
    }
  }

  const init = () => {
    ShakaPlayer.polyfill.installAll()
    if (ShakaPlayer.Player.isBrowserSupported()) {
      initPlayer()
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!')
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      init()
    }
  }, [])

  return {
    videoRef,
  }
}
