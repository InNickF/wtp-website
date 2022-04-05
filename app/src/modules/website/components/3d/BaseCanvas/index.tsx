import { Canvas } from '@react-three/fiber'
import { BaseCanvasProps } from './typings/props'
const BaseCanvas = ({ children }: BaseCanvasProps) => {
  return (
    <Canvas linear flat>
      {children}
    </Canvas>
  )
}

export default BaseCanvas
