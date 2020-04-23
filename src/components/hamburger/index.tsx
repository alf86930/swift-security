import * as React from 'react'
import styles from './hamburger.module.scss'

type HamburgerProps = {
  isPressed: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isPressed, onClick }) => {
  const barClassName = `${styles.bar} ${isPressed && styles.barActive}`.trim()

  return (
    <button
      type="button"
      aria-label="menu button"
      className={styles.hamburger}
      onClick={onClick}
    >
      <span className={barClassName} />
      <span className={barClassName} />
      <span className={barClassName} />
    </button>
  )
}

export default Hamburger
