import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const useScrollCamera = () => {
  const [scroll] = useState({ y: 0, x: 0 })
  const [renderSizes] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  })

  const parallaxValue = ({
    finalValue,
    currentValue,
    deltaTime,
    intensity = 1
  }) => {
    return (finalValue - currentValue) * intensity * deltaTime
  }

  const scrollCamera = () => {
    scroll.y = -((window.scrollY / renderSizes.y) * 5)
  }

  const setRenderSizes = () => {
    renderSizes.x = window.innerWidth
    renderSizes.y = window.innerHeight
  }

  useEffect(() => {
    setRenderSizes()
    scrollCamera()
    window.addEventListener('scroll', scrollCamera)
    window.addEventListener('resize', setRenderSizes)
    return () => {
      window.removeEventListener('scroll', scrollCamera)
      window.removeEventListener('resize', setRenderSizes)
    }
  }, [])

  useFrame(({ camera }, deltaTime) => {
    camera.position.y = scroll.y
    // camera.position.y += parallaxValue({
    //   finalValue: scroll.y,
    //   currentValue: camera.position.y,
    //   deltaTime,
    //   intensity: 30
    // })
  })
}

export default useScrollCamera
