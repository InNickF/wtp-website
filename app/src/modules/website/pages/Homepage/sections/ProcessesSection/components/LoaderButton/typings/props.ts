import { gsap } from 'gsap'

export interface LoaderButtonProps {
  id: string
  tl: gsap.core.Timeline
  to: number
}
