import { FC, useRef, useEffect } from 'react'
import CloseButton from './components/CloseButton'
import { gsap } from 'gsap'
import './index.css'

interface MobileMenuProps {
  isOpen?: Boolean
  close?: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ children, isOpen, close }) => {
  const menu = useRef<any>()
  const tl = useRef<any>()

  useEffect(() => {
    const timeline = gsap.timeline()
    const q = gsap.utils.selector(menu)
    timeline.add(
      gsap.fromTo(
        menu.current,
        {
          opacity: 0,
          top: '-100%',
          ease: 'Power2.inOut',
          duration: 0.5
        },
        {
          opacity: 1,
          top: 0,
          ease: 'Power2.inOut'
        }
      )
    )
    timeline.add(
      gsap.fromTo(
        [q('.mobile-menu--ghost-text'), q('.mobile-menu-container *')],
        {
          opacity: 0,
          y: -25,
          ease: 'Power2.inOut'
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'Power2.inOut'
        }
      )
    )
    tl.current = timeline
  }, [])

  useEffect(() => {
    isOpen ? tl.current.timeScale(1).play() : tl.current.timeScale(2).reverse()
  }, [isOpen])

  return (
    <nav ref={menu} className="mobile-menu">
      <CloseButton close={close} />
      <span className="mobile-menu--ghost-text"></span>
      <section className="mobile-menu-container">{children}</section>
    </nav>
  )
}

export default MobileMenu
