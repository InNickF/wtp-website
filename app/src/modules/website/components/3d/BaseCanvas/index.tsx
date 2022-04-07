import { Canvas } from '@react-three/fiber'
import { BaseCanvasProps } from './typings/props'
const BaseCanvas = ({ children }: BaseCanvasProps) => {
  return (
    <Canvas linear flat camera={{ near: 0.01, far: 110 }}>
      {children}
    </Canvas>
  )
}

export default BaseCanvas
