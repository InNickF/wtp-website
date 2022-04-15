import { Canvas } from '@react-three/fiber'
import { useContextBridge } from '@react-three/drei'
import TimeLineContext from '@/modules/website/contexts/TimelineProcessesContext'
import { BaseCanvasProps } from './typings/props'

const BaseCanvas = ({ children }: BaseCanvasProps) => {
  const ContextBridge = useContextBridge(TimeLineContext)
  return (
    <Canvas
      linear
      flat
      camera={{
        far: 100,
        fov: 75,
        zoom: 1.6
      }}>
      <ContextBridge>{children}</ContextBridge>
    </Canvas>
  )
}

export default BaseCanvas
