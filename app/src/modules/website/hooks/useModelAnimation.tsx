import { useFrame } from '@react-three/fiber'
import { Ref } from 'react'

interface UseAnimationProps {
  active?: Boolean
  model: Ref<any>
}

const useModelAnimation = ({ active = true, model }: UseAnimationProps) => {
  useFrame((state) => {
    if (active) {
      const time = state.clock.elapsedTime
      model.current.rotation.x = Math.cos(time) / 10
      model.current.rotation.y = Math.sin(time / 2) / 2
      model.current.rotation.z = Math.sin(time / 1.5) / 20
      model.current.position.y = Math.sin(time / 1.5) / 10
    }
  })
}

export default useModelAnimation
