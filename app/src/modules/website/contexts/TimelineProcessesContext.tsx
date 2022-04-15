import { useRef, createContext, FC, useEffect } from 'react'
import { gsap } from 'gsap'
import processesData from '../utils/processesData'

const TimeLineContext = createContext({})

export const TimelineProcessesContextProvider: FC = ({ children }) => {
  const animationSlideDuration = (index: number) => index * 8
  const animationEndDuration = (index: number) => index * 8 + 7
  const timeline = useRef(
    gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: '.processes-section',
        start: 'top 25%',
        end: '=+100% 25%',
        toggleActions: 'resume pause resume pause'
      }
    })
  )
  useEffect(() => {
    processesData.forEach((process, index) => {
      timeline.current.addLabel(process.id)
      timeline.current.addLabel(`${process.id}-end`)
    })
  }, [])

  return (
    <TimeLineContext.Provider
      value={{ timeline, animationSlideDuration, animationEndDuration }}>
      {children}
    </TimeLineContext.Provider>
  )
}

export default TimeLineContext
