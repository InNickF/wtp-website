import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const UiIconModel = forwardRef(
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
    const { nodes } = useGLTF('/ui-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        rotation={rotation}
        scale={scale}
        matcap={matcap}
        pausedAnimation={pausedAnimation}
        geometry={nodes.ui.geometry}>
        {children}
      </BaseModel>
    )
  }
)
UiIconModel.displayName = 'UiIconModel'
export default UiIconModel
