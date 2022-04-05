import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const AWSLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/aws-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.aws.geometry}>
        {children}
      </BaseModel>
    )
  }
)
AWSLogoModel.displayName = 'AWSLogoModel'
export default AWSLogoModel
