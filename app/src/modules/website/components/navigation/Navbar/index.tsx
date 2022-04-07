import NavbarContainer from '@/commons/components/navigation/NavbarContainer'
import WPTLogo from '@/commons/components/other/WPTLogo'
import Link from '../Link'
import './index.css'

const Navbar = () => {
  return (
    <NavbarContainer>
      <section className="navbar-grid">
        <WPTLogo />
        <div className="links-container">
          <Link scrollTo href="#what-we-do">
            What we do
          </Link>
          <Link scrollTo href="#what-we-do">
            Our strategy
          </Link>
          <Link scrollTo href="#what-we-do">
            Contact us
          </Link>
        </div>
      </section>
    </NavbarContainer>
  )
}

export default Navbar
