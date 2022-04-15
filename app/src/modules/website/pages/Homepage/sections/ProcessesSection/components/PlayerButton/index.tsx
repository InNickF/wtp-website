import { useState } from 'react'
import { ButtonPlayerProps } from './typings'
import './index.css'

const ButtonPlayer = ({ tl }: ButtonPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const toggleIsPlaying = () => {
    tl.isActive() ? tl.pause() : tl.resume()
    setIsPlaying(tl.isActive())
  }
  return (
    <button id="player-button">
      {isPlaying && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="player-button"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          onClick={toggleIsPlaying}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {!isPlaying && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="player-button"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          onClick={toggleIsPlaying}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </button>
  )
}

export default ButtonPlayer
