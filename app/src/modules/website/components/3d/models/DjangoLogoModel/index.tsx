import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const DjLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/dj-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.dj.geometry}>
        {children}
      </BaseModel>
    )
  }
)
DjLogoModel.displayName = 'DjLogoModel'
export default DjLogoModel
