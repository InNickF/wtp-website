import Head from '@/commons/components/layout/Head'
import Scene from '@/website/components/3d/Scene'
import Navbar from '@/website/components/navigation/Navbar'
import HeroSection from './sections/HeroSection'
import type { NextPage } from 'next'
import './index.css'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Navbar />
      <HeroSection />
      <Scene />
    </>
  )
}

export default Home
