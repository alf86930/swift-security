import * as React from 'react'

import Layout from '../layout'
// images
import HomeVaultOneImg from '../assets/images/home-vault-one.jpg'
import Hero from '../components/hero'

import styles from './_styles/index.module.scss'

const heroOneContent = (
  <>
    <h2 className={styles.heroH2}>Secure Vault Deposit &amp; Logistics</h2>

    <p className={styles.heroP}>
      Experience complete peace of mind and confidentiality with unparalleled
      state of the art security.
    </p>
  </>
)

const IndexPage = () => (
  <Layout title="Home">
    <Hero bg={HomeVaultOneImg} content={heroOneContent} />
  </Layout>
)

export default IndexPage
