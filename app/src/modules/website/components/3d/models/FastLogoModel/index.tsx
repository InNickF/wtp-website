import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const FastLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/fast-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.fast.geometry}>
        {children}
      </BaseModel>
    )
  }
)
FastLogoModel.displayName = 'FastLogoModel'
export default FastLogoModel
