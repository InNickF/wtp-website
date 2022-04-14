import { useThree } from '@react-three/fiber'
import BackgroundElements from '../BackgroundElements'

const FooterIcons = () => {
  const viewport = useThree((state) => state.viewport)
  const camera = useThree((state) => state.camera)
  const { width } = viewport.getCurrentViewport(camera, [
    camera.position.x,
    camera.position.y,
    0
  ])
  const responsiveCondition = width < 6
  const count = responsiveCondition ? 6 : 16
  return (
    <>
      <group position={[0, -10, 0]}>
        {Array.from({ length: count }, (_, i) => (
          <BackgroundElements key={i} z={(-i - 5) * 0.625} />
        ))}
      </group>
    </>
  )
}

export default FooterIcons
