import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useFrame } from '@react-three/fiber'
import { useRef, memo } from 'react'

const GeneralLayerMaterial = ({ proportionalScale = 1 }) => {
  const ref = useRef<any>()
  useFrame((state) => {
    const time = state.clock.elapsedTime
    const sin = Math.sin(time / 2)
    const cos = Math.cos(time / 2)
    ref.current.layers[0].origin.set(cos * 2, cos * 2, sin * 1.5)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <LayerMaterial ref={ref} toneMapped={false}>
      <Depth
        colorA="#b300d3"
        colorB="black"
        alpha={1}
        mode="normal"
        near={0 * proportionalScale}
        far={2 * proportionalScale}
        origin={[0, 0, 0]}
      />
      <Depth
        colorA="#9000ff"
        colorB="#f7ae55"
        alpha={1}
        mode="add"
        near={0.34 * proportionalScale}
        far={2 * proportionalScale}
        origin={[0, 1, 1]}
      />
      <Depth
        colorA="green"
        colorB="#f7a955"
        alpha={1}
        mode="add"
        near={1.5 * proportionalScale}
        far={4 * proportionalScale}
        origin={[0, 1, -1]}
      />
      <Depth
        colorA="#c532fa"
        colorB="#ff9e62"
        alpha={1}
        mode="overlay"
        near={0.2 * proportionalScale}
        far={1.5 * proportionalScale}
        origin={[1, -1, -1]}
      />
      <Fresnel
        mode="add"
        color="white"
        intensity={0.5}
        power={1.5}
        bias={0.1}
      />
    </LayerMaterial>
  )
}

export default memo(GeneralLayerMaterial, (prev, next) => {
  return true
})
