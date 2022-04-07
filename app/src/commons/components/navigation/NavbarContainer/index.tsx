import { useRef, FC, Ref } from 'react'
import { useStartAnimation } from './hooks/animations'
import './index.css'

const NavbarContainer: FC = ({ children }) => {
  const ref = useRef() as Ref<HTMLElement>
  useStartAnimation(ref)
  return (
    <nav ref={ref} className="navbar-container">
      {children}
    </nav>
  )
}

NavbarContainer.displayName = 'NavbarContainer'
export default NavbarContainer
