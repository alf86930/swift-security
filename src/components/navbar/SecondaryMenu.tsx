import * as React from 'react'
import { Link } from 'gatsby'

import styles from './navbar.module.scss'

type SecondaryMenuProps = {
  services: { name: string; url: string }[]
}

const SecondaryMenu: React.FC<SecondaryMenuProps> = ({ services }) => (
  <div className={styles.secondaryMenu}>
    {services.map(service => (
      <Link
        key={service.url}
        to={service.url}
        className={styles.secondaryMenuLink}
      >
        {service.name}
      </Link>
    ))}
  </div>
)

export default SecondaryMenu
