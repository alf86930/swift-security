import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../layout'
import Linebreak from '../../../components/linebreak'

// images
import vaultImg from '../../../assets/images/vault.jpg'

import styles from './index.module.scss'

const SecureVaultPage = () => {
  return (
    <Layout title="Secure Vault Service">
      <div className={styles.container}>
        <h1 className={styles.h1}>Our Secure Vault Service</h1>

        <img className={styles.img} src={vaultImg} alt="A vault" />

        <p className={styles.p}>
          Swift Security is part of a larger group of safe deposit box
          facilities with vaults in Scotland and England as well as here in
          Ireland. We were the first independently owned safe deposit box centre
          in Ireland and we are 100% Irish owned and operated.
          <Linebreak />
          We provide custodial services to private individuals and businesses,
          allowing them to safeguard their most valued possessions in a secure
          state-of-the-art purpose-built vault. As a member of the Safe Deposit
          Federation (SDF), Swift Security meet the highest standards in both
          security and privacy. We offer rental of safe deposit boxes in a
          variety of sizes and rental periods to meet all requirements. Irish
          Banks such as Bank of Ireland, Allied Irish Bank, Ulster Bank and
          Permanent TSB are no longer offering a ‘safe deposit box’ service to
          their customers, yet now more than ever companies and individuals need
          to secure valued possession safely.
          <Linebreak />
          Our facility offers various box sizes to suit all client requirements.
          The smaller boxes are ideal for the storage of jewellery, cash,
          valuable coins and computer back-up discs. The mid-range boxes are
          designed to keep papers, house deeds and other important documents.
          The larger boxes are ideal for stamp dealers and to hold larger
          amounts of paperwork and artwork which need to be stored securely.
          <Linebreak />
          We are also the only safe deposit box facility in Ireland to offer
          high security private walk-in vaults for the storage of fine Art and
          valuable furniture.
        </p>

        <p className={styles.contactCTA}>
          Have any questions regarding our secure vault service? Reach us
          through our <Link to="/contact-us">contact page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default SecureVaultPage
