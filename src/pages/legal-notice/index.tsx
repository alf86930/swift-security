import * as React from 'react'

import Layout from '../../layout'
import Linebreak from '../../components/linebreak'

import styles from './index.module.scss'

const LegalNoticePage = () => {
  return (
    <Layout title="Disclaimer">
      <div className={styles.container}>
        <h1 className={styles.h1}>Legal Notice</h1>
        <p className={styles.p}>
          Please read this disclaimer carefully before using Swift Security
          &amp; Logistics services operated by us.
          <Linebreak />
          The content displayed on the website is the intellectual property of
          the Swift Security. You may not reuse, republish, or reprint such
          content without our written consent.
          <Linebreak />
          All information posted is merely for educational and informational
          purposes. It is not intended as a substitute for professional advice.
          Should you decide to act upon any information on this website, you do
          so at your own risk.
          <Linebreak />
          While the information on this website has been verified to the best of
          our abilities, we cannot guarantee that there are no mistakes or
          errors. We reserve the right to change this policy at any given time,
          of which you will be promptly updated.
          <Linebreak />
          If you want to make sure that you are up to date with the latest
          changes, we advise you to frequently visit this page.
        </p>
      </div>
    </Layout>
  )
}

export default LegalNoticePage
