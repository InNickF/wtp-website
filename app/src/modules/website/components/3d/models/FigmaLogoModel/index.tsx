import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const FigmaLogoModel = forwardRef(
  (
    {
      children,
      proportionalScale,
      position,
      scale,
      pausedAnimation,
      rotation,
      matcap
    }: LogoModelProps,
    ref: any
  ) => {
    const { nodes } = useGLTF('/figma-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        rotation={rotation}
        scale={scale}
        matcap={matcap}
        pausedAnimation={pausedAnimation}
        geometry={nodes.figma.geometry}>
        {children}
      </BaseModel>
    )
  }
)
FigmaLogoModel.displayName = 'FigmaLogoModel'
export default FigmaLogoModel
