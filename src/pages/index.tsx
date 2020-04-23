import * as React from 'react'
import { Link } from 'gatsby'

// components
import Layout from '../layout'
import Hero from '../components/hero'
import ServicesIcons from '../components/services-icons'
import ServicesCTA from '../components/services-cta'
import VaultInfo from '../components/vault-info'
import PartnersBanner from '../components/partners-banner'

// images
import TruckImage from '../assets/images/truck.webp'

// styles
import styles from './_styles/index.module.scss'

const heroOneContent = (
  <div className={styles.heroContainer}>
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

const heroTwoContent = (
  <div className={`${styles.heroContainer} ${styles.heroTwoContainer}`}>
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

const heroThreeContent = (
  <div className={`${styles.heroContainer} ${styles.heroThreeContainer}`}>
    <p className={styles.heroDescription}>
      Your one-stop solution for your international air freight and shipping
      needs to ship and track packages by air to anywhere across the globe.
    </p>

    <Link className={styles.heroLink} to="/air-freight">
      Get a quote
    </Link>
  </div>
)

const heroFourContent = (
  <div className={`${styles.heroContainer} ${styles.heroFourContainer}`}>
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

const heroFiveContent = (
  <div className={`${styles.heroContainer} ${styles.heroFiveContainer}`}>
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

type IndexPageProps = {
  data: any
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout title="Home">
      <Hero id="home-vault-one" content={heroOneContent} />

      <ServicesIcons />

      <VaultInfo />

      <Hero id="home-ship-one" content={heroTwoContent} />

      <ServicesCTA />

      <Hero id="home-plane-one" content={heroThreeContent} />

      <Hero content={heroFourContent} />

      <Hero id="home-woman-one" content={heroFiveContent} />

      <PartnersBanner />
    </Layout>
  )
}

export default IndexPage
