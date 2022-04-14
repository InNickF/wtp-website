import { FC } from 'react'
import { CloseButtonProps } from './typings/props'
import './index.css'

const CloseButton: FC<CloseButtonProps> = ({ close }) => {
  return (
    <button className="close-button" onClick={close}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default CloseButton
