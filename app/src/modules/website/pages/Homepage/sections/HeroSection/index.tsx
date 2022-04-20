import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './index.css'

const HeroSection = () => {
  const header = useRef<any>()

  useEffect(() => {
    gsap.fromTo(
      header.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.7,
        delay: 0.7,
        ease: 'Porwer1.easeInOut'
      }
    )
    const q = gsap.utils.selector(header)
    const tl = gsap.timeline({ repeat: -1 })
    q('.hero-display-font').forEach((e) => {
      tl.add(
        gsap.fromTo(
          e,
          {
            y: 25,
            opacity: 0,
            display: 'none'
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            display: 'block',
            ease: 'power2.inOut'
          }
        )
      )
      tl.add(
        gsap.to(e, {
          y: -25,
          opacity: 0,
          duration: 1,
          delay: 4,
          display: 'none',
          ease: 'power2.inOut'
        })
      )
    })
    tl.play()
  }, [])

  return (
    <>
      <section ref={header} className="hero-section">
        <h1 className="hero-display-font">
          We build technology first companies
        </h1>
        <h2 className="hero-display-font">We translate data into insights</h2>
        <h2 className="hero-display-font">
          We augment decision making with algorithms
        </h2>
        <h2 className="hero-display-font">
          We transform processes through automation
        </h2>
        <h2 className="hero-display-font">
          We develop creative and scalable systems
        </h2>
        <h2 className="hero-display-font">We think and design solutions</h2>
      </section>
    </>
  )
}

export default HeroSection
