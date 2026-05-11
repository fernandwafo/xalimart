'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="video-section home-section relative w-full h-[600px] md:h-[700px] overflow-hidden group">
      
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover duration-1000`}
        poster="/media/overlay-video.jpg"
        loop
        muted
        playsInline
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <button 
          onClick={toggleVideo}
          className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white border border-white/30 text-black transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 cursor-pointer group/play z-10"
        >
          {!isPlaying && (
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover/play:animate-none" />
          )}
          
          {isPlaying ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" />
          )}
        </button>
      </div>

    </section>
  )
}