import { Canvas } from '@react-three/fiber'
import { BaseCanvasProps } from './typings/props'

const BaseCanvas = ({ children }: BaseCanvasProps) => {
  return (
    <Canvas
      linear
      flat
      camera={{
        far: 100,
        fov: 75,
        zoom: 1.6
      }}>
      {children}
    </Canvas>
  )
}

export default BaseCanvas
