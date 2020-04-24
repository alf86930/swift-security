import * as React from 'react'

// svgs
import LogoDHL from '../../assets/brand-logos/dhl.svg'
import LogoFedex from '../../assets/brand-logos/fedex.svg'
import LogoRMail from '../../assets/brand-logos/rmail.svg'
import LogoUPS from '../../assets/brand-logos/ups.svg'
import LogoAuto from '../../assets/brand-logos/automata.svg'

// styles
import styles from './pbanner.module.scss'

const logos = [LogoDHL, LogoFedex, LogoRMail, LogoUPS, LogoAuto]

const PartnersBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        {logos.map((logo, i) => (
          <img
            className={styles.logo}
            key={i}
            src={logo}
            alt="Trusted partner logo"
          />
        ))}
      </div>

      <p className={styles.p}>Our Trusted Partners</p>
    </div>
  )
}

export default PartnersBanner
