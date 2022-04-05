import { Euler, Vector3 } from '@react-three/fiber'
import { ReactNode } from 'react'

export interface BaseModelProps {
  rotation?: Euler
  position?: Vector3
  scale?: Vector3
  proportionalScale?: number
  children?: ReactNode
  pausedAnimation?: Boolean
  geometry: any
}
