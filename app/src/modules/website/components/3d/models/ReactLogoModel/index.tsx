import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const ReactLogoModel = forwardRef(
  (
    {
      children,
      proportionalScale,
      position,
      rotation,
      scale,
      pausedAnimation,
      matcap
    }: LogoModelProps,
    ref: any
  ) => {
    const { nodes } = useGLTF('/react-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        matcap={matcap}
        rotation={rotation}
        scale={scale}
        pausedAnimation={pausedAnimation}
        geometry={nodes.react.geometry}>
        {children}
      </BaseModel>
    )
  }
)
ReactLogoModel.displayName = 'ReactLogoModel'
export default ReactLogoModel
