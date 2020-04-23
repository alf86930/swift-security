import * as React from 'react'
import { Link } from 'gatsby'

// components
import Hamburger from '../hamburger'
import SecondaryMenu from './SecondaryMenu'

// icons
import LogoIcon from '../../assets/icons/LogoIcon'
import ArrowDown from '../../assets/icons/ArrowDownIcon'
import SearchIcon from '../../assets/icons/SearchIcon'

// style
import styles from './navbar.module.scss'

const services = [
  { name: 'Secure Vault', url: '/services/secure-vault' },
  { name: 'Air Shipping', url: '/services/air-shipping' },
  { name: 'Road Delivery', url: '/services/road-delivery' },
  { name: 'Freight Services', url: '/services/freight-services' },
]

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = React.useState(false)

  const handleMenuToggle = () => {
    toggleMenu(!isMenuOpen)
  }

  return (
    <nav className={styles.nav}>
      <Link aria-label="Go home" to="/" className={styles.logo}>
        <LogoIcon />
      </Link>

      <Hamburger isPressed={isMenuOpen} onClick={handleMenuToggle} />

      <ul
        className={`${styles.navMenu} ${
          isMenuOpen && styles.navMenuVisible
        }`.trim()}
      >
        <li className={styles.navMenuItem}>
          <Link className={styles.navMenuLink} to="/">
            About us
          </Link>
        </li>

        <li className={`${styles.navMenuItem} ${styles.navMenuItemSecondary}`}>
          <Link className={styles.navMenuLink} to="/">
            Services <ArrowDown className={styles.arrowDown} />
          </Link>

          <SecondaryMenu services={services} />
        </li>

        <li className={styles.navMenuItem}>
          <Link className={styles.navMenuLink} to="/">
            Contact us
          </Link>
        </li>

        <li className={styles.navMenuItem}>
          <SearchIcon className={styles.searchIcon} />

          <input
            className={styles.trackInput}
            type="text"
            placeholder="Tracking code"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
