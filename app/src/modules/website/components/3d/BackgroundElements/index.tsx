import { useRef, useState, useMemo } from 'react'
import { MathUtils } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import ReactLogoModel from '@/website/components/3d/models/ReactLogoModel'
import VueLogoModel from '../models/VueLogoModel'
import DjangoLogoModel from '../models/DjangoLogoModel'
import FigmaLogoModel from '../models/FigmaLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import AWSLogoModel from '../models/AWSLogoModel'
import FastLogoModel from '../models/FastLogoModel'
import JSLogoModel from '../models/JSLogoModel'

interface BackgroundElementsProps {
  z: number
}

const BackgroundElements = ({ z }: BackgroundElementsProps) => {
  const ref = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const models = [
    ReactLogoModel,
    VueLogoModel,
    DjangoLogoModel,
    FigmaLogoModel,
    PythonLogoModel,
    AWSLogoModel,
    FastLogoModel,
    JSLogoModel
  ]
  const Model = useMemo(
    () => models[Math.floor(Math.random() * models.length)],
    []
  )
  const [data] = useState({
    x: MathUtils.randFloatSpread(1),
    y: MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  useFrame(() => {
    ref.current.rotation.set(
      (data.rX += 0.0005),
      (data.rY += 0.002),
      (data.rZ += 0.0001)
    )
    ref.current.position.set(width * data.x, (data.y += 0.003), z)
    if (data.y > height / 1.5) {
      data.y = -height / 1.5
    }
    if (ref.current.children[0].scale.x < 1) {
      ref.current.children[0].scale.x = MathUtils.lerp(
        ref.current.children[0].scale.x,
        0.7,
        0.05
      )
      ref.current.children[0].scale.y = MathUtils.lerp(
        ref.current.children[0].scale.y,
        0.7,
        0.05
      )
      ref.current.children[0].scale.z = MathUtils.lerp(
        ref.current.children[0].scale.z,
        0.7,
        0.05
      )
    }
  })

  return <Model ref={ref} matcap scale={[0, 0, 0]} />
}

export default BackgroundElements
