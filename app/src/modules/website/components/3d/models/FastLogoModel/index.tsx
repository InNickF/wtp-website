import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const FastLogoModel = forwardRef(
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
    const { nodes } = useGLTF('/fast-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale}
        matcap={matcap}
        pausedAnimation={pausedAnimation}
        proportionalScale={proportionalScale}
        geometry={nodes.fast.geometry}>
        {children}
      </BaseModel>
    )
  }
)
FastLogoModel.displayName = 'FastLogoModel'
export default FastLogoModel
