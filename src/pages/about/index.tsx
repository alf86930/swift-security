import * as React from 'react'

// components
import Layout from '../../layout'
import ServicesIcon from '../../components/services-icons'
import PartnersBanner from '../../components/partners-banner'
import Linebreak from '../../components/linebreak'

// images
import manVaultImg from '../../assets/images/man-vault.jpg'

// styles
import styles from './index.module.scss'

const AboutPage = () => {
  return (
    <Layout title="About us">
      <h2 className={styles.title}>About Swift Security &amp; Logistics</h2>

      <div className={styles.container}>
        <img
          className={styles.introImg}
          src={manVaultImg}
          alt="A man standing in front of a vault"
        />

        <p className={styles.description}>
          Swift Security &amp; Logistics is part of a larger group of safe
          deposit box facilities with vaults in the US, Scotland, England as
          well as here in Ireland. We were the first independently owned safe
          deposit box centre in Ireland and we are 100% Irish owned and
          operated. We provide custodial services to private individuals and
          businesses, allowing them to safeguard their most valued possessions
          in a secure state-of-the-art purpose-built vault.
          <Linebreak />
          As a member of the Safe Deposit Federation (SDF), Swift Security &amp;
          Logistics meet the highest standards in both security and privacy. We
          offer rental of safe deposit boxes in a variety of sizes and rental
          periods to meet all requirements.
          <Linebreak />
          Irish Banks such as Bank of Ireland, Allied Irish Bank, Ulster Bank
          and Permanent TSB are no longer offering a ‘safe deposit box’ service
          to their customers, yet now more than ever companies and individuals
          need to secure valued possession safely.
          <Linebreak />
          Our facility offers various box sizes to suit all client requirements.
          The smaller boxes are ideal for the storage of jewellery, cash,
          valuable coins and computer back-up discs. The mid-range boxes are
          designed to keep papers, house deeds and other important documents.
          The larger boxes are ideal for stamp dealers and to hold larger
          amounts of paperwork and artwork which need to be stored securely. We
          are also the only safe deposit box facility in Ireland to offer high
          security private walk-in vaults for the storage of fine Art and
          valuable furniture.
        </p>
      </div>

      <ServicesIcon />
      <PartnersBanner />
    </Layout>
  )
}

export default AboutPage
