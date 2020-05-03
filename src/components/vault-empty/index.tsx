import * as React from 'react'

import SearchErrorIcon from '../../assets/icons/SearchErrorIcon'
import VaultIcon from '../../assets/icons/VaultIcon'

import styles from './index.module.scss'

interface VaultEmptyProps {
  type: any
}

const VaultEmpty: React.FC<VaultEmptyProps> = ({ type }) => (
  <div className={styles.container}>
    {type === 'not found' ? (
      <>
        <SearchErrorIcon className={styles.containerIcon} />

        <h3 className={styles.containerInfo}>
          No vault found with that number. Please try again.
        </h3>
      </>
    ) : (
      <>
        <VaultIcon className={styles.containerIcon} />

        <h3 className={styles.containerInfo}>
          Input a vault number to see the content of your secure vault.
        </h3>
      </>
    )}
  </div>
)

export default VaultEmpty
