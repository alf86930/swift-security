import * as React from 'react'

import Layout from '../layout'

import MailboxImage from '../assets/images/track-man-one.webp'
import styles from './_styles/track.module.scss'
import PartnersBanner from '../components/partners-banner'
import MapIcon from '../assets/icons/MapIcon'

const Track = () => {
  return (
    <Layout title="Track your package">
      <section className={styles.info}>
        <p className={styles.introText}>
          Know where your package is at all times in the delivery lifetime.
          Simply fill in the 8 digit tracking code and track your item.
        </p>

        <form className={styles.inputContainer}>
          <label className={styles.label} htmlFor="tracking-code">
            Tracking code
          </label>
          <input
            className={styles.input}
            type="text"
            id="tracking-code"
            placeholder="Enter your tracking code"
          />

          <button className={styles.submit} type="submit">
            Track package
          </button>
        </form>
      </section>

      <section className={styles.result}>
        <div className={styles.resultEmpty}>
          <MapIcon className={styles.resultEmptyIcon} />
          <h3 className={styles.resultEmptyInfo}>
            Input a tracking code to see the current location of your package
          </h3>
        </div>
      </section>
      <PartnersBanner />
    </Layout>
  )
}

export default Track
