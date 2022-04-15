import useScrollCamera from '@/modules/website/hooks/useScrollCamera'
import { Suspense } from 'react'
import BaseCanvas from '../BaseCanvas'
import FooterIcons from '../FooterIcons'
import ProcessIcons from '../ProcessIcons'
import './index.css'

const CameraNavigation = () => {
  useScrollCamera()
  return null
}

const Scene = () => {
  return (
    <section className="renderer">
      <BaseCanvas>
        <CameraNavigation />
        <Suspense fallback={null}>
          <ProcessIcons />
          <FooterIcons />
        </Suspense>
      </BaseCanvas>
    </section>
  )
}

export default Scene
