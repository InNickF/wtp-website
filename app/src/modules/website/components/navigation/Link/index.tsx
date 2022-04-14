import NextLink from 'next/link'
import { FC, useRef, useEffect } from 'react'
import { CustomLinkProps } from './typing/props'
import { gsap } from 'gsap'
import './index.css'

const Link: FC<CustomLinkProps> = ({
  anchor = false,
  _blank = false,
  children,
  href,
  className,
  ...props
}) => {
  const Anchor = anchor || _blank ? 'a' : NextLink
  const underline = useRef<any>()
  const timeline = useRef<any>()

  useEffect(() => {
    const tl = gsap.timeline({ paused: true })
    tl.fromTo(
      underline.current,
      {
        width: '0%',
        left: '0%'
      },
      {
        width: '100%',
        duration: 0.3,
        immediateRender: false
      }
    )
    tl.add('midway')
    tl.fromTo(
      underline.current,
      {
        width: '100%',
        left: '0%'
      },
      {
        width: '0%',
        left: '100%',
        duration: 0.3,
        immediateRender: false
      }
    )
    timeline.current = tl
  }, [])

  function enterAnimation() {
    timeline.current.tweenFromTo(0, 'midway')
  }

  function leaveAnimation() {
    timeline.current.play()
  }

  return (
    <Anchor
      className="wpt-link"
      {...props}
      href={href as any}
      target={_blank ? '_blank' : undefined}>
      <span
        className={className}
        onMouseEnter={enterAnimation}
        onMouseLeave={leaveAnimation}>
        {children}
      </span>
      <span ref={underline} className="link-underline"></span>
    </Anchor>
  )
}

export default Link
