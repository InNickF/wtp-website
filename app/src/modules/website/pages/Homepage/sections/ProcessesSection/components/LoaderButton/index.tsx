import { LoaderButtonProps } from './typings/props'
import './index.css'

const LoaderButton = ({ id, tl, to }: LoaderButtonProps) => {
  const jumpTimeline = (): void => {
    tl.seek(to)
  }

  return (
    <button onClick={jumpTimeline} className="loader-button">
      <span id={`${id}-loader-element`} className="loader-element"></span>
    </button>
  )
}

export default LoaderButton
