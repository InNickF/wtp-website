import { useState } from 'react'
import Link from '../Link'
import Navbar from '../Navbar'
import MobileMenu from '@/commons/components/navigation/MobileMenu'

const Menu = () => {
  const links = [
    { content: 'Our Process', href: '#process' },
    { content: 'Contact', href: '#contact' }
  ]
  const [isOpen, setIsOpen] = useState(false)
  const close = () => {
    setIsOpen(false)
  }
  const open = () => {
    setIsOpen(true)
  }

  return (
    <>
      <MobileMenu isOpen={isOpen} close={close}>
        {links.map((link) => (
          <span key={link.href} onClick={close}>
            <Link className="text-3xl" anchor href={link.href}>
              {link.content}
            </Link>
          </span>
        ))}
      </MobileMenu>
      <Navbar open={open}>
        {links.map((link) => (
          <Link key={link.href} anchor href={link.href}>
            {link.content}
          </Link>
        ))}
      </Navbar>
    </>
  )
}

export default Menu
