import { useThree } from '@react-three/fiber'
import useScrollCamera from '@/modules/website/hooks/useScrollCamera'
import ReactLogoModel from '../models/ReactLogoModel'
import PythonLogoModel from '../models/PythonLogoModel'
import AWSLogoModel from '../models/AWSLogoModel'

const ProcessIcons = () => {
  useScrollCamera()
  const viewport = useThree((state) => state.viewport)
  const responsiveCondition = viewport.width < 9.5
  const proportionalScale = responsiveCondition
    ? viewport.width / 8
    : viewport.width / 15
  const positionElement = responsiveCondition ? 0 : viewport.width / 6
  return (
    <>
      <group position={[0, -5, 0]}>
        <PythonLogoModel
          rotation={[0, -Math.PI / 4, 0]}
          position={[positionElement, 0, 0]}
          proportionalScale={proportionalScale}
        />
        <ReactLogoModel
          rotation={[0, -Math.PI / 4, 0]}
          position={[positionElement - 1, -1, 0]}
          proportionalScale={proportionalScale}
        />
        <AWSLogoModel
          rotation={[0, -Math.PI / 4, 0]}
          position={[positionElement + 1, -0.8, 0]}
          proportionalScale={proportionalScale}
        />
      </group>
    </>
  )
}

export default ProcessIcons
