import Head from '@/commons/components/layout/Head'
import Menu from '@/website/components/navigation/Menu'
import { TimelineProcessesContextProvider } from '@/website/contexts/TimelineProcessesContext'
import Scene from '@/website/components/3d/Scene'
import HeroSection from './sections/HeroSection'
import ProcessesSection from './sections/ProcessesSection'
import FooterSection from './sections/FooterSection'
import Particles from './sections/HeroSection/components/Particles'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <TimelineProcessesContextProvider>
        <Head />
        <Menu />
        <Scene />
        <HeroSection />
        <Particles />
        <ProcessesSection />
        <FooterSection />
      </TimelineProcessesContextProvider>
    </>
  )
}

export default Home
