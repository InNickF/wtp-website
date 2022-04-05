import { gsap } from 'gsap'
import { useEffect, useState, Ref } from 'react'

export const useStartAnimation = (navigationRef: Ref<HTMLElement>) => {
  const [tween, setTween] = useState<any>(null)
  useEffect(() => {
    setTween(
      gsap.to(navigationRef.current, {
        opacity: 1,
        ease: 'Power1.easeInOut',
        duration: 1.8
      })
    )
  }, [])

  return tween
}
