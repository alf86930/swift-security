import * as React from 'react'

import WarningIcon from '../../assets/icons/WarningIcon'
import styles from './index.module.scss'

const Modal = ({ owner, onClose }) => (
  <div className={styles.modal}>
    <h2 className={styles.h2}>Welcome {owner}</h2>

    <div className={styles.messageContainer}>
      <WarningIcon className={styles.icon} />

      <p>Be careful who you trust with your secure Vault Code!</p>
    </div>

    <button className={styles.closeModal} onClick={onClose}>
      Continue to vault
    </button>
  </div>
)

export default Modal
