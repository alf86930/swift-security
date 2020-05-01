import * as React from 'react'

import postageImage from '../../assets/images/track-man-one.webp'

import styles from './index.module.scss'

const { useState } = React

interface VaultFormProps {
  handleSubmit: (code: string) => (event: any) => void
}

const VaultForm: React.FC<VaultFormProps> = ({ handleSubmit }) => {
  const [trackingCode, setTrackingCode] = useState('ASDFGHKL')

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <p className={styles.introText}>
          Know where your package is at all times in the delivery lifetime.
          Simply fill in the 8 digit tracking code and track your item.
        </p>

        <form
          className={styles.inputContainer}
          onSubmit={handleSubmit(trackingCode)}
        >
          <label className={styles.label} htmlFor="tracking-code">
            Tracking code
          </label>
          <input
            className={styles.input}
            type="text"
            value={trackingCode}
            onChange={e => setTrackingCode(e.target.value)}
            id="tracking-code"
            placeholder="Enter your tracking code"
          />

          <button className={styles.submit} type="submit">
            Track Package
          </button>
        </form>
      </div>

      <img
        className={styles.infoImage}
        src={postageImage}
        alt="Man inside post box"
      />
    </section>
  )
}

export default VaultForm
