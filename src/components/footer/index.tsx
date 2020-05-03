import * as React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.scss'

const links = [
  { text: 'Legal Notice', href: '/legal-notice' },
  { text: 'Terms of Use', href: '/terms-of-use' },
  { text: 'Privacy Policy', href: '/privacy-policy' },
]

const Footer = () => {
  const renderLinks = () =>
    links.map((link, i) => (
      <Link className={styles.link} to={link.href} key={i}>
        {link.text}
      </Link>
    ))

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.container}>
      <div className={styles.linksContainer}>{renderLinks()}</div>

      <p className={styles.copyright}>
        {currentYear} &copy; Swift Security &amp; Logistics. All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer
