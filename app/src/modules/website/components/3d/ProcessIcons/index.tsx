import { useThree } from '@react-three/fiber'
import useScrollCamera from '@/modules/website/hooks/useScrollCamera'
import ReactLogoModel from '../models/ReactLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import AWSLogoModel from '../models/AWSLogoModel'

const ProcessIcons = () => {
  useScrollCamera()
  const viewport = useThree((state) => state.viewport)
  const camera = useThree((state) => state.camera)

  const { width } = viewport.getCurrentViewport(camera, [
    camera.position.x,
    camera.position.y,
    0
  ])

  const responsiveCondition = width < 9.3
  const proportionalScale = responsiveCondition ? 0.6 : 1
  const positionX = responsiveCondition ? 0 : width / 6.5
  const positionElements = [
    [positionX, responsiveCondition ? 0.75 : 0, 0],
    [positionX - 0.7, -1.2, 0],
    [positionX + 0.7, -1.2, 0]
  ] as any
  const rotation = [0, responsiveCondition ? 0 : -Math.PI / 4, 0] as any

  return (
    <>
      <group position={[0, responsiveCondition ? -5 : -4.7, 0]}>
        <PythonLogoModel
          rotation={rotation}
          position={positionElements[0]}
          proportionalScale={proportionalScale}
        />
        <ReactLogoModel
          rotation={rotation}
          position={positionElements[1]}
          proportionalScale={proportionalScale}
        />
        <AWSLogoModel
          rotation={rotation}
          position={positionElements[2]}
          proportionalScale={proportionalScale}
        />
      </group>
    </>
  )
}

export default ProcessIcons
