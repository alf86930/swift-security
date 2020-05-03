import * as React from 'react'
import { Link } from 'gatsby'

import {
  heroOneDesktopContent,
  heroTwoDesktopContent,
  heroThreeDesktopContent,
  heroFourDesktopContent,
  heroFiveDesktopContent,
} from './desktop'

// images
import TruckImage from '../../assets/images/truck.jpg'

// styles
import styles from './index.module.scss'

export const heroOneContent = (
  <div className={styles.heroOneContainer}>
    <h2 className={styles.heroH2}>Secure Vault Deposit &amp; Logistics</h2>

    <p className={styles.heroDescription}>
      Experience complete peace of mind and confidentiality with unparalleled
      state of the art security.
    </p>

    <Link
      className={styles.heroLink}
      to="/track"
      style={{ margin: '20px auto' }}
    >
      Track a package
    </Link>
  </div>
)

export const heroTwoContent = (
  <div className={styles.heroTwoContainer}>
    <h2 className={styles.heroH2}>Shipping Services</h2>

    <p className={styles.heroDescription}>
      Our Freight Services has demonstrated incomparable excellence to companies
      and individuals with special requirements.
      <br /> <br />
      We are committed to providing efficient shipping and handling, pickup and
      on-time delivery; all together with world-class security.
    </p>
  </div>
)

export const heroThreeContent = (
  <div className={styles.heroThreeContainer}>
    <p className={styles.heroDescription}>
      Your one-stop solution for your international air freight and shipping
      needs to ship and track packages by air to anywhere across the globe.
    </p>

    <Link className={styles.heroLink} to="/air-freight">
      Get a quote
    </Link>
  </div>
)

export const heroFourContent = (
  <div className={styles.heroFourContainer}>
    <div>
      <img
        className={styles.heroTruckImage}
        src={TruckImage}
        alt="A red truck"
      />
    </div>

    <p className={styles.heroDescription}>
      We're a quality Road Freight Services logistics provider that abides to
      your precise shipping needs with reliable.
      <br /> <br />
      In order to guarantee our customers a high quality and cost effective
      service, we have a network consisting of several offices situated in every
      major city across US including Shanghai, Guangzhou, and Qingdao.
    </p>

    <Link className={styles.heroLinkAlt} to="/road-freight">
      Ship something by road
    </Link>
  </div>
)

export const heroFiveContent = (
  <div className={styles.heroFiveContainer}>
    <p className={styles.heroDescriptionMedium}>
      Swift Security &amp; Logistics coordinates people in over 17 countries and
      territories worldwide.
      <br /> <br />
      Driven by the power of more than 7,000 employees, we deliver integrated
      services and tailored solutions for managing and transporting goods and
      information.
    </p>
  </div>
)

// desktop data exports
export {
  heroOneDesktopContent,
  heroTwoDesktopContent,
  heroThreeDesktopContent,
  heroFourDesktopContent,
  heroFiveDesktopContent,
}
