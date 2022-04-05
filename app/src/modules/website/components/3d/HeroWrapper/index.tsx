import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import ReactLogoModel from '@/website/components/3d/models/ReactLogoModel'
import VueLogoModel from '../models/VueLogoModel'
import DjangoLogoModel from '../models/DjangoLogoModel'
import FigmaLogoModel from '../models/FigmaLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import AWSLogoModel from '../models/AWSLogoModel'
import FastLogoModel from '../models/FastLogoModel'
import JSLogoModel from '../models/JSLogoModel'

const HeroWrapper = (props) => {
  const outer = useRef()
  useFrame(() => {
    outer.current.position.y = MathUtils.lerp(outer.current.position.y, 0, 0.05)
  })
  const proportionalScale = 5
  return (
    <group ref={outer} {...props} position={[0, 2, 0]}>
      <ReactLogoModel />
      <VueLogoModel position={[2, 0, 0]} />
      <DjangoLogoModel position={[4, 0, 0]} />
      <FigmaLogoModel position={[-2, 0, 0]} />
      <PythonLogoModel position={[-4, 0, 0]} />
      <AWSLogoModel position={[0, 2, 0]} />
      <FastLogoModel position={[0, -2, 0]} />
      <JSLogoModel position={[2, -2, 0]} />
    </group>
  )
}

export default HeroWrapper
