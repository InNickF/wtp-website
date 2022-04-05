import BaseCanvas from '../BaseCanvas'
import { Suspense } from 'react'
import HeroWrapper from '../HeroWrapper'
import './index.css'
const Scene = () => {
  return (
    <section className="renderer">
      <BaseCanvas>
        <Suspense fallback={null}>
          <HeroWrapper />
        </Suspense>
      </BaseCanvas>
    </section>
  )
}

export default Scene
