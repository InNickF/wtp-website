import BaseCanvas from '../BaseCanvas'
import { Suspense } from 'react'
import HeroWrapper from '../HeroLogos'
import './index.css'
import BackgroundElements from '../BackgroundElements'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

const Scene = () => {
  const count = 15
  return (
    <section className="renderer">
      <BaseCanvas>
        <Suspense fallback={null}>
          <HeroWrapper />
          {Array.from({ length: count }, (_, i) => (
            <BackgroundElements key={i} z={(-i - 5) * 0.625} />
          ))}
          <EffectComposer>
            <DepthOfField
              target={[0, 0, 0]}
              focalLength={0.1}
              bokehScale={3}
              height={500}
            />
          </EffectComposer>
        </Suspense>
      </BaseCanvas>
    </section>
  )
}

export default Scene
