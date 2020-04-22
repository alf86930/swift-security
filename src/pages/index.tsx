import * as React from 'react'
import { graphql } from 'gatsby'

// components
import Layout from '../layout'
import Hero from '../components/hero'
import ServicesCTA from '../components/services-cta'
import VaultInfo from '../components/vault-info'

// styles
import styles from './_styles/index.module.scss'

const heroOneContent = (
  <div className={styles.heroOneContainer}>
    <h2 className={styles.heroOneH2}>Secure Vault Deposit &amp; Logistics</h2>

    <p className={styles.heroOneDescription}>
      Experience complete peace of mind and confidentiality with unparalleled
      state of the art security.
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

      <ServicesCTA />
      <VaultInfo />
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
