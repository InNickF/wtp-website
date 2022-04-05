import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const JSLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/js-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.js.geometry}>
        {children}
      </BaseModel>
    )
  }
)
JSLogoModel.displayName = 'JSLogoModel'
export default JSLogoModel
