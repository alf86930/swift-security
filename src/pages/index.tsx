import * as React from 'react'
import { graphql } from 'gatsby'

// components
import Layout from '../layout'
import Hero from '../components/hero'
import ServicesIcons from '../components/services-icons'
import ServicesCTA from '../components/services-cta'
import VaultInfo from '../components/vault-info'

// styles
import styles from './_styles/index.module.scss'

const heroOneContent = (
  <div className={styles.heroOneContainer}>
    <h2 className={styles.heroH2}>Secure Vault Deposit &amp; Logistics</h2>

    <p className={styles.heroDescription}>
      Experience complete peace of mind and confidentiality with unparalleled
      state of the art security.
    </p>
  </div>
)

const heroTwoContent = (
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

type IndexPageProps = {
  data: any
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const images = data.allImageSharp.nodes.reduce((acc, cur) => {
    const imageName = cur.fluid.originalName.split('.')[0]
    acc[imageName] = cur
    return acc
  }, {})

  return (
    <Layout title="Home">
      <Hero
        bg={images['home-vault-one']}
        content={heroOneContent}
        imageAlt="Man standing in front of vault"
      />

      <ServicesIcons />
      <VaultInfo />

      <Hero
        bg={images['home-ship-one']}
        content={heroTwoContent}
        imageAlt="Ship on blue water"
        size="small"
      />

      <ServicesCTA />
    </Layout>
  )
}

export const imagesQuery = graphql`
  query HomeImages {
    allImageSharp(filter: { fluid: { originalName: { regex: "/home/" } } }) {
      nodes {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
