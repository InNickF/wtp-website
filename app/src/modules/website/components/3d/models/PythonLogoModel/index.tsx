import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const PythonLogoModel = forwardRef(
  ({ children, ...props }: LogoModelProps, ref: any) => {
    const { nodes } = useGLTF('/python-transformed.glb')
    return (
      <BaseModel ref={ref} {...props} geometry={nodes.Cube.geometry}>
        {children}
      </BaseModel>
    )
  }
)
PythonLogoModel.displayName = 'PythonLogoModel'
export default PythonLogoModel
