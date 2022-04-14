import { Suspense } from 'react'
import BaseCanvas from '../BaseCanvas'
import FooterIcons from '../FooterIcons'
import ProcessIcons from '../ProcessIcons'
import './index.css'

const Scene = () => {
  return (
    <section className="renderer">
      <BaseCanvas>
        <Suspense fallback={null}>
          <ProcessIcons />
          <FooterIcons />
        </Suspense>
      </BaseCanvas>
    </section>
  )
}

export default Scene
