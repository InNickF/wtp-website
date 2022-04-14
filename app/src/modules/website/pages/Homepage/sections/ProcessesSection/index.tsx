import { useEffect, useRef } from 'react'
import Process from './components/Process'
import { ProcessProps } from './components/Process/typings/props'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import './index.css'

gsap.registerPlugin(ScrollTrigger)
const ProcessesSection = () => {
  const processes: Array<ProcessProps> = [
    {
      step: 1,
      id: 'understanding',
      name: 'Understanding',
      description:
        'Usually problems begin with multiple systems, or manual work, limited features or limited data, we turn these pain points into possibles opportunities.'
    },
    {
      step: 2,
      id: 'conceptualization',
      name: 'Conceptualization',
      description:
        'Once we understand the problems, we trace the path to the goals, prepare the team, and start building the solutions.'
    },
    {
      step: 3,
      id: 'data',
      name: 'Data Extraction',
      description:
        'At this point, we begin extracting, transforming, loading and preparing data from multiple systems and software to useful information.'
    },
    {
      step: 4,
      id: 'analytics',
      name: 'Analytics / ML',
      description:
        'From analytics to Machine Learning, we turn data into actions based on strategic information.'
    },
    {
      step: 5,
      id: 'development',
      name: 'Development',
      description:
        'And based on all our research and collected data, we build applications focused on real needs, to transform the final software into innovative tools.'
    }
  ]
  const loader = useRef<any>()
  const loaderContainer = useRef<any>()

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: '.processes-section',
        start: 'top 25%',
        end: '=+100% 25%',
        toggleActions: 'resume pause resume pause'
      }
    })
    gsap.to(loaderContainer.current, {
      opacity: 1,
      ease: 'Poser2.inOut',
      scrollTrigger: {
        trigger: '.processes-section',
        start: 'top 25%',
        end: '=+100% 25%',
        toggleActions: 'resume pause resume pause'
      }
    })
    processes.forEach((process) => {
      tl.addLabel(process.id)
      tl.add(
        gsap.fromTo(
          loader.current,
          {
            opacity: 1,
            height: 0
          },
          {
            height: '100%',
            duration: 6,
            delay: 1,
            ease: 'Power2.inOut'
          }
        ),
        process.id
      )
      tl.add(
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
        process.id
      )
      tl.add(
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
        process.id
      )
      tl.add(
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
        process.id
      )
      tl.add(
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
        process.id
      )
      tl.addLabel(`${process.id}-end`)
      tl.add(
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
        `${process.id}-end`
      )
      tl.add(
        gsap.to(`#${process.id}`, {
          opacity: 0,
          display: 'none',
          duration: 0.5
        }),
        `${process.id}-end`
      )
      tl.add(
        gsap.to(loader.current, {
          opacity: 0,
          duration: 1
        }),
        `${process.id}-end`
      )
    })
  }, [])

  return (
    <section id="process" className="processes-section">
      <h2 className="processes-title">Our process</h2>
      <div className="processes-container">
        <span ref={loaderContainer} className="loader-container">
          <span ref={loader} className="loader-element"></span>
        </span>
        {processes.map((process) => (
          <Process key={process.step} {...process} />
        ))}
      </div>
    </section>
  )
}

export default ProcessesSection
