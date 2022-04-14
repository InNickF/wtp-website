import './index.css'

interface BurgerMenuProps {
  open: () => void
  classNames?: string
  hideOnDesktop?: Boolean
}

const BurgerMenu = ({
  open,
  classNames,
  hideOnDesktop = false
}: BurgerMenuProps) => {
  return (
    <button
      className={`burger-button ${
        hideOnDesktop && 'burger-button__hide-on-desktop'
      }`}
      onClick={open}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  )
}

export default BurgerMenu
