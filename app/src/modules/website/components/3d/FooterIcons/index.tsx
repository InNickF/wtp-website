import { useThree } from '@react-three/fiber'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import BackgroundElements from '../BackgroundElements'

const FooterIcons = () => {
  const viewport = useThree((state) => state.viewport)
  const responsiveCondition = viewport.width < 9.5

  const count = responsiveCondition ? 5 : 12
  return (
    <>
      <group position={[0, -10, 0]}>
        {Array.from({ length: count }, (_, i) => (
          <BackgroundElements key={i} z={(-i - 5) * 0.625} />
        ))}
      </group>
      <EffectComposer>
        <DepthOfField
          target={[0, 0, 0]}
          focalLength={0.1}
          bokehScale={3}
          height={500}
        />
      </EffectComposer>
    </>
  )
}

export default FooterIcons
