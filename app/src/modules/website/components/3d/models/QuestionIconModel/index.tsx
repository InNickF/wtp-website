import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'
import { LogoModelProps } from '@/website/typings/LogoModelsProps'
import BaseModel from '../BaseModel'

const QuestionIconModel = forwardRef(
  (
    {
      children,
      proportionalScale,
      position,
      rotation,
      scale,
      pausedAnimation,
      matcap
    }: LogoModelProps,
    ref: any
  ) => {
    const { nodes } = useGLTF('/question-transformed.glb')
    return (
      <BaseModel
        ref={ref}
        proportionalScale={proportionalScale}
        position={position}
        rotation={rotation}
        scale={scale}
        matcap={matcap}
        pausedAnimation={pausedAnimation}
        geometry={nodes.question.geometry}>
        {children}
      </BaseModel>
    )
  }
)
QuestionIconModel.displayName = 'QuestionIconModel'
export default QuestionIconModel
