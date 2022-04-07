import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MathUtils } from 'three'
import ReactLogoModel from '@/website/components/3d/models/ReactLogoModel'
import VueLogoModel from '../models/VueLogoModel'
import DjangoLogoModel from '../models/DjangoLogoModel'
import FigmaLogoModel from '../models/FigmaLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import AWSLogoModel from '../models/AWSLogoModel'
import FastLogoModel from '../models/FastLogoModel'
import JSLogoModel from '../models/JSLogoModel'
import { gsap } from 'gsap'

const HeroWrapper = (props) => {
  const outer = useRef()
  const pythonGroup = useRef()
  const jsGroup = useRef()
  const awsGroup = useRef()
  const figmaGroup = useRef()
  const reactGroup = useRef()
  const djangoGroup = useRef()
  const vueGroup = useRef()
  const fastGroup = useRef()
  const { viewport } = useThree()
  const proportionalScale = viewport.height / 2.7

  useFrame(() => {
    outer.current.position.y = MathUtils.lerp(
      outer.current.position.y,
      viewport.height / 7,
      0.05
    )
  })

  useEffect(() => {
    const heroGroups = [
      pythonGroup,
      jsGroup,
      awsGroup,
      figmaGroup,
      reactGroup,
      djangoGroup,
      vueGroup,
      fastGroup
    ]
    const tl = gsap.timeline({ repeat: -1, paused: true })
    const position = '-=2.2'
    heroGroups.forEach((e, i) => {
      if (i !== 0) {
        tl.add(
          gsap.to(e.current.rotation, {
            x: `+=${Math.PI}`,
            z: 0,
            duration: 2,
            ease: 'power2.inOut'
          }),
          position
        )
      }
      tl.add(
        gsap.to(e.current.rotation, {
          x: `+=${Math.PI}`,
          z: 'random(-1,1)',
          duration: 2,
          ease: 'power2.inOut',
          delay: 2.5
        })
      )
    })
    tl.add(
      gsap.to(heroGroups[0].current.rotation, {
        x: `+=${Math.PI}`,
        z: 0,
        duration: 2,
        ease: 'power2.inOut'
      }),
      position
    )
    tl.play()
  }, [])

  return (
    <group ref={outer} {...props} position={[0, viewport.height, 0]}>
      <group ref={pythonGroup} position={[0, 3.5, 0]} rotation={[0, 0, 0]}>
        <PythonLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={jsGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <JSLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={awsGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <AWSLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={figmaGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <FigmaLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={reactGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <ReactLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group
        ref={djangoGroup}
        position={[0, 3.5, 0]}
        rotation={[Math.PI, 0, 0]}>
        <DjangoLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={vueGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <VueLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
      <group ref={fastGroup} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <FastLogoModel
          proportionalScale={proportionalScale}
          position={[0, -3.5, 0]}
        />
      </group>
    </group>
  )
}

export default HeroWrapper
