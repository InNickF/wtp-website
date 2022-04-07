import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const PythonLogoModel = forwardRef(
  (
    {
      children,
      proportionalScale,
      position,
      scale,
      rotation,
      pausedAnimation,
      matcap
    }: LogoModelProps,
    ref: any
  ) => {
    const { nodes } = useGLTF('/python-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        rotation={rotation}
        matcap={matcap}
        scale={scale}
        pausedAnimation={pausedAnimation}
        geometry={nodes.Cube.geometry}>
        {children}
      </BaseModel>
    )
  }
)
PythonLogoModel.displayName = 'PythonLogoModel'
export default PythonLogoModel
