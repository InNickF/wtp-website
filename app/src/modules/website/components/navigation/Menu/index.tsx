import { useState } from 'react'
import Link from '../Link'
import Navbar from '../Navbar'
import MobileMenu from '@/commons/components/navigation/MobileMenu'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const Menu = () => {
  const links = [
    { content: 'Our Process', href: '.processes-section' },
    { content: 'Contact', href: '.contact-title' }
  ]
  const [isOpen, setIsOpen] = useState(false)
  const close = () => {
    setIsOpen(false)
  }
  const open = () => {
    setIsOpen(true)
  }

  const goToElement = (elementSelector) => {
    const element = document.querySelector(elementSelector)
    gsap.to(window, {
      duration: 0,
      scrollTo: { y: element, offsetY: 100 }
    })
  }

  return (
    <>
      <MobileMenu isOpen={isOpen} close={close}>
        {links.map((link) => (
          <span
            key={link.href}
            onClick={() => {
              close()
              goToElement(link.href)
            }}>
            <Link className="text-3xl" anchor>
              {link.content}
            </Link>
          </span>
        ))}
      </MobileMenu>
      <Navbar open={open}>
        {links.map((link) => (
          <Link
            key={link.href}
            anchor
            onClick={() => {
              goToElement(link.href)
              close()
            }}>
            {link.content}
          </Link>
        ))}
      </Navbar>
    </>
  )
}

export default Menu
