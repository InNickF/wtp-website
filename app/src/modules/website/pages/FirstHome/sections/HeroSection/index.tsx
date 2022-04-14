import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './index.css'

const Marquee = () => {
  const textContainer = useRef<any>()
  const q = gsap.utils.selector(textContainer)
  useEffect(() => {
    gsap.to(textContainer.current, {
      opacity: 1,
      duration: 1,
      delay: 0.7,
      ease: 'Power1.easeInOut'
    })
    gsap.to(q('span'), {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: 0.7,
      ease: 'Power1.easeIn'
    })
  }, [])
  return (
    <div className="marquee">
      <div className="marquee-container">
        <h2 ref={textContainer} className="marquee-container--text">
          <span>Think</span>
          &nbsp;•&nbsp;
          <span>Design</span>
          &nbsp;•&nbsp;
          <span>Test</span>
          &nbsp;•&nbsp;
          <span>Analyze</span>
          &nbsp;•&nbsp;
          <span>Develop</span>
          &nbsp;•&nbsp;
          <span>Innovate</span>
          &nbsp;•&nbsp;
          <span>Automate</span>
          &nbsp;•&nbsp;
          <span>Think</span>
          &nbsp;•&nbsp;
          <span>Design</span>
          &nbsp;•&nbsp;
          <span>Test</span>
          &nbsp;•&nbsp;
          <span>Analyze</span>
          &nbsp;•&nbsp;
          <span>Develop</span>
          &nbsp;•&nbsp;
          <span>Innovate</span>
          &nbsp;•&nbsp;
          <span>Automate</span>
          &nbsp;•&nbsp;
        </h2>
      </div>
    </div>
  )
}

const HeroSection = () => {
  const header = useRef<any>()
  const paragraph = useRef<any>()
  const scrollIndicator = useRef<any>()

  useEffect(() => {
    gsap.to([header.current, paragraph.current, scrollIndicator.current], {
      opacity: 1,
      duration: 1.7,
      delay: 0.7,
      stagger: 0.4,
      ease: 'Porwer1.easeInOut'
    })
  }, [])

  return (
    <section className="hero-section">
      <div>
        <div className="hero-text-container">
          <h1 ref={header} className="hero-display-font">
            We are here to
          </h1>
        </div>
        <Marquee />
        <div className="hero-text-container">
          <p ref={paragraph} className="hero-small-font">
            ideas and decisions to growth <strong>ELION</strong>
          </p>
        </div>
      </div>
      <span ref={scrollIndicator} className="hero-scroll-indicator"></span>
    </section>
  )
}

export default HeroSection
