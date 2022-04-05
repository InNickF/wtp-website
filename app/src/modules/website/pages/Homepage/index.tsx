import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Leva } from 'leva'
import Head from '@/commons/components/layout/Head'
import type { NextPage } from 'next'
import './index.css'
import NavbarContainer from '@/commons/components/navigation/NavbarContainer'
import Scene from '@/website/components/3d/Scene'

const Home: NextPage = () => {
  const grid = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(grid)

  useEffect(() => {
    gsap.to(q('.card'), {
      opacity: 1,
      stagger: 0.2,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
    gsap.to('.heading-animation', {
      opacity: 1,
      stagger: 0.35,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, [])

  return (
    <>
      <Head />
      <Scene />
      <NavbarContainer />
      <Leva />
    </>
  )
}

export default Home
