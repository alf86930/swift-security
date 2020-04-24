import * as React from 'react'
// import { Link } from 'gatsby'

// images
import TruckImage from '../../assets/images/truck.webp'

// styles
import styles from './desktop.module.scss'
import { Link } from 'gatsby'

export const heroOneDesktopContent = (
  <div className={`${styles.heroContainer} ${styles.heroOneContainer}`}>
    <h2 className={styles.heroH2}>Secure Vault Services</h2>

    <ul className={styles.ul}>
      <li className={styles.li}>Free unlimited client access 7 days a week</li>
      <li className={styles.li}>
        Unparalleled State of the Art security with 24 hour monitoring
      </li>
      <li className={styles.li}>Secure and private gated client car parking</li>
      <li className={styles.li}>Discreet City Centre location</li>
      <li className={styles.li}>100% Swiss owned and operated</li>
      <li className={styles.li}>Complete peace of mind and confidentiality</li>
    </ul>
  </div>
)

export const heroTwoDesktopContent = (
  <div className={`${styles.heroContainer} ${styles.heroTwoContainer}`}>
    <h2 className={styles.heroH2}>Shipping &amp; Logistics Services</h2>

    <p className={styles.heroP}>
      Ocean Freight Services / Sea Freight Services offered by Swift Security
      &amp; Logistics has demonstrated incomparable excellence to companies and
      individuals with special requirements.
      <br />
      <br />
      We are committed to providing efficient shipping and handling, ordering,
      pickup and on-time delivery; all together with constant support for our
      clientele.
    </p>

    <Link className={styles.heroLink} to="/shipping">
      See Our Logistics Services
    </Link>
  </div>
)

export const heroThreeDesktopContent = (
  <div className={`${styles.heroContainer} ${styles.heroThreeContainer}`}>
    <h2 className={styles.heroH2}>Air Freighting Services</h2>

    <p className={styles.heroP}>
      Need a one-stop solution for your international air freight and forwarding
      needs, whereas a faster, safer and cost effective way to ship and track
      your cargo by air to anywhere across the globe?
      <br /> <br />
      Look no further than Universal Freighting. Our services are cleverly
      designed and proven to provide you and your business with quality air
      freight forwarder services and shipment tailored to your precise needs, be
      it timing or budget.
    </p>

    <Link className={styles.heroLink} to="/services/air-freight">
      See Air Freighting Services
    </Link>
  </div>
)

export const heroFourDesktopContent = (
  <div className={styles.heroFourContainer}>
    <div>
      <img
        className={styles.heroTruckImage}
        src={TruckImage}
        alt="A red truck"
      />
    </div>

    <p className={styles.heroDescription}>
      If you require a quality Road Freight Services ( Road Transport )
      logistics provider that abides to your precise shipping needs with
      reliable, time reducing and cost effective results, then the services of
      Swift Logistics are right for you.
      <br /> <br />
      In order to guarantee our customers a highly efficient, high quality and
      cost effective services that they desire, we have a network consisting of
      several offices situated in every major city across US including Shanghai,
      Guangzhou, Qingdao, Hong Kong, Ningbo and Tianjin.
    </p>

    <Link className={styles.heroLinkAlt} to="/road-freight">
      Ship something by road
    </Link>
  </div>
)

export const heroFiveDesktopContent = (
  <div className={styles.heroFiveContainer}>
    <p className={styles.p}>
      Avant coordinates people in over 133 countries and territories worldwide.
      <br /> <br />
      Driven by the power of more than 67,000 employees, we deliver integrated
      services and tailored solutions for managing and transporting letters,
      goods and information.
    </p>
  </div>
)
