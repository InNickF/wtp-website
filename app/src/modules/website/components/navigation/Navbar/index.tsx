import BurgerMenu from '@/commons/components/navigation/BurgerButon'
import NavbarContainer from '@/commons/components/navigation/NavbarContainer'
import WPTLogo from '@/commons/components/other/WPTLogo'
import { FC } from 'react'
import './index.css'

interface NavbarProps {
  open: () => void
}

const Navbar: FC<NavbarProps> = ({ children, open }) => {
  return (
    <NavbarContainer>
      <section className="navbar-grid">
        <WPTLogo />
        <div className="links-container">{children}</div>
        <BurgerMenu classNames="block md:hidden" open={open} />
      </section>
    </NavbarContainer>
  )
}

export default Navbar
