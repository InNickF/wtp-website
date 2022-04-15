import { useContext, useEffect, useRef } from 'react'
import TimeLineContext from '@/modules/website/contexts/TimelineProcessesContext'
import Process from './components/Process'
import ButtonPlayer from './components/PlayerButton'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import processesData from '@/modules/website/utils/processesData'
import './index.css'

gsap.registerPlugin(ScrollTrigger)
const ProcessesSection = () => {
  const processes = processesData
  const { timeline, animationSlideDuration, animationEndDuration } =
    useContext(TimeLineContext)
  const loader = useRef<any>()
  const loaderContainer = useRef<any>()

  useEffect(() => {
    gsap.to([loaderContainer.current, '#player-button'], {
      opacity: 1,
      ease: 'Poser2.inOut',
      scrollTrigger: {
        trigger: '.processes-section',
        start: 'top 25%',
        end: '=+100% 25%',
        toggleActions: 'resume pause resume pause'
      }
    })
    processes.forEach((process, index) => {
      timeline.current.add(
        gsap.fromTo(
          loader.current,
          {
            opacity: 1,
            height: 0
          },
          {
            height: '100%',
            opacity: 1,
            duration: 6,
            delay: 1,
            ease: 'Power2.inOut'
          }
        ),
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.fromTo(
          `#${process.id}`,
          {
            opacity: 0,
            display: 'none'
          },
          {
            opacity: 1,
            ease: 'Power2.inOut',
            duration: 1,
            display: 'block'
          }
        ),
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.fromTo(
          `#${process.id} .process--step`,
          {
            opacity: 0,
            x: -15
          },
          {
            opacity: 1,
            x: 0,
            ease: 'Power2.inOut',
            duration: 1
          }
        ),
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.fromTo(
          `#${process.id} .process--name`,
          {
            opacity: 0,
            y: -15
          },
          {
            opacity: 1,
            y: 0,
            delay: 0.25,
            ease: 'Power2.inOut',
            duration: 1.25
          }
        ),
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.fromTo(
          `#${process.id} .process--description`,
          {
            opacity: 0,
            y: 15
          },
          {
            opacity: 1,
            y: 0,
            delay: 0.5,
            ease: 'Power2.inOut',
            duration: 1.5
          }
        ),
        animationSlideDuration(index)
      )
      timeline.current.add(
        gsap.to(
          [
            `#${process.id} .process--description`,
            `#${process.id} .process--name`,
            `#${process.id} .process--step`
          ],
          {
            opacity: 0,
            duration: 0.5
          }
        ),
        animationEndDuration(index)
      )
      timeline.current.add(
        gsap.to(`#${process.id}`, {
          opacity: 0,
          display: 'none',
          duration: 0.5
        }),
        animationEndDuration(index)
      )
      timeline.current.add(
        gsap.to(loader.current, {
          opacity: 0,
          duration: 1
        }),
        animationEndDuration(index)
      )
    })
  }, [])

  return (
    <section id="process" className="processes-section">
      <h2 className="processes-title">Our process</h2>
      <div className="processes-container">
        <div className="player-container">
          <span ref={loaderContainer} className="loader-container">
            <span ref={loader} className="loader-element"></span>
          </span>
          <ButtonPlayer tl={timeline.current} />
        </div>
        {processes.map((process) => (
          <Process key={process.step} {...process} />
        ))}
      </div>
    </section>
  )
}

export default ProcessesSection
