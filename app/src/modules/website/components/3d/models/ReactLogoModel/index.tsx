import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const ReactLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/react-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.react.geometry}>
        {children}
      </BaseModel>
    )
  }
)
ReactLogoModel.displayName = 'ReactLogoModel'
export default ReactLogoModel
