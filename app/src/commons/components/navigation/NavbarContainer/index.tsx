import { useRef, FC, Ref } from 'react'
import { useStartAnimation } from './hooks/animations'
import WPTLogo from '@/commons/components/other/WPTLogo'
import './index.css'

const NavbarContainer: FC = ({ children }) => {
  const ref = useRef() as Ref<HTMLElement>
  useStartAnimation(ref)
  return (
    <nav ref={ref} className="navbar-container">
      <WPTLogo />
      {children}
    </nav>
  )
}

NavbarContainer.displayName = 'NavbarContainer'
export default NavbarContainer
