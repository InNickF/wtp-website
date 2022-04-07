import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const VueLogoModel = forwardRef(
  (
    {
      children,
      proportionalScale,
      position,
      scale,
      rotation,
      matcap,
      pausedAnimation
    }: LogoModelProps,
    ref: any
  ) => {
    const { nodes } = useGLTF('/vue-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        rotation={rotation}
        scale={scale}
        matcap={matcap}
        pausedAnimation={pausedAnimation}
        geometry={nodes.Vue.geometry}>
        {children}
      </BaseModel>
    )
  }
)
VueLogoModel.displayName = 'VueLogoModel'
export default VueLogoModel
