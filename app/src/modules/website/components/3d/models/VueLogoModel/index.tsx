import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const VueLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/vue-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.Vue.geometry}>
        {children}
      </BaseModel>
    )
  }
)
VueLogoModel.displayName = 'VueLogoModel'
export default VueLogoModel
