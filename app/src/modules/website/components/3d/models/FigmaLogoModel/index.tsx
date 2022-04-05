import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const FigmaLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/figma-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.figma.geometry}>
        {children}
      </BaseModel>
    )
  }
)
FigmaLogoModel.displayName = 'FigmaLogoModel'
export default FigmaLogoModel
