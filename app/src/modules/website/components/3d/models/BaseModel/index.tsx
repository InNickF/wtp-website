import { useRef, forwardRef, useMemo } from 'react'
import GeneralLayerMaterial from '@/website/components/3d/GeneralLayerMaterial'
import useModelAnimation from '@/website/hooks/useModelAnimation'
import { TextureLoader } from 'three'
import { BaseModelProps } from './typings/props'
import { Vector3, useLoader } from '@react-three/fiber'

const BaseModel = forwardRef(
  (
    {
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = [1, 1, 1],
      pausedAnimation = false,
      proportionalScale = 1,
      matcap = false,
      children,
      geometry
    }: BaseModelProps,
    ref: any
  ) => {
    const model = useRef()
    const map = useLoader(TextureLoader, '/matcap.jpg')

    useModelAnimation({ active: !pausedAnimation, model })
    const finalScale = useMemo(() => {
      return (scale as Array<number>).map(
        (vector) => vector * proportionalScale
      )
    }, [scale, proportionalScale]) as Vector3
    return (
      <group ref={ref} position={position} rotation={rotation}>
        <mesh ref={model} geometry={geometry} scale={finalScale}>
          {!matcap && (
            <GeneralLayerMaterial
              proportionalScale={
                proportionalScale === 1
                  ? proportionalScale
                  : proportionalScale / 2
              }
            />
          )}
          {matcap && <meshMatcapMaterial flatShading matcap={map} />}
          {children}
        </mesh>
      </group>
    )
  }
)
BaseModel.displayName = 'BaseModel'
export default BaseModel
